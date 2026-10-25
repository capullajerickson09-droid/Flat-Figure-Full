# Flat Figure Full

The full Golden-Hour Flat Figures video generator template. It describes flat 2D explainers with whole-body characters, two-block hands, over-the-shoulder dialogue shots, real-size props, moving transitions and MP4 output. All the reference code and sheets are included.

## Files
- `GOLDEN_HOUR_FLAT_FIGURES_TEMPLATE.md`: the whole prompt. The rules are at the top and the reference code is embedded below them.
- `golden-hour-figures.html`: a page showing all the reference sheets, with a copy button for the template.
- `code/`: the same code as separate files.
  - `lib/harness.js`: helpers.
  - `lib/sound.js`: the sound kit.
  - `styles/figures.js`: the style source (casts, hands, furniture, lights, trees, scenes).
  - `make-mp4.cjs`: the MP4 renderer.
  - `page3.html`: the main explainer demo.
  - `page_talk.html`: the conversation demo.
- `sheets/`: reference sheet images (line-ups 1-6 with front / back / 3/4 views, hands, furniture, lights, decor, trees, grass).
- `demos/`: example MP4s. These were rendered before the cast was changed to light Asian skin tones, so they still show the old people.

## Render the demos
```
cd code
npm i playwright        # plus ffmpeg + ffprobe on PATH
node make-mp4.cjs page3.html figures-demo.mp4
node make-mp4.cjs page_talk.html talk-demo.mp4
```
