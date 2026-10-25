# Flat Figure Full

The full Golden-Hour Flat Figures video generator template. It describes flat 2D explainers with whole-body characters, two-block hands, over-the-shoulder dialogue shots, real-size props, moving transitions and MP4 output. All the reference code and sheets are included.

## Files
- `GOLDEN_HOUR_FLAT_FIGURES_TEMPLATE.md`: the whole prompt. The rules are at the top and the reference code is embedded below them.
- `golden-hour-figures.html`: a page showing all the reference sheets, with a copy button for the template.
- `code/`: the same code as separate files.
  - `lib/harness.js`: helpers.
  - `lib/sound.js`: the sound kit.
  - `styles/figures.js`: the style source (casts, hands, furniture, lights, trees, scenes).
  - `make-mp4.cjs`: the MP4 renderer (Node + Playwright + ffmpeg).
  - `lib/export-mp4.js`: the Export MP4 button inside the page; it records the explainer in the browser with the sound effects and an uploaded MP3, for apps where Node and ffmpeg can't run.
  - `page3.html`: the main explainer demo.
  - `page_talk.html`: the conversation demo.
- `sheets/`: all 47 reference images, numbered like the page: line-ups 1-6 with front / back / 3/4 views, hands, conversation shots, locations, animals, furniture, lights, decor, trees, grass, the body, vehicles, plus the pose library (37), front shot (38) and subject focus (39), activities (40), thinking without the brain (41) the locked title (42), footprints (43), room items (44) close-up variations (45), the phone (46) and the book (47).
- `demos/`: example MP4s. `figures-demo.mp4` (24 s) zooms on every beat and has new poses, a brain close-up and a front shot; `talk-demo.mp4` (12 s) is a conversation.

## Shot rules
The template starts with SHOT RULES that every video must follow: zoom on every beat, mix whole-body, front (`frontShot`) and over-the-shoulder (`otsShot`) shots, a new pose every beat (`pose()`, 13 poses), and a cut-away to a big subject (`focusShot`, e.g. the brain) whenever the script explains a thing.

## Get the MP4 without Node
Open `code/page3.html` in Chrome, Edge or Safari, choose an MP3 (optional) and click **⬇ Export MP4**. It plays once in real time and downloads `explainer.mp4`.

## Render the demos
```
cd code
npm i playwright        # plus ffmpeg + ffprobe on PATH
node make-mp4.cjs page3.html figures-demo.mp4
node make-mp4.cjs page_talk.html talk-demo.mp4
```
