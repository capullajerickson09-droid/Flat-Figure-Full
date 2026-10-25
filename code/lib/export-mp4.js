// export-mp4.js: an "Export MP4" button INSIDE the explainer page, so the video can always be downloaded, even where
// node / ffmpeg can't run (online code apps, artifact previews, a phone). It plays the explainer once in real time and
// records the canvas together with the sound effects and the uploaded voiceover / music (MP3, WAV, M4A).
//   MP4X.attach({ canvas, seek, duration, scoreSound, button, file, status })  wires a button and an <input type=file>
//   MP4X.record({ canvas, seek, duration, scoreSound, voice: File|null, onProgress })  -> Promise<{ blob, ext, mime }>
// - Length = max(duration, voice length + 2 s): the audio is never cut, the picture holds its last state.
// - Sound: the effects are rendered with the same scoreSound (SOUND.renderOffline, voiceover mode when a voice is
//   loaded) and laid under the voice at 45 % volume; the voice plays at full volume.
// - Format: MP4 (H.264 + AAC) where the browser can record it (Chrome / Edge 126+, Safari); otherwise WebM, and the
//   status line says so. Keep the tab visible while it records (browsers slow hidden tabs down).
(function () {
  const MIMES = ['video/mp4;codecs=avc1.42E01E,mp4a.40.2', 'video/mp4;codecs=avc1,mp4a.40.2', 'video/mp4', 'video/webm;codecs=vp9,opus', 'video/webm;codecs=vp8,opus', 'video/webm'];
  const pickMime = () => MIMES.find((m) => window.MediaRecorder && MediaRecorder.isTypeSupported(m)) || '';
  async function record(o) {
    const fps = o.fps || 30, ctx = new (window.AudioContext || window.webkitAudioContext)({ sampleRate: 48000 });
    let voiceBuf = null;
    if (o.voice) voiceBuf = await ctx.decodeAudioData(await o.voice.arrayBuffer());
    const total = Math.max(o.duration, voiceBuf ? voiceBuf.duration + 2 : 0);
    // effects: rendered offline from the score, so every sound lands on its frame
    const r = await SOUND.renderOffline(o.scoreSound, total, 48000, { voiceover: !!voiceBuf });
    const fx = ctx.createBuffer(2, r.frames, 48000), L = fx.getChannelData(0), R = fx.getChannelData(1);
    for (let i = 0; i < r.frames; i++) { L[i] = r.inter[2 * i]; R[i] = r.inter[2 * i + 1]; }
    const dest = ctx.createMediaStreamDestination(), mon = ctx.createGain(); mon.gain.value = o.monitor ? 1 : 0; mon.connect(ctx.destination);
    const play = (buf, gain) => { const s = ctx.createBufferSource(), g = ctx.createGain(); s.buffer = buf; g.gain.value = gain; s.connect(g); g.connect(dest); g.connect(mon); return s; };
    const sFx = play(fx, voiceBuf ? 0.45 : 1), sV = voiceBuf ? play(voiceBuf, 1) : null;
    const stream = new MediaStream([...o.canvas.captureStream(fps).getVideoTracks(), ...dest.stream.getAudioTracks()]);
    const mime = pickMime(), rec = new MediaRecorder(stream, mime ? { mimeType: mime, videoBitsPerSecond: 8e6, audioBitsPerSecond: 192e3 } : undefined), chunks = [];
    rec.ondataavailable = (e) => { if (e.data && e.data.size) chunks.push(e.data); };
    const done = new Promise((res) => { rec.onstop = res; });
    o.seek(0); await ctx.resume(); rec.start(250);
    const T0 = ctx.currentTime + 0.15; sFx.start(T0); if (sV) sV.start(T0);
    await new Promise((res) => { const tick = () => { const t = ctx.currentTime - T0; o.seek(Math.max(0, Math.min(t, total))); if (o.onProgress) o.onProgress(Math.max(0, t) / total); if (t >= total + 0.1) res(); else requestAnimationFrame(tick); }; requestAnimationFrame(tick); });
    rec.stop(); await done; stream.getTracks().forEach((k) => k.stop()); ctx.close();
    const type = (mime || 'video/webm').split(';')[0], blob = new Blob(chunks, { type });
    return { blob, mime: type, ext: type === 'video/mp4' ? 'mp4' : 'webm', total };
  }
  function save(res, name) {
    const a = document.createElement('a'); a.href = URL.createObjectURL(res.blob); a.download = (name || 'explainer') + '.' + res.ext;
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 4000);
  }
  function attach(o) {
    const st = (s) => { if (o.status) o.status.textContent = s; };
    o.button.addEventListener('click', async () => {
      if (o.button.disabled) return; o.button.disabled = true;
      try {
        const voice = o.file && o.file.files && o.file.files[0] ? o.file.files[0] : null;
        st(voice ? 'Recording with ' + voice.name + '…' : 'Recording…');
        const res = await record({ ...o, voice, onProgress: (u) => st('Recording ' + Math.round(u * 100) + ' %… keep this tab open') });
        save(res, o.name); st(res.ext === 'mp4' ? 'Saved explainer.mp4' : 'Saved explainer.webm (this browser cannot record MP4; use Chrome / Edge 126+ or Safari for MP4)');
      } catch (e) { st('Export failed: ' + e.message); } finally { o.button.disabled = false; }
    });
  }
  window.MP4X = { record, save, attach, pickMime };
})();
