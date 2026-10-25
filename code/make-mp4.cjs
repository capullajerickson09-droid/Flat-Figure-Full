// make-mp4.cjs: renders the explainer HTML to an MP4 (the final deliverable), with the sound effects and, when given,
// the voiceover / music file mixed in automatically.
//   node make-mp4.cjs explainer.html [voice.mp3|voice.wav|voice.m4a] [out.mp4]
// Needs Node 18+, Playwright (or swap in puppeteer), ffmpeg + ffprobe on PATH.
// - Length: max(window.DURATION, audio length + 2 s), so the audio is never cut; the picture holds its last state.
// - Checks while rendering: overlapping or off-screen text (window.QC.text), characters that jump between two frames
//   outside a scene cut (window.QC.people, window.CUTS), and one-frame flashes (a picture that differs from both
//   neighbouring frames, e.g. a transition that shows the next scene too early). Problems are listed at the end: fix them and render again.
const { chromium } = require('playwright');
const { spawn, execFileSync } = require('child_process');
const fs = require('fs'), path = require('path');

const [html, voiceArg, outArg] = process.argv.slice(2);
const voice = voiceArg && !voiceArg.endsWith('.mp4') ? voiceArg : null;
const out = outArg || (voiceArg && voiceArg.endsWith('.mp4') ? voiceArg : 'explainer.mp4');
const FPS = 30, TAIL = 2.0;
const probe = (f) => parseFloat(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f]).toString());

(async () => {
  const b = await chromium.launch({ proxy: process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY } : undefined, args: (process.env.CHROME_ARGS || '').split(' ').filter(Boolean) });
  const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
  const errs = []; p.on('pageerror', (e) => errs.push(e.message));
  await p.goto('file://' + path.resolve(html));
  await p.evaluate(async () => { await (window.ready || document.fonts.ready); });
  const D = await p.evaluate(() => window.DURATION);
  const vlen = voice ? probe(voice) : 0;
  const total = Math.max(D, vlen ? vlen + TAIL : 0);
  const N = Math.ceil(total * FPS);
  console.log(`duration: explainer ${D.toFixed(2)} s, audio ${vlen.toFixed(2)} s -> video ${total.toFixed(2)} s (${N} frames)`);

  const tmpV = out.replace(/\.mp4$/, '') + '.video.mp4', tmpA = out.replace(/\.mp4$/, '') + '.fx.wav';
  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-', '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18', '-r', String(FPS), tmpV]);
  const issues = { text: new Map(), jump: new Map(), flash: [] };
  let prev = null; const L = []; // tiny luminance thumbnails of the last frames, for the one-frame flash check
  const ld = (a, b) => { let s = 0; for (let i = 0; i < a.length; i++) s += Math.abs(a[i] - b[i]); return s / a.length; };
  for (let i = 0; i < N; i++) {
    const t = i / FPS;
    const r = await p.evaluate((t) => { window.seek(t); const q = window.QC || { text: [], people: [] }, cv = document.querySelector('canvas'); const sm = window.__sm || (window.__sm = Object.assign(document.createElement('canvas'), { width: 64, height: 36 })), g = sm.getContext('2d'); g.drawImage(cv, 0, 0, 64, 36); const d = g.getImageData(0, 0, 64, 36).data, lum = []; for (let i = 0; i < d.length; i += 4) lum.push((d[i] + d[i + 1] + d[i + 2]) / 3); return { img: cv.toDataURL('image/jpeg', 0.92), text: q.text.slice(), people: q.people.slice(), cuts: window.CUTS || [], lum }; }, t);
    ff.stdin.write(Buffer.from(r.img.split(',')[1], 'base64'));
    // text: overlaps between visible boxes (> 6 % of the smaller one) and boxes leaving the 12 px safe area
    const T = r.text, inCut = r.cuts.some((c) => (Array.isArray(c) ? t >= c[0] - 0.05 && t <= c[1] + 0.1 : Math.abs(t - c) < 0.1));
    for (let a = 0; a < T.length; a++) {
      const A = T[a];
      if (!inCut && (A.x0 < 12 || A.y0 < 6 || A.x1 > 1268 || A.y1 > 714)) issues.text.set('off-screen: "' + A.id + '"', (issues.text.get('off-screen: "' + A.id + '"') || []).concat(t));
      for (let c = a + 1; c < T.length; c++) { const B = T[c]; if (A.g && A.g === B.g) continue; const ix = Math.min(A.x1, B.x1) - Math.max(A.x0, B.x0), iy = Math.min(A.y1, B.y1) - Math.max(A.y0, B.y0); if (ix > 0 && iy > 0 && ix * iy > 0.06 * Math.min((A.x1 - A.x0) * (A.y1 - A.y0), (B.x1 - B.x0) * (B.y1 - B.y0))) { const k = `overlap: "${A.id}" + "${B.id}"`; issues.text.set(k, (issues.text.get(k) || []).concat(t)); } }
    }
    // text must not cover a face (more than 15 % of the face box)
    for (const A of T) for (const q of r.people) { if (!q.face) continue; const [f0, f1, f2, f3] = q.face, ix = Math.min(A.x1, f2) - Math.max(A.x0, f0), iy = Math.min(A.y1, f3) - Math.max(A.y0, f1); if (!inCut && ix > 0 && iy > 0 && ix * iy > 0.15 * (f2 - f0) * (f3 - f1)) { const k = `covers ${q.id}'s face: "${A.id}"`; issues.text.set(k, (issues.text.get(k) || []).concat(t)); } }
    // people: a move of more than 45 px between consecutive frames, not within 0.1 s of a cut
    const nearCut = r.cuts.some((c) => (Array.isArray(c) ? t >= c[0] - 0.05 && t <= c[1] + 0.1 : Math.abs(t - c) < 0.1));
    if (prev && !nearCut) for (const q of r.people) { const o = prev.find((z) => z.id === q.id); if (o && Math.hypot(q.x - o.x, q.y - o.y) > 45) issues.jump.set(q.id, (issues.jump.get(q.id) || []).concat(t)); }
    prev = r.people;
    // one-frame flash: frame i-1 differs strongly from both neighbours while the neighbours look alike (a shot that
    // pops in for one frame, e.g. a transition drawing the next scene before it starts)
    L.push(r.lum); if (L.length > 3) L.shift();
    // sudden picture change: a transition must START gently (the first 0.1 s of a cut interval), and outside the cut
    // intervals the picture never changes all at once (that would be a hard cut nobody planned)
    if (L.length >= 2) { const dd = ld(L[L.length - 2], L[L.length - 1]), st = r.cuts.some((c) => Array.isArray(c) && t >= c[0] - 1e-6 && t < c[0] + 2 / FPS), within = r.cuts.some((c) => (Array.isArray(c) ? t >= c[0] - 0.05 && t <= c[1] + 0.05 : Math.abs(t - c) < 0.05)); if ((st && dd > 8) || (!within && dd > 30)) issues.flash.push(t); }
    if (L.length === 3) { const a = ld(L[0], L[1]), b = ld(L[1], L[2]), c = ld(L[0], L[2]); if (a > 10 && b > 10 && c < 0.35 * Math.min(a, b)) issues.flash.push((i - 1) / FPS); }
  }
  ff.stdin.end(); await new Promise((r) => ff.on('close', r));

  // effects track, the same length as the video (voiceover mode when a voice file is mixed in)
  const a = await p.evaluate(async ([total, vo]) => { const r = await SOUND.renderOffline(window.scoreSound, total, 48000, { voiceover: vo }); const pcm = new Int16Array(r.inter.length); for (let i = 0; i < pcm.length; i++) pcm[i] = Math.max(-1, Math.min(1, r.inter[i])) * 32767; return Array.from(pcm); }, [total, !!voice]);
  const pcm = Buffer.from(new Int16Array(a).buffer), hd = Buffer.alloc(44);
  hd.write('RIFF', 0); hd.writeUInt32LE(36 + pcm.length, 4); hd.write('WAVEfmt ', 8); hd.writeUInt32LE(16, 16); hd.writeUInt16LE(1, 20); hd.writeUInt16LE(2, 22); hd.writeUInt32LE(48000, 24); hd.writeUInt32LE(192000, 28); hd.writeUInt16LE(4, 32); hd.writeUInt16LE(16, 34); hd.write('data', 36); hd.writeUInt32LE(pcm.length, 40);
  fs.writeFileSync(tmpA, Buffer.concat([hd, pcm]));
  await b.close();

  // mux: voice on top with the effects ducked under it (sidechain), or effects alone
  const args = voice
    ? ['-y', '-loglevel', 'error', '-i', tmpV, '-i', voice, '-i', tmpA, '-filter_complex', '[1:a]aresample=48000,apad,loudnorm=I=-17:TP=-2,asplit=2[v1][v2];[2:a]loudnorm=I=-26:TP=-4:LRA=20[fx0];[fx0][v1]sidechaincompress=threshold=0.05:ratio=3:attack=10:release=250[fx];[v2][fx]amix=inputs=2:normalize=0:duration=first,loudnorm=I=-16:TP=-1.5:LRA=11[a]', '-map', '0:v', '-map', '[a]', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', '-t', total.toFixed(3), out]
    : ['-y', '-loglevel', 'error', '-i', tmpV, '-i', tmpA, '-map', '0:v', '-map', '1:a', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', '-t', total.toFixed(3), out];
  execFileSync('ffmpeg', args);
  fs.unlinkSync(tmpV); fs.unlinkSync(tmpA);
  console.log(`wrote ${out}: ${probe(out).toFixed(2)} s`);
  const fmt = (ts) => ts.length + ' frames, from ' + ts[0].toFixed(2) + ' s';
  if (issues.text.size || issues.jump.size || issues.flash.length || errs.length) {
    console.log('\nPROBLEMS TO FIX:');
    for (const [k, ts] of issues.text) console.log('  text ' + k + ' (' + fmt(ts) + ')');
    for (const [k, ts] of issues.jump) console.log('  jump: ' + k + ' moved instantly (' + fmt(ts) + ')');
    if (issues.flash.length) console.log('  flash / sudden change at ' + issues.flash.map((x) => x.toFixed(2) + ' s').join(', ') + ' (check the transition there)');
    errs.slice(0, 5).forEach((e) => console.log('  page error: ' + e));
  } else console.log('checks: no text overlaps, no off-screen text, no character jumps, no one-frame flashes, no page errors');
})();
