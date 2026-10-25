I want an animated explainer made in the "Golden-Hour Flat Figures" visual style (Popular Explainer Looks), timed to my voiceover. Below is the complete source code of a reference animation in this exact style, plus a small sound-effects kit. Use them as your style guide and rebuild it around my content.

MY CONTENT:
[Describe your topic, or paste your script here. If this is left as is, ask me for it before building.]

MY VOICEOVER TIMING:
[Paste the SRT, or word-level timestamps, of your voiceover here. If this is left as is, ask me for them before building.]
(If I also attached a voiceover or music file (MP3, WAV, M4A), it ALWAYS goes into the final MP4 automatically (see OUTPUT); take the timing from the text above. If there is no timing above but you can transcribe the attached audio with word-level timestamps, do that instead of asking me.)

MY LOCATION / SUBJECTS:
[Where it happens (e.g. the park, a bus station, a school, a room, a crowded street, a grass field, the ocean, a forest, the zoo, inside the body) and what must appear (people, organs, cells, animals, vehicles). If this is left as is, take it from MY CONTENT.]

SHOT RULES: THE VIDEO IS WRONG WITHOUT THESE (check every one before rendering)
Real problem these rules fix: a video came out static: no zoom, no front view, the same angle all the time, an empty place, and the character only walking back and forth.
1. ZOOM EVERY BEAT. The camera is never still for more than one beat (3-4 s): on every beat it eases in or out (`cam(x, z, cx, cy)`, z between 1.0 and about 1.35, eased over ~1 s, aimed at the character or thing that matters right now). Push in when something important is said, pull back to show the whole situation. In the BEATS table every beat has a zoom (e.g. 1.0 -> 1.2 on Kai's face). A video where z stays 1.0 is wrong.
2. MIX THE ANGLES. Use at least these three kinds of shot in every video, never a whole video in one angle:
   - WHOLE-BODY 3/4 shot: characters head to feet on the floor (`person`).
   - FRONT SHOT: the character faces the camera and talks to the viewer, head and shoulders, background blurred (`frontShot`, sheet `SHEETS.front`). Use it for the hook, for lines spoken to the viewer and for the takeaway. At least one front shot in every 20 s.
   - CONVERSATION: when two characters talk, over-the-shoulder front portrait of the speaker with the listener's back in the foreground (`otsShot`), mixed with side two-shots (see CONVERSATION SHOTS).
3. CHARACTERS ACT. Walking is only for getting somewhere (a few seconds, then they stop). Give each scene a different WHOLE-BODY activity with `act(ch, P, name, o)` (sheet `SHEETS.acts`): sit (on a chair), tv (on the sofa with a remote, watching the TV), lean (against a wall, arms crossed), drink (a cup at the mouth), phone, read, walk, run, plus jump and any other activity the story suggests (cooking, typing, lying on a bed, stretching) built the same way with furniture and props from the libraries. Never two scenes in a row with the same activity. On every beat each character in the shot takes a pose that fits the words, eased in over ~0.35 s: `pose(ch, P, name, u)` with 13 poses (sheet `SHEETS.poses`): explain, present, point, idea, think, scratch, worry, shrug, cheer, thumbs, wave, hips, cross. Plus physical actions the story calls for (jump, catch, sit, drop, hold a prop). Each pose has the expression to match (see FACIAL EXPRESSIONS). A character doing the same thing for more than one beat is wrong.
4. THINKING IS SHOWN MANY WAYS. When a character thinks, wonders, remembers or gets an idea, do NOT always cut to the brain. Choose what fits the moment and vary it through the video: `thinkFx` above the head (sheet `SHEETS.think`: bulb = an idea, gears = working it out, question = puzzled, spark = a sudden realisation, dots = pondering, swirl = confused), a thought bubble holding a small picture of what they think about, the character pacing or tapping their chin (`think` / `scratch` poses), options popping up beside them, a whiteboard doodle, a scale weighing two ideas, a memory shown as a faded picture. The brain close-up is ONE option, at most once per video, only when the script is about the brain itself.
5. FOCUS ON THE SUBJECT. When the script explains a THING (the brain or a way of thinking, the heart, the lungs, an eye, a cell, an animal, a machine, a place), CUT AWAY to it with a moving transition: `focusShot` (sheet `SHEETS.focus3`). The characters are NOT in that shot; the subject is BIG in the middle of the screen (about 65 % of the height; the brain is a cloud of overlapping flat circles, pink at the front and lilac at the back, no fold lines), labels pop in one per beat with a line to the part they name, the camera pushes in on the part being talked about (`push`), and for thinking / ideas / the mind the brain shows thought sparks (`think: true`). When the explanation is done, a moving transition goes BACK to the characters, who react (e.g. `idea` pose with `happy`, or `think` with `focus`). Use one focus shot per subject the script explains.
6. BE CREATIVE, NOT STATIC. Think like a director of a popular explainer channel, not a slideshow: every shot should be worth watching on its own.
   - Vary the SHOT SIZE from shot to shot: wide (the whole place and everyone in it), medium (one or two people, knees up or whole body bigger), close-up (a face reacting, a hand doing something), extreme close-up (an object, a number, a detail). Never the same shot size and angle twice in a row.
   - Vary the ANGLE within the flat 2D style: 3/4 view, side view (profile, walking past), front (talking to me), from behind / over the shoulder, top-down (a table, a map, a plate, a desk seen from above), a low framing (the character big against the sky) or a high framing (small in a wide place). Flip which side characters face between shots so it doesn't feel repeated.
   - MOVE THE CAMERA, not only zoom: push in, pull out, pan sideways to follow a walk or reveal the next thing, track alongside a moving person or vehicle, a whip pan between ideas, a slow drift on a held shot. Something on screen changes every 1-2 seconds.
   - ADD THE ELEMENTS THE STORY NEEDS, even when the script doesn't list them: the props a character uses (a phone, a cup, a book, a ball), the place's details (furniture, plants, lamps, cars, people walking by, birds, clouds, weather), and visual explainers (icons, arrows, a simple diagram, a counter that counts up, a progress bar, a map, a before / after split screen, a timeline). Use the libraries in the code (furniture, lights, decor, trees, grass, animals, vehicles, crowds, organs) and draw new things in the same flat style.
   - SHOW, DON'T TELL: turn every idea into something visible: a metaphor (a battery draining for tiredness, a traffic jam of thoughts, a growing plant for learning), a demonstration (a character tries it), or a comparison (two characters side by side, one doing it right).
   - Background life: wind in trees and hair, people or cars passing in the far background (blurred if not in the script), floating dust, blinking, breathing. No frame is ever frozen.
7. WORDS ON SCREEN ARE YOUR OWN, NOT THE SCRIPT'S. Apart from (a) the title, (b) numbers, percentages and units (25 %, 0.25 s, 31 cm) and (c) phrases I give you to show word for word, do NOT put any words from my script on screen. Instead, for every scene write short RELATABLE phrases and expressions that fit what is happening and how the character is posing: a reaction ("Wait, what?!", "Oh no…", "Got it!"), a thought ("Why so slow?"), a feeling ("So tired…"), a cheer ("Nailed it!"), a friendly label for a part or a step ("Eyes spot it", "Brain decides"). Analyse the topic and the beat first so every phrase is clearly connected to the topic and to the pose / expression it sits beside (an `idea` pose gets an "Aha!"-type phrase, a `worry` pose a worried one). Keep them short (1-4 words), varied (never the same phrase twice), and never a copy or a close paraphrase of the spoken sentence (no subtitles: captions are added in editing).
8. DETAILED OBJECTS ARE FLAT SHAPES (always, for every object you draw: organs, food, machines, plants, animals, furniture, icons). Build each object from simple flat filled shapes (circles, ellipses, rounded rectangles, smooth blobs) laid over each other, NO line strokes inside the object (no outlines on parts, no hatching, no fold or vein lines, no texture lines): detail comes only from shapes of different colours. The overall silhouette must match the real object exactly (a brain is brain-shaped, a heart heart-shaped, a cup has its handle), and the colours are a small palette of related tones that fit that object (the brain: pinks at the front, mauves on top, lilacs at the back and bottom). At most one thin edge around the WHOLE silhouette, in a darker tone of the object. Reference: the brain in the code (`brain()`, `BRAIN_DOTS`: overlapping flat circles) and its sheet `SHEETS.focus3`.
9. PLAN IT FIRST. Before writing code, write the BEATS table with these columns for every beat: time, words, shot type (body 3/4 | front | over-shoulder | two-shot | top-down | focus), shot size (wide | medium | close-up | extreme close-up), camera (zoom from -> to aimed at what, or pan / track / whip), each character's pose and expression, props / place details / visual explainers on screen, on-screen text, transition into the next shot. Also give every beat its activity (`act`) and, for thinking moments, its thinking device, and its on-screen phrase (your own words, see rule 7). Then build exactly that table. Check: zoom or camera move on every beat, no two shots in a row with the same size and angle, at least one front shot per 20 s, a new pose every beat, a different activity per scene, thinking shown in varied ways (brain at most once), a focus shot for each subject explained, the props / places / visual explainers each beat needs, no script words on screen except title / numbers / given phrases, and every drawn object made of flat shapes with no inner lines.

REFERENCE IMAGES I ATTACH (every time)
- A character line-up (people of different ages and genders, whole body, side by side). There are several line-ups and I attach one or more: LINE-UP 1 (light East / Southeast Asian skin tones, black hair, white hair for the elderly; reference cast `CAST`) and LINE-UP 2 (light Asian skin tones, mostly black hair, grey / white for the elderly; reference cast `CAST2`, sheet with FRONT / BACK / 3/4 rows). Use the attached one as the design reference for HOW characters are built: head shape and size, face (white eyes with dark pupils, brows, friendly mouth, soft nose and cheek shading), body proportions per age, posture, simple flat clothes with one shadow side. Match that construction exactly. For the characters in my video, keep that construction and vary the rest freely (see REFERENCE ONLY below). If I attach line-up 2, start from `CAST2`; if line-up 1, from `CAST`; the variation line-ups 3-6 (`CAST3`-`CAST6`: mixed builds, dresses and skirts, a hijab, ponytails and pigtails, patterned clothes, canes) can be used with either; if several are attached, any of those people may appear.
- REFERENCE ONLY: the people in the line-ups (and in `CAST` / `CAST2`) are a reference for the style and construction, not a fixed cast. You may make VARIATIONS of any character: different clothes and clothes colours, a different hairstyle and hair colour, a different skin colour (any human skin tone), glasses, a beard, a hat when the story needs one. Keep what makes it this style: the same head, face, body proportions per age, flat clothes with one shadow side, hair with no gaps, hands from the hand sheets, real sizes. Within one video, each character keeps the same look from start to end, and no two characters in a scene look alike.
- Sometimes a views sheet of the same cast: a FRONT VIEW row (head and shoulders), a BACK VIEW row and an ANGLED BACK-SIDE VIEW row (heads turned away so a sliver of cheek, jaw and ear shows). Use it for the conversation shots (see CONVERSATION SHOTS): how each hairstyle looks from the front and from behind (braids with a centre parting, long hair covering the back, the white bun, the bald head with a white fringe band, beards seen at the jaw from behind), and the clothes from the back (hood on the back, collar band, back seam). The reference code's `SHEETS.views` is that sheet in the house style.
- A gripping hand. Copy its grip: the hand's back on the near side of the object, the fingers wrapped across the object's front ending just past its far edge, the thumb over the top, and the object visible above and below the hand. Draw it in the house hand style (see HANDS).
- Hand sheets (hand poses: open front / back, holding front / back, pointing front / back, thumbs-up right / left, holding a gun, holding a phone, OK sign, peace sign, writing, pinching, clenched fist, pointing at the viewer). Follow their structure (pose, which way the thumb goes, front vs back, cuff at the wrist), but draw the fingers as ONE rounded box; only the thumb, and a finger the pose really needs on its own (the pointing / trigger index finger, the two fingers of a peace sign, the OK ring), are separate slim rounded boxes. The reference code's `SHEETS.hands` and `SHEETS.hands2` are those sheets redrawn in the house style: match them.
- If I attach other images (a location, an animal, a vehicle), use them as reference for that subject's shapes and colours in this style.

OUTPUT: ALWAYS AN MP4 (non-negotiable)
- The deliverable is an MP4 video file (1280x720, 30 fps, H.264 + AAC), not an HTML page. The HTML file below is only the source you render from; give me the MP4 as the result (and the HTML as a secondary file).
- Render it with `make-mp4.cjs` (included below, after the SOUND KIT): `node make-mp4.cjs explainer.html [my-audio.mp3] explainer.mp4`. It loads the page in headless Chrome, captures every frame through `window.seek`, encodes it with ffmpeg, renders the sound effects and muxes everything.
- If I attached an MP3 / WAV / M4A, pass it as the second argument: it is mixed in automatically (my audio on top, the effects ducked under it). Never leave it out and never cut it.
- 2 EXTRA SECONDS AT THE END: `DURATION` = the time the last on-screen text appears (or the last spoken word, whichever is later) + 2 s. The video is max(DURATION, audio length + 2 s) long, so my audio is never cut off; past DURATION the picture holds its final state (the takeaway stays on screen, characters keep breathing and blinking). Real bug this rule fixes: an added MP3 was longer than the animation and got cut at the end.
- The renderer also checks every frame and prints PROBLEMS TO FIX (overlapping text, text off screen, text over a face, a character that jumps): fix every one, render again, and only deliver when it prints "checks: no text overlaps, no off-screen text, no character jumps, no page errors".
- THE PAGE ALWAYS HAS AN "EXPORT MP4" BUTTON (every time, even when you also render with make-mp4.cjs). Include `export-mp4.js` (the MP4 EXPORT BUTTON block below, unchanged) and wire it under the canvas: an audio file input ("Voiceover / music (MP3)") and a button "⬇ Export MP4" -> `MP4X.attach({ canvas, seek: window.seek, duration: window.DURATION, scoreSound: window.scoreSound, button, file, status })`. One click plays the explainer once in real time and downloads `explainer.mp4` with the sound effects AND my uploaded MP3 mixed in (2 s after the audio ends). This is how I get the MP4 when your app can't run node or ffmpeg: never deliver a page without it.
- If you can't run a shell, still build the HTML exactly as below (with `window.seek`, `window.DURATION`, `window.scoreSound`, `window.QC`, `window.CUTS`) and tell me to run the make-mp4.cjs command.

WHAT TO BUILD
One self-contained HTML file (the source of the MP4):
- A 1280x720 canvas, scaled to fit the window with letterboxing, and a small control bar: play/pause, a scrub slider, the current time, a sound on/off toggle, and loop on by default.
- An "⬇ Export MP4" button with its audio file input (see OUTPUT; `export-mp4.js`).
- A "Load voiceover" button (a file input, and also accept drag-and-drop of an audio file). Once a file is loaded, the audio is the clock: play, pause and scrub control the audio element, and the canvas draws at audio.currentTime. Without a file, it runs on its own clock.
- A new `explainer(ctx, W, H_, t)` that tells MY CONTENT in this style. Set DURATION to the last on-screen text / last spoken word plus 2 seconds (see OUTPUT).
- A `scoreSound(k)` function that schedules the sound effects with the SOUND kit below (see SOUND). Play it in sync from the player: on play call `stopSound = SOUND.live(scoreSound, currentT, { voiceover: true })`, and call `stopSound()` on pause, on seek and when the sound toggle is turned off.
- Include the H helper library and the SOUND kit below unchanged, and keep the reference's own helper functions where they are useful (`kick`, `makeSim`, `headRig`, `ik2`, `rig`, `reach`, `gripPt`, `person`, `figure`, `hand`, `handOver`, `floorShadow`, `face`, `hat`, `strand`, `roomFloor` / `bg`, `backdrop`, `blurImg`, `soft`, `frontBust`, `backBust`, `otsShot`, `frontShot`, `focusShot`, `pose` / `POSES`, `act` (activities), `thinkFx`, `titleIntro` / `titleFly` / `headerPill` / `titleText` (the locked title), `trans`, `stageModel`, `streetLane`, `handLocal`, `CH`, `castSheet`, `furniture`, `lightFx`, `decor`, `tree`, `grass`, `grassStrip`, `title`, `pill`, `arrow`, `push`, `finish`).
- Load these Google Fonts before the first draw (await document.fonts.load for each spec you use): Baloo 2, Nunito
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito:wght@400;700;900&display=block">
- Expose `window.seek = (t) => { /* draw frame at time t */ }`, `window.DURATION`, `window.scoreSound`, `window.QC` (the text boxes and characters drawn in the last frame, filled by `title` / `pill` / `qcBox` / `person`) and `window.CUTS` (the times of hard cuts and slide-pushes, `TL.cuts`), so make-mp4.cjs can render and check it.

THE LOOK: 2D, WHOLE BODIES, CHARACTER FIRST
- Flat 2D only: no 3D camera, no perspective worlds, no space scenes (no galaxies, stars or planets unless the topic is about space). Depth comes from layering and size, not from blur.
- Whole bodies by default: every character is shown head to feet, standing, sitting or jumping on a visible floor, with a soft contact shadow under the feet; frame the full figure with a little room above the head and the feet on the floor line, and to show detail give the character more of the frame instead of cutting the body. ONE exception: when two characters talk to each other, use the conversation shots (front portrait + over-the-shoulder back view, see CONVERSATION SHOTS).
- The CAST REFERENCE below is a starting point (both line-ups, looked up with `CH(id)`), reference only: pick whoever fits the story and use them as they are, or make a variation (different clothes, hairstyle, hair colour, skin colour) by copying the entry and changing those fields, e.g. `{ ...CH('leo'), name: 'Theo', skin: '#e0b48a', hair: 'sideswept', hairC: '#4a2c1c', top: 'polo', topC: '#2f7a5a' }`. Add new people in the same system whenever the story needs someone who isn't there.
- Characters are drawn from complete main body parts: head, face, neck, torso, upper arms, forearms, hands (a finger block + a slim thumb), thighs, shins, feet, plus clothes on top (top with its collar/hood/zip/buttons, sleeves, trousers or shorts, socks, shoes) and hair. Age groups are presets in `AGE` (heads tall, hip height, shoulder width, limb thickness, typical height in metres): `kid`, `teen`, `ya` (young adult), `adult`, `elder` (with a slight stoop). Each character also has its own real height (`hM`), so a line-up shows true relative heights. Cast real people for the topic across the ages it involves.
- Skin: one `skin` colour per character used for the head, neck, arms, hands and legs. Line-up 1: different kinds of brown (light tan, golden brown, warm brown, deep brown). Line-up 2: the full range (fair with rosy undertone, light, olive, tan, brown, deep brown). Facial features are the same for every skin: white eyes with near-black pupils and a catch-light, a mouth one dark shade of the skin, a soft nose shadow.
- PEOPLE DEFAULT (always, unless my script asks otherwise): mostly Asian-looking people: light, warm East / Southeast Asian skin tones (#f6d6b8, #f3d2b3, #f2cba8, #efc7a4, #ecc19c, #e8bb92, #e2b48c, #dcae84) and black or dark-brown hair. Every MALE has STRAIGHT hair (crew cut, side parting, side-swept fringe, bald / shaved); no curls, waves, afros, locs or fades for males. Curly hair and dark skin are rare: at most one such person in a whole video, and only when the story calls for variety.
- Hair: black for children and adults, grey or white for elderly people (dark brown now and then). Brows match the hair (black hair = black brows; ginger, blonde, grey or white hair = brows a shade darker than the hair). Every person has a DIFFERENT hairstyle: long straight hair with a fringe, two long braids, long straight hair with a headband, a short crew cut, a side-swept fringe, a side parting, a bun, nearly bald with a fringe round the back, plus line-up 2's bob with a straight fringe (girl 8), a straight side parting (teen boy), a side-swept fringe (man 24), a high ponytail that swings like a pendulum (woman 23), shoulder-length hair with a side parting (woman 45). Girls' and women's hair is long or shoulder-length by default. Facial hair where the character has it: a mustache, a short beard that leaves the cheeks clear (`beard:'short'`), or a full beard with mustache.
- Hair is drawn with NO GAPS: one hair cap covers the whole head except a single face opening (an ellipse turned toward the facing side whose top is the hairline), so fringe, sides and back are one piece (`hairCap`). Long hair adds a back layer hanging behind head and body (`hairBack`) and a lock or braids in front (`hairFront`), all swinging with the head's pendulums. Nearly bald = the cap clipped to a band round the back and sides below the crown. Real bug this rule fixes: a fringe drawn as its own shape left a wedge of skin between the fringe and the side hair. Zoom into every head and check there is no skin showing between hair pieces.
- Hair pieces on the FACE side (the side the character is turned toward) go BEHIND the head: curls, tufts, braids, ponytails and locks on that side are drawn in the back layer (`hairBack`), so only their outer edge shows past the cheek and ear and they never cover the face. Real bug this rule fixes: the young man's ring of curls was drawn in front, so the curls on the right covered the side of his face; now the curl ring is drawn behind the head and the cap covers the rest.
- Paired hair (two braids, two ponytails, pigtails) follows the 3/4 view: the one on the side the face is turned toward hangs BEHIND the head and body (drawn in the back layer, starting behind the head, only its end peeking out behind the far shoulder); the one on the back-of-head side hangs in front of the near shoulder. Real bug this rule fixes: both braids were drawn in front, so one braid covered the side of the girl's face.
- Headwear is optional and rare: give a hat only to a character the story calls for, never to everyone.
- House look from the references: big round heads, simple flat faces, thin limbs, simple two-block hands (finger block + slim thumb), chunky saturated clothes with one flat shadow side. Expressions: `neutral`, `focus`, `worry`, `happy`, `shock`, plus blinks and a talking mouth (`mouth` 0..1). Eyes look at what matters in the beat.

FACIAL EXPRESSIONS FOLLOW THE MEANING (non-negotiable)
- Every BEATS entry gives every character in the shot an expression chosen from what is being said and what happens to them: wondering / thinking = `focus` with the eyes looking up toward the thought bubble; a question or a problem = `worry`; surprise, a fall, a fast event, a shocking number = `shock` (on the frame it happens); success, a correct answer, a greeting, the takeaway = `happy`; listening or waiting = `neutral` looking at the speaker or the subject. Never a smile on bad news, never a blank face on a surprise.
- Expressions change on the word that causes them (up to 0.2 s early), never in the middle of an unrelated word, and blend over ~0.15 s; a face reacting to an event (a catch, a drop, a bang) changes on that physics frame.
- The eyes look at what matters (the speaker, the object, the bubble, the camera when addressing me); the mouth moves only while that character is talking.
- Light: warm golden-hour window light from one side. Every character gets the rim pass (`person` draws the silhouette in the light colour, nudged toward the light, then the figure on top), so a warm edge glows on the lit side. Night or screen scenes use the cool rim colour.
- Backgrounds are soft rooms or places with a floor (gradient wall or sky, window glow, light shafts, baked out-of-focus bokeh, a floor or ground) drawn once into a cache and placed with one drawImage; the camera zooms gently on that cached picture and never crops the figures. Backgrounds the script doesn't talk about are blurred (see BACKGROUND BLUR).

ATTACHMENT: EVERY PART ON ITS JOINT (non-negotiable)
- Each character is ONE skeleton (`rig`): pelvis -> spine -> neck base -> head; neck base -> shoulders -> elbows -> wrists; pelvis -> hips -> knees -> ankles. Every joint is computed from its parent, and every part is drawn from those joint points only: limbs are round-capped strokes from joint to joint (so there is never a gap at a joint), sleeves and trousers are drawn on the same joints, the hand sits on the wrist pointing along the forearm, the shoe has its heel on the ankle, the torso's top corners contain the shoulder joints and its hem covers the hip joints, the neck runs from the neck base into the head.
- Never place a hand, foot or arm by its own screen coordinates. When a hand must be somewhere (holding, catching, pointing, touching), solve the arm with two-bone IK from the shoulder (`reach` puts the hand's grip point on the target; elbows bend down/back, knees bend forward, never inverted), and put the prop where the hand actually is (`gripPt` = the middle of the closed hand, where the prop runs through it). If the target is out of reach, the hand stops at full reach: move the character or the prop, never detach the hand. Place props from the character's own shoulder and arm length (children have shorter arms), as the reference's clamp stands do, so a hand never stops short of the thing it should hold. Real bug this rule fixes: the kids' rulers hung where the adults could reach, so the kids' hands closed on air and the rulers fell past them.
- Feet are planted: ankles stay on the floor while the pelvis moves (crouch, breathing, flinch), and the knees bend through IK. Feet leave the floor only in a real jump or step, and then the whole body moves with them.
- Draw order keeps parts in the right layer: far arm, far leg, near leg, neck, torso, head and hair, near arm last. Far limbs are a shade darker. A hand that holds a prop is drawn over the prop (`handOver`), so the finger block and thumb wrap in front of it.
- Check it before you finish: render frames at the key moments, zoom into every hand, and look at every shoulder, elbow, wrist, hip, knee and ankle. Nothing may float, cross the body backwards, come out of the wrong shoulder, show the thumb on the wrong side, show two identical hands, or hold a prop without the prop passing through the hand.

ANATOMY: LEFT/RIGHT, FRONT/BACK, ORIENTATION (non-negotiable)
- Characters are seen in a three-quarter view, turned toward the side they face (`f` = 1 right, -1 left). The NEAR shoulder and hip are on the side AWAY from the facing direction; the FAR shoulder and hip are on the facing side, partly hidden behind the chest. The near arm and leg are drawn in front (last); the far arm and leg behind (first, a shade darker).
- So an arm that reaches, points or holds forward comes from the near shoulder and crosses in front of the chest. It must never start from the far edge of the torso. Real bug this rule fixes: a figure facing right pointed with an arm growing out of the right edge of the chest (the far side), and its pointing hand was upside down (curled fingers on top, thumb underneath). Correct: the arm leaves the near (left-hand, back) shoulder, crosses the hoodie, and the hand points with the finger block along the arm and the thumb on top.
- Thumb position is anatomical and automatic (`palmSide`): forearm level (pointing, reaching, holding in front) = thumb on TOP; arm hanging = thumb FORWARD (toward the side the character faces); arm raised with the palm to the viewer (waving, cheering) = thumb toward the body's MIDLINE (the head). Never flip a hand to make a pose work; change the arm instead.
- Two hands are a mirror pair, never two copies: a left and a right hand have their thumbs on opposite sides (two raised hands: each thumb points in toward the head).
- A raised arm goes up on its own side of the head (up and slightly back), never across the face. Elbows bend down/back, knees bend forward, wrists keep the hand in line with the forearm, feet point the way the body faces, both feet are visible and under their hips.
- Proportions stay human for the age: head, torso, arm (hand reaches about mid-thigh when hanging), leg lengths come from `AGE`; nothing stretches.

HANDS: ONE ROUNDED FINGER BOX + ONE SLIM THUMB, POSES FROM THE HAND SHEET (non-negotiable)
- Every hand is built from rounded boxes in the skin colour (`hand`): ONE rounded box for the four fingers together (open: palm and fingers as one mitten, ~0.5 head radii long, ~0.32 wide, starting at the wrist along the forearm; closed: the same box, shorter, as the fist) and ONE SLIM rounded box for the thumb (~0.25 long, ~0.1 wide). Pointing adds ONE slim rounded box for the index finger. Never draw separate fingers, knuckles or nails. Each part has the rim light like the rest of the body.
- NO LINES on any hand, in any pose and view: no outlines round fingers or thumbs, no palm lines, no creases, no knuckle lines. The finger box, the thumb and any separate finger are plain shapes in the same skin colour (the thumb behind the box in a back view is a shade darker); only the body's rim light edges them. Front and back views differ only by where the thumb is (in front, or behind and darker).
- The 8 poses (`spec.m` + `spec.view`), exactly as on the hand sheet I attach and on `SHEETS.hands`:
  - OPEN FRONT (`m:'open', view:'front'`): palm to the viewer, plain mitten box (no palm lines), the thumb out at ~37° on the thumb side, IN FRONT of the box.
  - OPEN BACK (`m:'open', view:'back'`): back of the hand to the viewer, plain mitten box, the thumb BEHIND it, a shade darker.
  - HOLDING FRONT (`hold`, `view:'front'`, only when the palm side faces the camera): the fist box lies ACROSS the prop's front from the wrist to just past its far edge; the thumb wraps over its top edge; the prop shows above and below.
  - HOLDING BACK (`hold`, `view:'back'`, the default for holding and catching): the back of the fist across the prop; only a small darker bit of thumb peeks over the top edge near the wrist.
  - POINTING FRONT / BACK (`m:'point'`): a short fist box (the three curled fingers as one box), ONE slim box for the index finger straight out along the top (thumb side), the thumb lying along the top of the fist (in front from the front, behind and darker from the back).
  - SIDE RIGHT / SIDE LEFT (`m:'thumb'`, thumbs-up): the fist box with a SHORT, THICK thumb up out of the back-top corner of the fist (near the wrist end), leaning back a little: tapered slightly from a wide base to a round tip, its visible length about half the fist's height, width about half its own length, with no crease or outline. It must read as a thumb, never as a long stick or a finger. Right and left are mirror images.
- More poses (`SHEETS.hands2`), same rule (fingers = one box; only fingers the pose needs are separate slim boxes):
  - HOLDING GUN (`m:'gun'`): the box round the grip, the index finger straight along the frame (off the trigger), the thumb along the top.
  - HOLDING PHONE (`hold` with the phone as the prop, axis along the phone): the fist box across the phone, thumb over the front; the phone shows above and below.
  - OK SIGN (`m:'ok'`): thumb and index make a ring on the thumb side; middle, ring and little finger stand up together as ONE box.
  - PEACE SIGN (`m:'peace'`): index and middle up in a V (two slim boxes), ring and little finger curled = the box, thumb folded across them.
  - WRITING (`m:'write'`): the curled fingers box tucked under, the index along the pencil, the thumb against it; the pencil runs between them from above the knuckles to the paper (`handLocal` gives points in the hand's frame to place it).
  - PINCHING (`m:'pinch'`): the four fingers as one box bent up to meet the thumb tip; a small object sits between the tips (`handLocal(arm, r, f, mid, 0.45, -0.09)`).
  - CLENCHED FIST (`m:'fist'`): one box seen from the knuckle side, the thumb folded across its front.
  - POINTING AT THE VIEWER (`m:'pointcam'`): the arm comes toward the camera, seen end-on: a round sleeve opening behind, the fist as one box facing us, the index finger foreshortened to a round tip with a nail, the thumb on the side.
- Front vs back: in the scenes, hands show their BACK by default (holding, catching, reaching, pointing, hanging): plain shapes with NO lines inside the hand (no palm lines, no thumb shape drawn across the fist); the thumb of a back view is behind the box, a shade darker, peeking out only at its edge. Show the FRONT (palm side, thumb in front) only when the palm must face the viewer: a raised open hand (waving, cheering, 'stop'). Real bug this rule fixes: holding and open hands in the ruler drop were drawn front-on, with palm lines and the thumb over the fist, where the camera sees the back of the hand.
- Thumb side (`palmSide`): forearm level = thumb on TOP; arm hanging = thumb FORWARD (toward the facing side); arm raised = thumb toward the head. A left and a right hand are mirror images, never copies.
- Holding (`spec.hold = { w: prop width, axis: prop direction }`) is drawn AFTER the prop (`handOver`); the arm is solved so the middle of the fist is on the prop (`reach(..., hold)`, `gripPt`).
- Catching: open before (`spec.closed` <= 0.35: open hand in front of the prop), closed into HOLDING on the catch frame; the falling thing stops IN the fist (friction over a short distance, then the hand is pushed down a little by its momentum, `kick`). A release is closed -> open.
- Real bugs this rule fixes: a fist drawn beside the ruler instead of around it; a pointing hand upside down (thumb underneath); two raised hands as copies with both thumbs the same way; detailed five-finger hands that broke in motion.

CAST REFERENCE, LINE-UP 1 (in `CAST`; reference only, variations allowed; built like the line-up image I attach)
- `ben`: Ben, boy, 8, 1.28 m. Skin #f3d2b3. Black crew cut. Orange T-shirt, blue shorts, white socks, dark trainers.
- `mia`: Mia, girl, 8, 1.25 m. Skin #efc7a4. Two long black braids with pink ties and a centre parting. Mint T-shirt, navy shorts, white socks, coral trainers.
- `sam`: Sam, teen boy, 15, 1.70 m. Skin #f1c9a5. Short straight black hair with a side-swept fringe. Yellow hoodie, grey jeans, grey trainers.
- `zara`: Zara, teen girl, 15, 1.60 m. Skin #e8bb92. Long straight black hair with a yellow headband. Red track jacket with white zip, dark leggings, navy trainers.
- `leo`: Leo, young man, 24, 1.80 m. Skin #f6d6b8. Short straight black crew cut. Teal track jacket with white zip and side stripe, navy track trousers, yellow trainers.
- `kai`: Kai, young woman, 23, 1.66 m. Skin #ecc19c. Long straight black hair to mid-back with a fringe and a front lock. Purple hoodie, dark joggers, white trainers.
- `omar`: Omar, man, 45, 1.76 m. Skin #dcae84. Black hair with a side parting, short black beard and mustache. Blue button shirt, dark trousers, brown shoes.
- `grace`: Grace, woman, 45, 1.64 m. Skin #f2cba8. Black shoulder-length bob with a side parting. Olive cardigan over a white top, dark trousers, dark shoes.
- `rosa`: Rosa, woman, 72, 1.58 m. Skin #e2b48c. White hair in a bun, glasses. Mustard cardigan, grey trousers, brown shoes. Slight stoop.
- `ade`: Ade, man, 76, 1.68 m. Skin #f0c8a4. Nearly bald with a fringe of white hair round the back, full white beard and mustache. Brown cardigan, dark trousers. Slight stoop.
- The hero frame (`draw()` = `castSheet`) shows line-up 1 side by side, whole body, at true relative heights, with name, role and age under each. Hats are off for everyone by default.

CAST REFERENCE, LINE-UP 2 (in `CAST2`; reference only, variations allowed; `SHEETS.cast2` whole bodies, `SHEETS.views2` front / back / 3/4 rows like its character sheet)
- `finn`: Finn, boy, 8, 1.27 m. Light skin #f3d2b3. Straight black hair with a side-swept fringe. Green T-shirt, blue shorts, white socks, red trainers.
- `mei`: Mei, girl, 8, 1.24 m. Light skin #efc7a4. Black bob with a straight fringe. Yellow striped T-shirt under yellow dungarees (bib with straps, buttons, shorts), white socks, blue trainers.
- `jamal`: Jamal, teen boy, 15, 1.72 m. Light skin #f1c9a5. Short straight black hair with a side parting. Orange hoodie, grey jeans, dark trainers.
- `sofia`: Sofia, teen girl, 15, 1.60 m. Warm light skin #e8bb92. Long straight dark-brown hair. Denim jacket (lapels, stitched yoke) open over a white top, black trousers, pink trainers.
- `arjun`: Arjun, man, 24, 1.77 m. Fair skin #f6d6b8. Black side-swept hair, glasses. Maroon sweater with a white shirt collar, khaki chinos, brown boots.
- `emma`: Emma, woman, 23, 1.67 m. Light skin #ecc19c. Black high ponytail with a red tie. Teal cardigan over a pale-blue top, blue jeans, brown flats.
- `karim`: Karim, man, 45, 1.75 m. Light-tan skin #dcae84. Short black hair, short beard and mustache. Navy polo shirt (collar, two buttons), olive trousers, grey trainers.
- `lin`: Lin, woman, 45, 1.62 m. Light skin #f2cba8. Black shoulder-length hair with a side parting. Red patterned blazer over a black top, black trousers, black shoes.
- `ruth`: Ruth, woman, 72, 1.57 m. Light-tan skin #e2b48c. Grey bun. Purple cardigan over a lilac top, dark trousers. Slight stoop.
- `walter`: Walter, man, 76, 1.70 m. Light skin #f0c8a4. Nearly bald with a white fringe, glasses. Light-blue shirt under a tan V-neck vest with buttons, brown trousers. Slight stoop.

CAST REFERENCE, VARIATION LINE-UPS 3-6 (in `CAST3` ... `CAST6`; sheets `SHEETS.cast3`-`cast6` whole bodies, `SHEETS.views3`-`views6` front / back / 3/4; reference only, mix and vary freely)
- Line-up 3: `theo` boy 6 (straight black crew cut, striped tee, denim dungarees, heavier build), `hana` girl 10 (long black hair, glasses, yellow jacket open over white, jeans), `amira` teen girl 14 (teal hijab, dotted long kurta, leggings), `malik` teen boy 17 (straight side-swept hair, red basketball jersey over a black hoodie), `connor` man 26 (beard, backwards cap, green plaid shirt open over a tee, big build), `nia` woman 30 (the rare one: deep brown skin, big afro, hoop earrings, floral wrap dress, bare legs, sandals), `raj` man 45 (grey side parting, glasses, brown vest over a cream shirt), `claire` woman 52 (dark bob, purple blazer), `lucia` woman 68 (grey bun, zigzag poncho, dark skirt), `samuel` man 82 (bald with white fringe, white beard, tweed jacket, walking cane).
- Line-up 4: `lily` girl 6 (black high pigtails, red floral sundress), `mateo` boy 9 (straight crew cut, striped tee, cargo shorts), `zuri` teen girl 14 (long straight hair, green jacket), `ollie` teen boy 16 (straight crew cut, grey hoodie, heavier build), `imani` woman 20 (ponytail with a yellow headband, yellow crop top, navy joggers), `jack` man 28 (full beard, blue plaid shirt open over black, big build), `priya` woman 38 (black shoulder-length hair, purple sweater with a collar), `marcus` man 48 (the rare one: deep brown skin, shaved head, short beard, maroon shirt), `margaret` woman 65 (white bob, olive long cardigan), `henry` man 80 (bald with white fringe, white mustache, tan jacket, cane).
- Line-up 5: `max` boy 8 (straight side parting, green striped tee), `yuki` girl 8 (bob with a fringe, pink dotted kurta, purple leggings), `dev` teen boy 15 (straight side-swept black hair, navy hoodie), `ava` teen girl 15 (freckles, black pigtails, zigzag knit top), `kwame` man 24 (side parting, glasses, brown plaid shirt open over grey), `gabriela` woman 23 (long straight hair, teal shirt, plus-size), `erik` man 45 (side parting, beard, patterned shirt, big build), `leila` woman 45 (long straight black hair, olive jacket), `gloria` woman 72 (white bun, glasses, yellow cardigan, purple skirt), `arthur` man 76 (bald, white beard, olive tweed jacket).
- Line-up 6: `ronan` boy 6 (straight crew cut, freckles, blue hoodie, denim shorts), `ama` girl 7 (pigtails, dungarees), `noah` teen boy 13 (straight crew cut, glasses, green jacket), `keisha` teen girl 16 (long straight hair, red zigzag knit), `luis` man 25 (side parting, beard, leaf-print shirt open over a tee, big build), `jin` woman 32 (black high ponytail, teal track jacket, leggings), `diego` man 42 (black hair, mustache, red plaid shirt), `adaeze` woman 48 (high bun with a band, patterned dashiki, earrings), `edith` woman 68 (white bob, glasses, orange cardigan, grey skirt), `joseph` man 75 (bald, white beard, grey tweed jacket).
- All line-ups 3-6 use light Asian skin tones (except `nia` and `marcus`, kept as the rare dark-skinned, curly-haired variety).
- The character system behind them (combine freely for new people): `wide` (build: 1 slim, 1.15-1.3 heavier; widens the torso and limbs), `top` (tee, hoodie, track, shirt, cardigan, overalls, denim, sweater, polo, blazer, vest, jacket, dress, kurta, jersey, crop, dashiki) with `open: true` (open over `innerC`), `long: true` (a long open coat), `pat` (stripes, check, flower, dots, zigzag, leaf, tweed, rainbow, kente) + `patC`, `wrap` + `beltC` (wrap dress), `poncho` (+ `ponchoC2`), `hood` (a hood under a jersey), `bottom` (long, shorts, skirt, bare = legs show under a dress), `hair` (also afro, curlylong, locs, pigtails, puffs, hbun, beadbraids, hijab + `scarfC`, none = shaved) with `band` / `noband`, `hat: 'capback'`, `beard: true | 'short'`, `mustache`, `glasses`, `earring`, `freckles`, `cane`. Every option has a front view, a back view and the 3/4 body.
- Their outfits use the same system (`top`: tee, hoodie, track, shirt, cardigan, overalls, denim, sweater, polo, blazer, vest; `innerC` = the top showing inside an open jacket / cardigan / collar, `sleeveC` = shirt sleeves under a vest, `stripeC` = stripes), all with front and back views (`bustTorso`) and the 3/4 body (`figure`).

LOCATIONS (any place, same look)
- Every place is a cached backdrop with a floor or ground line that people, animals and vehicles stand on (`backdrop(kind, gy)`, drawn once, then one drawImage a frame). The reference has: `room`, `school` (classroom: wall, chalkboard, window, clock, wooden floor), `park` (hills, trees, path, bench, lamp post), `field` (open grass with mown stripes), `street` (crowded street: buildings with lit windows, shop awnings, pavement, kerb, road), `night` (busy street at night: lit buildings, shop lights, lamps, far pavement, road, near pavement), `busstop` (street plus shelter and bus-stop sign), `ocean` (sea to the horizon and a sandy beach; add `seaSurface` waves each frame), `underwater` (light rays, sand floor, kelp, rocks), `forest` (three depths of trees, darker and bluer far away), `zoo` (fence, enclosures, rocks, sign).
- A new place is built the same way: a sky or wall gradient, 2-3 depth layers of simple flat shapes (far = paler and bluer, near = stronger), the place's signature objects (a bus stop sign, a chalkboard, a fence), a ground band with a thin contact line, light from one side matching the characters' rim light. Keep text in backdrops to signs only.
- Things that move in the place are cheap per-frame layers over the cached backdrop: waves (`seaSurface`, `waveY`), drifting clouds, swaying kelp, passing crowds and traffic. A crowded street uses `walkPose`: a walk cycle with planted feet (no sliding), arms swinging opposite the legs, people at their real heights and slightly different depths (smaller and higher = further away).
- Sizes are real (see REAL SIZES): one ground-plane scale per shot, so a bus is 11 m long next to a 1.7 m person, a cat is knee-high, buildings are taller than the frame.

SUBJECTS: BODY, ANIMALS, VEHICLES (draw them accurately, move them with physics)
- Organs and cells (`heart`, `lungs`, `brain`, `eyeball`, `intestines`, `cell`): anatomically correct shapes in the flat style. Front views put the PATIENT'S left on the viewer's right. Heart: atria on top, ventricles below, apex down toward the patient's left, aortic arch with three branches, pulmonary trunk in front, venae cavae on the right; beats "lub-dub" at a real rate (60-100 bpm). Lungs: right lung 3 lobes (two fissures), left lung 2 lobes with the cardiac notch, trachea with cartilage rings splitting into two bronchi; they inflate as the person breathes in (12-20 breaths a minute). Brain (side view): cerebrum with folds, lateral fissure, central sulcus, cerebellum at the back, brainstem. Eyeball: white with vessels, iris fibres, pupil that widens in the dark, optic nerve at the back. Intestines: large intestine framing the belly (ascending on the patient's right, transverse, descending, sigmoid, rectum, caecum with appendix), small intestine looped inside, peristalsis waves. Cell: membrane, cytoplasm, nucleus with nucleolus and pores, mitochondria with folds, rough ER, Golgi, vesicles. Label parts with pills and dashed leader arrows when the narration names them. Show organs either alone on a dark panel or inside a character (a cut-away torso), placed where they really sit.
- Animals: mammals (`quad` with presets dog, cat, horse, elephant, lion, giraffe), birds (`bird`: sparrow, parrot, eagle, duck), fish (`fish`: clownfish, tuna, shark), reptiles (`reptile`: lizard, crocodile, turtle, snake). Same face language as the people (white eye with dark pupil), real proportions per species, real size in metres. Four-legged walking: no-slip gait with feet planted, diagonal legs in step, body bobbing; the FRONT knee points forward when it bends, the HIND hock points backward, elephants walk on straight pillar legs; tail and ears swing with the motion. Birds: wings flap with a longer downstroke that lifts the body, folded wing and legs on the ground when perched. Fish: a body wave that travels from head to tail and grows toward the tail (that is what pushes them), the tail fin follows the end of the body. Reptiles: low body on short sprawling legs, the spine swings side to side; snakes follow a travelling wave along the ground. Add a new species by giving its proportions and colours to the matching rig.
- Vehicles: `vehicle` (car, bus, train on rails), `boat` (sailboat, ferry), `submarine`, `airplane`. Wheels roll without slipping (rotation = distance / radius), bodies ride a small suspension bounce, trains run on visible rails; boats float: their rise and tilt come from the wave height under bow and stern; submarines trail bubbles that rise faster as they go (buoyancy) and spin their propeller; planes fly level with a gentle bob, a contrail behind, banking into turns. Vehicles face the way they move; headlights point forward; real lengths in metres.
- Accuracy check for every subject: count the parts (lobes, limbs, fins, wheels), check which side things are on, check the size against a person in the same shot, and fix anything a biology or engineering teacher would correct.

HOME FURNITURE (front and side views, true sizes; reference sheets `SHEETS.furniture`, `SHEETS.furniture2`)
- Use `furniture(x, kind, view, X, gy, pxm, o)` for rooms: kinds chair (`o.slat` = slatted wooden back), table, sofa (`o.seats` 2 or 3), armchair, bed, wardrobe (cabinet), bookshelf; view 'front' or 'side' (`o.f = -1` mirrors); `o.col` upholstery / main colour, `o.wood`, `o.blanket` / `o.blanket2` for beds. Same scale as the people in the shot (stageModel), on the same floor line, with a soft floor shadow, one darker shadow side, far legs a shade darker.
- Each piece must read as itself, from the front and from the side:
  - SOFA: a low, wide seat (seat 0.45 m high, 0.9 m deep, 1.7 m for 2 seats / 2.2 m for 3), a row of plump BACK CUSHIONS (one per seat, rounded, up to 0.86 m), one SEAT CUSHION per seat, ROUNDED ARMS at both ends (0.6 m high), a front rail and short dark FEET. Side view: the tall back at one end, the padded arm covering the seat, two feet. Real bug this rule fixes: a sofa drawn as a plain box with a backrest looked like a bench or a bed.
  - ARMCHAIR: one seat with a ROUNDED TUB BACK (0.88 m), padded arms and tapered angled legs (0.82 x 0.84 m). Side view: the back leans back, the arm block, legs angled outwards.
  - CHAIR: seat at knee height (0.45 m), a tall back (0.9 m), four thin legs and a rung; padded seat and back panel, or a slatted wooden back. Side view: the back post leans back a little.
  - TABLE: a thin top at hip height (0.75 m, 1.6 x 0.8 m) with an apron under it and four legs (the far ones darker and inset).
  - BED: a long low mattress (top 0.55 m) with PILLOWS against a tall HEADBOARD (1.1 m), a blanket over the mattress with the sheet folded back, a footboard and short feet (1.45 x 2.05 m double). Side view: headboard at one end, footboard at the other, the pillow at the head, the blanket running to the foot.
  - WARDROBE / CABINET: a tall box (1.9 x 1.0 x 0.6 m) on a plinth with a top cornice, TWO DOORS with handles above TWO DRAWERS; side view = a plain tall slab, darker.
  - BOOKSHELF: a tall open frame (1.8 x 0.8 x 0.3 m) with five shelves of books in mixed colours and heights, a few leaning; side view = a thin tall slab.
- Other furniture follows the same idea: draw the parts that name it (a desk has drawers and a top at 0.75 m, a TV stand is low and long with a screen on it, a lamp has a shade on a stand), at real size, next to people for scale.

LIGHTS AND DECORATION (front and side views, true sizes; reference sheets `SHEETS.lights`, `SHEETS.lights2`, `SHEETS.decor`)
- Lights: `lightFx(x, kind, view, X, gy, pxm, o)`, kinds desk (desk lamp 0.45 m: weighted base, stem or jointed arm, dome shade pointing down), table (table lamp 0.55 m: base, stem, drum shade, a cone of light under it, a pull chain from the side), floor (floor lamp 1.6 m: round base, pole, drum shade 0.45 m; `o.curve` = arc lamp seen from the side), lantern (oil hurricane lantern 0.32 m: base, glass globe with a flame, wire guards, cap, handle), pendant (bulb on a cord from the ceiling, socket, the bulb 0.11 m), sconce (wall sconce with a shade on a round wall plate, 1.7 m up), wlantern (outdoor wall lantern on a scroll bracket, 1.8 m up), street (street lamp 4 m: plinth, tapered post with rings, a lantern on top, or on a curled bracket from the side). `o.on` (default true) lights it: the bulb, flame or shade's underside glows, a soft warm glow around it (one cached-style radial gradient, never shadowBlur), and only lit lamps glow. A lamp that is part of the story is lit; in a night scene, rooms get their light from the lamps you see.
- Decoration: `decor(x, kind, view, X, gy, pxm, o)`, kinds window (1.2 x 1.4 m glass with a cross frame and sill at 0.9 m, curtains on a rod), frame (picture 0.5 x 0.4 m at 1.5 m), clock (wall clock 0.32 m at 1.9 m, `o.time` turns the hands), mirror (0.5 x 1.0 m oval-ended at 1.6 m), plant (potted plant 0.9 m: tapered pot with a rim, a fan of leaves), vase (flowers 0.6 m: vase, stems, five-petal flowers), tv (TV 1.1 x 0.65 m on a low stand 1.2 x 0.5 m with doors), rug (2.0 x 1.4 m, flat on the floor: a wide near edge, a narrower far edge, border, centre motif, fringes). Wall pieces hang at their real heights above the floor line; from the side they are thin slabs on the wall.
- Each must read as itself: shade + stem + base for lamps, a visible bulb or flame for bare lights, the glow only where light comes from; frames have a mat and a picture, clocks have 12 marks and two hands, plants have a pot and leaves, a TV is a dark glossy screen on a stand, a rug lies flat with a border.
- Dress rooms with a few of these (a lamp, a plant, a picture, a rug) so places feel lived in, but keep them out of the way of the story; blur them with the background when they are not in the script (BACKGROUND BLUR).

TREES AND GRASS (front and side views, true heights, wind sway; reference sheets `SHEETS.trees`, `SHEETS.trees2`, `SHEETS.grasses`)
- Trees: `tree(x, kind, view, X, gy, pxm, o)`, kinds oak (12 m: thick tapering trunk with a root flare, two main branches, a broad leafy crown about 9 m wide), pine (15 m: short trunk, 5-6 tiers of jagged needle layers getting smaller to a point), palm (10 m: thin curved ringed trunk, a crown of long arching fronds with leaflets, coconuts), birch (12 m: slim white trunk with black marks, thin pale branches, a tall oval crown), willow (9 m: short trunk, a rounded crown with long hanging strands), baobab (14 m: huge bottle-shaped trunk, short branches with flat leaf pads on top). Two looks from the references: `o.style: 'soft'` (default: one leafy mass with scalloped edges, light and shade inside) and `'round'` (simple: crowns of circles, pines of straight stacked triangles). Side view = the same tree from the side: a slight lean, open branches, the crown off-centre. `o.h` changes the height, `o.seed` the shape, `o.t` = time for the sway.
- Grass and small plants: `grass(x, kind, view, X, gy, pxm, o)`, kinds broad (0.7 m: a fan of wide blades), spiky (0.6 m: thin sharp blades radiating), clump (0.6 m: a round lumpy bush), reed (1.8 m: tall stems with brown cattail heads and a few base leaves), fern (0.7 m: arching fronds with leaflets on both sides). `grassStrip(x, gy, x0, x1, pxm, o)` scatters small tufts along a ground line cheaply (fields, parks, the edge of a path).
- Real sizes in the same scale as the people (`stageModel`): at 20 px/m a whole tree fits and a person is ~36 px tall; next to a person the tree runs off the top of the frame and grass reaches the ankle or knee. Far trees are smaller and higher on screen, paler and bluer (background), near ones larger, lower and stronger.
- Motion: leaves, fronds, willow strands and grass sway gently in the wind (a slow sine per plant, offset by its position, a few degrees at most; stronger in a storm), never rigid and never jittery. Trees don't move as a whole except in strong wind.
- Real bug this rule fixes: a colour shaded twice (`shade(shade(c))`) is invalid, so the canvas kept the previous colour and pine tiers came out black. Always shade from the base hex colour.

PHYSICS ON THE CHARACTERS (non-negotiable)
- Gravity is real: anything that falls, is thrown or bounces uses g = 9.81 m/s² at a stated pixels-per-metre scale (`PXM`) and the closed-form motion (y = y0 + v0·t + ½·g·t²). If the beat is slowed down, run the physics on real time and say so on screen (a SLOW-MO label and a real-time clock).
- Mass and inertia: heads, hands, bodies and props never snap to a pose. Heads follow their keyed target through a damped spring (`headRig`: stiffness, damping), so they lag, overshoot slightly and settle; an impact or a release is an impulse (`kick`: a damped spring kick) that pushes the hand or head and lets it settle.
- Secondary motion: hair (ponytails, pigtails, buns' strands), hood strings and other hanging parts are pendulums driven by the head's real acceleration (θ'' = −(g/L)·sin θ − (a_x/L)·cos θ − damping·θ'), simulated on a fixed 240 Hz grid from t = 0 and memoised (`makeSim`), so a frame still depends only on t.
- Contact: nothing passes through anything. A caught object stops in the closed hand with friction over a short distance, a hand that catches is pushed by the object's momentum, a ruler stops inside the fingers, feet and elbows rest on what they rest on. Fix the geometry when a contact point would be wrong (check the stopping point against the hand's position).
- Breathing and life: the body rises and falls slowly (a tiny crouch the knees take up), characters blink every few seconds, mouths move while they talk.
- Jumps and steps are ballistic: take-off speed from the jump height (v0 = √(2gh)), flight at g, an anticipation crouch before and a knee-bend landing after.
- The numbers shown must match the physics drawn (the reference reads the catch distance off the same ½·g·t² that moves the ruler). Keep the facts in a `FACT` table with a short note of where they come from.

HOW TO STAY IN THE STYLE
- Reuse the reference's drawing techniques, palette, rim light, lettering, labels, number treatment, transitions and timing feel. Change the story, the text, the cast and the things being drawn; do not change the medium.
- Draw every subject accurately for my topic. Don't carry over the reference's props (the ruler, the clamp stands) unless they genuinely fit, but DO reuse the cast, and double-check that the science and facts shown are right.
- The finishing pass is what makes it read as the real medium: dust floating in the light, the cached vignette and the fine animated film grain. Copy `finish()` from the reference and run it on every frame at the same strength.
- Every frame is a pure function of t: create all randomness from H.rng(seed) / H.makeNoise(seed) inside the draw (never Math.random), so the same t always gives the same frame. Caching static pictures across frames is fine and encouraged.
- Keep it light to render (the reference runs at about 5 ms a frame on a plain CPU): never use ctx.filter or shadowBlur, no full-screen offscreen layers per frame, cache every static background and texture once, draw characters as a handful of simple strokes and paths, and keep particles under ~50.
- It is video, often watched on a phone: at 1280x720 keep headlines >= 44px, every label or caption the story depends on >= 28px (including small annotations and the corner header), key numbers >= 64px.
- In the reference, `explainer()` is the explainer (it explains "How fast are you?" with a ruler-drop reaction test, all whole-body), `draw()` is the single hero frame of the style, and `explainerSound(k)` is its sound design. Study them, but do not reuse that topic unless my content asks for it.

TEXT ON SCREEN: NO OVERLAPS, BUBBLES CONNECTED, TITLE TOP LEFT (non-negotiable)
- Every piece of text is drawn through `title`, `pill`, `thoughtBubble`, `speechBubble` or registered with `qcBox(id, x0, y0, x1, y1, group)`, so make-mp4.cjs sees its box. Two visible text boxes may never overlap (pieces of one element share a `group`), no text may leave the 12 px safe area, and no text may cover a character's face. Before placing a label, check the space it needs against everything else visible at that moment (other labels, the header, faces, the timer) and move it, shrink it to the size limits, or fade the old one out first. Real bug this rule fixes: labels and the title were drawn on top of each other.
- Thought bubbles are connected: a trail of 3 dots that GROWS from the thinker's head toward the bubble, the first dot touching the head's edge, each dot a little bigger and closer together, and the last dot overlapping the bubble's edge (`thoughtBubble(x, y, text, size, from)` computes the trail from the head point to the bubble edge with `edgePt`). Speech bubbles have one tail whose tip reaches the speaker's mouth. Real bug this rule fixes: the bubble floated with its dots ending far away from it.
- TITLE (LOCKED, the same in every video; use `titleIntro` / `titleFly` / `headerPill` from the code exactly as they are, never your own title code, never change `TITLE_LOCK`):
  - Text: "<number>. <title>" when the video is a numbered item, e.g. "1. Finding Reasons to Be Physically Close to You" (`titleText(1, '...')`): the number, a period, a space, the title. No "#", no ":", no other prefix. Without a number, just the title. The full title, never shortened.
  - Font: always Baloo 2 (weight 800 for the intro, 700 for the header), loaded before the first frame (`await document.fonts.load('800 64px "Baloo 2"')` and `'700 28px "Baloo 2"'`, as in the reference page's `window.ready`); never a fallback font, never a different font per video.
  - Intro: when the title is first said it appears big (`titleIntro`: the number big in amber above, the title wrapped onto as many lines as it needs inside `maxW`, words popping in one by one, chosen key words in amber, normal spaces between words). Its POSITION may change from video to video (`at`), but it is never cut off and never runs off the screen.
  - Header: once it has been said, it flies (~0.5 s) into the TOP-LEFT corner (`titleFly`) and stays there, on every frame, until the very end: `headerPill` = pill left edge x 24, centre y 44, Baloo 2 700 28 px, amber dot. Exactly that place and size in every video you make.
- Text never pops in on top of a moving character's face; it waits for the character to move or is placed beside them.

NO GLITCHES OR TELEPORTING (non-negotiable)
- A character never changes position instantly. Between beats in the same shot, everyone walks, steps, turns or slides on a spring to the new place; every move is continuous from frame to frame. Positions change instantly only at a real cut or slide-push listed in `TL.cuts` (a new shot), or when the topic itself needs it (teleportation, a magic trick, a time skip), and then it is shown on purpose (a flash, a poof).
- make-mp4.cjs flags any character whose pelvis moves more than 45 px between two frames outside `TL.cuts`: fix every flagged jump.
- Also never: a limb, prop or hair piece flicking for one frame, a pose that snaps, a face that changes on one frame and back.

REAL SIZES (non-negotiable): everything at its true size for where it stands
- Every shot has ONE scale: P = px per metre for the people standing on the ground line gy (`stageModel(gy, P)`: horizon at gy - 1.6·P, the camera 1000/P m from the people). Anything standing d metres from the camera sits on ground row y(d) and is drawn at s(d) px per metre; at(y) gives the scale for a row. Things closer to the camera are lower and bigger, things further away are higher and smaller, and nothing is shrunk or enlarged just to fit.
- Real sizes to use (metres): people from `CAST` (`hM`: 1.25-1.80); car 4.3 long x 1.45 high; bus 11 x 3.1; train carriage 16 x 3.8; bicycle 1.8; storey 3.1, door 2.1, shop awning at 2.8-3.3, street lamp 6, bus-stop sign 2.8, shelter 2.4 x 4, building 10-28 tall and 8-16 wide; road lane 3.5, kerb 0.15; bench seat 0.45 high, 1.8 long; tree 6-15; table 0.75; chair seat 0.45, back 0.9; sofa seat 0.45, back 0.86, 1.7-2.2 wide; armchair 0.88; bed 1.45 x 2.05, mattress top 0.55, headboard 1.1; wardrobe 1.9 x 1.0; bookshelf 1.8 x 0.8; desk lamp 0.45; table lamp 0.55; floor lamp 1.6; oil lantern 0.32; pendant bulb 0.11; wall sconce at 1.7; street lamp 4 (park) - 6 (road); picture 0.5 x 0.4 at 1.5; wall clock 0.32 at 1.9; mirror 0.5 x 1.0; window 1.2 x 1.4, sill 0.9; potted plant 0.9; TV 1.1 x 0.65 on a 0.5 stand; rug 2.0 x 1.4; oak 12 (crown 9 wide); pine 15; palm 10; birch 12; willow 9; baobab 14; broad grass 0.7; spiky grass 0.6; bush 0.6; reed 1.8; fern 0.7; door handle 1.0; dog 0.6 at the shoulder, cat 0.3, horse 1.6, elephant 3.2, giraffe 5.5, lion 1.2; crocodile 4 long, turtle 0.3; shark 4, tuna 2, clownfish 0.11; submarine 30-70; airliner 40-70 long.
- Streets (`backdrop('street'|'busstop'|'night', gy, { pxm: P })`, `streetLane(gy, P, 'near'|'far')`) are laid out in metres from the people: near pavement where they stand, kerb at +1.6 m, a 7 m two-lane road, far kerb, 3 m far pavement with 6 m lamps every 25 m, building fronts at +11.6 m. Cars and buses drive in their lanes at that lane's scale, so with people at 210 px/m a car behind them is ~540 px long and the bus in the far lane ~950 px (bigger than half the frame), and the buildings run off the top of the frame. Real bug this rule fixes: cars and buses on the city street were drawn at 26 px/m next to people at 210 px/m, so they looked like toys.
- Deep scenes keep the same rule: a fish near the camera can look as big as a shark far away, but its real size at its depth must be right (a clownfish is 11 cm: tiny next to a 4 m shark at the same depth). Show depth with height on screen, haze or blur, not by changing real sizes.
- Check it: at a key frame, measure a person, a vehicle and a door or window in the same shot and compare with the list above.

CONVERSATION SHOTS: FRONT PORTRAIT + OVER-THE-SHOULDER BACK VIEW (when people talk to each other)
- When two characters talk to each other, shoot it like film dialogue: the SPEAKER in a front-view portrait (head and shoulders, `frontBust`: face straight to the camera, symmetrical eyes, eyes looking just past the camera toward the listener), and the LISTENER in the foreground seen from behind (`backBust`), big, close to the camera, cut by the frame edge and the bottom, turned toward the speaker so a sliver of cheek, jaw and ear shows on that side. `otsShot(x, t, { bg, speaker, listener, side, st, lb })` composes it: the speaker's head at about a third of the frame on the open side, the listener's back on the other side.
- Don't stay in the front view for the whole conversation: MIX it with the SIDE view, the whole-body 3/4 two-shot (both people on the floor facing each other, the speaker gesturing with an open hand, the listener nodding; built with `person`, like the rest of the video). A good pattern: open on the side two-shot, move to the front over-the-shoulder shot of the speaker, the reverse shot when the other answers, and back to the side two-shot for the reaction or the punchline.
- When the other one answers, go to the reverse shot: swap speaker and listener and mirror the side (the listener's back on the other side of the frame), so each speaker is seen from the front and keeps facing the other (the 180° rule: the two never swap screen sides within a scene, also between the side shot and the front shots). Every change between these shots is a moving transition (push, fade, wipe, whip), listed in `TL.cuts`; it lands on a pause or the first word of the answer.
- Only the speaker's mouth moves (talking mouth on their words); the listener reacts with small nods and breathing. The speaker's expression follows what they say (happy, focus, worry, shock), on the word that causes it.
- The foreground listener is soft (lightly blurred) and darker than the speaker; the background behind the speaker is blurred (BACKGROUND BLUR). Text (a speech bubble, a label) goes on the speaker's open side, never over a face; a speech bubble's tail reaches the speaker's mouth.
- Front view: both ears on short hair, hair cap with a centred face opening, braids hanging in front of the shoulders, long hair falling behind the shoulders with a lock in front on each side, beards symmetrical round the jaw, clothes from the front (crew neck, hood ring and strings, zip, shirt collar and buttons, cardigan over a white top). Back view: hair covers the back of the head down to the nape (short hair) or the back (long hair), braids with a centre parting, the bun on top, the bald head with a white fringe band, the hood lying on the back, a collar band, a back seam. Angled back view: the hair shape shifted away from the turned side, so the cheek, ear and (for a beard) the beard show at the jaw on that side.
- Light to render: each bust is drawn ONCE into cached pictures (front: back hair, body, head; back view: one picture with the soft focus and darkening baked in), so a frame is a few drawImage calls plus the live face (eyes, brows, mouth, blinks), about 1-4 ms. Don't redraw hair or clothes per frame for these shots.
- The reference code's `talk()` is a 12.1 s demo of this: the side two-shot (Kai talks, Leo listens), PUSH to the front over-the-shoulder shot of Kai, CROSS-FADE to the reverse shot (Leo answers, surprised), WHIP PAN back to the side two-shot (both happy, a speech bubble from Kai's mouth). Its explainer() uses wipe, fade, push and zoom-through between scenes.

BACKGROUND BLUR (depth of field, only on what doesn't matter)
- Decide per shot what is IN the script: the people talking or acting, and every object, animal, vehicle or place the narration names or the action uses. Those stay sharp. Everything else in the background is drawn out of focus, so the eye goes to the subject. Example: two friends talk on a busy street at night: the buildings, shop lights, street lamps and the cars passing behind them are blurred; the friends and the pavement under their feet are sharp. If the narration is about the cars (or the buildings), those are sharp and only the rest is blurred.
- Static background: `backdrop(kind, gy, { blur: px, keep: y })` makes a blurred copy of the cached backdrop ONCE (`blurImg`: halve the picture step by step, then scale it back up; no ctx.filter), with the ground from `keep` (default: the ground line) kept sharp and a short fade between, so feet, shadows and props on the floor stay crisp. Set `keep` higher (e.g. the road's top) when the road and its traffic are the subject. blur 8-14 px for a background, 0 when the background is the subject.
- Moving background things (passing traffic, a far crowd, birds, waves far away): draw them inside `soft(x, px, g => { ... })`, which draws into a small buffer and scales it up over the frame (about 1 ms a frame). Same amount of blur as the backdrop behind them.
- Never blur: characters in the shot, text, labels, numbers, the title header, anything the narration is pointing at. Blur doesn't move or pop: an element that becomes the subject later is sharp from that shot on (change it at a cut, or cross-fade the sharp version in over ~0.3 s).
- The reference library has `backdrop('night', gy, ...)` (busy street at night: lit buildings, lamps, far pavement, road, near pavement) and two example pages: `SHEETS.focus` (background and traffic out of focus, the people sharp) and `SHEETS.focus2` (the cars are the subject: road and traffic sharp, buildings soft).

CAMERA: ALWAYS ZOOMING IN AND OUT (immersion)
- The camera is never static. Every beat has a slow zoom (`ZOOM` / `camZoom`): alternate gentle zoom-ins and zoom-outs of 3-7 % over the beat, eased, about the subject of the beat (the speaker's face, the hands, the object); add a quick punch-in (6-10 %, a spring that settles in ~0.4 s) on key moments (a catch, a reveal, a big number) and ease back out after.
- Zoom never crops a body's head or feet off the frame for long and never pushes text out of the safe area; the title header and the finishing pass (dust, vignette, grain) are drawn outside the zoom so they stay still.
- Cuts and slide-pushes reset the zoom smoothly (the new shot starts at its own zoom), so there is no jump in scale except at a cut.

TIMING FROM THE VOICEOVER
- First turn my voiceover timing into a BEATS table: one entry per idea, with its start and end time, the words spoken, the shot type (body 3/4, front shot, over-the-shoulder, two-shot, focus on the subject; who is in it), the zoom (from -> to, aimed at what), each character's pose (`POSES`) and expression, and what is on screen (see SHOT RULES at the top). Every animation reads its times from BEATS (and from word times when you need an exact reveal), never from numbers scattered through the code, so a new take only means editing the table.
- A visual lands on the word it illustrates: a number appears as it is spoken, a label as its name is said, an action (a drop, a catch, a nod) on its verb. It can lead the word by up to 0.2 s, but never lag it.
- Within a beat, keep building that one idea while the voice explains it, then hold the finished state until the sentence ends instead of rushing ahead. Use pauses in the speech for changes of shot.
- On-screen text follows SHOT RULES rule 7: only the title, numbers / percentages and phrases I give you come from the script; everything else is your own short relatable phrase or expression tied to the topic and the pose. Never print the sentence being spoken, and no subtitles (captions get added in editing).
- Start the hook as the first line is spoken, and end 2 seconds after the last text / last word, holding the takeaway (see OUTPUT).

FLOW BETWEEN BEATS
- Decide beat by beat what the story needs. A new beat does not automatically mean a new shot.
- When the next idea builds on the last, keep it continuous: stay on the same characters and let their pose, expression, gesture and a card beside them change; push in a little (never cropping a body); let a number move into the next layout.
- When the story moves on, change shot with a MOVING TRANSITION, never a plain hard cut: a slide-push / swipe (the new shot pushes the old one off sideways), a cross-fade, a soft diagonal wipe, a whip pan (both shots rush sideways with motion streaks) or a zoom-through (the old shot scales up and fades into the new one) (`trans(x, t, t0, t1, kind, A, B, dir)`, kinds 'push' | 'fade' | 'wipe' | 'whip' | 'zoom'). 0.35-0.6 s, eased, timed to a pause or a verb; vary the kinds through the video (the reference uses wipe, fade, push, zoom), and give each a soft whoosh (quieter for a fade). Each transition is listed in `TL.cuts` as [start, end] so make-mp4.cjs ignores the jump.
- Transitions must be clean (no glitch): on the transition's first frame the picture is EXACTLY the outgoing shot (push offset 0, fade alpha 0, wipe edge still off screen, zoom at 1), the incoming shot appears only gradually, and on the last frame it is exactly the incoming shot as it continues. Never show the next scene or its characters for a split second before or at the start of the transition, and never let the outgoing shot change size or jump: each shot keeps its OWN zoom, and the outgoing one holds the zoom it ended on through the transition. Real bugs this rule fixes: a diagonal wipe clipped the wrong side, so the next scene filled the screen on the first frame; the camera's next zoom beat started at the same moment as a push, so the outgoing scene jumped in size for one frame.
- make-mp4.cjs checks this: it flags a transition whose first frame differs from the frame before it, a picture that changes all at once outside a listed transition, and a one-frame flash (a frame unlike both of its neighbours).
- Avoid a cut on every beat, but never keep everything in one shot: follow SHOT RULES (zoom every beat, front shots, a new pose every beat, a focus shot for every subject explained).

SOUND (voiceover mode: the narration stays on top, the effects keep the piece feeling alive underneath)
- Score the events that land (a release click, a catch slap, pops on labels, marker strokes as a formula writes on, a ding on the key number, a whoosh on a slide-push, the takeaway) and the small life of the scene (ticks while a clock runs).
- Mark the small, frequent sounds { minor: true } (ticks, taps, small pops, strokes), or schedule custom ones inside k.withMinor(() => ...). In voiceover mode the kit plays those at about 60% volume, drops ambience beds and music, and sets everything a little lower, so call SOUND.kit / SOUND.live with { voiceover: true }.
- Keep the big hits (the key reveal, the wrong/right moment, the takeaway) full volume, and where you can, put them in pauses or on stressed words rather than on top of a sentence.
- Sync: a sound starts on the exact frame its event appears, using the same BEATS times as the picture (physics events too: the catch sound is on the catch frame the physics computes).
- Medium-true sounds: real-world foley from the kit (click, slap, thud, whoosh, swish, room bed), soft plucks for labels; no chiptune.
- Sounds of the place and subjects, built from the kit's `k.tone` / `k.noise` when no named sound fits: a park = birdsong (quick high sine sweeps, minor), a street = traffic hum (low brown noise) and footsteps on the walk cycle's foot plants, the ocean = surf (slow pink-noise swells timed with the waves), underwater = muffled low noise and bubble blips, engines = a low sawtooth hum that rises with speed, a heartbeat = two low thuds on the lub-dub, breathing = soft filtered noise in and out. Time them to the motion (a footstep sound on each planted foot, a thud when a wheel hits a bump).

RENDERING (two routes, give me the MP4 by one of them every time: (1) you run make-mp4.cjs and attach the MP4 file; (2) if you can't run it, the page's Export MP4 button makes it, and you tell me: open the page, add the MP3, click Export MP4): run `node make-mp4.cjs explainer.html [my-audio.mp3] explainer.mp4` (the script is below, after the SOUND KIT; needs Node 18+, Playwright and ffmpeg). It renders every frame, adds the effects (`SOUND.renderOffline(window.scoreSound, total, 48000, { voiceover })`), mixes in my audio with the effects ducked under it, makes the video max(DURATION, audio + 2 s) long, and lists every text overlap, off-screen text, covered face and character jump. Fix them all and render again; deliver the MP4.

STYLE CARD
Name: Golden-Hour Flat Figures
Family: Popular Explainer Looks
Look: Flat 2D whole-body characters at their true sizes (one perspective scale per shot), with over-the-shoulder front-portrait / back-view shots for dialogue, (two casts of ten built like my attached line-ups: boy and girl 8, teen boy and girl 15, young man and woman, a man and a woman of 45, an elderly woman and an elderly man; both line-ups with light Asian skin tones, black hair and straight hair for every male) with simple flat faces, hair in a different style for each person (black for the young, white for the elderly, long hair for the girls, a white beard for the old man; no gaps between hair pieces; paired braids follow the 3/4 view; hats only when the story needs one), in any place (park, bus station, school, room, crowded street, grass field, ocean, underwater, forest, zoo) with accurate organs, cells, animals and vehicles drawn in the same flat language and full chunky saturated clothes, standing on the wooden floor of a soft golden-hour room with baked bokeh and light shafts; a warm rim of window light on one side; two-block hands (one finger block + one slim thumb, thumb placed anatomically, wrapping across held props); big rounded Baloo 2 numbers with a dark edge and warm halo, dark glass label pills, floating dust, vignette and fine film grain.
Motion: Always a slow zoom in or out with punch-ins on key moments; the title flies to a top-left header; thought bubbles with growing dot trails; expressions that follow the words; no teleporting. Background out of focus unless the script is about it. Physics-led on one skeleton: things fall and people jump at g, heads, hands and bodies move on damped springs with overshoot, hair swings as pendulums driven by the head, feet stay planted while the knees bend (IK), hands reach their targets by IK; gentle push-ins, slow motion with a real-time clock, slide-push transitions.
How it explains: Through whole bodies acting it out: a young woman waves and asks, two people do a slow-motion ruler drop (the ruler stops in the catcher's closed hand) while a real-time clock runs (caught after 0.25 s, 31 cm down), she points at a glass card (d = ½gt² → t = 0.25 s), seven testers from age 8 to 76 catch rulers released by clamp stands at their own reaction times, and she jumps for the answer.

H HELPER LIBRARY (lib/harness.js; the registerStyle/H.render parts are only needed by the original gallery)
```js
// Shared helpers + style registry for the style-frame explorations.
// Every style is a pure function of time: draw(ctx, W, H, t). Same t => same pixels.
(function () {
  const STYLES = (window.STYLES = window.STYLES || []);
  window.registerStyle = (s) => STYLES.push(s);

  const H = (window.H = {});

  // ---------- seeded randomness ----------
  // H.rng(seed) -> r() in [0,1). Extras: r.range(a,b), r.int(a,b), r.pick(arr), r.gauss(), r.chance(p)
  H.rng = function (seed = 1) {
    let a = typeof seed === 'string' ? hashStr(seed) : (seed >>> 0) || 1;
    const r = function () {
      a |= 0; a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    r.range = (lo, hi) => lo + r() * (hi - lo);
    r.int = (lo, hi) => Math.floor(lo + r() * (hi - lo + 1));
    r.pick = (arr) => arr[Math.floor(r() * arr.length)];
    r.chance = (p) => r() < p;
    r.gauss = () => { let u = 0, v = 0; while (!u) u = r(); while (!v) v = r(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };
    return r;
  };
  function hashStr(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }

  // ---------- gradient noise ----------
  // H.makeNoise(seed) -> { n2(x,y), n3(x,y,z), fbm2(x,y,oct), fbm3(x,y,z,oct) }  (outputs roughly -1..1)
  H.makeNoise = function (seed = 1) {
    const r = H.rng(seed), p = new Uint8Array(512), perm = [...Array(256).keys()];
    for (let i = 255; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [perm[i], perm[j]] = [perm[j], perm[i]]; }
    for (let i = 0; i < 512; i++) p[i] = perm[i & 255];
    const fade = (t) => t * t * t * (t * (t * 6 - 15) + 10);
    const lerp = (a, b, t) => a + (b - a) * t;
    const g3 = (h, x, y, z) => { h &= 15; const u = h < 8 ? x : y, v = h < 4 ? y : h === 12 || h === 14 ? x : z; return ((h & 1) ? -u : u) + ((h & 2) ? -v : v); };
    function n3(x, y, z) {
      const X = Math.floor(x) & 255, Y = Math.floor(y) & 255, Z = Math.floor(z) & 255;
      x -= Math.floor(x); y -= Math.floor(y); z -= Math.floor(z);
      const u = fade(x), v = fade(y), w = fade(z);
      const A = p[X] + Y, AA = p[A] + Z, AB = p[A + 1] + Z, B = p[X + 1] + Y, BA = p[B] + Z, BB = p[B + 1] + Z;
      return lerp(lerp(lerp(g3(p[AA], x, y, z), g3(p[BA], x - 1, y, z), u), lerp(g3(p[AB], x, y - 1, z), g3(p[BB], x - 1, y - 1, z), u), v),
        lerp(lerp(g3(p[AA + 1], x, y, z - 1), g3(p[BA + 1], x - 1, y, z - 1), u), lerp(g3(p[AB + 1], x, y - 1, z - 1), g3(p[BB + 1], x - 1, y - 1, z - 1), u), v), w);
    }
    const n2 = (x, y) => n3(x, y, 0.5);
    const fbm3 = (x, y, z, oct = 4) => { let s = 0, a = 0.5, f = 1, norm = 0; for (let i = 0; i < oct; i++) { s += a * n3(x * f, y * f, z * f); norm += a; a *= 0.5; f *= 2; } return s / norm; };
    const fbm2 = (x, y, oct = 4) => fbm3(x, y, 0.5, oct);
    return { n2, n3, fbm2, fbm3 };
  };

  // ---------- math ----------
  H.lerp = (a, b, t) => a + (b - a) * t;
  H.clamp = (v, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, v));
  H.map = (v, a, b, c, d) => c + ((v - a) / (b - a)) * (d - c);
  H.smooth = (e0, e1, x) => { const t = H.clamp((x - e0) / (e1 - e0)); return t * t * (3 - 2 * t); };
  H.ease = {
    inOut: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
    out: (t) => 1 - Math.pow(1 - t, 3),
    in: (t) => t * t * t,
    back: (t) => { const c = 1.70158; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); },
  };

  // ---------- color ----------
  H.hex = (h) => { h = h.replace('#', ''); if (h.length === 3) h = h.split('').map((c) => c + c).join(''); const n = parseInt(h, 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
  H.rgba = (hexOrArr, a = 1) => { const [r, g, b] = Array.isArray(hexOrArr) ? hexOrArr : H.hex(hexOrArr); return `rgba(${r | 0},${g | 0},${b | 0},${a})`; };
  H.mix = (c1, c2, t) => { const a = Array.isArray(c1) ? c1 : H.hex(c1), b = Array.isArray(c2) ? c2 : H.hex(c2); return [0, 1, 2].map((i) => a[i] + (b[i] - a[i]) * t); };

  // ---------- canvas utilities ----------
  // Offscreen canvas of the same logical size (use for layers, masks, compositing).
  H.layer = (W, H_, ) => { const c = document.createElement('canvas'); c.width = W; c.height = H_; return c; };
  // Monochrome grain / film noise over the whole canvas. amount ~ 0.03-0.15
  H.grain = function (ctx, W, Hh, amount = 0.08, seed = 7, mono = true) {
    const img = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height), d = img.data, r = H.rng(seed), k = amount * 255;
    for (let i = 0; i < d.length; i += 4) {
      const n = (r() - 0.5) * k;
      if (mono) { d[i] += n; d[i + 1] += n; d[i + 2] += n; }
      else { d[i] += (r() - 0.5) * k; d[i + 1] += (r() - 0.5) * k; d[i + 2] += (r() - 0.5) * k; }
    }
    ctx.putImageData(img, 0, 0);
  };
  // Paper-ish texture tile: fills with base color + fibrous noise (cheap; drawn into ctx).
  H.paper = function (ctx, W, Hh, base = '#f3ecdc', seed = 3, strength = 0.06) {
    ctx.save(); ctx.fillStyle = base; ctx.fillRect(0, 0, W, Hh);
    const nz = H.makeNoise(seed), cell = 4, [br, bg, bb] = H.hex(base);
    for (let y = 0; y < Hh; y += cell) for (let x = 0; x < W; x += cell) {
      const v = nz.fbm2(x * 0.01, y * 0.01, 3) * 0.6 + nz.n2(x * 0.15, y * 0.04) * 0.4;
      const s = 1 + v * strength * 2;
      ctx.fillStyle = `rgb(${br * s | 0},${bg * s | 0},${bb * s | 0})`; ctx.fillRect(x, y, cell, cell);
    }
    ctx.restore();
  };
  // Vignette
  H.vignette = function (ctx, W, Hh, strength = 0.5, color = '0,0,0') {
    const g = ctx.createRadialGradient(W / 2, Hh / 2, Math.min(W, Hh) * 0.3, W / 2, Hh / 2, Math.hypot(W, Hh) * 0.6);
    g.addColorStop(0, `rgba(${color},0)`); g.addColorStop(1, `rgba(${color},${strength})`);
    ctx.save(); ctx.fillStyle = g; ctx.fillRect(0, 0, W, Hh); ctx.restore();
  };

  // ---------- rendering entry ----------
  // Renders style into canvas at logical 1280x720 (canvas can be any pixel size; it is scaled).
  H.W = 1280; H.H = 720;
  H.loadFonts = async function (style) {
    const specs = style.fonts || [];
    try { const sample = 'AaZz09' + (window.FONT_SAMPLE || '');
      await Promise.all(specs.map((f) => document.fonts.load(f, sample))); await document.fonts.ready; } catch (e) { /* render anyway */ }
  };
  H.render = function (style, canvas, t) {
    const ctx = canvas.getContext('2d', { willReadFrequently: !!style.readsPixels });
    const sx = canvas.width / H.W, sy = canvas.height / H.H;
    ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over'; ctx.filter = 'none';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save(); ctx.scale(sx, sy);
    style.draw(ctx, H.W, H.H, t == null ? style.frameT || 0 : t);
    ctx.restore();
  };
})();
```

SOUND KIT (lib/sound.js)
```js
// sound.js: a small synthesized sound kit for the style explainers. Plain Web Audio, no audio files.
// Voiceover mode: SOUND.kit(ctx, { voiceover: true }) drops beds and music, plays anything marked minor
// (play(..., { minor: true }), tone/noise { minor: true }, or scheduled inside k.withMinor(() => ...)) at about 60%
// volume instead of full, and sits all effects a little lower, so the narration stays on top while the piece still
// sounds alive. In the full mix, minor sounds play at full volume. Scores can read k.vo to branch further.
// A style adds   explainerSound(k) { k.bed('room', 0, D); k.play('pop', 1.25); ... }   and the same
// call schedules into a live AudioContext (the player) or an OfflineAudioContext (the video render).
// Times are seconds on the explainer's own clock. Randomness is seeded, so every render is identical.
(function () {
  'use strict';
  const SOUND = (window.SOUND = {});
  const TINY = 1e-4;

  // seeded random in [0,1), keyed by any string
  function rand(key) {
    let h = 2166136261;
    for (let i = 0; i < key.length; i++) { h ^= key.charCodeAt(i); h = Math.imul(h, 16777619); }
    let a = h >>> 0 || 1;
    return () => { a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }

  // note names to Hz: 'A4' = 440, 'C#5', 'Eb3'
  const STEP = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
  function hz(n) {
    if (typeof n === 'number') return n;
    const m = /^([A-G])([#b]?)(-?\d)$/.exec(n);
    const semis = STEP[m[1]] + (m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0) + (Number(m[3]) - 4) * 12 - 9;
    return 440 * Math.pow(2, semis / 12);
  }
  SOUND.hz = hz;

  SOUND.kit = function (ctx, opts) {
    const o = opts || {};
    const VO = !!o.voiceover;
    const MINOR = 0.6; // voiceover-mode volume for minor sounds
    let inMinor = false;
    const gainOf = (p, d) => (p.gain == null ? d : p.gain) * (VO && (p.minor || inMinor) ? MINOR : 1);
    const T0 = (o.start || 0) - 0; // explainer time that maps to ctx time `base`
    const base = ctx.currentTime + (o.delay || 0);
    // Start times snap to the sample grid (+ a quarter sample): in Chrome a source started a hair off the grid can
    // spike to about twice its set level.
    const SR = ctx.sampleRate;
    const at = (t) => (Math.round((base + (t - T0)) * SR) + 0.25) / SR;

    // ---- buses: sfx, amb, music -> compressor -> master; one shared reverb send
    const master = ctx.createGain(); master.gain.value = o.master == null ? 0.9 : o.master;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -16; comp.knee.value = 8; comp.ratio.value = 3; comp.attack.value = 0.004; comp.release.value = 0.18;
    comp.connect(master); master.connect(o.dest || ctx.destination);
    const bus = {};
    for (const [name, g] of Object.entries({ sfx: VO ? 0.7 : 0.85, amb: 0.5, music: 0.45 })) { bus[name] = ctx.createGain(); bus[name].gain.value = g; bus[name].connect(comp); }

    // generated room reverb: decaying stereo noise, darker toward the tail
    const verb = ctx.createConvolver();
    {
      const secs = 1.6, n = Math.floor(secs * ctx.sampleRate), ir = ctx.createBuffer(2, n, ctx.sampleRate);
      for (let c = 0; c < 2; c++) {
        const r = rand('verb' + c), d = ir.getChannelData(c); let lp = 0;
        for (let i = 0; i < n; i++) { const u = i / n; lp += (0.6 - 0.45 * u) * ((r() * 2 - 1) - lp); d[i] = lp * Math.pow(1 - u, 3); }
      }
      verb.buffer = ir;
    }
    const verbIn = ctx.createGain(); verbIn.gain.value = 0.9; verbIn.connect(verb); verb.connect(comp);

    // seeded noise buffers: white, pink-ish and brown
    const noiseBuf = {};
    {
      const n = Math.floor(2.5 * ctx.sampleRate);
      for (const kind of ['white', 'pink', 'brown']) {
        const b = ctx.createBuffer(1, n, ctx.sampleRate), d = b.getChannelData(0), r = rand('noise-' + kind);
        let p0 = 0, p1 = 0, p2 = 0, br = 0;
        for (let i = 0; i < n; i++) {
          const w = r() * 2 - 1;
          if (kind === 'white') d[i] = w;
          else if (kind === 'pink') { p0 = 0.997 * p0 + 0.029 * w; p1 = 0.985 * p1 + 0.032 * w; p2 = 0.95 * p2 + 0.048 * w; d[i] = (p0 + p1 + p2 + w * 0.05) * 2.2; }
          else { br = (br + 0.02 * w) / 1.02; d[i] = br * 3.2; }
        }
        noiseBuf[kind] = b;
      }
    }

    // ---- automation helpers
    // a value or [[dt, value], ...] from the voice start; ramps are exponential (frequencies)
    function sweep(param, v, t) {
      if (!Array.isArray(v)) { param.setValueAtTime(v, t); return; }
      param.setValueAtTime(v[0][1], t + v[0][0]);
      for (let i = 1; i < v.length; i++) param.exponentialRampToValueAtTime(Math.max(v[i][1], 1), t + v[i][0]);
    }
    // amplitude: linear attack to `gain`, optional hold, exponential release to silence by `dur`
    function shape(param, t, gain, dur, a, hold) {
      a = Math.min(a == null ? 0.004 : a, dur * 0.9);
      hold = Math.min(hold || 0, dur - a);
      param.setValueAtTime(0, t);
      param.linearRampToValueAtTime(gain, t + a);
      if (hold > 0) param.setValueAtTime(gain, t + a + hold);
      param.exponentialRampToValueAtTime(TINY, t + dur);
      param.setValueAtTime(0, t + dur + 0.001);
    }
    function out(node, p) {
      const pan = ctx.createStereoPanner(); pan.pan.value = Math.max(-1, Math.min(1, p.pan || 0));
      node.connect(pan); pan.connect(bus[p.bus || 'sfx']);
      if (p.verb) { const s = ctx.createGain(); s.gain.value = p.verb; pan.connect(s); s.connect(verbIn); }
    }
    function filterNode(p, t) {
      if (!p.filter) return null;
      const f = ctx.createBiquadFilter(); f.type = p.filter; f.Q.value = p.q == null ? 1 : p.q;
      sweep(f.frequency, p.f == null ? 1000 : p.f, t);
      return f;
    }

    // ---- primitives
    // tone(t, { f, type, dur, gain, a, hold, pan, verb, bus, filter, f2 (filter freq), q, detune })
    function tone(time, p) {
      const t = at(time), dur = p.dur || 0.2;
      if (t + dur < ctx.currentTime || (time < T0 - 0.001 && dur < 1.5)) return;
      const osc = ctx.createOscillator(); osc.type = p.type || 'sine';
      sweep(osc.frequency, Array.isArray(p.f) ? p.f.map(([d, v]) => [d, hz(v)]) : hz(p.f || 440), t);
      if (p.detune) osc.detune.value = p.detune;
      const g = ctx.createGain(); shape(g.gain, t, gainOf(p, 0.3), dur, p.a, p.hold);
      let node = osc;
      if (p.filter) { const f = ctx.createBiquadFilter(); f.type = p.filter; f.Q.value = p.q == null ? 0.8 : p.q; sweep(f.frequency, p.f2 || 2000, t); osc.connect(f); node = f; }
      node.connect(g); out(g, p);
      osc.start(t); osc.stop(t + dur + 0.02);
    }
    // noise(t, { dur, color, filter, f, q, gain, a, hold, pan, verb, bus, rate })
    function noise(time, p) {
      const t = at(time), dur = p.dur || 0.2;
      if (t + dur < ctx.currentTime || (time < T0 - 0.001 && dur < 1.5)) return;
      const src = ctx.createBufferSource(); src.buffer = noiseBuf[p.color || 'white']; src.loop = true;
      if (p.rate) src.playbackRate.value = p.rate;
      const g = ctx.createGain(); shape(g.gain, t, gainOf(p, 0.3), dur, p.a, p.hold);
      const f = filterNode(p, t);
      if (f) { src.connect(f); f.connect(g); } else src.connect(g);
      out(g, p);
      const off = rand('off' + time + (p.f || ''))() * 2;
      src.start(t, off); src.stop(t + dur + 0.02);
    }

    // ---- named sounds. play(name, t, opts): opts.gain scales the whole sound, opts.pan places it.
    const S = {
      // UI / motion graphics
      pop: (t, o) => { tone(t, { f: [[0, o.f || 620], [0.07, (o.f || 620) * 0.45]], dur: 0.1, gain: 0.32 * o.g, pan: o.pan }); noise(t, { dur: 0.012, filter: 'highpass', f: 3000, gain: 0.12 * o.g, pan: o.pan }); },
      tick: (t, o) => noise(t, { dur: 0.018, filter: 'bandpass', f: o.f || 4200, q: 2.5, gain: 0.3 * o.g, pan: o.pan }),
      click: (t, o) => { tone(t, { f: o.f || 1900, type: 'square', dur: 0.02, gain: 0.08 * o.g, filter: 'lowpass', f2: 3000, pan: o.pan }); noise(t, { dur: 0.01, filter: 'highpass', f: 2500, gain: 0.15 * o.g, pan: o.pan }); },
      tock: (t, o) => { tone(t, { f: o.f || 820, dur: 0.07, gain: 0.25 * o.g, pan: o.pan }); noise(t, { dur: 0.05, filter: 'bandpass', f: o.f || 820, q: 9, gain: 0.35 * o.g, pan: o.pan }); },
      blip: (t, o) => tone(t, { f: o.f || 'E6', type: o.type || 'square', dur: o.dur || 0.07, gain: 0.07 * o.g, a: 0.002, hold: (o.dur || 0.07) * 0.6, pan: o.pan }),
      whoosh: (t, o) => { const d = o.dur || 0.45; noise(t, { dur: d, color: 'pink', filter: 'bandpass', f: [[0, 350], [d * 0.55, o.top || 2600], [d, 700]], q: 0.9, gain: 0.32 * o.g, a: d * 0.5, pan: o.pan, verb: 0.15 }); },
      swish: (t, o) => { const d = o.dur || 0.18; noise(t, { dur: d, filter: 'highpass', f: [[0, 1800], [d, 5200]], q: 0.7, gain: 0.22 * o.g, a: d * 0.35, pan: o.pan }); },
      riser: (t, o) => { const d = o.dur || 0.8; noise(t, { dur: d, color: 'pink', filter: 'bandpass', f: [[0, 300], [d, 4000]], q: 1.2, gain: 0.25 * o.g, a: d * 0.95, pan: o.pan, verb: 0.2 }); tone(t, { f: [[0, 180], [d, 720]], type: 'triangle', dur: d, gain: 0.06 * o.g, a: d * 0.9 }); },
      thud: (t, o) => { tone(t, { f: [[0, o.f || 130], [0.16, 42]], dur: 0.26, gain: 0.55 * o.g, pan: o.pan }); noise(t, { dur: 0.09, color: 'brown', filter: 'lowpass', f: 500, gain: 0.35 * o.g, pan: o.pan }); },
      impact: (t, o) => { S.thud(t, o); noise(t, { dur: 0.7, color: 'pink', filter: 'lowpass', f: [[0, 2400], [0.6, 300]], gain: 0.3 * o.g, verb: 0.35, pan: o.pan }); },
      stamp: (t, o) => { S.thud(t, { ...o, f: 160 }); noise(t, { dur: 0.05, filter: 'bandpass', f: 1300, q: 1.2, gain: 0.4 * o.g, pan: o.pan }); noise(t + 0.004, { dur: 0.012, filter: 'highpass', f: 3500, gain: 0.25 * o.g, pan: o.pan }); },
      ding: (t, o) => { const f = hz(o.f || 'E6'); tone(t, { f, dur: 1.3, gain: 0.2 * o.g, verb: 0.3, pan: o.pan }); tone(t, { f: f * 2.76, dur: 0.5, gain: 0.05 * o.g, verb: 0.3, pan: o.pan }); },
      success: (t, o) => { S.ding(t, { ...o, f: o.f || 'C6' }); S.ding(t + 0.09, { ...o, f: hz(o.f || 'C6') * 1.5, g: o.g * 0.9 }); },
      error: (t, o) => { tone(t, { f: o.f || 'A3', type: 'square', dur: 0.13, gain: 0.09 * o.g, hold: 0.08, filter: 'lowpass', f2: 1400, pan: o.pan }); tone(t + 0.15, { f: hz(o.f || 'A3') * 0.8, type: 'square', dur: 0.22, gain: 0.09 * o.g, hold: 0.14, filter: 'lowpass', f2: 1200, pan: o.pan }); },
      buzz: (t, o) => { const d = o.dur || 0.3; tone(t, { f: o.f || 110, type: 'sawtooth', dur: d, gain: 0.12 * o.g, hold: d * 0.7, filter: 'lowpass', f2: 900, pan: o.pan }); tone(t, { f: (o.f || 110) * 1.01, type: 'sawtooth', dur: d, gain: 0.1 * o.g, hold: d * 0.7, filter: 'lowpass', f2: 900, pan: o.pan }); },
      sparkle: (t, o) => { const r = rand('sparkle' + t), notes = ['C6', 'D6', 'E6', 'G6', 'A6', 'C7']; for (let i = 0; i < (o.n || 6); i++) { const ti = t + i * 0.04 + r() * 0.01, f = hz(notes[Math.floor(r() * notes.length)]), pan = r() * 1.2 - 0.6; tone(ti, { f, dur: 0.6, gain: 0.04 * o.g, a: 0.002, verb: 0.35, pan }); tone(ti, { f: f * 2.76, dur: 0.2, gain: 0.012 * o.g, a: 0.002, pan }); } },
      glitch: (t, o) => { const r = rand('glitch' + t); for (let i = 0; i < 7; i++) tone(t + i * 0.022, { f: 200 + r() * 1800, type: 'square', dur: 0.02, gain: 0.07 * o.g, a: 0.001, hold: 0.015, pan: r() * 1.4 - 0.7 }); noise(t, { dur: 0.16, filter: 'bandpass', f: 2500, q: 0.6, gain: 0.12 * o.g }); },
      shutter: (t, o) => { S.click(t, o); noise(t + 0.06, { dur: 0.04, filter: 'bandpass', f: 2200, q: 1, gain: 0.2 * o.g, pan: o.pan }); },
      count: (t, o) => S.tick(t, { ...o, f: o.f || 5200, g: o.g * 0.7 }),

      // hand-made media
      // stroke: a pen/marker/chalk/pencil stroke over `dur` seconds. material sets the surface sound.
      stroke: (t, o) => {
        const d = o.dur || 0.4, m = o.material || 'marker', r = rand('stroke' + m + t);
        const M = {
          marker: { f: 2900, q: 2.2, g: 0.16, grain: 0.05 },
          chalk: { f: 1700, q: 0.6, g: 0.22, grain: 0.028 },
          pencil: { f: 4600, q: 0.8, g: 0.16, grain: 0.04, filter: 'highpass' },
          pen: { f: 4200, q: 1.6, g: 0.08, grain: 0.06 },
          brush: { f: 900, q: 0.5, g: 0.1, grain: 0.09, color: 'pink' },
          sharpie: { f: 2400, q: 1.4, g: 0.2, grain: 0.045 },
        }[m];
        for (let x = 0; x < d; x += M.grain * (0.7 + r() * 0.6)) {
          const gd = M.grain * (0.8 + r() * 0.9);
          noise(t + x, { dur: gd, color: M.color, filter: M.filter || 'bandpass', f: M.f * (0.8 + r() * 0.4), q: M.q, gain: M.g * o.g * (0.6 + r() * 0.5), a: gd * 0.3, pan: (o.pan || 0) + (r() - 0.5) * 0.2 });
        }
      },
      // paper: picking up / slapping down / turning a sheet
      paper: (t, o) => { const d = o.dur || 0.35, r = rand('paper' + t); for (let x = 0; x < d; x += 0.025 + r() * 0.03) noise(t + x, { dur: 0.05, filter: 'bandpass', f: 1200 + r() * 2600, q: 0.9, gain: 0.12 * o.g * (1 - x / d * 0.5), pan: o.pan }); },
      slap: (t, o) => { noise(t, { dur: 0.07, filter: 'highpass', f: 900, gain: 0.45 * o.g, a: 0.001, pan: o.pan }); tone(t, { f: [[0, 180], [0.06, 70]], dur: 0.1, gain: 0.25 * o.g, pan: o.pan }); },
      tape: (t, o) => { noise(t, { dur: o.dur || 0.5, filter: 'bandpass', f: [[0, 900], [o.dur || 0.5, 2200]], q: 1.8, gain: 0.18 * o.g, a: 0.02, pan: o.pan }); },
      press: (t, o) => { S.thud(t, { ...o, f: 95, g: o.g * 0.9 }); noise(t + 0.01, { dur: 0.25, color: 'brown', filter: 'lowpass', f: 700, gain: 0.25 * o.g, pan: o.pan }); },
      roller: (t, o) => { const d = o.dur || 0.6; noise(t, { dur: d, color: 'brown', filter: 'bandpass', f: 380, q: 1.5, gain: 0.3 * o.g, a: 0.05, hold: d * 0.6, pan: o.pan }); for (let x = 0; x < d; x += 0.07) S.tock(t + x, { f: 300, g: o.g * 0.15, pan: o.pan }); },
      erase: (t, o) => { const d = o.dur || 0.6, r = rand('erase' + t); for (let x = 0; x < d; x += 0.06 + r() * 0.04) noise(t + x, { dur: 0.08, color: 'pink', filter: 'bandpass', f: 700 + r() * 500, q: 0.8, gain: 0.22 * o.g, a: 0.03, pan: (r() - 0.5) * 0.5 }); },

      // machines and screens
      key: (t, o) => { const r = rand('key' + t); noise(t, { dur: 0.025, filter: 'bandpass', f: 2600 + r() * 1200, q: 2, gain: 0.25 * o.g, a: 0.001, pan: o.pan }); tone(t, { f: 160 + r() * 40, dur: 0.04, gain: 0.12 * o.g, pan: o.pan }); },
      typing: (t, o) => { const r = rand('typing' + t), n = o.n || 8, rate = o.rate || 0.09; for (let i = 0; i < n; i++) S.key(t + i * rate * (0.75 + r() * 0.5), { g: o.g * (0.7 + r() * 0.4), pan: o.pan }); },
      typebar: (t, o) => { S.key(t, o); noise(t + 0.008, { dur: 0.03, filter: 'bandpass', f: 1100, q: 4, gain: 0.35 * o.g, pan: o.pan }); },
      bell: (t, o) => S.ding(t, { ...o, f: o.f || 'A6' }),
      boot: (t, o) => { tone(t, { f: [[0, 80], [0.35, 1600]], type: 'sine', dur: 0.5, gain: 0.08 * o.g, a: 0.3 }); S.blip(t + 0.45, { ...o, f: 'C6', dur: 0.12 }); },
      crtOn: (t, o) => { noise(t, { dur: 0.25, filter: 'highpass', f: 2000, gain: 0.2 * o.g, a: 0.001 }); tone(t, { f: 15700, dur: 1.5, gain: 0.02 * o.g, a: 0.1, hold: 1 }); S.thud(t, { ...o, f: 90, g: o.g * 0.5 }); },
      neon: (t, o) => { const d = o.dur || 0.25, r = rand('neon' + t); for (let x = 0; x < d; x += 0.035 + r() * 0.04) tone(t + x, { f: 120, type: 'sawtooth', dur: 0.03, gain: 0.3 * o.g * (0.5 + r() * 0.5), filter: 'bandpass', f2: 1200, q: 1.2, pan: o.pan }); },
      // chip (8-bit console) sounds: raw square/triangle, no filtering
      coin: (t, o) => { tone(t, { f: 'B5', type: 'square', dur: 0.07, gain: 0.07 * o.g, a: 0.001, hold: 0.06 }); tone(t + 0.07, { f: 'E6', type: 'square', dur: 0.3, gain: 0.07 * o.g, a: 0.001, hold: 0.1 }); },
      jump: (t, o) => tone(t, { f: [[0, 260], [0.16, 820]], type: 'square', dur: 0.18, gain: 0.07 * o.g, a: 0.001, hold: 0.12 }),
      hurt: (t, o) => { tone(t, { f: [[0, 600], [0.25, 90]], type: 'square', dur: 0.28, gain: 0.08 * o.g, a: 0.001, hold: 0.2 }); noise(t, { dur: 0.2, filter: 'lowpass', f: 1800, gain: 0.15 * o.g, rate: 0.25 }); },
      powerup: (t, o) => ['C5', 'E5', 'G5', 'C6', 'E6', 'G6', 'C7'].forEach((n, i) => tone(t + i * 0.045, { f: n, type: 'square', dur: 0.06, gain: 0.06 * o.g, a: 0.001, hold: 0.05 })),
      select: (t, o) => { S.blip(t, { ...o, f: 'A5', dur: 0.04 }); S.blip(t + 0.05, { ...o, f: 'E6', dur: 0.05 }); },
      text: (t, o) => { const n = o.n || 10, rate = o.rate || 0.05; for (let i = 0; i < n; i++) tone(t + i * rate, { f: i % 2 ? 'C6' : 'G5', type: 'square', dur: 0.025, gain: 0.04 * o.g, a: 0.001, hold: 0.015 }); },
    };

    function play(name, t, opts) {
      const fn = S[name];
      if (!fn) throw new Error('unknown sound: ' + name);
      const o2 = Object.assign({}, opts); o2.g = o2.gain == null ? 1 : o2.gain;
      if (opts && opts.minor) withMinor(() => fn(t, o2)); else fn(t, o2);
    }

    // everything scheduled inside fn counts as minor (quieter in voiceover mode)
    function withMinor(fn) { const was = inMinor; inMinor = true; try { fn(); } finally { inMinor = was; } }

    // ---- beds: continuous sound under a stretch of time. bed(name, t0, t1, opts)
    function bed(name, t0, t1, p) {
      if (VO) return;
      p = p || {}; const g = p.gain == null ? 1 : p.gain, d = t1 - t0, fade = Math.min(0.4, d / 4);
      const long = (q) => Object.assign({ dur: d, a: fade, hold: d - fade * 2, bus: 'amb' }, q);
      if (name === 'room') noise(t0, long({ color: 'brown', filter: 'lowpass', f: 320, gain: 0.12 * g }));
      else if (name === 'hiss') noise(t0, long({ color: 'pink', filter: 'highpass', f: 5000, gain: 0.02 * g }));
      else if (name === 'hum') { tone(t0, long({ f: 60, gain: 0.05 * g })); tone(t0, long({ f: 120, gain: 0.025 * g })); tone(t0, long({ f: 180, type: 'triangle', gain: 0.012 * g })); }
      else if (name === 'rain') { noise(t0, long({ color: 'pink', filter: 'bandpass', f: 2500, q: 0.4, gain: 0.08 * g })); const r = rand('rain'); for (let x = 0; x < d; x += 0.04 + r() * 0.08) noise(t0 + x, { dur: 0.01, filter: 'highpass', f: 4000, gain: 0.04 * g * r(), bus: 'amb', pan: r() * 1.6 - 0.8 }); }
      else if (name === 'projector') { noise(t0, long({ color: 'pink', filter: 'highpass', f: 3000, gain: 0.03 * g })); for (let x = 0; x < d; x += 1 / 24) S.tock(t0 + x, { f: 700, g: 0.04 * g, pan: 0.3 }); }
      else if (name === 'vinyl') { noise(t0, long({ color: 'pink', filter: 'bandpass', f: 1500, q: 0.5, gain: 0.025 * g })); const r = rand('vinyl'); for (let x = 0; x < d; x += 0.08 + r() * 0.4) noise(t0 + x, { dur: 0.006, filter: 'highpass', f: 2500, gain: 0.08 * g * r(), bus: 'amb' }); }
      else throw new Error('unknown bed: ' + name);
    }

    // ---- music: optional light beds that sit under the effects. music(name, t0, t1, { bpm, chords, gain })
    // chords: list of note arrays, one per bar, cycled. e.g. [['C4','E4','G4','B4'], ['A3','C4','E4','G4']]
    function music(name, t0, t1, p) {
      if (VO) return;
      p = p || {}; const g = p.gain == null ? 1 : p.gain, bpm = p.bpm || 100, beat = 60 / bpm, bar = beat * 4;
      const chords = p.chords || [['C4', 'E4', 'G4', 'B4'], ['A3', 'C4', 'E4', 'G4'], ['F3', 'A3', 'C4', 'E4'], ['G3', 'B3', 'D4', 'F4']];
      let i = 0;
      for (let t = t0; t < t1 - 0.05; t += bar, i++) {
        const ch = chords[i % chords.length], len = Math.min(bar, t1 - t);
        if (name === 'pad' || name === 'pulse') ch.forEach((n, k) => { tone(t, { f: n, type: 'triangle', dur: len + 0.3, gain: 0.035 * g, a: 0.25, hold: len - 0.3, bus: 'music', filter: 'lowpass', f2: 1400, pan: (k - 1.5) * 0.25, verb: 0.25 }); tone(t, { f: hz(n) * 1.004, type: 'sine', dur: len + 0.3, gain: 0.03 * g, a: 0.3, hold: len - 0.3, bus: 'music' }); });
        if (name === 'pulse') for (let b = 0; b < 4 && t + b * beat < t1 - 0.05; b++) {
          const tb = t + b * beat;
          tone(tb, { f: [[0, 110], [0.1, 50]], dur: 0.18, gain: (b % 2 ? 0.16 : 0.26) * g, bus: 'music' });
          noise(tb + beat / 2, { dur: 0.04, filter: 'highpass', f: 7000, gain: 0.05 * g, bus: 'music' });
          tone(tb + beat / 2, { f: hz(ch[0]) / 2, type: 'triangle', dur: beat * 0.45, gain: 0.08 * g, bus: 'music' });
        }
        if (name === 'chip') for (let s = 0; s < 8 && t + s * beat / 2 < t1 - 0.05; s++) {
          const ts = t + s * beat / 2;
          tone(ts, { f: hz(ch[0]) / 2, type: 'triangle', dur: beat * 0.45, gain: 0.12 * g, a: 0.001, hold: beat * 0.35, bus: 'music' });
          tone(ts, { f: ch[[0, 1, 2, 3, 2, 1, 2, 3][s]], type: 'square', dur: beat * 0.4, gain: 0.03 * g, a: 0.001, hold: beat * 0.25, bus: 'music' });
        }
      }
    }

    return { play, bed, music, tone, noise, withMinor, hz, vo: VO, sounds: Object.keys(S) };
  };

  // Live playback for a player: SOUND.live(scoreFn, fromT, { voiceover, master }) starts the score from explainer time
  // fromT right now and returns stop(). Call stop() on pause or seek, and SOUND.live again on play.
  SOUND.live = function (fn, fromT, opts) {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    fn(SOUND.kit(ctx, Object.assign({}, opts, { start: fromT || 0, delay: 0.03 })));
    return () => { try { ctx.close(); } catch (e) {} };
  };

  // Render a style's explainerSound into an OfflineAudioContext; returns interleaved float stereo.
  SOUND.renderOffline = async function (fn, duration, sampleRate, kitOpts) {
    const sr = sampleRate || 48000, len = Math.ceil(duration * sr);
    const ctx = new OfflineAudioContext(2, len, sr);
    fn(SOUND.kit(ctx, kitOpts || {}));
    const buf = await ctx.startRendering();
    const L = buf.getChannelData(0), R = buf.getChannelData(1), inter = new Float32Array(len * 2);
    let peak = 0;
    for (let i = 0; i < len; i++) { inter[2 * i] = L[i]; inter[2 * i + 1] = R[i]; peak = Math.max(peak, Math.abs(L[i]), Math.abs(R[i])); }
    return { inter, peak, frames: len, sr };
  };
})();
```

MP4 RENDERER (make-mp4.cjs; save next to the HTML and run it, see OUTPUT)
```js
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
```

MP4 EXPORT BUTTON (lib/export-mp4.js; include it in the page, unchanged, and wire the button, see OUTPUT)
```js
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
```

REFERENCE STYLE SOURCE (styles/figures.js; W/H_ are always 1280x720)
```js
{
  // ---------- Golden-Hour Flat Figures: whole-body 2D character explainer with real physics ----------
  // Full-body flat-vector people (kid, teen, young adult, adult; brown skin tones, black hair, a different hairstyle each), built on ONE skeleton so every limb, hand and foot is
  // attached at its joint; every hand is a finger block + a slim thumb (two rounded rectangles), thumb placed anatomically; gravity,
  // springs and pendulums for all motion. Light to render: no ctx.filter / shadowBlur, cached backgrounds and grain.
  const TAU = Math.PI * 2;
  const cl = H.clamp, lerp = H.lerp;
  const seg = (t, a, b) => cl((t - a) / (b - a));
  const eo = H.ease.out, eio = H.ease.inOut;
  const back = (u, s = 1.5) => { if (u <= 0) return 0; if (u >= 1) return 1; return 1 + (s + 1) * Math.pow(u - 1, 3) + s * Math.pow(u - 1, 2); };
  const FONT = '"Baloo 2", "Nunito", sans-serif';
  const F = (w, px) => `${w} ${px}px ${FONT}`;

  const C = {
    ink: '#16111d', white: '#f6f1e7', rim: '#ffbe6a', rimCool: '#9fe4ff',
    amber: '#ffc857', coral: '#ff6b4a', mint: '#5fe3a1', violet: '#a07bff', cyan: '#5cd6ff', red: '#ff4d5e',
    warm: ['#2a1f4a', '#6a3a78', '#c75f7e', '#f49a72', '#ffd49a'],
  };

  // ================= PHYSICS =================
  const G = 9.81;                 // m/s^2
  const HEAD_M = 0.11;            // one head radius is ~11 cm: converts head-radius units to metres for gravity
  // closed-form damped spring kick: an impulse at t0 gives A*e^(-z w dt)*sin(wd dt) (pure function of t)
  function kick(t, t0, A, f = 3, z = 0.25) { const dt = t - t0; if (dt <= 0) return 0; const w = TAU * f; return A * Math.exp(-z * w * dt) * Math.sin(w * Math.sqrt(1 - z * z) * dt); }
  // fixed-step simulator, memoised on a 240 Hz grid from t = 0, so a frame depends only on t (seek-safe)
  function makeSim(init, step, hz = 240) {
    const dt = 1 / hz, S = [init()];
    return (t) => {
      const n = Math.max(0, Math.floor(t * hz));
      while (S.length <= n) { const k = S.length - 1, s = { ...S[k] }; step(s, k * dt, dt); S.push(s); }
      return S[n];
    };
  }
  // a head that follows its keyed target through a spring (inertia), carrying a hair pendulum driven by the head's
  // acceleration: theta'' = -(g/L) sin(theta) - (a_x/L) cos(theta) + (a_y/L) sin(theta) - c theta'
  function headRig(target, o = {}) {
    const L = (o.len || 1.4) * HEAD_M, k = o.k || 160, c = o.c || 15, hc = o.hc || 2.6;
    return makeSim(() => ({ x: target(0)[0], y: target(0)[1], vx: 0, vy: 0, th: 0, w: 0, th2: 0, w2: 0 }), (s, t, dt) => {
      const [tx, ty] = target(t);
      const ax = k * (tx - s.x) - c * s.vx, ay = k * (ty - s.y) - c * s.vy; // head-radius units / s^2
      s.vx += ax * dt; s.vy += ay * dt; s.x += s.vx * dt; s.y += s.vy * dt;
      const axm = ax * HEAD_M, aym = ay * HEAD_M;
      const al = (-(G / L) * Math.sin(s.th) - (axm / L) * Math.cos(s.th) - (aym / L) * Math.sin(s.th)) - hc * s.w;
      s.w += al * dt; s.th += s.w * dt;
      const L2 = L * 0.55, al2 = (-(G / L2) * Math.sin(s.th2) - (axm / L2) * Math.cos(s.th2) - (aym / L2) * Math.sin(s.th2)) - hc * 1.4 * s.w2;
      s.w2 += al2 * dt; s.th2 += s.w2 * dt;
    });
  }

  // ---------- small helpers ----------
  function rr(x, X, Y, w, h, r) {
    r = Math.max(0, Math.min(r, w / 2, h / 2));
    x.beginPath(); x.moveTo(X + r, Y); x.arcTo(X + w, Y, X + w, Y + h, r); x.arcTo(X + w, Y + h, X, Y + h, r);
    x.arcTo(X, Y + h, X, Y, r); x.arcTo(X, Y, X + w, Y, r); x.closePath();
  }
  function glow(x, cx, cy, r, col, a) {
    if (a <= 0 || r <= 0) return;
    const g = x.createRadialGradient(cx, cy, 0, cx, cy, r);
    g.addColorStop(0, H.rgba(col, a)); g.addColorStop(0.35, H.rgba(col, a * 0.4)); g.addColorStop(1, H.rgba(col, 0));
    x.fillStyle = g; x.beginPath(); x.arc(cx, cy, r, 0, TAU); x.fill();
  }
  const shade = (c, k) => H.rgba(H.mix(c, k > 0 ? '#ffffff' : '#120c1c', Math.abs(k)));
  // display type: dark rounded edge + soft offset glow (two passes, no shadowBlur)
  // ---------- quality checks recorded while drawing (read by the renderer, which reports problems) ----------
  // TEXT: every title/pill/bubble registers its on-screen box each frame; overlaps or boxes outside the safe area are
  // reported. MOVES: every character registers its pelvis position; a jump between two frames that isn't at a cut is
  // reported (no teleporting). Expressions are chosen per beat in the BEATS table (see `EXPR`).
  const QC = (window.QC = { text: [], people: [] });
  function qcBox(x, id, cx, cy, w, h, a, g) {
    if (a < 0.35) return; const m = x.getTransform(), k = 1 / (window.devicePixelRatio > 1 ? 1 : 1);
    const pts = [[cx - w / 2, cy - h / 2], [cx + w / 2, cy - h / 2], [cx - w / 2, cy + h / 2], [cx + w / 2, cy + h / 2]].map(([px, py]) => [m.a * px + m.c * py + m.e, m.b * px + m.d * py + m.f]);
    const sx = x.canvas.width / 1280; QC.text.push({ id, x0: Math.min(...pts.map((p) => p[0])) / sx, y0: Math.min(...pts.map((p) => p[1])) / sx, x1: Math.max(...pts.map((p) => p[0])) / sx, y1: Math.max(...pts.map((p) => p[1])) / sx, g });
  }
  function title(x, s, cx, cy, px, col, o = {}) {
    x.save(); x.font = F(o.w || 800, px); x.textAlign = o.align || 'center'; x.textBaseline = 'middle';
    { const tw = x.measureText(s).width, ox = (o.align || 'center') === 'center' ? 0 : (o.align === 'right' ? -tw / 2 : tw / 2); qcBox(x, s, cx + ox, cy, tw + px * 0.2, px * 1.0, (o.a == null ? 1 : o.a) * x.globalAlpha, o.group); }
    x.globalAlpha *= o.a == null ? 1 : o.a; x.lineJoin = 'round';
    x.strokeStyle = H.rgba(o.glow || '#ffb45e', 0.25); x.lineWidth = px * 0.34; x.strokeText(s, cx, cy);
    x.strokeStyle = o.edge || 'rgba(60,28,40,0.9)'; x.lineWidth = px * 0.12; x.strokeText(s, cx, cy);
    x.fillStyle = col; x.fillText(s, cx, cy);
    x.restore();
  }
  function pill(x, cx, cy, s, px, o = {}) {
    const sc = o.s == null ? 1 : o.s, a = o.a == null ? 1 : o.a;
    if (sc <= 0.01 || a <= 0.01) return;
    x.save(); x.font = F(o.w || 700, px);
    const dot = o.dot ? px * 0.9 : 0, w = x.measureText(s).width + px * 1.2 + dot, h = px * 1.55;
    x.translate(cx, cy); x.scale(sc, sc); x.globalAlpha *= a;
    if (sc > 0.7) qcBox(x, s, 0, 0, w, h, x.globalAlpha, o.group);
    x.fillStyle = o.bg || 'rgba(22,16,38,0.72)'; rr(x, -w / 2, -h / 2, w, h, h / 2); x.fill();
    if (o.ptr) { x.beginPath(); x.moveTo(-px * 0.35, h / 2); x.lineTo(0, h / 2 + px * 0.45); x.lineTo(px * 0.35, h / 2); x.fill(); }
    if (dot) { x.fillStyle = o.dot; x.beginPath(); x.arc(-w / 2 + px * 0.75, 0, px * 0.22, 0, TAU); x.fill(); }
    x.fillStyle = o.fg || C.white; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(s, dot / 2, px * 0.05);
    x.restore();
  }
  // THOUGHT BUBBLE: a trail of dots from the thinker's head that grows toward the bubble; the last dot overlaps the
  // bubble's edge, so the chain is visibly connected. SPEECH BUBBLE: its tail starts on the bubble edge and ends at the
  // speaker's mouth. prog 0..1 builds it (dots one by one, then the bubble pops).
  function bubbleBox(x, s, px) { x.font = F(800, px); const w = x.measureText(s).width + px * 1.6, h = px * 1.9; return { w, h }; }
  function edgePt(cx, cy, w, h, tx, ty) { const dx = tx - cx, dy = ty - cy, k = 1 / Math.max(Math.abs(dx) / (w / 2), Math.abs(dy) / (h / 2)); return [cx + dx * k, cy + dy * k]; }
  function thoughtBubble(x, from, cx, cy, s, px, prog) {
    if (prog <= 0) return; const { w, h } = bubbleBox(x, s, px), E = edgePt(cx, cy, w * 0.92, h * 0.85, from[0], from[1]);
    const d = [E[0] - from[0], E[1] - from[1]], L = Math.hypot(d[0], d[1]) || 1, u = [d[0] / L, d[1] / L], rs = [0.1, 0.16, 0.24].map((k) => k * h);
    // dots placed from the bubble edge backward: last dot overlaps the edge, the others sit one gap apart toward the head
    const c3 = [E[0] - u[0] * rs[2] * 0.35, E[1] - u[1] * rs[2] * 0.35], c1 = [from[0] + u[0] * rs[0], from[1] + u[1] * rs[0]], c2 = mixP(c1, c3, 0.5); // evenly from the head to the bubble
    [c1, c2, c3].forEach((c, i) => { const sc = back(seg(prog, i * 0.18, i * 0.18 + 0.2), 2); if (sc <= 0) return; x.fillStyle = 'rgba(30,16,40,0.25)'; x.beginPath(); x.arc(c[0] + 2, c[1] + 3, rs[i] * sc, 0, TAU); x.fill(); x.fillStyle = '#f6f1e7'; x.beginPath(); x.arc(c[0], c[1], rs[i] * sc, 0, TAU); x.fill(); });
    const bs = back(seg(prog, 0.5, 0.8), 1.6); if (bs <= 0) return;
    x.save(); x.translate(cx, cy); x.scale(bs, bs);
    x.fillStyle = 'rgba(30,16,40,0.25)'; rr(x, -w / 2 + 3, -h / 2 + 4, w, h, h / 2); x.fill();
    x.fillStyle = '#f6f1e7'; rr(x, -w / 2, -h / 2, w, h, h / 2); x.fill(); for (let i = 0; i < 6; i++) { const a = (i / 6) * TAU; x.beginPath(); x.arc(Math.cos(a) * w * 0.38, Math.sin(a) * h * 0.42, h * 0.32, 0, TAU); x.fill(); } // cloud bumps
    if (bs > 0.7) qcBox(x, s, 0, 0, w, h, 1);
    x.fillStyle = '#2a1d2e'; x.font = F(800, px); x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(s, 0, px * 0.05);
    x.restore();
  }
  function speechBubble(x, mouth, cx, cy, s, px, prog) {
    const bs = back(cl(prog), 1.6); if (bs <= 0) return; const { w, h } = bubbleBox(x, s, px), E = edgePt(cx, cy, w * 0.8, h, mouth[0], mouth[1]);
    const d = [mouth[0] - E[0], mouth[1] - E[1]], L = Math.hypot(d[0], d[1]) || 1, n = [-d[1] / L, d[0] / L], tip = [mouth[0] - d[0] / L * 6, mouth[1] - d[1] / L * 6], bw = Math.min(h * 0.3, w * 0.15);
    x.fillStyle = '#f6f1e7'; x.beginPath(); x.moveTo(lerp(cx, E[0] + n[0] * bw, bs), lerp(cy, E[1] + n[1] * bw, bs)); x.lineTo(lerp(cx, tip[0], bs), lerp(cy, tip[1], bs)); x.lineTo(lerp(cx, E[0] - n[0] * bw, bs), lerp(cy, E[1] - n[1] * bw, bs)); x.closePath(); x.fill();
    x.save(); x.translate(cx, cy); x.scale(bs, bs); rr(x, -w / 2, -h / 2, w, h, h / 2); x.fill(); if (bs > 0.7) qcBox(x, s, 0, 0, w, h, 1);
    x.fillStyle = '#2a1d2e'; x.font = F(800, px); x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(s, 0, px * 0.05); x.restore();
  }
  const bez = (P, u) => { const v = 1 - u; return [v * v * v * P[0][0] + 3 * v * v * u * P[1][0] + 3 * v * u * u * P[2][0] + u * u * u * P[3][0], v * v * v * P[0][1] + 3 * v * v * u * P[1][1] + 3 * v * u * u * P[2][1] + u * u * u * P[3][1]]; };
  function arrow(x, P, prog, col, lw) {
    if (prog <= 0) return;
    x.save(); x.strokeStyle = col; x.fillStyle = col; x.lineWidth = lw; x.lineCap = 'round'; x.setLineDash([lw * 1.6, lw * 1.5]);
    x.beginPath(); for (let i = 0; i <= 32; i++) { const p = bez(P, (prog * i) / 32); i ? x.lineTo(p[0], p[1]) : x.moveTo(p[0], p[1]); } x.stroke(); x.setLineDash([]);
    if (prog > 0.1) { const e = bez(P, prog), e0 = bez(P, prog - 0.03), a = Math.atan2(e[1] - e0[1], e[0] - e0[0]), hs = lw * 1.8; x.translate(e[0], e[1]); x.rotate(a); x.beginPath(); x.moveTo(hs, 0); x.lineTo(-hs * 0.8, hs); x.lineTo(-hs * 0.8, -hs); x.fill(); }
    x.restore();
  }

  // ---------- cached backgrounds (drawn once, then one drawImage per frame) ----------
  const CACHE = {};
  function cached(key, w, h, fn) { if (!CACHE[key]) { const c = H.layer(w, h); fn(c.getContext('2d'), w, h); CACHE[key] = c; } return CACHE[key]; }
  // ---------- background blur (depth of field) without ctx.filter ----------
  // blurImg: a soft copy of a picture made by halving it step by step and scaling it back up (smooth, works in every
  // browser, done ONCE when a backdrop is cached). px ~ blur radius in pixels.
  function blurImg(src, px) {
    const w = src.width, h = src.height, n = Math.max(1, Math.round(Math.log2(Math.max(2, px)))); let cur = src, cw = w, ch = h; const steps = [];
    for (let i = 0; i < n; i++) { cw = Math.max(2, Math.round(cw / 2)); ch = Math.max(2, Math.round(ch / 2)); const c = H.layer(cw, ch), g = c.getContext('2d'); g.imageSmoothingEnabled = true; g.imageSmoothingQuality = 'high'; g.drawImage(cur, 0, 0, cw, ch); steps.push(c); cur = c; }
    for (let i = n - 2; i >= -1; i--) { const tw = i < 0 ? w : steps[i].width, th = i < 0 ? h : steps[i].height, c = H.layer(tw, th), g = c.getContext('2d'); g.imageSmoothingEnabled = true; g.imageSmoothingQuality = 'high'; g.drawImage(cur, 0, 0, tw, th); cur = c; }
    return cur;
  }
  // soft(x, px, draw): draw MOVING background things (passing cars, a far crowd, birds) out of focus every frame,
  // cheaply: draw() runs into a half-size buffer (same 1280x720 coordinates), which is shrunk again and scaled back up
  // over the frame. Cost ~1 ms. Use it only for things the script does not talk about.
  const SOFTB = {};
  function soft(x, px, draw) {
    const k = Math.max(2, Math.min(16, px)), w1 = 640, h1 = 360, w2 = Math.round(1280 / k), h2 = Math.round(720 / k);
    const A = SOFTB.a || (SOFTB.a = H.layer(w1, h1)), B = SOFTB['b' + k] || (SOFTB['b' + k] = H.layer(w2, h2)), ga = A.getContext('2d'), gb = B.getContext('2d');
    ga.setTransform(1, 0, 0, 1, 0, 0); ga.clearRect(0, 0, w1, h1); ga.setTransform(0.5, 0, 0, 0.5, 0, 0); draw(ga);
    gb.clearRect(0, 0, w2, h2); gb.imageSmoothingEnabled = true; gb.imageSmoothingQuality = 'high'; gb.drawImage(A, 0, 0, w2, h2);
    x.save(); x.imageSmoothingEnabled = true; x.imageSmoothingQuality = 'high'; x.drawImage(B, 0, 0, 1280, 720); x.restore();
  }

  // warm window light: gradient wall, window glow and soft out-of-focus bokeh (baked, so "depth of field" is free)
  function roomBG(key, pal, seed) {
    return cached(key, 1400, 800, (g, w, h) => {
      const gr = g.createLinearGradient(0, 0, w, h); pal.forEach((c, i) => gr.addColorStop(i / (pal.length - 1), c));
      g.fillStyle = gr; g.fillRect(0, 0, w, h);
      glow(g, w * 0.82, h * 0.22, 700, '#ffcf96', 0.55); glow(g, w * 0.1, h * 0.95, 600, '#2b2a7a', 0.45);
      // window frame bars, soft
      g.fillStyle = 'rgba(30,18,46,0.28)'; for (const X of [w * 0.66, w * 0.86]) g.fillRect(X, 0, 26, h * 0.62); g.fillRect(w * 0.6, h * 0.3, w * 0.4, 20);
      const r = H.rng(seed);
      for (let i = 0; i < 34; i++) { const bx = r.range(0, w), by = r.range(0, h * 0.7), br = r.range(18, 70); glow(g, bx, by, br, r.pick(['#ffd9a0', '#ff9fb0', '#fff1d0', '#c6a0ff']), r.range(0.12, 0.35)); g.globalAlpha = r.range(0.05, 0.14); g.fillStyle = '#fff0d8'; g.beginPath(); g.arc(bx, by, br * 0.55, 0, TAU); g.fill(); g.globalAlpha = 1; }
      // sun shafts through the window
      g.globalCompositeOperation = 'lighter';
      for (let i = 0; i < 4; i++) { const x0 = w * (0.62 + i * 0.09); const sg = g.createLinearGradient(x0, 0, x0 - 420, h); sg.addColorStop(0, 'rgba(255,214,160,0.16)'); sg.addColorStop(1, 'rgba(255,214,160,0)'); g.fillStyle = sg; g.beginPath(); g.moveTo(x0, 0); g.lineTo(x0 + 70, 0); g.lineTo(x0 - 330, h); g.lineTo(x0 - 470, h); g.fill(); }
      g.globalCompositeOperation = 'source-over';
    });
  }
  // a gentle camera: push-in / drift on a cached background (one scaled drawImage)
  function bg(x, img, z, dx, dy) { const w = 1400 * z, h = 800 * z; x.drawImage(img, 640 - w / 2 + dx, 360 - h / 2 + dy, w, h); }
  let STRANDC = null;
  function strand(x, ax, ay, len, th, th2, w) {
    const mx = ax + Math.sin(th) * len * 0.55, my = ay + Math.cos(th) * len * 0.55, ex = mx + Math.sin(th2) * len * 0.45, ey = my + Math.cos(th2) * len * 0.45;
    const nx = Math.cos(th), ny = -Math.sin(th);
    x.fillStyle = fc(STRANDC || HAIR); x.beginPath(); x.moveTo(ax + nx * w / 2, ay + ny * w / 2); x.quadraticCurveTo(mx + nx * w * 0.45, my + ny * w * 0.45, ex, ey); x.quadraticCurveTo(mx - nx * w * 0.45, my - ny * w * 0.45, ax - nx * w / 2, ay - ny * w / 2); x.closePath(); x.fill();
  }
  function hat(x, hx, hy, R, ch, f) {
    if (ch.hat === 'cap') {
      x.save(); x.beginPath(); x.arc(hx, hy, R * 1.03, 0, TAU); x.clip(); x.fillStyle = fc(ch.hatC); x.beginPath(); x.ellipse(hx, hy - R * 0.2, R * 1.1, R * 0.95, 0, Math.PI, TAU); x.fill();
      if (!RIM) { x.fillStyle = shade(ch.hatC, -0.25); x.fillRect(hx - R * 1.1, hy - R * 0.32, R * 2.2, R * 0.12); } x.restore();
      x.fillStyle = fc(shade(ch.hatC, -0.1)); x.beginPath(); x.ellipse(hx + f * R * 0.9, hy - R * 0.28, R * 0.62, R * 0.13, f * 0.08, 0, TAU); x.fill();
    } else if (ch.hat === 'capback') { // cap worn backwards: dome over the head, the brim sticking out at the back
      x.save(); x.beginPath(); x.arc(hx, hy, R * 1.04, 0, TAU); x.clip(); x.fillStyle = fc(ch.hatC); x.beginPath(); x.ellipse(hx, hy - R * 0.2, R * 1.1, R * 0.9, 0, Math.PI, TAU); x.fill(); if (!RIM) { x.fillStyle = shade(ch.hatC, -0.25); x.fillRect(hx - R * 1.1, hy - R * 0.3, R * 2.2, R * 0.1); } x.restore();
      if (f) { x.fillStyle = fc(shade(ch.hatC, -0.1)); x.beginPath(); x.ellipse(hx - f * R * 1.0, hy - R * 0.32, R * 0.42, R * 0.12, -f * 0.25, 0, TAU); x.fill(); }
    } else if (ch.hat === 'visor') {
      x.save(); x.beginPath(); x.arc(hx, hy, R * 1.04, 0, TAU); x.clip(); x.fillStyle = fc(ch.hatC); x.fillRect(hx - R * 1.1, hy - R * 0.62, R * 2.2, R * 0.24); x.restore();
      x.fillStyle = fc(ch.hatC); x.beginPath(); x.ellipse(hx + f * R * 0.7, hy - R * 0.45, R * 0.95, R * 0.16, f * 0.05, 0, TAU); x.fill();
    }
  }
  function face(x, hx, hy, R, ch, st) {
    const fr = !!st.front, f = fr ? 1 : st.f || 1, tn = fr ? 0 : st.turn == null ? 0.4 : st.turn, ox = hx + f * tn * R * 0.4, ex = st.expr || 'neutral', lk = st.look || [0, 0], bl = st.blink || 0;
    const DK = '#1b120e', MO = shade(ch.skin || '#9a6340', -0.62), hcol = ch.hairC || HAIR;
    if (ch.beard) { // full beard: covers jaw and chin, joins the side hair; the mouth shows on top of it
      x.save(); x.beginPath(); x.arc(hx, hy, R * 1.03, 0, TAU); x.clip(); x.fillStyle = hcol;
      const bs = ch.beard === 'short' ? 0.22 : 0; // a short beard starts lower and leaves the cheeks clear
      if (fr) { x.beginPath(); x.moveTo(hx - 1.0 * R, hy + (0.02 + bs) * R); x.quadraticCurveTo(hx, hy + (0.62 + bs) * R, hx + 1.0 * R, hy + (0.02 + bs) * R); x.lineTo(hx + 1.1 * R, hy + 1.2 * R); x.lineTo(hx - 1.1 * R, hy + 1.2 * R); x.closePath(); x.fill(); }
      else { x.beginPath(); x.moveTo(hx - f * 0.9 * R, hy + (0.12 + bs) * R); x.quadraticCurveTo(ox - f * 0.25 * R, hy + (0.5 + bs) * R, ox + f * 0.62 * R, hy + (0.42 + bs * 0.6) * R); x.lineTo(ox + f * 0.9 * R, hy + 1.2 * R); x.lineTo(hx - f * 1.1 * R, hy + 1.2 * R); x.closePath(); x.fill(); }
      x.restore();
    }
    const eyes = fr ? [[hx - R * 0.3, 1], [hx + R * 0.3, 1]] : [[ox - f * R * 0.3, 1], [ox + f * R * 0.27 * (1 - tn * 0.3), 1 - tn * 0.35]];
    for (const [cx, sq] of eyes) {
      const ey = hy - R * 0.05, erx = R * 0.15 * sq * (ex === 'shock' ? 1.15 : 1), ery = R * 0.19 * (ex === 'shock' ? 1.2 : 1) * (1 - bl);
      if (ex === 'happy') { x.strokeStyle = DK; x.lineWidth = R * 0.08; x.lineCap = 'round'; x.beginPath(); x.arc(cx, ey + R * 0.06, R * 0.13 * sq + R * 0.02, Math.PI * 1.15, Math.PI * 1.85); x.stroke(); }
      else {
        x.fillStyle = C.white; x.beginPath(); x.ellipse(cx, ey, erx, Math.max(ery, R * 0.015), 0, 0, TAU); x.fill();
        if (bl < 0.6) { const px = cx + cl(lk[0] * 0.45, -0.4, 0.4) * erx, py = ey + cl(lk[1] * 0.4, -0.4, 0.4) * ery; x.fillStyle = DK; x.beginPath(); x.arc(px, py, R * 0.075 * sq + R * 0.01, 0, TAU); x.fill(); x.fillStyle = C.white; x.beginPath(); x.arc(px - R * 0.02, py - R * 0.025, R * 0.022, 0, TAU); x.fill(); }
      }
      if (ch.glasses) { x.strokeStyle = DK; x.lineWidth = R * 0.045; x.beginPath(); x.ellipse(cx, ey, R * 0.24 * sq + R * 0.02, R * 0.25, 0, 0, TAU); x.stroke(); }
      const by = ey - R * (ex === 'shock' ? 0.38 : 0.31), tilt = { focus: 0.35, worry: -0.38, shock: -0.15, happy: -0.1 }[ex] || 0.04, inner = cx < ox ? 1 : -1;
      x.save(); x.translate(cx, by); x.rotate(tilt * inner); x.fillStyle = ch.browC || (ch.hairC && ch.hairC !== HAIR ? shade(ch.hairC, -0.3) : HAIR); rr(x, -R * 0.16 * sq, -R * 0.045, R * 0.32 * sq, R * 0.09, R * 0.045); x.fill(); x.restore();
    }
    if (ch.glasses) { x.strokeStyle = DK; x.lineWidth = R * 0.045; x.beginPath(); x.moveTo(eyes[0][0] + f * R * 0.24, hy - R * 0.08); x.lineTo(eyes[1][0] - f * R * (fr ? 0.24 : 0.2), hy - R * 0.08); x.stroke(); }
    if (ch.freckles) { x.fillStyle = shade(ch.skin, -0.22); for (const [ex0] of eyes) for (let q = 0; q < 4; q++) { x.beginPath(); x.arc(ex0 + (q - 1.5) * R * 0.06, hy + R * (0.2 + (q % 2) * 0.05), R * 0.018, 0, TAU); x.fill(); } }
    x.fillStyle = shade(ch.skin || '#9a6340', -0.18); x.beginPath(); x.ellipse(fr ? hx : ox + f * R * 0.12, hy + R * 0.16, R * 0.07, R * 0.05, 0, 0, TAU); x.fill(); // nose shadow
    const my = hy + R * 0.42, mx = fr ? hx : ox + f * R * 0.04, op = st.mouth || 0;
    if (ch.mustache || ch.beard) { x.fillStyle = hcol; for (const sd of [-1, 1]) { x.beginPath(); x.ellipse(mx + sd * 0.12 * R, my - 0.13 * R, 0.15 * R, 0.065 * R, sd * 0.28, 0, TAU); x.fill(); } }
    x.strokeStyle = MO; x.fillStyle = MO; x.lineWidth = R * 0.065; x.lineCap = 'round'; x.beginPath();
    if (ex === 'happy') { x.arc(mx, my - R * 0.1, R * 0.16, 0.15 * Math.PI, 0.85 * Math.PI); x.stroke(); }
    else if (ex === 'shock' || op > 0.2) { x.ellipse(mx, my, R * 0.07, R * (0.05 + 0.07 * Math.max(op, ex === 'shock' ? 1 : 0)), 0, 0, TAU); x.fill(); }
    else if (ex === 'worry') { x.moveTo(mx - R * 0.12, my + R * 0.02); x.quadraticCurveTo(mx - R * 0.05, my - R * 0.05, mx, my); x.quadraticCurveTo(mx + R * 0.05, my + R * 0.05, mx + R * 0.12, my - R * 0.02); x.stroke(); }
    else { x.moveTo(mx - R * 0.1, my); x.lineTo(mx + R * 0.1, my); x.stroke(); }
  }


  // ================= CHARACTERS: one full-body skeleton =================
  // Every part is placed from the joint positions of ONE skeleton (pelvis -> spine -> neck -> head, shoulders ->
  // elbows -> wrists -> hands, hips -> knees -> ankles -> feet). Limbs are round-capped strokes from joint to joint,
  // clothes are drawn on the same joints, hands sit on the wrist along the forearm, shoes have their heel on the ankle.
  // So nothing can float off its body. Arms and legs that must reach a point use two-bone IK; feet stay planted.
  const AGE = { // heads tall, hip height, shoulder width (head radii), limb / sleeve / trouser thickness, real height m
    kid: { hd: 3.5, leg: 0.42, sw: 1.36, lw: 0.2, sl: 0.36, pl: 0.4, hM: 1.25 },
    teen: { hd: 4.4, leg: 0.46, sw: 1.42, lw: 0.19, sl: 0.37, pl: 0.42, hM: 1.62 },
    ya: { hd: 4.9, leg: 0.47, sw: 1.58, lw: 0.19, sl: 0.39, pl: 0.44, hM: 1.78 },
    adult: { hd: 5.0, leg: 0.46, sw: 1.66, lw: 0.2, sl: 0.41, pl: 0.46, hM: 1.74 },
    elder: { hd: 4.9, leg: 0.45, sw: 1.6, lw: 0.2, sl: 0.41, pl: 0.46, hM: 1.62, stoop: 0.1 },
  };
  // hats are optional and rare: only Mia wears one
  // skin: different browns; hair: black for everyone, a different style per person (the girls' hair is long);
  // hats are optional and rare: only Mia wears one
  const HAIR = '#15100e', WHITE_HAIR = '#efebe6';
  // THE CAST (reuse these people in any new scene). Real heights in metres (hM) set their size at the scene's px-per-metre.
  const CAST = {
    ben: { name: 'Ben', tag: ['boy', '8'], age: 'kid', hM: 1.28, skin: '#f3d2b3', top: 'tee', topC: '#ff8a3d', bottom: 'shorts', botC: '#2f5fa8', sockC: '#f6f1e7', shoeC: '#2b2d42', hair: 'crew' },
    mia: { name: 'Mia', tag: ['girl', '8'], age: 'kid', hM: 1.25, skin: '#efc7a4', top: 'tee', topC: '#5fe3a1', bottom: 'shorts', botC: '#2b3a6b', sockC: '#f6f1e7', shoeC: '#ff6b4a', hair: 'braids' },
    sam: { name: 'Sam', tag: ['teen boy', '15'], age: 'teen', hM: 1.7, skin: '#f1c9a5', top: 'hoodie', topC: '#f5c63c', bottom: 'long', botC: '#4a4a52', shoeC: '#6a6a72', hair: 'sideswept', sleeve: 'long' },
    zara: { name: 'Zara', tag: ['teen girl', '15'], age: 'teen', hM: 1.6, skin: '#e8bb92', top: 'track', topC: '#e5383b', bottom: 'long', botC: '#23213a', shoeC: '#3a3a5a', hair: 'long', bandC: '#ffc857', sleeve: 'long' },
    leo: { name: 'Leo', tag: ['man', '24'], age: 'ya', hM: 1.8, skin: '#f6d6b8', top: 'track', topC: '#1fa39a', bottom: 'long', botC: '#1d2440', shoeC: '#ffc857', hair: 'crew', sleeve: 'long' },
    kai: { name: 'Kai', tag: ['woman', '23'], age: 'ya', hM: 1.66, skin: '#ecc19c', top: 'hoodie', topC: '#8b5cd6', bottom: 'long', botC: '#2a2340', shoeC: '#f6f1e7', hair: 'long', sleeve: 'long' },
    omar: { name: 'Omar', tag: ['man', '45'], age: 'adult', hM: 1.76, skin: '#dcae84', top: 'shirt', topC: '#3d6fb6', bottom: 'long', botC: '#3a3346', shoeC: '#5a3424', hair: 'sidepart', beard: true, mustache: true, sleeve: 'long' },
    grace: { name: 'Grace', tag: ['woman', '45'], age: 'adult', hM: 1.64, skin: '#f2cba8', top: 'cardigan', topC: '#8a8a2e', bottom: 'long', botC: '#2c2c3e', shoeC: '#2a2433', hair: 'bob', sleeve: 'long' },
    rosa: { name: 'Rosa', tag: ['woman', '72'], age: 'elder', hM: 1.58, skin: '#e2b48c', top: 'cardigan', topC: '#e0a23a', bottom: 'long', botC: '#5a5368', shoeC: '#6a3e2a', hair: 'bun', hairC: WHITE_HAIR, glasses: true, sleeve: 'long' },
    ade: { name: 'Ade', tag: ['man', '76'], age: 'elder', hM: 1.68, skin: '#f0c8a4', top: 'cardigan', topC: '#8a6a4a', bottom: 'long', botC: '#3b3a44', shoeC: '#2a1e18', hair: 'bald', hairC: WHITE_HAIR, beard: true, sleeve: 'long' },
  };
  // CAST2: a second line-up. All line-ups lean Asian (light skin tones, straight hair for every male); curly hair and dark skin only now and then
  const CAST2 = {
    finn: { name: 'Finn', tag: ['boy', '8'], age: 'kid', hM: 1.27, skin: '#f3d2b3', top: 'tee', topC: '#3fae5a', bottom: 'shorts', botC: '#4a78b8', sockC: '#f6f1e7', shoeC: '#e5383b', hair: 'sideswept', hairC: '#1c1514' },
    mei: { name: 'Mei', tag: ['girl', '8'], age: 'kid', hM: 1.24, skin: '#efc7a4', top: 'overalls', topC: '#fbe7a1', stripeC: '#f2c232', bottom: 'shorts', botC: '#f2c232', sockC: '#f6f1e7', shoeC: '#3d8fd6', hair: 'bobbang', hairC: '#1c1514' },
    jamal: { name: 'Jamal', tag: ['teen boy', '15'], age: 'teen', hM: 1.72, skin: '#f1c9a5', top: 'hoodie', topC: '#f28a2e', bottom: 'long', botC: '#55555e', shoeC: '#2b2b3a', hair: 'sidepart', sleeve: 'long' },
    sofia: { name: 'Sofia', tag: ['teen girl', '15'], age: 'teen', hM: 1.6, skin: '#e8bb92', top: 'denim', topC: '#5b84b8', innerC: '#f6f1e7', bottom: 'long', botC: '#1f1d2a', shoeC: '#ff8ab0', hair: 'long', hairC: '#4a2c1c', sleeve: 'long' },
    arjun: { name: 'Arjun', tag: ['man', '24'], age: 'ya', hM: 1.77, skin: '#f6d6b8', top: 'sweater', topC: '#8e2f3c', innerC: '#f2ebe0', bottom: 'long', botC: '#c9b48a', shoeC: '#6a4026', hair: 'sideswept', glasses: true, sleeve: 'long' },
    emma: { name: 'Emma', tag: ['woman', '23'], age: 'ya', hM: 1.67, skin: '#ecc19c', top: 'cardigan', topC: '#1f9a90', innerC: '#d8eef2', bottom: 'long', botC: '#2f4f86', shoeC: '#6a4a3a', hair: 'ponytail', hairC: '#1c1514', sleeve: 'long' },
    karim: { name: 'Karim', tag: ['man', '45'], age: 'adult', hM: 1.75, skin: '#dcae84', top: 'polo', topC: '#23355e', bottom: 'long', botC: '#6e6a44', shoeC: '#8a8a92', hair: 'crew', beard: 'short', mustache: true, sleeve: 'short' },
    lin: { name: 'Lin', tag: ['woman', '45'], age: 'adult', hM: 1.62, skin: '#f2cba8', top: 'blazer', topC: '#b8323a', innerC: '#1f1b24', bottom: 'long', botC: '#24212e', shoeC: '#1f1b24', hair: 'shoulder', hairC: '#1c1514', sleeve: 'long' },
    ruth: { name: 'Ruth', tag: ['woman', '72'], age: 'elder', hM: 1.57, skin: '#e2b48c', top: 'cardigan', topC: '#7a5aa6', innerC: '#c9b6e2', bottom: 'long', botC: '#2c2a3e', shoeC: '#6a5a5a', hair: 'bun', hairC: '#b8b4b0', sleeve: 'long' },
    walter: { name: 'Walter', tag: ['man', '76'], age: 'elder', hM: 1.7, skin: '#f0c8a4', top: 'vest', topC: '#c9ab78', sleeveC: '#a9c8e8', bottom: 'long', botC: '#6a4a30', shoeC: '#3a2a20', hair: 'bald', hairC: WHITE_HAIR, glasses: true, sleeve: 'long' },
  };
  // CAST3-CAST6: four more line-ups (variation sheets): different builds (wide), dresses, skirts, a poncho, a hijab,
  // pigtails, ponytails, patterned clothes (pat), canes, freckles, earrings. Reference only.
  const CAST3 = {
    theo: { name: 'Theo', tag: ['boy', '6'], age: 'kid', hM: 1.15, wide: 1.18, skin: '#f3d2b3', top: 'overalls', topC: '#ff8a3d', stripeC: '#f6f1e7', bottom: 'shorts', botC: '#4a6fa8', sockC: '#f6f1e7', shoeC: '#2b3550', hair: 'crew', hairC: '#1c1514' },
    hana: { name: 'Hana', tag: ['girl', '10'], age: 'kid', hM: 1.4, skin: '#efc7a4', top: 'jacket', open: true, topC: '#f5c63c', innerC: '#f6f1e7', bottom: 'long', botC: '#4a78b8', shoeC: '#ff8ab0', hair: 'long', hairC: '#1c1514', glasses: true, sleeve: 'long' },
    amira: { name: 'Amira', tag: ['teen girl', '14'], age: 'teen', hM: 1.58, skin: '#f1c9a5', top: 'kurta', topC: '#2a5a5a', pat: 'dots', patC: '#e8c060', bottom: 'long', botC: '#1f1d2a', shoeC: '#2b2b3a', hair: 'hijab', scarfC: '#1f8a8a', sleeve: 'long' },
    malik: { name: 'Malik', tag: ['teen boy', '17'], age: 'teen', hM: 1.78, skin: '#e8bb92', top: 'jersey', topC: '#d63a3a', num: '7', hood: true, sleeveC: '#1f1d2a', bottom: 'long', botC: '#1f1d2a', shoeC: '#e5383b', hair: 'sideswept', sleeve: 'long' },
    connor: { name: 'Connor', tag: ['man', '26'], age: 'ya', hM: 1.83, wide: 1.28, skin: '#f6d6b8', top: 'jacket', open: true, topC: '#2f8a4a', pat: 'check', patC: '#1a4a2a', innerC: '#e8e0d0', bottom: 'long', botC: '#4a6fa8', shoeC: '#c9a46a', hair: 'crew', hairC: '#1c1514', beard: true, mustache: true, hat: 'capback', hatC: '#2b3550', sleeve: 'long' },
    nia: { name: 'Nia', tag: ['woman', '30'], age: 'ya', hM: 1.65, wide: 1.22, skin: '#4a2c1c', top: 'dress', wrap: true, topC: '#3fae8a', pat: 'flower', patC: '#ff6b9a', beltC: '#6a3fb0', bottom: 'bare', shoeC: '#c9a46a', hair: 'afro', hairC: '#120d0b', earring: true, sleeve: 'short' },
    raj: { name: 'Raj', tag: ['man', '45'], age: 'adult', hM: 1.72, skin: '#ecc19c', top: 'vest', topC: '#6a4026', sleeveC: '#efe6d2', bottom: 'long', botC: '#c9b48a', shoeC: '#4a3020', hair: 'sidepart', hairC: '#8a8a8a', glasses: true, sleeve: 'long' },
    claire: { name: 'Claire', tag: ['woman', '52'], age: 'adult', hM: 1.66, skin: '#dcae84', top: 'blazer', topC: '#7a4aa8', innerC: '#f6f1e7', bottom: 'long', botC: '#22202c', shoeC: '#1f1b24', hair: 'bob', hairC: '#1c1514', sleeve: 'long' },
    lucia: { name: 'Lucia', tag: ['woman', '68'], age: 'elder', hM: 1.55, skin: '#f2cba8', top: 'tee', topC: '#9a5ab0', poncho: '#d0406a', ponchoC2: '#1fa39a', bottom: 'skirt', botC: '#24223a', shoeC: '#3a3a5a', hair: 'bun', hairC: '#b8b4b0', sleeve: 'long' },
    samuel: { name: 'Samuel', tag: ['man', '82'], age: 'elder', hM: 1.66, skin: '#e2b48c', top: 'blazer', topC: '#6a4a34', pat: 'tweed', innerC: '#3a3020', bottom: 'long', botC: '#7a7a80', shoeC: '#3a2a20', hair: 'bald', hairC: WHITE_HAIR, beard: true, cane: true, sleeve: 'long' },
  };
  const CAST4 = {
    lily: { name: 'Lily', tag: ['girl', '6'], age: 'kid', hM: 1.13, wide: 1.15, skin: '#f0c8a4', top: 'dress', topC: '#e04a4a', pat: 'flower', patC: '#ff9aa8', bottom: 'bare', shoeC: '#ff9ab8', hair: 'pigtails', hairC: '#1c1514', tieC: '#e5383b', sleeve: 'short' },
    mateo: { name: 'Mateo', tag: ['boy', '9'], age: 'kid', hM: 1.33, skin: '#f3d2b3', top: 'tee', topC: '#ff8a3d', pat: 'stripes', patC: '#3d6fb6', bottom: 'shorts', botC: '#c9b48a', sockC: '#f6f1e7', shoeC: '#f6f1e7', hair: 'crew', hairC: '#3a2418' },
    zuri: { name: 'Zuri', tag: ['teen girl', '14'], age: 'teen', hM: 1.6, skin: '#efc7a4', top: 'jacket', open: true, topC: '#3f7a4a', innerC: '#f6f1e7', bottom: 'long', botC: '#1f1d2a', shoeC: '#e5383b', hair: 'long', sleeve: 'long' },
    ollie: { name: 'Ollie', tag: ['teen boy', '16'], age: 'teen', hM: 1.72, wide: 1.25, skin: '#f1c9a5', top: 'hoodie', topC: '#8a8a92', bottom: 'long', botC: '#2f4f86', shoeC: '#2b2b3a', hair: 'crew', hairC: '#1c1514', sleeve: 'long' },
    imani: { name: 'Imani', tag: ['woman', '20'], age: 'ya', hM: 1.66, skin: '#e8bb92', top: 'crop', topC: '#f5c63c', bottom: 'long', botC: '#24305e', shoeC: '#f6f1e7', hair: 'ponytail', hairC: '#1c1514', band: true, bandC: '#f5c63c', sleeve: 'short' },
    jack: { name: 'Jack', tag: ['man', '28'], age: 'ya', hM: 1.83, wide: 1.25, skin: '#f6d6b8', top: 'jacket', open: true, topC: '#2f5f9a', pat: 'check', patC: '#1a2a4a', innerC: '#1f1b24', bottom: 'long', botC: '#3a2a20', shoeC: '#6a4026', hair: 'crew', hairC: '#4a2c1c', beard: true, mustache: true, sleeve: 'long' },
    priya: { name: 'Priya', tag: ['woman', '38'], age: 'adult', hM: 1.63, skin: '#ecc19c', top: 'sweater', topC: '#7a4ac0', innerC: '#f6f1e7', bottom: 'long', botC: '#55555e', shoeC: '#1f1b24', hair: 'shoulder', hairC: '#140f0d', sleeve: 'long' },
    marcus: { name: 'Marcus', tag: ['man', '48'], age: 'adult', hM: 1.8, wide: 1.15, skin: '#4a2c1c', top: 'shirt', topC: '#7a2a3a', bottom: 'long', botC: '#2f4f86', shoeC: '#5a3424', hair: 'none', beard: 'short', mustache: true, sleeve: 'long' },
    margaret: { name: 'Margaret', tag: ['woman', '65'], age: 'elder', hM: 1.6, skin: '#dcae84', top: 'cardigan', topC: '#6a7a3a', innerC: '#e8d8b0', bottom: 'long', botC: '#1f1b24', shoeC: '#1f1b24', hair: 'bob', hairC: '#dcd8d4', sleeve: 'long' },
    henry: { name: 'Henry', tag: ['man', '80'], age: 'elder', hM: 1.68, skin: '#f2cba8', top: 'blazer', topC: '#a88a50', innerC: '#a9c8e8', bottom: 'long', botC: '#3a3a44', shoeC: '#2a2020', hair: 'bald', hairC: WHITE_HAIR, mustache: true, cane: true, sleeve: 'long' },
  };
  const CAST5 = {
    max: { name: 'Max', tag: ['boy', '8'], age: 'kid', hM: 1.28, wide: 1.15, skin: '#e2b48c', top: 'tee', topC: '#3fae5a', pat: 'stripes', patC: '#f6f1e7', bottom: 'shorts', botC: '#24305e', sockC: '#f6f1e7', shoeC: '#e5383b', hair: 'sidepart', hairC: '#1c1514' },
    yuki: { name: 'Yuki', tag: ['girl', '8'], age: 'kid', hM: 1.25, skin: '#f0c8a4', top: 'kurta', topC: '#e86aa8', pat: 'dots', patC: '#f6c0d8', bottom: 'long', botC: '#7a4ac0', shoeC: '#f5c63c', hair: 'bobbang', hairC: '#1c1514', sleeve: 'long' },
    dev: { name: 'Dev', tag: ['teen boy', '15'], age: 'teen', hM: 1.7, skin: '#f3d2b3', top: 'hoodie', topC: '#24305e', bottom: 'long', botC: '#8a9ab0', shoeC: '#2b2b3a', hair: 'sideswept', hairC: '#140f0d', sleeve: 'long' },
    ava: { name: 'Ava', tag: ['teen girl', '15'], age: 'teen', hM: 1.6, skin: '#efc7a4', freckles: true, top: 'tee', topC: '#8a3a3a', pat: 'zigzag', patC: '#3fae8a', bottom: 'long', botC: '#2a2a34', shoeC: '#3a3a5a', hair: 'pigtails', hairC: '#1c1514', sleeve: 'long' },
    kwame: { name: 'Kwame', tag: ['man', '24'], age: 'ya', hM: 1.8, skin: '#f1c9a5', top: 'jacket', open: true, topC: '#6a5030', pat: 'check', patC: '#2a2a20', innerC: '#8a8a92', bottom: 'long', botC: '#1f2a44', shoeC: '#3a2a20', hair: 'sidepart', glasses: true, sleeve: 'long' },
    gabriela: { name: 'Gabriela', tag: ['woman', '23'], age: 'ya', hM: 1.62, wide: 1.28, skin: '#e8bb92', top: 'shirt', topC: '#1f9a9a', bottom: 'long', botC: '#1f2a44', shoeC: '#3a2a2a', hair: 'long', hairC: '#2a1810', sleeve: 'long' },
    erik: { name: 'Erik', tag: ['man', '45'], age: 'adult', hM: 1.83, wide: 1.25, skin: '#f6d6b8', top: 'shirt', topC: '#7a6a78', pat: 'dots', patC: '#5a4a58', bottom: 'long', botC: '#24305e', shoeC: '#6a4026', hair: 'sidepart', hairC: '#5a3a22', beard: true, mustache: true, sleeve: 'long' },
    leila: { name: 'Leila', tag: ['woman', '45'], age: 'adult', hM: 1.65, skin: '#ecc19c', top: 'jacket', open: true, topC: '#6a7a3a', innerC: '#f6f1e7', bottom: 'long', botC: '#1f1b24', shoeC: '#3a2a20', hair: 'long', hairC: '#140f0d', noband: true, sleeve: 'long' },
    gloria: { name: 'Gloria', tag: ['woman', '72'], age: 'elder', hM: 1.56, skin: '#dcae84', top: 'cardigan', topC: '#d8b830', innerC: '#7a4ac0', bottom: 'skirt', botC: '#7a4ac0', shoeC: '#3a2a3a', hair: 'bun', hairC: WHITE_HAIR, glasses: true, sleeve: 'long' },
    arthur: { name: 'Arthur', tag: ['man', '76'], age: 'elder', hM: 1.72, skin: '#f2cba8', top: 'blazer', topC: '#6a6a4a', pat: 'tweed', innerC: '#8a7a5a', bottom: 'long', botC: '#5a3e2a', shoeC: '#3a2a20', hair: 'bald', hairC: WHITE_HAIR, beard: true, sleeve: 'long' },
  };
  const CAST6 = {
    ronan: { name: 'Ronan', tag: ['boy', '6'], age: 'kid', hM: 1.15, wide: 1.18, skin: '#e2b48c', freckles: true, top: 'hoodie', topC: '#3d6fb6', bottom: 'shorts', botC: '#5a7aa8', sockC: '#f6f1e7', shoeC: '#2b2b3a', hair: 'crew', hairC: '#1c1514', sleeve: 'long' },
    ama: { name: 'Ama', tag: ['girl', '7'], age: 'kid', hM: 1.2, skin: '#f0c8a4', top: 'overalls', topC: '#f5c63c', stripeC: '#f5c63c', bottom: 'shorts', botC: '#e86aa8', sockC: '#f6f1e7', shoeC: '#e5383b', hair: 'pigtails' },
    noah: { name: 'Noah', tag: ['teen boy', '13'], age: 'teen', hM: 1.55, skin: '#f3d2b3', top: 'jacket', open: true, topC: '#4a7a3a', innerC: '#f6f1e7', bottom: 'long', botC: '#2a2a34', shoeC: '#8a7a5a', hair: 'crew', hairC: '#5a3a22', glasses: true, sleeve: 'long' },
    keisha: { name: 'Keisha', tag: ['teen girl', '16'], age: 'teen', hM: 1.62, wide: 1.2, skin: '#efc7a4', top: 'tee', topC: '#c8323a', pat: 'zigzag', patC: '#f6f1e7', bottom: 'long', botC: '#24305e', shoeC: '#2b3550', hair: 'long', sleeve: 'long' },
    luis: { name: 'Luis', tag: ['man', '25'], age: 'ya', hM: 1.75, wide: 1.25, skin: '#f1c9a5', top: 'jacket', open: true, topC: '#e8dcb0', pat: 'leaf', patC: '#b8a060', innerC: '#f6f1e7', bottom: 'long', botC: '#c9b48a', shoeC: '#8a7a5a', hair: 'sidepart', beard: true, mustache: true, sleeve: 'short' },
    jin: { name: 'Jin', tag: ['woman', '32'], age: 'ya', hM: 1.63, skin: '#e8bb92', top: 'track', topC: '#1fa39a', bottom: 'long', botC: '#1f1b24', shoeC: '#3a3a4a', hair: 'ponytail', hairC: '#140f0d', sleeve: 'long' },
    diego: { name: 'Diego', tag: ['man', '42'], age: 'adult', hM: 1.75, skin: '#f6d6b8', top: 'shirt', topC: '#8a2a3a', pat: 'check', patC: '#3a1020', bottom: 'long', botC: '#2f4f86', shoeC: '#5a3424', hair: 'crew', hairC: '#140f0d', mustache: true, sleeve: 'long' },
    adaeze: { name: 'Adaeze', tag: ['woman', '48'], age: 'adult', hM: 1.66, wide: 1.2, skin: '#ecc19c', top: 'dashiki', topC: '#7a3a9a', pat: 'kente', patC: '#e5383b', patC2: '#f5c63c', bottom: 'long', botC: '#24305e', shoeC: '#3a2a3a', hair: 'hbun', hairC: '#140f0d', earring: true, sleeve: 'short' },
    edith: { name: 'Edith', tag: ['woman', '68'], age: 'elder', hM: 1.58, skin: '#dcae84', top: 'cardigan', topC: '#e8762e', innerC: '#f2e0d0', bottom: 'skirt', botC: '#8a7a70', shoeC: '#3a2a2a', hair: 'bob', hairC: '#efebe6', glasses: true, sleeve: 'long' },
    joseph: { name: 'Joseph', tag: ['man', '75'], age: 'elder', hM: 1.73, skin: '#f2cba8', top: 'blazer', topC: '#7a7a80', pat: 'tweed', innerC: '#6a7a4a', bottom: 'long', botC: '#2a2a34', shoeC: '#2a2020', hair: 'bald', hairC: WHITE_HAIR, beard: true, sleeve: 'long' },
  };
  const CASTS = [CAST, CAST2, CAST3, CAST4, CAST5, CAST6];
  const CH = (id) => { for (const C0 of CASTS) if (C0[id]) return C0[id]; }; // look up a character in any line-up
  const hOf = (ch, pxm) => (ch.hM || AGE[ch.age].hM) * pxm;
  let RIM = null, DARK = false;
  const fc = (c) => RIM || (DARK ? shade(c, -0.3) : c);
  let SKIN = '#9a6340';
  const INK = () => RIM || (DARK ? shade(SKIN, -0.28) : SKIN); // skin colour of the character being drawn

  // two-bone IK: from root a toward target t with bone lengths l1, l2; pref picks the bend side
  function ik2(a, t, l1, l2, pref) {
    const dx = t[0] - a[0], dy = t[1] - a[1], d = Math.hypot(dx, dy) || 1e-6, ux = dx / d, uy = dy / d;
    const dc = cl(d, Math.abs(l1 - l2) + 1e-3, l1 + l2 - 1e-3);
    const al = Math.acos(cl((l1 * l1 + dc * dc - l2 * l2) / (2 * l1 * dc), -1, 1)), th = Math.atan2(uy, ux);
    const c1 = [a[0] + Math.cos(th + al) * l1, a[1] + Math.sin(th + al) * l1], c2 = [a[0] + Math.cos(th - al) * l1, a[1] + Math.sin(th - al) * l1];
    const mx = a[0] + (ux * dc) / 2, my = a[1] + (uy * dc) / 2, s1 = (c1[0] - mx) * pref[0] + (c1[1] - my) * pref[1], s2 = (c2[0] - mx) * pref[0] + (c2[1] - my) * pref[1];
    return [s1 >= s2 ? c1 : c2, [a[0] + ux * dc, a[1] + uy * dc]]; // [elbow/knee, real end point (target if reachable)]
  }
  // P: { x pelvis x, gy floor y, h height px, f facing 1/-1, lean, tilt, drop (crouch, head radii), lift (px off floor),
  //      aF/aB: {to:[x,y]} or {a:[shoulder, elbow]} (radians from straight down, + = forward), hF/hB hand spec,
  //      fF/fB: ankle targets (default planted), st stance (head radii) }
  function rig(ch, P) {
    const A = AGE[ch.age], h = P.h, r = h / (A.hd * 2), f = P.f || 1, lift = P.lift || 0;
    const foot = 0.17 * r, hipH = h * A.leg, thigh = (hipH - foot) / 2, torso = h - hipH - 2.32 * r;
    const ua = torso * 0.62, fa = ua * 0.95, gy = P.gy;
    const pel = [P.x, gy - hipH + (P.drop || 0) * r - lift];
    const ln = ((P.lean || 0) + (A.stoop || 0)) * f, up = [Math.sin(ln), -Math.cos(ln)], rt = [Math.cos(ln), Math.sin(ln)];
    const nb = [pel[0] + up[0] * torso, pel[1] + up[1] * torso];
    const tl = ln + (P.tilt || 0) * f, hd = 0.32 * r + r, hc = [nb[0] + Math.sin(tl) * hd, nb[1] - Math.cos(tl) * hd];
    const at = (o, kx, kd) => [o[0] + rt[0] * kx - up[0] * kd, o[1] + rt[1] * kx - up[1] * kd]; // kx along shoulders, kd down the spine
    const shW = A.sw * r * 0.5 - 0.2 * r;
    // 3/4 view: the body is turned toward f, so the NEAR shoulder/hip is on the -f side (in front, drawn last) and the
    // FAR shoulder/hip is on the +f side (behind the chest, drawn first). A near arm reaching forward crosses the chest.
    const shF = at(nb, -f * shW + f * 0.06 * r, 0.22 * r), shB = at(nb, f * shW * 0.82 + f * 0.06 * r, 0.27 * r);
    const hipF = at(pel, -f * 0.12 * r, 0), hipB = at(pel, f * 0.16 * r, 0);
    const arm = (sh, sp = {}) => {
      if (sp.to) { const [e, w] = ik2(sh, sp.to, ua, fa, sp.pref || [-f * 0.15, 1]); /* elbows hang down, slightly back */ return { s: sh, e, w }; }
      const a = sp.a || [0.08, 0.18], d1 = [f * Math.sin(a[0]), Math.cos(a[0])], e = [sh[0] + d1[0] * ua, sh[1] + d1[1] * ua], d2 = [f * Math.sin(a[0] + a[1]), Math.cos(a[0] + a[1])];
      return { s: sh, e, w: [e[0] + d2[0] * fa, e[1] + d2[1] * fa] };
    };
    const st = P.st == null ? 0.25 : P.st;
    const leg = (hp, tgt) => { const [k, an] = ik2(hp, tgt, thigh, thigh, [f, -0.15]); return { h: hp, k, a: an }; };
    const fF = P.fF || [P.x + f * (st * 0.4 - 0.2) * r, gy - foot - lift], fB = P.fB || [P.x + f * (0.32 + st * 0.4) * r, gy - foot - lift]; // feet apart, under their hips
    return { ch, P, A, r, f, h, ln, tl, pel, nb, hc, torso, thigh, shF, shB, aF: arm(shF, P.aF), aB: arm(shB, P.aB), lF: leg(hipF, fF), lB: leg(hipB, fB), up, rt };
  }
  // HANDS = TWO ROUNDED RECTANGLES: one rounded rectangle for the four fingers together (a mitten block) and one SLIM
  // rounded rectangle for the thumb. No separate fingers, no palm detail.
  // Thumb side is anatomical (palmSide): forearm level = thumb on top; arm hanging = thumb forward (toward the facing
  // side); arm raised with the palm to the viewer = thumb toward the body's midline (the head), so two hands are always
  // mirror images. A holding hand wraps the finger block ACROSS the prop and lays the thumb over its top edge.
  function palmSide(u, f, w, mid) {
    const v1 = [-u[1], u[0]], th = [-v1[0], -v1[1]];
    const pref = u[1] < -0.45 && mid != null ? [Math.sign(mid - w[0]) || f, 0] : [f * 0.6, -1];
    return th[0] * pref[0] + th[1] * pref[1] >= 0 ? v1 : [-v1[0], -v1[1]];
  }
  const fdir = (arm) => { const L = Math.hypot(arm.w[0] - arm.e[0], arm.w[1] - arm.e[1]) || 1; return [(arm.w[0] - arm.e[0]) / L, (arm.w[1] - arm.e[1]) / L]; };
  // where the hand holds a prop: the prop runs through the middle of the closed hand, just past the wrist
  function gripPt(arm, r, f, hold) { const u = fdir(arm), d = 0.2 * r + ((hold && hold.w) || 0) / 2; return [arm.w[0] + u[0] * d, arm.w[1] + u[1] * d]; }
  // solve an arm so its GRIP lands on a point (iterates the IK: the grip offset depends on the forearm angle)
  function reach(ch, P, side, g, hold) {
    let tgt = g.slice();
    for (let i = 0; i < 4; i++) { const J = rig(ch, { ...P, [side]: { to: tgt } }), gp = gripPt(J[side], J.r, J.f, hold); tgt = [tgt[0] + g[0] - gp[0], tgt[1] + g[1] - gp[1]]; }
    return { ...P, [side]: { to: tgt } };
  }

  const bone = (x, a, b, w, c) => { x.strokeStyle = c; x.lineWidth = w; x.lineCap = 'round'; x.beginPath(); x.moveTo(a[0], a[1]); x.lineTo(b[0], b[1]); x.stroke(); };
  const mixP = (a, b, u) => [lerp(a[0], b[0], u), lerp(a[1], b[1], u)];

  // ---------- hands: a finger block + a slim thumb (two rounded rectangles) ----------
  // box(x, p, d, len, wid, rad): a rounded rectangle starting at point p, running len along unit d, wid wide, with a
  // optional outline (sep; the hands pass none: no outlines on fingers or thumbs).
  function box(x, p, d, len, wid, rad, sep, col) {
    x.save(); x.translate(p[0], p[1]); x.rotate(Math.atan2(d[1], d[0]));
    if (sep) { x.fillStyle = sep; rr(x, -0.012 * len - 1, -wid / 2 - 1.2, len + 2.4, wid + 2.4, rad + 1.2); x.fill(); }
    x.fillStyle = col || INK(); rr(x, 0, -wid / 2, len, wid, rad); x.fill(); x.restore();
  }
  // HAND POSES (the hand sheet, SHEETS.hands): every hand = ONE rounded box for the fingers (all four together) + ONE
  // slim rounded box for the thumb; the closed hand (fist) is the same rounded box, shorter.
  //   m 'open'  : finger box from the wrist (palm + fingers as one mitten), thumb out at ~37 deg on the thumb side
  //   m 'point' : short fist box + ONE slim box for the pointing index finger along the top (thumb side) + thumb on the fist
  //   m 'thumb' : fist box + thumb straight up out of its top (thumbs-up)
  //   hold      : fist box across the prop + thumb over its top edge (see below)
  // view 'front' = palm side to the viewer: thumb in front of the box, no outline, no palm lines (the open
  // hand); 'back' = back of the hand to the viewer: the thumb is behind the box, a shade darker. Default: front when
  // the arm is raised (waving), back otherwise; a holding hand defaults to front (thumb wrapped over the prop).
  // spec.hold = { w, axis } marks a hand that holds / catches a prop: with spec.closed > 0.35 (or unset) the hand is
  // CLOSED around it and drawn after the prop (handOver): the fist box lies across the prop's front from the wrist
  // to just past its far edge (the prop shows above and below it) and the thumb lies over the box's top edge.
  // Open (closed <= 0.35, before a catch): the open hand, drawn in front of the prop.
  function hand(x, arm, r, spec = {}, f = 1, mid = null, layer = 'all') {
    const closedHold = spec.hold && (spec.closed == null || spec.closed > 0.35);
    if (spec.hold && layer === 'under') return;
    const w = arm.w, u = fdir(arm), sep = RIM || shade(SKIN, -0.42), fw = 0.3 * r, tw = 0.105 * r, back = RIM || shade(INK(), -0.2);
    const view = spec.view || (!spec.hold && u[1] < -0.45 ? 'front' : 'back'); // scenes show the BACK of the hand (no lines inside it); the palm only for a raised open hand
    if (closedHold) {
      const hold = spec.hold, a = hold.axis || [0, 1], G = gripPt(arm, r, f, hold), hw = hold.w / 2;
      let d = [G[0] - w[0], G[1] - w[1]]; const dp = d[0] * a[0] + d[1] * a[1]; d = [d[0] - dp * a[0], d[1] - dp * a[1]];
      const dl = Math.hypot(d[0], d[1]) || 1, b = [d[0] / dl, d[1] / dl], at = (kb, ka) => [G[0] + b[0] * kb + a[0] * ka, G[1] + b[1] * kb + a[1] * ka];
      const th0 = palmSide(u, f, w, mid), ts = (th0[0] * a[0] + th0[1] * a[1]) > 0 ? -1 : 1; // thumb on the side away from the palm, along the prop
      const L = dl + hw + 0.13 * r; // from the wrist to just past the prop's far edge
      if (view === 'back') { box(x, at(-dl + 0.05 * r, ts * (fw / 2 - tw * 0.05)), b, 0.2 * r, tw, tw * 0.5, null, back); box(x, at(-dl, 0), b, L, fw, fw * 0.45, null); return; }
      box(x, at(-dl, 0), b, L, fw, fw * 0.45, null);
      box(x, at(-dl + 0.04 * r, ts * (fw / 2 - tw * 0.2)), b, dl + hw * 0.55, tw, tw * 0.5, null);
      return;
    }
    if (spec.m === 'pointcam') { // pointing AT THE VIEWER: arm toward the camera, seen end-on (a round sleeve opening behind),
      // the fist as one rounded box facing us, the index finger foreshortened to a round tip with a nail, thumb on the side
      const k = r, ink = INK(); x.save(); x.translate(w[0], w[1]);
      if (spec.cuff) { x.fillStyle = fc(spec.cuff); x.beginPath(); x.arc(0, 0, 0.3 * k, 0, TAU); x.fill(); }
      x.fillStyle = ink; rr(x, -0.2 * k, -0.16 * k, 0.4 * k, 0.34 * k, 0.12 * k); x.fill();
      x.fillStyle = ink; x.beginPath(); x.arc(0.05 * k, -0.12 * k, 0.11 * k, 0, TAU); x.fill();
      if (!RIM) { x.fillStyle = shade(SKIN, 0.3); x.beginPath(); x.ellipse(0.06 * k, -0.17 * k, 0.05 * k, 0.035 * k, 0, 0, TAU); x.fill(); }
      x.fillStyle = ink; rr(x, -0.26 * k, -0.06 * k, 0.13 * k, 0.22 * k, 0.06 * k); x.fill();
      x.restore(); return;
    }
    const v = palmSide(u, f, w, mid), m = spec.m || 'open';
    // local frame: +x along the forearm from the wrist, +y toward the palm side, thumb side = -y
    x.save(); x.translate(w[0], w[1]); x.transform(u[0], u[1], v[0], v[1], 0, 0); x.scale(r, r);
    const R = (X, Y, W2, H2, rad, col, out) => { if (out) { x.fillStyle = out; rr(x, X - 0.012, Y - 0.012, W2 + 0.024, H2 + 0.024, rad + 0.012); x.fill(); } x.fillStyle = col; rr(x, X, Y, W2, H2, rad); x.fill(); };
    const T = (X, Y, ang, len, wid, col, out) => { x.save(); x.translate(X, Y); x.rotate(ang); R(0, -wid / 2, len, wid, wid / 2, col, out); x.restore(); };
    // TH: a thumb = slim rounded box that tapers a little from its base (wb) to a rounded tip (wt)
    const TH = (X, Y, ang, len, wb, wt, col, out) => { x.save(); x.translate(X, Y); x.rotate(ang); const pth = (e) => { x.beginPath(); x.moveTo(-e, -wb / 2 - e); x.lineTo(len - wt / 2, -wt / 2 - e); x.arc(len - wt / 2, 0, wt / 2 + e, -Math.PI / 2, Math.PI / 2); x.lineTo(-e, wb / 2 + e); x.closePath(); }; if (out) { x.fillStyle = out; pth(0.012); x.fill(); } x.fillStyle = col; pth(0); x.fill(); x.restore(); };
    const nail = (X, Y, ang) => { if (RIM) return; x.save(); x.translate(X, Y); x.rotate(ang); x.fillStyle = shade(SKIN, 0.3); rr(x, -0.035, -0.04, 0.07, 0.065, 0.03); x.fill(); x.restore(); };
    const ink = INK(), fr = view === 'front';
    if (m === 'open') {
      if (!fr) T(0.07, -0.12, -0.65, 0.25, 0.1, back);
      R(-0.03, -0.16, 0.5, 0.32, 0.14, ink);
      if (fr) T(0.07, -0.12, -0.65, 0.25, 0.1, ink); // no palm lines: plain shapes only
    } else if (m === 'point') {
      R(0.16, -0.155, 0.4, 0.1, 0.05, ink);                 // the pointing index finger (one slim box, on the thumb side)
      if (!fr) T(0.05, -0.12, -0.05, 0.22, 0.095, back);
      R(-0.03, -0.14, 0.33, 0.3, 0.12, ink);                // the other three fingers curled = one rounded box
      if (fr) T(0.05, -0.12, -0.05, 0.22, 0.095, ink);
    } else if (m === 'thumb') { // thumbs-up: a SHORT, thick thumb (tapered, rounded tip) up out of the back-top of the fist
      if (!fr) TH(0.1, -0.1, -Math.PI / 2 - 0.15, 0.22, 0.17, 0.15, back);
      R(-0.03, -0.16, 0.36, 0.32, 0.13, ink);
      if (fr) TH(0.1, -0.1, -Math.PI / 2 - 0.15, 0.22, 0.17, 0.15, ink);
    } else if (m === 'fist') { // clenched fist seen from the knuckle side: one box, the thumb folded across its front
      R(-0.03, -0.17, 0.38, 0.34, 0.14, ink);
      if (fr) TH(0.17, -0.17, 1.2, 0.22, 0.12, 0.095, ink); else TH(0.06, -0.15, -0.35, 0.16, 0.12, 0.1, back);
    } else if (m === 'peace') { // index + middle up in a V (two slim boxes), ring + pinky curled = the box, thumb across them
      T(0.2, -0.1, -0.2, 0.38, 0.1, ink); T(0.2, 0.03, 0.1, 0.4, 0.1, ink);
      R(-0.03, -0.15, 0.32, 0.31, 0.13, ink);
      if (fr) TH(0.13, -0.15, 0.85, 0.21, 0.11, 0.09, ink);
    } else if (m === 'ok') { // OK: thumb tip and index tip make a ring on the thumb side, the other three fingers up as one box
      R(0.18, -0.04, 0.36, 0.21, 0.1, ink);
      R(-0.03, -0.16, 0.3, 0.33, 0.13, ink);
      const ring = (lw, col) => { x.strokeStyle = col; x.lineWidth = lw; x.beginPath(); x.arc(0.37, -0.13, 0.085, 0, TAU); x.stroke(); };
      ring(0.075, ink);
    } else if (m === 'pinch') { // pinching: all four fingers as one box bent toward the thumb, thumb tip just under it (spec.pt = the grip point)
      T(0.18, 0.07, -0.42, 0.31, 0.13, ink);
      R(-0.03, -0.14, 0.26, 0.29, 0.12, ink);
      TH(0.04, -0.14, 0.02, 0.36, 0.11, 0.085, ink);
    } else if (m === 'write') { // writing: curled fingers box tucked under, index along the pencil, thumb against it
      T(0.15, 0.03, 0.6, 0.22, 0.16, ink);
      R(-0.03, -0.13, 0.27, 0.28, 0.12, ink);
      T(0.17, -0.07, 0.25, 0.27, 0.09, ink);
      TH(0.05, -0.12, 0.38, 0.25, 0.11, 0.085, ink);
    } else if (m === 'gun') { // gripping a pistol: the box round the grip, index straight along the frame, thumb along the top
      R(-0.03, -0.13, 0.32, 0.3, 0.12, ink);
      T(0.2, -0.12, 0.02, 0.3, 0.09, ink);
      TH(0.03, -0.16, -0.04, 0.22, 0.11, 0.085, ink);
    }
    x.restore();
  }



  // a point in a hand's own frame (x along the forearm, y toward the palm side, in head radii) -> canvas point: use it to
  // place what a pinching / writing hand holds (pinch: tips at about (0.45, -0.09); pencil through (0.32, -0.06))
  function handLocal(arm, r, f, mid, lx, ly) { const u = fdir(arm), v = palmSide(u, f, arm.w, mid); return [arm.w[0] + (u[0] * lx + v[0] * ly) * r, arm.w[1] + (u[1] * lx + v[1] * ly) * r]; }

  // ---------- hair (black, one style per person; long hair swings with the head's pendulums) ----------
  function headXY(J) { return [J.hc[0], J.hc[1]]; }
  // Hairlines: the top of the face opening, in head radii from the head centre (negative = above).
  const HAIRSTYLE = {
    long: { top: -0.42 }, wavylong: { top: -0.5, part: true, band: false, headband: true }, bob: { top: -0.55, part: 0.3 }, wavy: { top: -0.62, tufts: true }, braids: { top: -0.55, part: true }, crew: { top: -0.66, tight: true }, curly: { top: -0.6, curls: true },
    sidepart: { top: -0.62, part: 0.35 }, bun: { top: -0.62, part: true, bun: true }, bald: { top: -1.45, band: true, tight: true },
    // second line-up: messy ginger tufts, a bob with a straight fringe, a short curly-top fade, a side-swept fringe,
    // a high ponytail, shoulder-length hair with a side parting
    afro: { top: -0.55, afro: true }, locs: { top: -0.64, tight: true, locs: true }, pigtails: { top: -0.58, part: true, pig: true }, puffs: { top: -0.6, part: true, puffs: true }, beadbraids: { top: -0.5, part: true, beads: true }, hijab: { top: -0.6, hijab: true }, hbun: { top: -0.6, part: true, hbun: true }, curlylong: { top: -0.55, curls: true },
    messy: { top: -0.6, tufts: true, spiky: true }, bobbang: { top: -0.24 }, fade: { top: -0.72, tight: true, topcurls: true }, sideswept: { top: -0.5, part: 0.45, sweep: true }, ponytail: { top: -0.62, part: true, pony: true }, shoulder: { top: -0.55, part: 0.3 },
  };
  const BOBH = { bob: 1.05, bobbang: 1.0, shoulder: 1.9 }; // hair that hangs to the jaw / shoulders behind the head (length in head radii)
  const hairCol = (ch) => ch.hairC || HAIR;
  // back layer (behind head and body): long hair hangs down the back and swings with the head's pendulum
  function hairBack(x, J, st) {
    const { ch, r, f } = J, hx = J.hc[0], hy = J.hc[1], th = (st.hair || {}).th || 0, th2 = (st.hair || {}).th2 || 0;
    // curly hair: the ring of curls hangs BEHIND the head (only the bumps outside the head outline show), so the curls on
    // the face side sit behind the cheek and ear instead of over the face; the cap on top covers the rest
    if (ch.hair === 'curly') { x.fillStyle = fc(hairCol(ch)); for (let i = 0; i < 10; i++) { const a = Math.PI * (0.92 + i * 0.13); x.beginPath(); x.arc(hx + Math.cos(a) * r * 1.0, hy + Math.sin(a) * r * 1.0, r * 0.24, 0, TAU); x.fill(); } }
    if (ch.hair === 'braids') braid(x, hx, hy, r, f, th, th2, hairCol(ch), true); // far braid: behind the head and body
    if (ch.hair === 'afro') { x.fillStyle = fc(hairCol(ch)); x.beginPath(); for (let i = 0; i <= 24; i++) { const a = i * TAU / 24, rr3 = r * (1.55 + 0.07 * Math.sin(i * 2.3)); x.lineTo(hx - f * 0.1 * r + Math.cos(a) * rr3, hy - 0.25 * r + Math.sin(a) * rr3 * 0.95); } x.closePath(); x.fill(); } // big round afro behind the head
    if (ch.hair === 'curlylong') { x.fillStyle = fc(hairCol(ch)); for (let i = 0; i < 16; i++) { const a = Math.PI * (0.7 + i * 0.105); x.beginPath(); x.arc(hx + Math.cos(a) * r * 1.05, hy + Math.sin(a) * r * 1.05 + (a > Math.PI * 1.9 || a < Math.PI * 1.1 ? 0.5 * r : 0), r * 0.32, 0, TAU); x.fill(); } } // shoulder-length curls
    if (ch.hair === 'hijab') { x.fillStyle = fc(ch.scarfC || '#1fa39a'); x.beginPath(); x.moveTo(hx - 1.1 * r, hy); x.quadraticCurveTo(hx - 1.4 * r, hy + 1.6 * r, hx - 0.9 * r, hy + 2.3 * r); x.lineTo(hx + 0.9 * r, hy + 2.3 * r); x.quadraticCurveTo(hx + 1.4 * r, hy + 1.6 * r, hx + 1.1 * r, hy); x.closePath(); x.fill(); } // scarf drape over the shoulders
    if (ch.hair === 'pigtails') { const w0 = STRANDC; STRANDC = hairCol(ch); strand(x, hx + f * 0.7 * r, hy - 0.55 * r, 1.4 * r, th + f * 0.5, th2 + f * 0.3, 0.45 * r); STRANDC = w0; } // far pigtail behind the head
    if (ch.hair === 'beadbraids') { const L = 3.2 * r, sx = Math.sin(th) * L * 0.4 - f * 0.2 * r; x.fillStyle = fc(hairCol(ch)); x.beginPath(); x.arc(hx, hy, r * 1.06, Math.PI * 0.92, Math.PI * 2.08); x.lineTo(hx + r * 1.0 + sx, hy + L); x.lineTo(hx - r * 1.0 + sx, hy + L); x.closePath(); x.fill(); if (!RIM) { for (let i = 0; i < 7; i++) { const bx = hx - 0.9 * r + i * 0.3 * r + sx * 0.8; x.strokeStyle = shade(hairCol(ch), 0.2); x.lineWidth = 0.025 * r; x.beginPath(); x.moveTo(bx, hy + 0.4 * r); x.lineTo(bx + sx * 0.2, hy + L); x.stroke(); x.fillStyle = ['#f5c63c', '#e5383b', '#f6f1e7'][i % 3]; x.beginPath(); x.arc(bx + sx * 0.2, hy + L - 0.1 * r, 0.07 * r, 0, TAU); x.fill(); } } } // many small braids with beads
    if (ch.hair === 'ponytail') { const w0 = STRANDC; STRANDC = hairCol(ch); strand(x, hx - f * 0.85 * r, hy - 0.5 * r, 2.3 * r, th - f * 0.35, th2 - f * 0.15, 0.5 * r); STRANDC = w0; } // high ponytail on the back of the head, a pendulum
    if (BOBH[ch.hair] || ch.hair === 'wavylong') { // jaw-length bob / shoulder-length / long wavy hair, behind the head
      const L = BOBH[ch.hair] ? BOBH[ch.hair] * r : 3.0 * r, sx = Math.sin(th) * L * 0.4 - f * 0.15 * r, wv = ch.hair === 'wavylong';
      x.fillStyle = fc(hairCol(ch)); x.beginPath(); x.arc(hx, hy, r * 1.12, Math.PI * 0.9, Math.PI * 2.1);
      const side = (sgn) => { const n = wv ? 5 : 1; for (let k = 1; k <= n; k++) { const u = k / n, yy = hy + r * 0.3 + (L - r * 0.3) * u, xx = hx + sgn * (r * (wv ? 1.18 : 1.15)) + sx * u + (wv ? sgn * 0.12 * r * (k % 2 ? 1 : -1) : 0); x.quadraticCurveTo(xx + sgn * (wv ? 0.18 : 0.05) * r, yy - (L / n) * 0.5, xx, yy); } };
      side(1); x.quadraticCurveTo(hx + sx, hy + L + r * 0.25, hx - r * 1.1 + sx, hy + L);
      x.lineTo(hx - r * 1.12, hy + r * 0.3); x.closePath(); x.fill();
    }
    if (ch.hair === 'long') {
      const L = 3.6 * r, sx = Math.sin(th) * L * 0.5 + Math.sin(th2) * L * 0.3 - f * 0.25 * r;
      x.fillStyle = fc(hairCol(ch)); x.beginPath(); x.arc(hx, hy, r * 1.08, Math.PI * 0.92, Math.PI * 2.08);
      x.quadraticCurveTo(hx + r * 1.2 + sx * 0.3, hy + L * 0.45, hx + r * 0.9 + sx, hy + L);
      x.quadraticCurveTo(hx + sx, hy + L + r * 0.3, hx - r * 0.9 + sx, hy + L);
      x.quadraticCurveTo(hx - r * 1.2 + sx * 0.3, hy + L * 0.45, hx - r * 1.07, hy + r * 0.27); x.closePath(); x.fill();
    }
  }
  // hair cap: ONE shape covering the whole head except a single face opening (an ellipse turned toward the facing side,
  // its top = the hairline). Fringe, sides and back are the same piece, so no skin can show between them.
  function hairCap(x, hx, hy, r, ch, f) {
    const S = HAIRSTYLE[ch.hair]; if (!S) return;
    if (S.hijab) { const sc = fc(ch.scarfC || '#1fa39a'), cx = hx + f * 0.13 * r; x.fillStyle = sc; x.beginPath(); x.arc(hx, hy - 0.05 * r, r * 1.16, 0, TAU); x.ellipse(cx, hy + 0.12 * r, 0.74 * r, 0.82 * r, 0, 0, TAU, true); x.fill(); if (!RIM) { x.strokeStyle = shade(ch.scarfC || '#1fa39a', -0.2); x.lineWidth = 0.06 * r; x.beginPath(); x.ellipse(cx, hy + 0.12 * r, 0.78 * r, 0.86 * r, 0, 0, TAU); x.stroke(); } return; } // headscarf: covers the hair, ears and neck, the face open in an oval
    const col = fc(hairCol(ch)), ftop = hy + S.top * r, fbot = hy + 1.3 * r, cx = hx + f * 0.13 * r, cy = (ftop + fbot) / 2;
    x.save(); x.beginPath(); x.arc(hx, hy, r * (S.tight ? 1.02 : 1.06), 0, TAU); x.clip();
    if (S.band) { x.beginPath(); x.rect(hx - 2 * r, hy - 0.2 * r, 4 * r, 3 * r); x.clip(); } // nearly bald: hair only round the back and sides, below the crown
    x.fillStyle = col; x.beginPath(); x.rect(hx - 1.4 * r, hy - 1.4 * r, 2.8 * r, 2.8 * r); x.ellipse(cx, cy, 0.86 * r, (fbot - ftop) / 2, 0, 0, TAU); x.fill('evenodd');
    x.restore();
    if (S.locs) { x.fillStyle = col; for (let i = 0; i < 9; i++) { const a = Math.PI * (1.0 + i * 0.125); x.save(); x.translate(hx + Math.cos(a) * r * 0.9, hy + Math.sin(a) * r * 0.9); x.rotate(a + Math.PI / 2 + 0.2 * Math.sin(i * 1.7)); rr(x, -0.07 * r, -0.5 * r, 0.14 * r, 0.55 * r, 0.07 * r); x.fill(); x.restore(); } } // short twisted locs standing out
    if (S.puffs) { x.fillStyle = col; for (const sd of [-1, 1]) { x.beginPath(); x.arc(hx + sd * 0.72 * r, hy - 0.82 * r, 0.42 * r, 0, TAU); x.fill(); } } // two afro puffs on top
    if (S.hbun) { x.fillStyle = col; x.beginPath(); x.arc(hx - f * 0.1 * r, hy - 1.1 * r, 0.45 * r, 0, TAU); x.fill(); if (!RIM) { x.fillStyle = ch.bandC || '#f5c63c'; x.fillRect(hx - f * 0.1 * r - 0.35 * r, hy - 0.78 * r, 0.7 * r, 0.08 * r); } } // high curly bun with a band
    if (S.beads && !RIM) { x.strokeStyle = shade(col, 0.2); x.lineWidth = 0.025 * r; for (let i = -3; i <= 3; i++) { x.beginPath(); x.moveTo(hx + i * 0.15 * r, hy - 0.95 * r); x.lineTo(hx + i * 0.25 * r, hy - 0.2 * r); x.stroke(); } }
    if (S.topcurls) { x.fillStyle = col; for (let i = 0; i < 7; i++) { const a = Math.PI * (1.12 + i * 0.12); x.beginPath(); x.arc(hx + Math.cos(a) * r * 0.9 + f * 0.05 * r, hy + Math.sin(a) * r * 0.9, r * 0.2, 0, TAU); x.fill(); } }
    if (S.sweep) { x.fillStyle = col; x.beginPath(); x.ellipse(hx + f * 0.25 * r, hy - 0.62 * r, 0.62 * r, 0.24 * r, f * 0.25, 0, TAU); x.fill(); }
    if (S.pony && !RIM && f) { x.fillStyle = fc(ch.tieC || '#e5383b'); x.beginPath(); x.arc(hx - f * 0.9 * r, hy - 0.5 * r, 0.1 * r, 0, TAU); x.fill(); }
    if (S.tufts) { x.fillStyle = col; for (let i = 0; i < (S.spiky ? 7 : 5); i++) { const a = Math.PI * (S.spiky ? 1.05 + i * 0.14 : 1.12 + i * 0.17); x.beginPath(); x.ellipse(hx + Math.cos(a) * r * 0.98 + f * 0.08 * r, hy + Math.sin(a) * r * 0.98 - 0.02 * r, r * 0.22, r * 0.15, a + 0.5 * f, 0, TAU); x.fill(); } }
    if ((S.headband && !ch.noband) || ch.band) { x.strokeStyle = fc(ch.bandC || '#ffc857'); x.lineWidth = 0.1 * r; x.lineCap = 'round'; x.beginPath(); x.arc(hx, hy + 0.1 * r, r * 0.98, Math.PI * 1.12, Math.PI * 1.88); x.stroke(); }
    if (S.bun) { x.fillStyle = col; x.beginPath(); x.arc(hx - f * 0.3 * r, hy - 1.0 * r, 0.38 * r, 0, TAU); x.fill(); }
    if (S.part && !RIM) { const px = hx + f * (S.part === true ? 0.13 : S.part) * r; x.strokeStyle = shade(hairCol(ch), hairCol(ch) === HAIR ? 0.22 : -0.15); x.lineWidth = 0.035 * r; x.lineCap = 'round'; x.beginPath(); x.moveTo(px, hy - 1.0 * r); x.quadraticCurveTo(px + f * 0.05 * r, hy - 0.85 * r, px + f * 0.08 * r, ftop + 0.08 * r); x.stroke(); }
  }
  // one braid hanging from beside the head at side sd (+1 right / -1 left), swinging with the head
  function braid(x, hx, hy, r, sd, th, th2, col, far) {
    const ax = hx + sd * (far ? 0.42 : 0.8) * r, ay = hy + (far ? 0.35 : 0.05) * r, L = (far ? 2.0 : 2.3) * r; // the far braid starts behind the head
    for (let k = 0; k < 7; k++) { const u = k / 6, a = (th + sd * 0.15) * (1 - u) + (th2 + sd * 0.2) * u; x.fillStyle = fc(col); x.beginPath(); x.ellipse(ax + Math.sin(a) * L * u, ay + Math.cos(a) * L * u, 0.16 * r * (1 - u * 0.35), 0.2 * r, -a, 0, TAU); x.fill(); }
    const ea = th2 + sd * 0.2; x.fillStyle = fc('#ff6b9a'); x.beginPath(); x.arc(ax + Math.sin(ea) * L * 0.95, ay + Math.cos(ea) * L * 0.95, 0.09 * r, 0, TAU); x.fill();
  }
  // front layer: cap + pieces that fall in front (a long lock, the near braid)
  function hairFront(x, hx, hy, r, ch, f, h) {
    const th = h.th || 0, th2 = h.th2 || 0, col = hairCol(ch);
    hairCap(x, hx, hy, r, ch, f);
    if (ch.hair === 'long') strand(x, hx - f * 0.8 * r, hy - 0.25 * r, 2.7 * r, th - f * 0.08, th2 - f * 0.05, 0.44 * r);
    if (ch.hair === 'pigtails') { const w0 = STRANDC; STRANDC = col; strand(x, hx - f * 0.8 * r, hy - 0.5 * r, 1.4 * r, th - f * 0.5, th2 - f * 0.3, 0.45 * r); STRANDC = w0; if (!RIM) { x.fillStyle = ch.tieC || '#ff6b9a'; for (const sd of [-1, 1]) { x.beginPath(); x.arc(hx + sd * f * 0.78 * r, hy - 0.5 * r, 0.1 * r, 0, TAU); x.fill(); } } }
    if (ch.hair === 'beadbraids') { x.fillStyle = fc(col); for (let k = 0; k < 2; k++) { const bx = hx - f * (0.75 + k * 0.14) * r; x.fillRect(bx - 0.05 * r, hy - 0.1 * r, 0.1 * r, 2.4 * r); if (!RIM) { x.fillStyle = ['#f5c63c', '#e5383b'][k]; x.beginPath(); x.arc(bx, hy + 2.3 * r, 0.08 * r, 0, TAU); x.fill(); x.fillStyle = fc(col); } } }
    if (ch.hair === 'hijab') { x.fillStyle = fc(ch.scarfC || '#1fa39a'); x.beginPath(); x.moveTo(hx - 0.85 * r, hy + 0.55 * r); x.quadraticCurveTo(hx, hy + 1.3 * r, hx + 0.85 * r, hy + 0.55 * r); x.lineTo(hx + 1.1 * r, hy + 1.6 * r); x.lineTo(hx - 1.1 * r, hy + 1.6 * r); x.closePath(); x.fill(); } // scarf wrapped under the chin, over the neck
    if (ch.hair === 'braids') braid(x, hx, hy, r, -f, th, th2, col); // near braid (back-of-head side) in front; the other one is drawn behind the head
  }

  // patFill: a clothing pattern inside the current clip (call after clipping to the garment). pat: stripes, check
  // (plaid), flower, dots, zigzag (knit), leaf (Hawaiian), tweed, rainbow, kente (dashiki). c = base colour, c2 = pattern colour.
  function patFill(g, X0, Y0, W2, H2, pat, c, c2, u) {
    if (RIM || !pat) return; const r = H.rng(pat.length * 7 + 3), k = u || Math.max(W2, H2) / 8, c3 = shade(c2 || c, 0.35);
    g.save();
    if (pat === 'stripes') { g.fillStyle = c2; for (let y = Y0 + k * 0.25; y < Y0 + H2; y += k * 0.9) g.fillRect(X0, y, W2, k * 0.42); }
    if (pat === 'check') { g.globalAlpha = 0.45; g.fillStyle = c2; for (let xx = X0; xx < X0 + W2; xx += k * 1.1) g.fillRect(xx, Y0, k * 0.5, H2); for (let y = Y0; y < Y0 + H2; y += k * 1.1) g.fillRect(X0, y, W2, k * 0.5); g.globalAlpha = 0.6; g.fillStyle = shade(c2, -0.4); for (let xx = X0 + k * 0.22; xx < X0 + W2; xx += k * 1.1) g.fillRect(xx, Y0, k * 0.07, H2); for (let y = Y0 + k * 0.22; y < Y0 + H2; y += k * 1.1) g.fillRect(X0, y, W2, k * 0.07); }
    if (pat === 'flower') { const cs = [c2 || '#ff6b9a', '#f5c63c', '#2f8fd6', '#3fae5a', '#ff8a3d']; for (let i = 0; i < 26; i++) { const fx = X0 + r() * W2, fy = Y0 + r() * H2, fs = k * r.range(0.2, 0.32); g.fillStyle = r.pick(cs); for (let q = 0; q < 5; q++) { const a = q * TAU / 5; g.beginPath(); g.arc(fx + Math.cos(a) * fs, fy + Math.sin(a) * fs, fs * 0.7, 0, TAU); g.fill(); } g.fillStyle = '#f6f1e7'; g.beginPath(); g.arc(fx, fy, fs * 0.45, 0, TAU); g.fill(); } }
    if (pat === 'dots') { g.fillStyle = c2; for (let y = Y0; y < Y0 + H2; y += k * 0.55) for (let xx = X0 + ((y / (k * 0.55)) % 2) * k * 0.27; xx < X0 + W2; xx += k * 0.55) { g.beginPath(); g.arc(xx, y, k * 0.09, 0, TAU); g.fill(); } }
    if (pat === 'zigzag' || pat === 'kente') { const cs = pat === 'kente' ? [c2, '#f5c63c', '#e5383b', '#1fa39a'] : [c2, c3, '#f6f1e7']; let i = 0; for (let y = Y0 + k * 0.3; y < Y0 + H2; y += k * 0.75, i++) { g.strokeStyle = cs[i % cs.length]; g.lineWidth = k * 0.16; g.beginPath(); for (let xx = X0 - k; xx < X0 + W2 + k; xx += k * 0.4) g.lineTo(xx, y + ((Math.round((xx - X0) / (k * 0.4)) % 2) ? k * 0.18 : -k * 0.18)); g.stroke(); } }
    if (pat === 'leaf') { for (let i = 0; i < 18; i++) { const lx = X0 + r() * W2, ly = Y0 + r() * H2; g.fillStyle = r() < 0.5 ? c2 : c3; g.beginPath(); g.ellipse(lx, ly, k * 0.45, k * 0.18, r.range(0, 3), 0, TAU); g.fill(); } }
    if (pat === 'tweed') { for (let i = 0; i < 160; i++) { g.fillStyle = r() < 0.5 ? shade(c, -0.25) : shade(c, 0.18); g.fillRect(X0 + r() * W2, Y0 + r() * H2, k * 0.09, k * 0.09); } }
    if (pat === 'rainbow') { const cs = ['#e5383b', '#ff8a3d', '#f5c63c', '#3fae5a', '#2f8fd6', '#8b5cd6']; let i = 0; for (let xx = X0; xx < X0 + W2; xx += k * 0.6, i++) { g.fillStyle = cs[i % 6]; g.fillRect(xx, Y0, k * 0.6, H2); } g.fillStyle = 'rgba(255,255,255,0.35)'; for (let i2 = 0; i2 < 14; i2++) { g.beginPath(); g.arc(X0 + r() * W2, Y0 + r() * H2, k * 0.15, 0, TAU); g.fill(); } }
    g.restore();
  }
  const OPENTOP = (ch) => ch.top === 'denim' || ch.top === 'blazer' || ch.open; // an open jacket / shirt over an inner top (innerC)
  const BARELEG = (ch) => ch.bottom === 'skirt' || ch.bottom === 'bare'; // legs show skin below a skirt / dress

  // ---------- drawing the figure ----------
  function figure(x, J, st) {
    const { ch, A, r, f } = J, wd = ch.wide || 1, bk = 1 + 0.55 * (wd - 1), lw = A.lw * r * bk, sl = A.sl * r * bk, pl = A.pl * r * bk, P = J.P; // wd: build (1 slim, 1.15-1.3 heavier)
    const armD = (a, spec) => {
      bone(x, a.s, a.e, lw * 1.1, INK()); bone(x, a.e, a.w, lw, INK());
      const slc = ch.sleeveC || ch.topC;
      if (ch.sleeve === 'long') { bone(x, a.s, a.e, sl, fc(slc)); bone(x, a.e, mixP(a.e, a.w, 0.8), sl * 0.86, fc(slc)); }
      else bone(x, a.s, mixP(a.s, a.e, 0.5), sl * 1.05, fc(slc));
      hand(x, a, r, spec, f, J.hc[0], spec && spec.hold ? 'under' : 'all');
    };
    const legD = (l) => {
      bone(x, l.h, l.k, lw * 1.15, INK()); bone(x, l.k, l.a, lw, INK());
      if (ch.sockC) bone(x, mixP(l.k, l.a, 0.45), l.a, lw * 1.35, fc(ch.sockC));
      if (BARELEG(ch)) { /* skin legs: the skirt / dress is drawn with the torso */ }
      else if (ch.bottom === 'shorts') bone(x, l.h, mixP(l.h, l.k, 0.6), pl * 1.15, fc(ch.botC));
      else { bone(x, l.h, l.k, pl, fc(ch.botC)); bone(x, l.k, mixP(l.k, l.a, 0.9), pl * 0.88, fc(ch.botC)); }
      // shoe: heel on the ankle, toe forward, flat on the floor unless lifted
      const sh = fc(ch.shoeC); x.fillStyle = sh; x.beginPath(); x.ellipse(l.a[0] + f * 0.2 * r, l.a[1] + 0.06 * r, 0.38 * r, 0.16 * r, 0, 0, TAU); x.fill();
      if (!RIM) { x.fillStyle = shade(ch.shoeC, ch.shoeC === C.white || ch.shoeC === '#f6f1e7' ? -0.35 : 0.55); x.fillRect(l.a[0] + f * 0.2 * r - 0.36 * r, l.a[1] + 0.12 * r, 0.72 * r, 0.06 * r); }
    };
    hairBack(x, J, st);
    DARK = true; armD(J.aB, P.hB); legD(J.lB); DARK = false;
    legD(J.lF);
    // neck, then torso (its hem covers the hip joints, its top corners hold the shoulder joints)
    bone(x, J.nb, mixP(J.nb, J.hc, 0.55), lw * 1.6, INK());
    x.save(); x.translate(J.pel[0], J.pel[1]); x.rotate(J.ln);
    const T = J.torso, tw = A.sw * r * wd, top = -T + 0.04 * r, hem = ch.top === 'dress' ? J.thigh * 1.0 : ch.top === 'kurta' ? J.thigh * 0.62 : ch.top === 'cardigan' || ch.top === 'blazer' || (ch.open && ch.long) ? J.thigh * 0.45 : ch.top === 'crop' ? -T * 0.42 : ch.top === 'denim' ? 0.12 * r : 0.24 * r, bw = tw * (ch.top === 'dress' ? 1.2 : ch.top === 'kurta' ? 1.02 : 0.9 + 0.08 * (wd - 1));
    if (ch.bottom === 'skirt') { x.fillStyle = fc(ch.botC); x.beginPath(); x.moveTo(-tw * 0.46, 0); x.lineTo(tw * 0.46, 0); x.lineTo(tw * 0.62, J.thigh * 1.05); x.lineTo(-tw * 0.62, J.thigh * 1.05); x.closePath(); x.fill(); if (!RIM) { x.fillStyle = shade(ch.botC, -0.2); x.fillRect(-tw * 0.62, J.thigh * 0.98, tw * 1.24, J.thigh * 0.07); } }
    if (ch.top === 'crop') { x.fillStyle = INK(); x.beginPath(); x.moveTo(-tw * 0.4, top + 0.3 * r); x.lineTo(tw * 0.4, top + 0.3 * r); x.lineTo(tw * 0.42, 0.26 * r); x.lineTo(-tw * 0.42, 0.26 * r); x.closePath(); x.fill(); } // bare midriff under a crop top
    if ((ch.top === 'hoodie' || ch.hood) && !RIM) { x.fillStyle = fc(shade(ch.hood ? ch.sleeveC : ch.topC, -0.3)); x.beginPath(); x.ellipse(-f * 0.15 * r, top + 0.02 * r, 0.6 * r, 0.32 * r, 0, 0, TAU); x.fill(); }
    x.beginPath(); x.moveTo(-tw / 2, top + 0.34 * r); x.quadraticCurveTo(-tw / 2, top, -tw / 2 + 0.36 * r, top); x.lineTo(tw / 2 - 0.36 * r, top); x.quadraticCurveTo(tw / 2, top, tw / 2, top + 0.34 * r);
    x.lineTo(bw / 2, hem - 0.12 * r); x.quadraticCurveTo(bw / 2, hem, bw / 2 - 0.16 * r, hem); x.lineTo(-bw / 2 + 0.16 * r, hem); x.quadraticCurveTo(-bw / 2, hem, -bw / 2, hem - 0.12 * r); x.closePath();
    if (RIM) x.fillStyle = RIM; else { const g = x.createLinearGradient(f * tw / 2, top, -f * tw / 2, hem); g.addColorStop(0, shade(ch.topC, 0.15)); g.addColorStop(1, shade(ch.topC, -0.25)); x.fillStyle = g; }
    x.fill();
    if (!RIM) {
      x.save(); x.clip(); if (ch.pat) patFill(x, -tw, top, 2 * tw, hem - top, ch.pat, ch.topC, ch.patC, 0.32 * r); x.globalAlpha = 0.45; x.fillStyle = shade(ch.topC, -0.4); x.beginPath(); x.ellipse(-f * tw * 0.62, (top + hem) / 2, tw * 0.42, (hem - top) * 0.75, 0, 0, TAU); x.fill(); x.globalAlpha = 1;
      if (ch.top === 'dress' && ch.wrap) { x.strokeStyle = shade(ch.patC || ch.topC, -0.2); x.lineWidth = 0.1 * r; x.beginPath(); x.moveTo(-tw * 0.4, top + 0.2 * r); x.lineTo(tw * 0.4, -T * 0.3); x.stroke(); x.fillStyle = ch.beltC || '#6a3fb0'; x.fillRect(-tw, -T * 0.32, 2 * tw, 0.12 * r); }
      if (ch.top === 'jersey') { x.fillStyle = '#f6f1e7'; x.beginPath(); x.ellipse(f * 0.05 * r, top + 0.05 * r, 0.42 * r, 0.22 * r, 0, 0, Math.PI); x.fill(); x.fillStyle = ch.topC; x.beginPath(); x.ellipse(f * 0.05 * r, top + 0.02 * r, 0.34 * r, 0.16 * r, 0, 0, Math.PI); x.fill(); x.fillStyle = shade(ch.topC, -0.35); x.beginPath(); x.arc(f * 0.08 * r, top + 1.0 * r, 0.26 * r, 0, TAU); x.fill(); x.fillStyle = '#f6f1e7'; x.font = F(800, Math.round(0.3 * r)); x.textAlign = 'center'; x.fillText(ch.num || '23', f * 0.08 * r, top + 1.1 * r); }
      if (ch.top === 'dashiki') { x.fillStyle = ch.patC2 || '#f5c63c'; x.beginPath(); x.moveTo(f * -0.3 * r, top); x.lineTo(f * 0.4 * r, top); x.lineTo(f * 0.05 * r, top + 0.8 * r); x.closePath(); x.fill(); x.fillStyle = ch.topC; x.beginPath(); x.moveTo(f * -0.15 * r, top); x.lineTo(f * 0.25 * r, top); x.lineTo(f * 0.05 * r, top + 0.55 * r); x.closePath(); x.fill(); }
      if (ch.top === 'kurta') { x.strokeStyle = shade(ch.topC, -0.3); x.lineWidth = 0.04 * r; x.beginPath(); x.moveTo(f * 0.06 * r, top); x.lineTo(f * 0.06 * r, top + 0.7 * r); x.stroke(); }
      if (ch.top === 'hoodie') { x.fillStyle = shade(ch.topC, -0.18); rr(x, -bw * 0.3 + f * 0.08 * r, hem - 0.75 * r, bw * 0.6, 0.45 * r, 0.12 * r); x.fill(); x.strokeStyle = C.white; x.lineWidth = 0.04 * r; for (const k of [0.02, 0.24]) { x.beginPath(); x.moveTo(f * k * r, top + 0.08 * r); x.lineTo(f * k * r + (st.hair ? st.hair.th * 0.1 * r : 0), top + 0.62 * r); x.stroke(); } }
      if (ch.top === 'track') { x.strokeStyle = C.white; x.lineWidth = 0.05 * r; x.beginPath(); x.moveTo(f * 0.1 * r, top); x.lineTo(f * 0.1 * r, hem); x.stroke(); x.fillStyle = C.white; x.fillRect(-f * tw * 0.47 - 0.03 * r, top + 0.25 * r, 0.06 * r, hem - top - 0.35 * r); }
      if (ch.top === 'shirt') { x.fillStyle = shade(ch.topC, -0.3); for (let i = 0; i < 5; i++) { x.beginPath(); x.arc(f * 0.1 * r, top + (0.35 + i * 0.42) * r, 0.045 * r, 0, TAU); x.fill(); } x.strokeStyle = shade(ch.topC, -0.25); x.lineWidth = 0.035 * r; x.beginPath(); x.moveTo(f * 0.1 * r, top + 0.15 * r); x.lineTo(f * 0.1 * r, hem); x.stroke(); x.fillStyle = shade(ch.topC, 0.25); for (const sd of [-1, 1]) { x.beginPath(); x.moveTo(f * 0.1 * r, top + 0.22 * r); x.lineTo(f * 0.1 * r + sd * 0.32 * r, top - 0.02 * r); x.lineTo(f * 0.1 * r + sd * 0.1 * r, top - 0.02 * r); x.closePath(); x.fill(); } }
      if (ch.top === 'overalls') { x.fillStyle = ch.stripeC; for (let k = 0; k < 6; k++) x.fillRect(-tw, top + (0.15 + k * 0.32) * r, 2 * tw, 0.12 * r); x.fillStyle = shade(ch.botC, 0.05); rr(x, -bw * 0.32 + f * 0.06 * r, top + 0.75 * r, bw * 0.64, hem - top - 0.7 * r, 0.08 * r); x.fill(); x.fillRect(-bw * 0.32 + f * 0.06 * r, hem - 0.3 * r, bw * 0.64, 0.4 * r); x.fillStyle = shade(ch.botC, -0.15); for (const sd of [-1, 1]) x.fillRect(f * 0.06 * r + sd * bw * 0.22 - 0.06 * r, top, 0.12 * r, 0.8 * r); x.fillStyle = shade(ch.botC, -0.3); x.beginPath(); x.arc(f * 0.06 * r, top + 1.1 * r, 0.05 * r, 0, TAU); x.fill(); }
      if (OPENTOP(ch)) { x.fillStyle = ch.innerC || '#f2ebe0'; x.beginPath(); x.moveTo(f * -0.14 * r, top); x.lineTo(f * 0.34 * r, top); x.lineTo(f * 0.2 * r, hem); x.lineTo(f * 0.0 * r, hem); x.closePath(); x.fill(); x.fillStyle = shade(ch.topC, 0.18); for (const k of [-0.14, 0.34]) { x.beginPath(); x.moveTo(f * k * r, top); x.lineTo(f * (k + (k < 0 ? 0.12 : -0.12)) * r, top + 0.7 * r); x.lineTo(f * (k + (k < 0 ? 0.02 : -0.02)) * r, top + 0.75 * r); x.closePath(); x.fill(); } if (ch.top === 'denim') { x.strokeStyle = shade(ch.topC, 0.3); x.lineWidth = 0.025 * r; x.setLineDash([0.06 * r, 0.05 * r]); x.beginPath(); x.moveTo(-tw / 2, top + 0.9 * r); x.lineTo(tw / 2, top + 0.9 * r); x.stroke(); x.setLineDash([]); } else if (ch.top === 'blazer' && !ch.pat) { x.fillStyle = shade(ch.topC, -0.25); const rr2 = H.rng(3); for (let k = 0; k < 14; k++) { x.beginPath(); x.arc(rr2.range(-tw / 2, tw / 2), rr2.range(top, hem), 0.05 * r, 0, TAU); x.fill(); } } }
      if (ch.top === 'sweater') { x.fillStyle = ch.innerC || '#f2ebe0'; for (const sd of [-1, 1]) { x.beginPath(); x.moveTo(f * 0.05 * r, top + 0.2 * r); x.lineTo(f * 0.05 * r + sd * 0.3 * r, top - 0.02 * r); x.lineTo(f * 0.05 * r + sd * 0.06 * r, top - 0.02 * r); x.closePath(); x.fill(); } x.fillStyle = shade(ch.topC, -0.2); x.fillRect(-tw / 2, hem - 0.18 * r, tw, 0.18 * r); }
      if (ch.top === 'polo') { x.fillStyle = shade(ch.topC, 0.15); for (const sd of [-1, 1]) { x.beginPath(); x.moveTo(f * 0.05 * r, top + 0.18 * r); x.lineTo(f * 0.05 * r + sd * 0.34 * r, top - 0.03 * r); x.lineTo(f * 0.05 * r + sd * 0.08 * r, top - 0.03 * r); x.closePath(); x.fill(); } x.fillStyle = shade(ch.topC, 0.35); for (let k = 0; k < 2; k++) { x.beginPath(); x.arc(f * 0.06 * r, top + (0.3 + k * 0.22) * r, 0.04 * r, 0, TAU); x.fill(); } }
      if (ch.top === 'vest') { x.fillStyle = ch.sleeveC; x.beginPath(); x.moveTo(f * -0.2 * r, top); x.lineTo(f * 0.36 * r, top); x.lineTo(f * 0.1 * r, top + 0.9 * r); x.closePath(); x.fill(); x.strokeStyle = shade(ch.sleeveC, -0.2); x.lineWidth = 0.02 * r; for (let k = 0; k < 3; k++) { x.beginPath(); x.moveTo(f * (-0.1 + k * 0.12) * r, top); x.lineTo(f * (-0.1 + k * 0.12) * r, top + 0.4 * r); x.stroke(); } x.fillStyle = shade(ch.topC, -0.3); for (let i = 0; i < 4; i++) { x.beginPath(); x.arc(f * 0.12 * r, top + (1.0 + i * 0.32) * r, 0.045 * r, 0, TAU); x.fill(); } }
      if (ch.top === 'cardigan') { x.fillStyle = ch.innerC || '#f2ebe0'; x.beginPath(); x.moveTo(f * -0.12 * r, top); x.lineTo(f * 0.32 * r, top); x.lineTo(f * 0.12 * r, top + 1.0 * r); x.closePath(); x.fill(); x.fillStyle = shade(ch.topC, -0.45); for (let i = 0; i < 4; i++) { x.beginPath(); x.arc(f * 0.18 * r, top + (1.1 + i * 0.4) * r, 0.05 * r, 0, TAU); x.fill(); } }
      x.restore();
      x.fillStyle = shade(ch.topC, -0.25); x.beginPath(); x.ellipse(f * 0.05 * r, top + 0.03 * r, 0.32 * r, 0.11 * r, 0, 0, TAU); x.fill();
    }
    if (ch.poncho) { const pc = ch.poncho; x.fillStyle = fc(pc); x.beginPath(); x.moveTo(-tw * 0.62, top + 0.15 * r); x.lineTo(tw * 0.62, top + 0.15 * r); x.lineTo(tw * 0.75, top + 1.15 * r); x.lineTo(f * 0.05 * r, -T * 0.05); x.lineTo(-tw * 0.75, top + 1.15 * r); x.closePath(); x.fill(); if (!RIM) { x.save(); x.clip(); patFill(x, -tw, top, 2 * tw, T, 'zigzag', pc, ch.ponchoC2 || '#1fa39a', 0.3 * r); x.restore(); x.strokeStyle = shade(pc, 0.2); x.lineWidth = 0.025 * r; for (let k = 0; k <= 10; k++) { const u = k / 10, ex = lerp(-tw * 0.75, f * 0.05 * r, u), ey = lerp(top + 1.15 * r, -T * 0.05, u); x.beginPath(); x.moveTo(ex, ey); x.lineTo(ex, ey + 0.14 * r); x.stroke(); const ex2 = lerp(tw * 0.75, f * 0.05 * r, u), ey2 = lerp(top + 1.15 * r, -T * 0.05, u); x.beginPath(); x.moveTo(ex2, ey2); x.lineTo(ex2, ey2 + 0.14 * r); x.stroke(); } } } // poncho over the shoulders: zigzag knit with a fringe
    x.restore();
    // head on the neck
    const hx = J.hc[0], hy = J.hc[1], hth = st.hair || { th: 0, th2: 0 };
    x.save(); x.translate(hx, hy); x.rotate(J.tl - J.ln * 0.5); x.translate(-hx, -hy);
    x.fillStyle = INK(); x.beginPath(); x.arc(hx, hy, r, 0, TAU); x.fill();
    hairFront(x, hx, hy, r, ch, f, hth);
    if (ch.hat) hat(x, hx, hy, r, ch, f);
    if (!RIM) face(x, hx, hy, r, ch, { ...st, f });
    if (ch.earring && !RIM && ch.hair !== 'hijab') { x.strokeStyle = '#e0a63a'; x.lineWidth = 0.05 * r; x.beginPath(); x.arc(hx - f * 0.62 * r, hy + 0.45 * r, 0.12 * r, 0, TAU); x.stroke(); }
    x.restore();
    // front arm last: in front of torso and head, starting exactly at its shoulder joint
    armD(J.aF, P.hF);
    if (ch.cane) { const w = J.aF.w, gyy = J.P.gy, cx = w[0] + f * 0.12 * r; x.strokeStyle = fc('#5a3424'); x.lineWidth = 0.09 * r; x.lineCap = 'round'; x.beginPath(); x.moveTo(cx, gyy - 0.05 * r); x.lineTo(cx, w[1] - 0.05 * r); x.arc(cx - f * 0.14 * r, w[1] - 0.05 * r, 0.14 * r, f > 0 ? 0 : Math.PI, f > 0 ? -Math.PI : 0, f > 0); x.stroke(); } // walking cane under the front hand
  }
  // rim pass (silhouette in the light colour nudged toward the light) then the figure; returns the skeleton
  function person(x, ch, P, st = {}, light = [0.8, -0.6], rimC = C.rim) {
    const J = rig(ch, P), k = J.r * 0.07; SKIN = ch.skin;
    { const m = x.getTransform(), sx = x.canvas.width / 1280; const hx2 = (m.a * J.hc[0] + m.c * J.hc[1] + m.e) / sx, hy2 = (m.b * J.hc[0] + m.d * J.hc[1] + m.f) / sx, hr2 = J.r * Math.hypot(m.a, m.b) / sx; QC.people.push({ id: ch.name, x: (m.a * J.pel[0] + m.c * J.pel[1] + m.e) / sx, y: (m.b * J.pel[0] + m.d * J.pel[1] + m.f) / sx, face: [hx2 - hr2 * 0.8, hy2 - hr2 * 0.6, hx2 + hr2 * 0.8, hy2 + hr2 * 0.7] }); }
    x.save(); x.translate(light[0] * k, light[1] * k); RIM = rimC; figure(x, J, st); RIM = null; x.restore();
    figure(x, J, st);
    return J;
  }
  // redraw a holding hand (finger block + thumb) on top of the prop it holds
  function handOver(x, J, side, spec, light = [0.8, -0.6], rimC = C.rim) {
    const k = J.r * 0.07; SKIN = J.ch.skin; x.save(); x.translate(light[0] * k, light[1] * k); RIM = rimC; hand(x, J[side], J.r, spec, J.f, J.hc[0], 'over'); RIM = null; x.restore(); hand(x, J[side], J.r, spec, J.f, J.hc[0], 'over');
  }
  // soft contact shadow on the floor under each foot (shrinks as the body lifts)
  function floorShadow(x, J, gy) { const k = cl(1 - (gy - 0.17 * J.r - Math.max(J.lF.a[1], J.lB.a[1])) / (J.h * 0.4)); x.fillStyle = `rgba(20,10,30,${0.35 * k})`; x.beginPath(); x.ellipse((J.lF.a[0] + J.lB.a[0]) / 2 + J.f * 0.2 * J.r, gy, (Math.abs(J.lF.a[0] - J.lB.a[0]) / 2 + 0.6 * J.r) * (0.6 + 0.4 * k), 0.16 * J.r, 0, 0, TAU); x.fill(); }

  // ruler: cream with cm ticks; top at (cx, top); length m; pxm px per metre; width px
  function ruler(x, cx, top, len, pxm, w) {
    const h = len * pxm;
    x.fillStyle = 'rgba(20,10,30,0.3)'; rr(x, cx - w / 2 + 3, top + 4, w, h, 3); x.fill();
    const g = x.createLinearGradient(cx - w / 2, 0, cx + w / 2, 0); g.addColorStop(0, '#fff3d6'); g.addColorStop(1, '#f1c983');
    x.fillStyle = g; rr(x, cx - w / 2, top, w, h, 3); x.fill();
    x.fillStyle = 'rgba(70,40,30,0.75)';
    for (let i = 0; i <= Math.round(len * 100); i++) { const y = top + h - (i / 100) * pxm, tl = i % 10 === 0 ? w * 0.6 : i % 5 === 0 ? w * 0.4 : w * 0.22; x.fillRect(cx + w / 2 - tl, y - 0.5, tl, 1); }
  }
  // a room with a floor (cached): golden window light, baked bokeh, light shafts, wooden floor from y = floorY
  function roomFloor(key, pal, seed, floorY) {
    return cached(key, 1400, 800, (g, w, h) => {
      g.drawImage(roomBG(key + 'w', pal, seed), 0, 0);
      const fy = floorY + 40, fg = g.createLinearGradient(0, fy, 0, h); fg.addColorStop(0, '#6a3f4a'); fg.addColorStop(1, '#2a1830');
      g.fillStyle = fg; g.fillRect(0, fy, w, h - fy);
      g.fillStyle = 'rgba(255,200,150,0.08)'; for (let i = 0; i < 9; i++) g.fillRect(0, fy + 6 + i * i * 4, w, 2);
      const sg = g.createRadialGradient(w * 0.75, fy + 20, 0, w * 0.75, fy + 20, 520); sg.addColorStop(0, 'rgba(255,190,130,0.35)'); sg.addColorStop(1, 'rgba(255,190,130,0)'); g.fillStyle = sg; g.fillRect(0, fy, w, h - fy);
      g.fillStyle = 'rgba(20,10,30,0.4)'; g.fillRect(0, fy - 3, w, 4);
    });
  }

  // ================= TIMELINE (BEATS) =================
  const TL = {
    hook: [0, 3], titleWords: 0.3, wave: [0.6, 1.4], think: [1.45, 2.35], header: [2.4, 2.9],
    drop: [3, 7], tDrop: 4.0, SM: 4, timer: 3.85, slowmo: 3.5, cmLabel: 5.15,
    formula: [7, 10.5], fLine: 7.45, fD: 8.05, fG: 8.6, fT: 9.25,
    ages: [10.5, 13.6], aIn: 10.55, aDrop: 11.05, aBest: 12.7,
    brain: [13.6, 17.6], bSee: 14.25, bDecide: 15.0, bMove: 15.75, // SUBJECT FOCUS: cut away to a big brain (no people)
    front: [17.6, 20.6], fTalk: [17.85, 20.2], fText: 18.3,        // FRONT SHOT: Kai turns to the camera, talks to you
    take: [20.6, 24.2], jump: 21.75, line1: 21.2, line2: 21.75,
    lastText: 22.2, D: 22.2 + 2.0, // ALWAYS 2 s after the last spoken word / last text appears (room for the audio tail)
    cuts: [[3.0, 3.5], [7.0, 7.5], [10.5, 10.95], [13.6, 14.1], [17.6, 18.05], [20.6, 21.1]], // scene changes: the only moments a character may change place instantly
  };
  // d = 1/2 g t^2: t = 0.25 s -> 0.306 m. Typical simple visual reaction 0.2-0.3 s, fastest in the 20s, slower in young
  // children and older adults (illustrative typical values).
  const FACT = { t: 0.25, ages: [['ben', 'boy 8', 0.31], ['mia', 'girl 8', 0.3], ['leo', 'man 24', 0.21], ['kai', 'woman 23', 0.22], ['omar', 'man 45', 0.24], ['rosa', 'woman 72', 0.29], ['ade', 'man 76', 0.31]] };
  const dropD = (t) => 0.5 * G * t * t;
  const REACT = FACT.t, CATCH = TL.tDrop + REACT * TL.SM;
  const PXM = 360; // px per metre in the drop scene: the people AND the ruler use it, so sizes and the fall are to scale

  const HEAD = {
    kai: headRig((t) => {
      let x = 0, y = 0;
      x += 0.15 * eio(seg(t, 0.4, 1.0)) - 0.15 * eio(seg(t, 2.4, 2.9));
      if (t > CATCH) { x -= 0.35 * Math.exp(-(t - CATCH) * 2.2); y -= 0.12 * Math.exp(-(t - CATCH) * 2.2); }
      x += 0.25 * eio(seg(t, TL.fT - 0.2, TL.fT + 0.2)) * (1 - seg(t, 10.2, 10.5));
      if (t > TL.jump - 0.3 && t < TL.jump + 0.8) y += 0.25 * Math.sin(seg(t, TL.jump - 0.3, TL.jump + 0.8) * TAU); // the jump shakes the head: the ponytail answers
      return [x, y];
    }, { len: 2.6 }), // long hair: a longer, slower pendulum
    leo: headRig((t) => [t > TL.tDrop ? 0.15 * Math.exp(-(t - TL.tDrop) * 2) : 0, 0], { len: 0.6 }),
  };
  // every tester flinches at their own catch; Leo keeps his drop-scene rig before the line-up, Kai keeps hers throughout
  FACT.ages.forEach(([id, , rt]) => { if (id === 'kai') return; const ct = TL.aDrop + rt * 4, ln = headRig((t) => [t > ct ? -0.3 * Math.exp(-(t - ct) * 2.4) : 0, 0], { len: 2.0 }), old = HEAD[id]; HEAD[id] = old ? (t) => (t < TL.ages[0] ? old(t) : ln(t)) : ln; });
  const blink = (t, ph) => { const u = (t + ph) % 3.4; return u < 0.13 ? Math.sin((u / 0.13) * Math.PI) : 0; };
  // face state + head physics for a character at t (lean and tilt come from the head spring)
  function stOf(id, t, o = {}) { const s = (HEAD[id] || HEAD.kai)(t); return { s, look: o.look, expr: o.expr, turn: o.turn, blink: blink(t, o.ph || 0), mouth: o.mouth, hair: { th: s.th, th2: s.th2 } }; }
  const breath = (t, ph = 0) => 0.03 * Math.sin(t * 1.7 + ph); // chest rise as a tiny crouch: knees answer through IK

  // ================= CONVERSATION SHOTS: front portrait + over-the-shoulder back view =================
  // Built from the cast's front / back / angled-back views (the line-up sheet). Light to render: each bust is drawn ONCE
  // into cached pictures (body, back hair, head), so a frame is a few drawImage calls plus the live face (eyes, brows,
  // mouth, blinks). The foreground listener is one cached, slightly blurred and darkened picture.
  const LONGH = { long: 1, wavylong: 1, bob: 1, bobbang: 1, shoulder: 1, afro: 1, hijab: 1, curlylong: 1, beadbraids: 1 }; // hair that covers the ears
  // torso seen from the front (fr = true) or the back, in head-radius units around the head centre (0,0)
  function bustTorso(g, ch, R, fr) {
    const A = AGE[ch.age], sw = A.sw * 0.98 * (ch.wide || 1), top = 1.22, col = ch.topC, low = 6.2;
    const path = () => { g.beginPath(); g.moveTo(-sw * R, (top + 0.5) * R); g.quadraticCurveTo(-sw * R, top * R, (-sw + 0.5) * R, top * R); g.lineTo((sw - 0.5) * R, top * R); g.quadraticCurveTo(sw * R, top * R, sw * R, (top + 0.5) * R); g.lineTo(sw * 1.04 * R, low * R); g.lineTo(-sw * 1.04 * R, low * R); g.closePath(); };
    // neck
    g.fillStyle = INK(); g.fillRect(-0.3 * R, 0.4 * R, 0.6 * R, (top + 0.3 - 0.4) * R);
    if (!RIM && fr) { g.fillStyle = shade(ch.skin, -0.25); g.beginPath(); g.ellipse(0, 0.72 * R, 0.32 * R, 0.16 * R, 0, 0, TAU); g.fill(); }
    if (!fr && (ch.top === 'hoodie' || ch.hood)) { g.fillStyle = fc(shade(col, -0.12)); g.beginPath(); g.ellipse(0, (top + 0.25) * R, 0.78 * R, 0.5 * R, 0, 0, TAU); g.fill(); } // hood hanging on the back
    path(); if (RIM) g.fillStyle = RIM; else { const gr = g.createLinearGradient(-sw * R, 0, sw * R, 0); gr.addColorStop(0, shade(col, fr ? 0.12 : -0.05)); gr.addColorStop(1, shade(col, fr ? -0.18 : -0.3)); g.fillStyle = gr; } g.fill();
    if (RIM) return;
    g.save(); path(); g.clip();
    if (ch.pat) patFill(g, -sw * R, top * R, 2 * sw * R, (low - top) * R, ch.pat, col, ch.patC, 0.34 * R);
    if (ch.top === 'crop') { g.fillStyle = INK(); g.fillRect(-sw * R, (top + 1.7) * R, 2 * sw * R, 1.2 * R); g.fillStyle = shade(ch.botC || '#2a2340', 0); g.fillRect(-sw * R, (top + 2.9) * R, 2 * sw * R, (low - top) * R); } // crop top: bare midriff, then the trousers
    if (ch.sleeveC) { g.fillStyle = ch.sleeveC; for (const sd of [-1, 1]) { g.beginPath(); g.moveTo(sd * (sw - 0.4) * R, (top + 0.3) * R); g.lineTo(sd * sw * 1.1 * R, (top + 0.5) * R); g.lineTo(sd * sw * 1.1 * R, low * R); g.lineTo(sd * (sw - 0.36) * R, low * R); g.closePath(); g.fill(); } }
    g.fillStyle = shade(col, -0.22); for (const sd of [-1, 1]) { g.beginPath(); g.moveTo(sd * (sw - 0.42) * R, (top + 0.35) * R); g.lineTo(sd * (sw - 0.36) * R, low * R); g.lineTo(sd * (sw - 0.3) * R, low * R); g.lineTo(sd * (sw - 0.36) * R, (top + 0.4) * R); g.fill(); } // arm seams
    if (ch.poncho) { g.fillStyle = ch.poncho; g.beginPath(); g.moveTo(-sw * 1.1 * R, (top + 0.2) * R); g.lineTo(sw * 1.1 * R, (top + 0.2) * R); g.lineTo(0, (top + 2.6) * R); g.closePath(); g.fill(); g.save(); g.clip(); patFill(g, -sw * R, top * R, 2 * sw * R, 3 * R, 'zigzag', ch.poncho, ch.ponchoC2 || '#1fa39a', 0.32 * R); g.restore(); }
    if (fr) {
      const W2 = C.white;
      if (ch.top === 'jersey') { g.fillStyle = '#f6f1e7'; g.beginPath(); g.ellipse(0, top * R, 0.5 * R, 0.3 * R, 0, 0, Math.PI); g.fill(); g.fillStyle = col; g.beginPath(); g.ellipse(0, top * R, 0.4 * R, 0.2 * R, 0, 0, Math.PI); g.fill(); g.fillStyle = shade(col, -0.35); g.beginPath(); g.arc(0, (top + 1.3) * R, 0.32 * R, 0, TAU); g.fill(); g.fillStyle = '#f6f1e7'; g.font = F(800, Math.round(0.36 * R)); g.textAlign = 'center'; g.fillText(ch.num || '23', 0, (top + 1.43) * R); }
      if (ch.top === 'dashiki') { g.fillStyle = ch.patC2 || '#f5c63c'; g.beginPath(); g.moveTo(-0.5 * R, top * R); g.lineTo(0.5 * R, top * R); g.lineTo(0, (top + 1.1) * R); g.closePath(); g.fill(); g.fillStyle = col; g.beginPath(); g.moveTo(-0.3 * R, top * R); g.lineTo(0.3 * R, top * R); g.lineTo(0, (top + 0.7) * R); g.closePath(); g.fill(); }
      if (ch.top === 'kurta' || ch.top === 'dress') { g.fillStyle = shade(col, -0.3); g.beginPath(); g.ellipse(0, top * R, 0.36 * R, 0.14 * R, 0, 0, Math.PI); g.fill(); if (ch.top === 'kurta') { g.strokeStyle = shade(col, -0.3); g.lineWidth = 0.04 * R; g.beginPath(); g.moveTo(0, top * R); g.lineTo(0, (top + 0.8) * R); g.stroke(); } if (ch.wrap) { g.strokeStyle = shade(ch.patC || col, -0.2); g.lineWidth = 0.1 * R; g.beginPath(); g.moveTo(-0.5 * R, (top + 0.1) * R); g.lineTo(0.6 * R, (top + 1.8) * R); g.stroke(); g.fillStyle = ch.beltC || '#6a3fb0'; g.fillRect(-sw * R, (top + 1.9) * R, 2 * sw * R, 0.16 * R); } }
      if (ch.top === 'crop') { g.fillStyle = shade(col, -0.25); g.beginPath(); g.ellipse(0, top * R, 0.4 * R, 0.16 * R, 0, 0, Math.PI); g.fill(); }
      if (ch.top === 'tee') { g.fillStyle = shade(col, -0.3); g.beginPath(); g.ellipse(0, top * R, 0.42 * R, 0.17 * R, 0, 0, TAU); g.fill(); }
      if (ch.top === 'hoodie') { g.fillStyle = shade(col, -0.25); g.beginPath(); g.ellipse(0, top * R, 0.66 * R, 0.26 * R, 0, 0, TAU); g.fill(); g.strokeStyle = W2; g.lineWidth = 0.05 * R; g.lineCap = 'round'; for (const sd of [-1, 1]) { g.beginPath(); g.moveTo(sd * 0.16 * R, (top + 0.15) * R); g.lineTo(sd * 0.18 * R, (top + 1.0) * R); g.stroke(); } g.fillStyle = shade(col, -0.12); rr(g, -0.8 * R, (top + 2.6) * R, 1.6 * R, 0.9 * R, 0.2 * R); g.fill(); }
      if (ch.top === 'track') { g.fillStyle = shade(col, -0.25); rr(g, -0.42 * R, (top - 0.08) * R, 0.84 * R, 0.3 * R, 0.1 * R); g.fill(); g.strokeStyle = W2; g.lineWidth = 0.05 * R; g.beginPath(); g.moveTo(0, top * R); g.lineTo(0, low * R); g.stroke(); }
      if (ch.top === 'shirt') { g.strokeStyle = shade(col, -0.3); g.lineWidth = 0.04 * R; g.beginPath(); g.moveTo(0, (top + 0.1) * R); g.lineTo(0, low * R); g.stroke(); g.fillStyle = shade(col, -0.35); for (let i = 0; i < 4; i++) { g.beginPath(); g.arc(0.08 * R, (top + 0.45 + i * 0.55) * R, 0.045 * R, 0, TAU); g.fill(); } g.fillStyle = shade(col, 0.22); for (const sd of [-1, 1]) { g.beginPath(); g.moveTo(0, (top + 0.28) * R); g.lineTo(sd * 0.42 * R, (top - 0.06) * R); g.lineTo(sd * 0.1 * R, (top - 0.06) * R); g.closePath(); g.fill(); } }
      if (ch.top === 'overalls') { g.fillStyle = ch.stripeC; for (let k = 0; k < 8; k++) g.fillRect(-sw * R, (top + 0.12 + k * 0.32) * R, 2 * sw * R, 0.12 * R); g.fillStyle = shade(ch.botC, 0.05); rr(g, -0.6 * R, (top + 0.85) * R, 1.2 * R, (low - top) * R, 0.1 * R); g.fill(); g.fillStyle = shade(ch.botC, -0.15); for (const sd of [-1, 1]) g.fillRect(sd * 0.45 * R - 0.07 * R, top * R, 0.14 * R, 0.95 * R); g.fillStyle = shade(ch.botC, -0.3); for (const sd of [-1, 1]) { g.beginPath(); g.arc(sd * 0.45 * R, (top + 0.95) * R, 0.06 * R, 0, TAU); g.fill(); } }
      if (OPENTOP(ch)) { g.fillStyle = ch.innerC || '#f2ebe0'; g.beginPath(); g.moveTo(-0.42 * R, top * R); g.lineTo(0.42 * R, top * R); g.lineTo(0.28 * R, low * R); g.lineTo(-0.28 * R, low * R); g.closePath(); g.fill(); g.fillStyle = shade(col, 0.18); for (const sd of [-1, 1]) { g.beginPath(); g.moveTo(sd * 0.42 * R, top * R); g.lineTo(sd * 0.2 * R, (top + 0.9) * R); g.lineTo(sd * 0.3 * R, (top + 1.0) * R); g.lineTo(sd * 0.6 * R, (top + 0.1) * R); g.closePath(); g.fill(); } if (ch.top === 'denim') { g.strokeStyle = shade(col, 0.3); g.lineWidth = 0.03 * R; g.setLineDash([0.07 * R, 0.06 * R]); for (const sd of [-1, 1]) { g.beginPath(); g.moveTo(sd * 0.45 * R, (top + 1.1) * R); g.lineTo(sd * (sw - 0.4) * R, (top + 1.1) * R); g.stroke(); } g.setLineDash([]); } else if (ch.top === 'blazer' && !ch.pat) { g.fillStyle = shade(col, -0.25); const q = H.rng(5); for (let k = 0; k < 30; k++) { g.beginPath(); g.arc(q.range(-sw, sw) * R, q.range(top, low) * R, 0.05 * R, 0, TAU); g.fill(); } } }
      if (ch.top === 'sweater') { g.fillStyle = ch.innerC || '#f2ebe0'; for (const sd of [-1, 1]) { g.beginPath(); g.moveTo(0, (top + 0.25) * R); g.lineTo(sd * 0.4 * R, (top - 0.04) * R); g.lineTo(sd * 0.1 * R, (top - 0.04) * R); g.closePath(); g.fill(); } g.fillStyle = shade(col, -0.3); g.beginPath(); g.ellipse(0, top * R, 0.42 * R, 0.16 * R, 0, 0, Math.PI); g.fill(); }
      if (ch.top === 'polo') { g.fillStyle = shade(col, 0.15); for (const sd of [-1, 1]) { g.beginPath(); g.moveTo(0, (top + 0.22) * R); g.lineTo(sd * 0.44 * R, (top - 0.05) * R); g.lineTo(sd * 0.1 * R, (top - 0.05) * R); g.closePath(); g.fill(); } g.fillStyle = shade(col, -0.2); g.fillRect(-0.06 * R, (top + 0.1) * R, 0.12 * R, 0.55 * R); g.fillStyle = shade(col, 0.35); for (let k = 0; k < 2; k++) { g.beginPath(); g.arc(0, (top + 0.3 + k * 0.22) * R, 0.04 * R, 0, TAU); g.fill(); } }
      if (ch.top === 'vest') { g.fillStyle = ch.sleeveC; g.beginPath(); g.moveTo(-0.45 * R, top * R); g.lineTo(0.45 * R, top * R); g.lineTo(0, (top + 1.3) * R); g.closePath(); g.fill(); g.strokeStyle = shade(ch.sleeveC, -0.2); g.lineWidth = 0.025 * R; for (let k = -2; k <= 2; k++) { g.beginPath(); g.moveTo(k * 0.12 * R, top * R); g.lineTo(k * 0.12 * R, (top + 0.6) * R); g.stroke(); } g.fillStyle = shade(col, -0.3); for (let i = 0; i < 3; i++) { g.beginPath(); g.arc(0, (top + 1.55 + i * 0.4) * R, 0.05 * R, 0, TAU); g.fill(); } }
      if (ch.top === 'cardigan') { g.fillStyle = ch.innerC || '#f2ebe0'; g.beginPath(); g.moveTo(-0.36 * R, top * R); g.lineTo(0.36 * R, top * R); g.lineTo(0.14 * R, (top + 1.6) * R); g.lineTo(-0.14 * R, (top + 1.6) * R); g.closePath(); g.fill(); g.fillStyle = ch.innerC || '#f2ebe0'; g.fillRect(-0.14 * R, (top + 1.5) * R, 0.28 * R, (low - top) * R); g.fillStyle = shade(col, -0.45); for (let i = 0; i < 3; i++) { g.beginPath(); g.arc(0.24 * R, (top + 1.9 + i * 0.5) * R, 0.05 * R, 0, TAU); g.fill(); } }
    } else {
      if (ch.top === 'shirt' || ch.top === 'track') { g.fillStyle = shade(col, -0.3); rr(g, -0.42 * R, (top - 0.06) * R, 0.84 * R, 0.22 * R, 0.1 * R); g.fill(); }
      g.fillStyle = 'rgba(0,0,0,0.12)'; g.fillRect(-0.02 * R, (top + 0.4) * R, 0.04 * R, (low - top) * R); // back seam
    }
    g.restore();
  }
  // FRONT bust in three cached layers (back hair, body, head); see frontBust for the live part
  function frontLayers(ch, R) {
    const key = 'pf-' + ch.name + R, S = 8 * R, cx = S / 2, cy = 2.2 * R;
    const two = (fn) => (g) => { g.translate(cx, cy); const k = 0.07 * R; g.save(); g.translate(0.8 * k, -0.6 * k); RIM = C.rim; SKIN = ch.skin; fn(g); RIM = null; g.restore(); SKIN = ch.skin; fn(g); };
    const hb = cached(key + 'hb', S, S, two((g) => { // hair behind the head and shoulders
      const col = fc(hairCol(ch)); g.fillStyle = col;
      if (ch.hair === 'long') { g.beginPath(); g.arc(0, 0, 1.1 * R, Math.PI, TAU); g.lineTo(1.2 * R, 3.6 * R); g.quadraticCurveTo(0, 3.9 * R, -1.2 * R, 3.6 * R); g.closePath(); g.fill(); }
      if (ch.hair === 'wavylong') { g.beginPath(); g.arc(0, 0, 1.14 * R, Math.PI, TAU); for (let k = 1; k <= 6; k++) g.quadraticCurveTo((1.32 + (k % 2) * 0.12) * R, (k * 0.5 - 0.2) * R, (1.2 + (k % 2 ? 0.1 : -0.04)) * R, k * 0.5 * R); g.quadraticCurveTo(0, 3.3 * R, -1.2 * R, 3.0 * R); for (let k = 6; k >= 1; k--) g.quadraticCurveTo(-(1.32 + (k % 2) * 0.12) * R, (k * 0.5 - 0.7) * R, -(1.2 + (k % 2 ? 0.1 : -0.04)) * R, (k - 1) * 0.5 * R); g.closePath(); g.fill(); }
      if (BOBH[ch.hair]) { const L = BOBH[ch.hair] * R; g.beginPath(); g.arc(0, 0, 1.15 * R, Math.PI, TAU); g.lineTo(1.2 * R, (L - 0.1 * R)); g.quadraticCurveTo(1.15 * R, L + 0.1 * R, 0.8 * R, L + 0.05 * R); g.lineTo(-0.8 * R, L + 0.05 * R); g.quadraticCurveTo(-1.15 * R, L + 0.1 * R, -1.2 * R, L - 0.1 * R); g.closePath(); g.fill(); }
      if (ch.hair === 'ponytail') { g.beginPath(); g.ellipse(0.95 * R, 0.3 * R, 0.28 * R, 0.85 * R, -0.25, 0, TAU); g.fill(); } // the ponytail peeks out behind one side
      if (ch.hair === 'afro') { g.beginPath(); for (let i = 0; i <= 24; i++) { const a = i * TAU / 24, q = R * (1.6 + 0.07 * Math.sin(i * 2.3)); g.lineTo(Math.cos(a) * q, -0.25 * R + Math.sin(a) * q * 0.95); } g.closePath(); g.fill(); }
      if (ch.hair === 'curlylong') for (let i = 0; i < 18; i++) { const a = Math.PI * (0.7 + i * 0.09); g.beginPath(); g.arc(Math.cos(a) * 1.08 * R, Math.sin(a) * 1.08 * R + (Math.cos(a) > 0.6 || Math.cos(a) < -0.6 ? 0.6 * R : 0), 0.34 * R, 0, TAU); g.fill(); }
      if (ch.hair === 'hijab') { g.fillStyle = fc(ch.scarfC || '#1fa39a'); g.beginPath(); g.moveTo(-1.15 * R, 0); g.quadraticCurveTo(-1.5 * R, 1.6 * R, -1.3 * R, 2.4 * R); g.lineTo(1.3 * R, 2.4 * R); g.quadraticCurveTo(1.5 * R, 1.6 * R, 1.15 * R, 0); g.closePath(); g.fill(); }
      if (ch.hair === 'pigtails') { const w0 = STRANDC; STRANDC = hairCol(ch); for (const sd of [-1, 1]) strand(g, sd * 0.85 * R, -0.5 * R, 1.4 * R, sd * 0.6, sd * 0.35, 0.45 * R); STRANDC = w0; }
      if (ch.hair === 'beadbraids') { g.beginPath(); g.arc(0, 0, 1.08 * R, Math.PI, TAU); g.lineTo(1.1 * R, 3.0 * R); g.lineTo(-1.1 * R, 3.0 * R); g.closePath(); g.fill(); }
      if (ch.hair === 'curly') for (let i = 0; i < 14; i++) { const a = Math.PI * (0.78 + i * 0.11); g.beginPath(); g.arc(Math.cos(a) * R, Math.sin(a) * R, 0.26 * R, 0, TAU); g.fill(); }
      if (!LONGH[ch.hair]) { g.fillStyle = INK(); for (const sd of [-1, 1]) { g.beginPath(); g.ellipse(sd * 0.97 * R, 0.08 * R, 0.16 * R, 0.22 * R, 0, 0, TAU); g.fill(); } } // ears
    }));
    const bd = cached(key + 'bd', S, S, two((g) => bustTorso(g, ch, R, true)));
    const hd = cached(key + 'hd', S, S, two((g) => {
      g.fillStyle = INK(); g.beginPath(); g.arc(0, 0, R, 0, TAU); g.fill();
      if (ch.hair === 'bob' || ch.hair === 'long' || ch.hair === 'wavylong') { g.fillStyle = INK(); for (const sd of [-1, 1]) { g.beginPath(); g.ellipse(sd * 0.95 * R, 0.1 * R, 0.1 * R, 0.16 * R, 0, 0, TAU); g.fill(); } }
      hairCap(g, 0, 0, R, ch, 0);
      if (ch.hair === 'braids') for (const sd of [-1, 1]) braid(g, 0, 0, R, sd, 0, 0, hairCol(ch), false);
      if (ch.hair === 'long') { const w0 = STRANDC; STRANDC = hairCol(ch); for (const sd of [-1, 1]) strand(g, sd * 0.86 * R, -0.25 * R, 2.9 * R, sd * 0.04, sd * 0.02, 0.42 * R); STRANDC = w0; }
      if (ch.hair === 'wavylong') { g.fillStyle = fc(hairCol(ch)); for (const sd of [-1, 1]) { g.beginPath(); g.ellipse(sd * 1.0 * R, 1.0 * R, 0.28 * R, 1.1 * R, sd * 0.1, 0, TAU); g.fill(); } }
      if (ch.hair === 'hijab') { g.fillStyle = fc(ch.scarfC || '#1fa39a'); g.beginPath(); g.moveTo(-0.85 * R, 0.55 * R); g.quadraticCurveTo(0, 1.3 * R, 0.85 * R, 0.55 * R); g.lineTo(1.2 * R, 1.7 * R); g.lineTo(-1.2 * R, 1.7 * R); g.closePath(); g.fill(); }
      if (ch.hair === 'beadbraids') for (const sd of [-1, 1]) { g.fillStyle = fc(hairCol(ch)); g.fillRect(sd * 0.92 * R - 0.06 * R, -0.1 * R, 0.12 * R, 2.4 * R); if (!RIM) { g.fillStyle = sd < 0 ? '#f5c63c' : '#e5383b'; g.beginPath(); g.arc(sd * 0.92 * R, 2.3 * R, 0.08 * R, 0, TAU); g.fill(); } }
      if (ch.earring && !RIM && ch.hair !== 'hijab') { g.strokeStyle = '#e0a63a'; g.lineWidth = 0.05 * R; for (const sd of [-1, 1]) { g.beginPath(); g.arc(sd * 0.98 * R, 0.42 * R, 0.12 * R, 0, TAU); g.stroke(); } }
      if (ch.hat) hat(g, 0, 0, R, ch, 0);
    }));
    return { hb, bd, hd, cx, cy, S };
  }
  // frontBust(x, ch, X, Y, R, st): a front-view portrait (head centre at X,Y, head radius R; body runs off the bottom).
  // st: expr, look, mouth (0..1 while talking), blink, nod (head-radius units), tilt (rad), breath (0..1 phase value)
  function frontBust(x, ch, X, Y, R, st = {}) {
    const L = frontLayers(ch, R), by = (st.breath || 0) * 0.04 * R, hx = X + (st.dx || 0) * R, hy = Y + (st.nod || 0) * R + by * 0.6, tl = st.tilt || 0;
    const head = (img) => { x.save(); x.translate(hx, hy); x.rotate(tl); x.drawImage(img, -L.cx, -L.cy); x.restore(); };
    head(L.hb); x.drawImage(L.bd, X - L.cx, Y - L.cy + by); head(L.hd);
    x.save(); x.translate(hx, hy); x.rotate(tl); SKIN = ch.skin; face(x, 0, 0, R, ch, { ...st, front: true }); x.restore();
    { const m = x.getTransform(), sx = x.canvas.width / 1280, P = (a, b) => [(m.a * a + m.c * b + m.e) / sx, (m.b * a + m.d * b + m.f) / sx], c = P(hx, hy), s = R * Math.hypot(m.a, m.b) / sx; QC.people.push({ id: ch.name, x: c[0], y: c[1], face: [c[0] - s * 0.8, c[1] - s * 0.6, c[0] + s * 0.8, c[1] + s * 0.7] }); }
  }
  // backBust: one cached picture of a character seen from BEHIND (head + shoulders), turned by ang (-1..1) so a sliver
  // of cheek, jaw and ear shows on that side (the side of the person they are talking to). o.blur / o.dark bake the
  // foreground look (soft focus, darker than the subject).
  function backBust(ch, R, ang = 0, o = {}) {
    const key = 'pb-' + ch.name + R + '-' + ang + '-' + (o.blur || 0) + '-' + (o.dark || 0), S = 8 * R, cx = S / 2, cy = 2.2 * R;
    return { cx, cy, img: cached(key, S, S, (g) => {
      const draw = () => {
        const col = fc(hairCol(ch)), hc = hairCol(ch), sk = INK();
        if (ch.hair === 'long') { g.fillStyle = col; } // drawn after the torso (covers the back)
        bustTorso(g, ch, R, false);
        // ears (the one on the turned side shows more)
        g.fillStyle = sk; for (const sd of [-1, 1]) { if (LONGH[ch.hair] && sd !== Math.sign(ang)) continue; g.beginPath(); g.ellipse(sd * (0.96 + (sd === Math.sign(ang) ? 0.04 : -0.04)) * R, 0.1 * R, 0.15 * R, 0.21 * R, 0, 0, TAU); g.fill(); }
        // head: skin, then the hair seen from behind; a sliver of cheek / jaw stays on the turned side
        g.fillStyle = sk; g.beginPath(); g.arc(0, 0, R, 0, TAU); g.fill();
        if (ch.beard && ang) { g.save(); g.beginPath(); g.arc(0, 0, R * 1.01, 0, TAU); g.clip(); g.fillStyle = col; g.beginPath(); g.ellipse(Math.sign(ang) * 0.95 * R, 0.55 * R, 0.32 * R, 0.5 * R, 0, 0, TAU); g.fill(); g.restore(); }
        const cut = ang * 0.22 * R; // hair circle shifted away from the turned side: the skin crescent is the cheek
        g.fillStyle = col;
        if (ch.hair === 'none' || ch.hair === 'hijab') { /* shaved head / the scarf is drawn below */ }
        else if (ch.hair === 'bald') { g.save(); g.beginPath(); g.arc(0, 0, R * 1.03, 0, TAU); g.clip(); g.beginPath(); g.moveTo(-1.2 * R, 0.05 * R); g.quadraticCurveTo(0, -0.12 * R, 1.2 * R, 0.05 * R); g.lineTo(1.2 * R, 0.62 * R); g.quadraticCurveTo(0, 0.82 * R, -1.2 * R, 0.62 * R); g.closePath(); g.fill(); g.restore(); if (!RIM) { g.fillStyle = 'rgba(255,255,255,0.12)'; g.beginPath(); g.ellipse(-0.3 * R, -0.5 * R, 0.35 * R, 0.22 * R, -0.4, 0, TAU); g.fill(); } } // nearly bald: skin dome on top, a white fringe band round the back, a shine
        else {
          const tight = ch.hair === 'crew' || ch.hair === 'fade' ? 1.0 : 1.06, nape = { crew: 1, sidepart: 1, wavy: 1, curly: 1, messy: 1, fade: 1, sideswept: 1, ponytail: 1, locs: 1, pigtails: 1, puffs: 1, hbun: 1 }[ch.hair] ? 0.62 : 1.0;
          g.save(); g.beginPath(); g.rect(-2 * R, -2 * R, 4 * R, (2 + nape) * R); g.clip(); g.beginPath(); g.arc(-cut, 0, R * tight, 0, TAU); g.fill(); g.restore();
          if (nape < 1) { g.beginPath(); g.ellipse(-cut, nape * R, 0.82 * R * tight, 0.18 * R, 0, 0, Math.PI); g.fill(); }
        }
        if (ch.hair === 'curly') for (let i = 0; i < 16; i++) { const a = Math.PI * (0.75 + i * 0.1); g.beginPath(); g.arc(-cut + Math.cos(a) * R, Math.sin(a) * R, 0.27 * R, 0, TAU); g.fill(); }
        if (ch.hair === 'afro') { g.beginPath(); for (let i = 0; i <= 24; i++) { const a = i * TAU / 24, q = R * (1.6 + 0.07 * Math.sin(i * 2.3)); g.lineTo(-cut * 0.5 + Math.cos(a) * q, -0.25 * R + Math.sin(a) * q * 0.95); } g.closePath(); g.fill(); }
        if (ch.hair === 'curlylong') for (let i = 0; i < 20; i++) { const a = Math.PI * (0.65 + i * 0.085); g.beginPath(); g.arc(-cut + Math.cos(a) * 1.05 * R, Math.sin(a) * 1.05 * R + (Math.sin(a) > -0.3 ? 0.4 * R : 0), 0.34 * R, 0, TAU); g.fill(); }
        if (ch.hair === 'locs') for (let i = 0; i < 12; i++) { const a = Math.PI * (0.9 + i * 0.11); g.save(); g.translate(-cut + Math.cos(a) * 0.9 * R, Math.sin(a) * 0.9 * R); g.rotate(a + Math.PI / 2); rr(g, -0.07 * R, -0.5 * R, 0.14 * R, 0.55 * R, 0.07 * R); g.fill(); g.restore(); }
        if (ch.hair === 'pigtails') for (const sd of [-1, 1]) { g.beginPath(); g.ellipse(-cut + sd * 1.0 * R, 0.1 * R, 0.25 * R, 0.7 * R, sd * 0.4, 0, TAU); g.fill(); }
        if (ch.hair === 'puffs') for (const sd of [-1, 1]) { g.beginPath(); g.arc(-cut + sd * 0.72 * R, -0.82 * R, 0.42 * R, 0, TAU); g.fill(); }
        if (ch.hair === 'hbun') { g.beginPath(); g.arc(-cut, -1.1 * R, 0.45 * R, 0, TAU); g.fill(); }
        if (ch.hair === 'beadbraids') { g.beginPath(); g.arc(-cut, 0, 1.08 * R, Math.PI, TAU); g.lineTo(-cut + 1.1 * R, 3.2 * R); g.lineTo(-cut - 1.1 * R, 3.2 * R); g.closePath(); g.fill(); if (!RIM) for (let i = 0; i < 8; i++) { const bx = -cut - 0.95 * R + i * 0.27 * R; g.strokeStyle = shade(hc, 0.22); g.lineWidth = 0.03 * R; g.beginPath(); g.moveTo(bx, -0.5 * R); g.lineTo(bx, 3.1 * R); g.stroke(); g.fillStyle = ['#f5c63c', '#e5383b', '#f6f1e7'][i % 3]; for (let b = 0; b < 3; b++) { g.beginPath(); g.arc(bx, (0.8 + b * 0.9) * R, 0.07 * R, 0, TAU); g.fill(); } g.fillStyle = col; } }
        if (ch.hair === 'hijab') { g.fillStyle = fc(ch.scarfC || '#1fa39a'); g.beginPath(); g.arc(0, -0.05 * R, R * 1.16, Math.PI, TAU); g.lineTo(1.3 * R, 2.4 * R); g.lineTo(-1.3 * R, 2.4 * R); g.closePath(); g.fill(); }
        if (ch.hat === 'capback') { g.fillStyle = fc(ch.hatC); g.beginPath(); g.ellipse(0, -0.2 * R, 1.1 * R, 0.9 * R, 0, Math.PI, TAU); g.fill(); g.fillStyle = fc(shade(ch.hatC, -0.1)); g.beginPath(); g.ellipse(0, -0.3 * R, 0.55 * R, 0.16 * R, 0, 0, TAU); g.fill(); }
        if (ch.hair === 'messy') for (let i = 0; i < 8; i++) { const a = Math.PI * (1.0 + i * 0.14); g.beginPath(); g.ellipse(-cut + Math.cos(a) * R, Math.sin(a) * R, 0.26 * R, 0.16 * R, a + 0.4, 0, TAU); g.fill(); }
        if (ch.hair === 'fade') for (let i = 0; i < 8; i++) { const a = Math.PI * (1.1 + i * 0.11); g.beginPath(); g.arc(-cut + Math.cos(a) * 0.88 * R, Math.sin(a) * 0.88 * R, 0.21 * R, 0, TAU); g.fill(); }
        if (ch.hair === 'ponytail') { g.beginPath(); g.ellipse(-cut, 1.1 * R, 0.26 * R, 0.95 * R, 0, 0, TAU); g.fill(); if (!RIM) { g.fillStyle = ch.tieC || '#e5383b'; g.beginPath(); g.ellipse(-cut, 0.2 * R, 0.16 * R, 0.08 * R, 0, 0, TAU); g.fill(); g.fillStyle = col; } }
        if (ch.hair === 'wavy') for (let i = 0; i < 6; i++) { const a = Math.PI * (1.08 + i * 0.17); g.beginPath(); g.ellipse(-cut + Math.cos(a) * R, Math.sin(a) * R, 0.24 * R, 0.17 * R, a, 0, TAU); g.fill(); }
        if (ch.hair === 'long') { g.beginPath(); g.arc(-cut, 0, 1.08 * R, Math.PI, TAU); g.lineTo(-cut + 1.12 * R, 4.6 * R); g.lineTo(-cut - 1.12 * R, 4.6 * R); g.closePath(); g.fill(); }
        if (ch.hair === 'wavylong') { g.beginPath(); g.arc(-cut, 0, 1.12 * R, Math.PI, TAU); for (let k = 1; k <= 6; k++) g.quadraticCurveTo(-cut + (1.3 + (k % 2) * 0.12) * R, (k * 0.55 - 0.25) * R, -cut + (1.18 + (k % 2 ? 0.08 : -0.05)) * R, k * 0.55 * R); g.quadraticCurveTo(-cut, 3.7 * R, -cut - 1.18 * R, 3.3 * R); for (let k = 6; k >= 1; k--) g.quadraticCurveTo(-cut - (1.3 + (k % 2) * 0.12) * R, (k * 0.55 - 0.8) * R, -cut - (1.18 + (k % 2 ? 0.08 : -0.05)) * R, (k - 1) * 0.55 * R); g.closePath(); g.fill(); }
        if (BOBH[ch.hair]) { const L = BOBH[ch.hair]; g.beginPath(); g.arc(-cut, 0, 1.15 * R, Math.PI, TAU); g.lineTo(-cut + 1.2 * R, (L - 0.1) * R); g.quadraticCurveTo(-cut, (L + 0.2) * R, -cut - 1.2 * R, (L - 0.1) * R); g.closePath(); g.fill(); }
        if (ch.hair === 'braids') { if (!RIM) { g.strokeStyle = shade(hc, 0.25); g.lineWidth = 0.035 * R; g.beginPath(); g.moveTo(-cut, -1.0 * R); g.lineTo(-cut, 0.9 * R); g.stroke(); } g.fillStyle = col; for (const sd of [-1, 1]) braid(g, -cut, 0.2 * R, R, sd, 0, 0, hc, false); }
        if (ch.hair === 'bun') { g.fillStyle = col; g.beginPath(); g.arc(-cut, -0.95 * R, 0.42 * R, 0, TAU); g.fill(); if (false) { g.strokeStyle = '#1b120e'; g.lineWidth = 0.05 * R; g.beginPath(); g.moveTo(Math.sign(ang) * 0.7 * R, -0.05 * R); g.lineTo(Math.sign(ang) * 1.12 * R, -0.12 * R); g.stroke(); } }
        if (ch.glasses && !RIM && ang) { g.strokeStyle = '#1b120e'; g.lineWidth = 0.05 * R; g.beginPath(); g.moveTo(Math.sign(ang) * 0.7 * R, -0.05 * R); g.lineTo(Math.sign(ang) * 1.12 * R, -0.12 * R); g.stroke(); }
        if (ch.hair === 'wavylong' && !RIM && ang && !ch.noband) { g.strokeStyle = fc(ch.bandC || '#ffc857'); g.lineWidth = 0.1 * R; g.beginPath(); g.arc(-cut, 0.05 * R, 1.0 * R, Math.PI * (ang > 0 ? 1.65 : 1.12), Math.PI * (ang > 0 ? 1.88 : 1.35)); g.stroke(); }
      };
      g.translate(cx, cy); const k = 0.07 * R; SKIN = ch.skin;
      g.save(); g.translate(0.8 * k, -0.6 * k); RIM = C.rim; draw(); RIM = null; g.restore(); draw();
      if (o.dark) { g.setTransform(1, 0, 0, 1, 0, 0); g.globalCompositeOperation = 'source-atop'; g.fillStyle = `rgba(20,12,30,${o.dark})`; g.fillRect(0, 0, S, S); g.globalCompositeOperation = 'source-over'; }
      if (o.blur) { const b = blurImg(g.canvas, o.blur); g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, S, S); g.drawImage(b, 0, 0); }
    }) };
  }
  // OVER-THE-SHOULDER conversation shot. o = { bg, speaker: id, listener: id, side: 'L'|'R' (where the listener's back
  // is), st: speaker state (expr, look, mouth, blink, nod, tilt, breath), lb: listener breath/nod }.
  // Speaker: front portrait, head at about a third of the frame on the open side, eyes on the listener.
  // Listener: big, close to the camera, seen from behind and turned toward the speaker, cut by the frame edge, soft and
  // darker (foreground). Reverse shot = swap speaker and listener and mirror side.
  function otsShot(x, t, o) {
    const sd = o.side === 'R' ? -1 : 1, sp = CH(o.speaker), ls = CH(o.listener);
    if (o.bg) x.drawImage(o.bg, -60 + (o.drift || 0) * Math.sin(t * 0.3) * 6, -40, 1400, 800);
    const R = o.R || 92, X = 640 + sd * 170, Y = 300;
    frontBust(x, sp, X, Y, R, { look: [-sd * 0.55, 0.08], ...o.st });
    const RL = o.RL || 170, B = backBust(ls, RL, sd, { blur: 3, dark: 0.32 }), lx = 640 - sd * 420, ly = 470 + (o.lb ? o.lb.nod || 0 : 0) * RL + Math.sin(t * 1.6) * 2;
    x.drawImage(B.img, lx - B.cx, ly - B.cy);
    QC.people.push({ id: ls.name, x: lx, y: ly });
  }

  // ================= POSES (characters act: they never just walk back and forth) =================
  // pose(ch, P, name, u, o): P with the arms / lean / tilt / drop of a named pose. u = 0..1 blends from P's own pose to
  // the named one (ease it in over ~0.35 s: u = eio(seg(t, t0, t0 + 0.35)) * (1 - eio(seg(t, t1, t1 + 0.35)))).
  // Chain poses to go from one to the next: pose(ch, pose(ch, P, 'explain', u1), 'point', u2). o.t = time (wave swing).
  // Pick the pose from what the line MEANS: explaining = explain / present, an idea = idea, wondering = think / scratch,
  // a problem = worry / shrug, success = cheer / thumbs, greeting = wave, pointing at a thing = point, confident = hips,
  // waiting or unconvinced = cross. Change pose on every beat (every 2-4 s); walking is only for getting somewhere.
  const POSES = {
    explain: (J, L) => ({ aF: { to: [J.shF[0] + J.f * 0.9 * L, J.shF[1] + 0.55 * L] }, hF: { m: 'open', view: 'front' }, aB: { to: [J.shB[0] + J.f * 0.55 * L, J.shB[1] + 0.75 * L] }, lean: 0.04 }),
    present: (J, L) => ({ aF: { to: [J.shF[0] + J.f * 1.15 * L, J.shF[1] + 0.3 * L] }, hF: { m: 'open', view: 'front' }, aB: { to: [J.shB[0] + J.f * 0.85 * L, J.shB[1] + 0.45 * L] }, hB: { m: 'open', view: 'front' }, lean: -0.03 }),
    point: (J, L) => ({ aF: { to: [J.shF[0] + J.f * 1.3 * L, J.shF[1] + 0.05 * L] }, hF: { m: 'point' }, lean: 0.05 }),
    idea: (J, L) => ({ aF: { to: [J.shF[0] - J.f * 0.38 * L, J.shF[1] - 0.78 * L], pref: [-J.f, 0.6] }, hF: { m: 'point' }, tilt: -0.08 }),
    think: (J, L) => ({ aF: { to: [J.hc[0] + J.f * 0.45 * J.r, J.hc[1] + 1.05 * J.r] }, hF: { m: 'fist' }, aB: { to: [J.nb[0] + J.f * 0.15 * L, J.nb[1] + 0.8 * L] }, tilt: 0.12 }),
    scratch: (J, L) => ({ aF: { to: [J.hc[0] - J.f * 0.75 * J.r, J.hc[1] - 0.25 * J.r], pref: [-J.f, -0.2] }, hF: { m: 'open' }, tilt: 0.1 }),
    worry: (J, L) => ({ aF: { to: [J.hc[0] + J.f * 0.35 * J.r, J.hc[1] + 1.25 * J.r] }, hF: { m: 'open', view: 'front' }, aB: { to: [J.hc[0] + J.f * 0.75 * J.r, J.hc[1] + 1.3 * J.r] }, hB: { m: 'open', view: 'front' }, drop: 0.1, lean: -0.04 }),
    shrug: (J, L) => ({ aF: { to: [J.shF[0] - J.f * 0.45 * L, J.shF[1] + 0.55 * L], pref: [-J.f, 1] }, hF: { m: 'open', view: 'front' }, aB: { to: [J.shB[0] + J.f * 0.55 * L, J.shB[1] + 0.55 * L] }, hB: { m: 'open', view: 'front' }, tilt: 0.14 }),
    cheer: (J, L) => ({ aF: { to: [J.shF[0] - J.f * 0.25 * L, J.shF[1] - 1.05 * L], pref: [-J.f, 0] }, hF: { m: 'fist' }, aB: { to: [J.shB[0] + J.f * 0.3 * L, J.shB[1] - 1.05 * L], pref: [J.f, 0] }, hB: { m: 'fist' }, tilt: -0.06 }),
    thumbs: (J, L) => ({ aF: { to: [J.shF[0] + J.f * 0.75 * L, J.shF[1] + 0.35 * L] }, hF: { m: 'thumb' } }),
    wave: (J, L, o) => ({ aF: { to: [J.shF[0] - J.f * 0.45 * L + Math.sin((o.t || 0) * 7) * 0.2 * L, J.shF[1] - 0.85 * L], pref: [-J.f, 0.6] }, hF: { m: 'open', view: 'front' } }),
    hips: (J, L) => ({ aF: { to: [J.pel[0] - J.f * 0.55 * J.r, J.pel[1] - 0.15 * J.r], pref: [-J.f, 0] }, hF: { m: 'fist' }, aB: { to: [J.pel[0] + J.f * 0.6 * J.r, J.pel[1] - 0.15 * J.r], pref: [J.f, 0] }, hB: { m: 'fist' }, lean: -0.03 }),
    cross: (J, L) => ({ aF: { to: [J.nb[0] + J.f * 0.75 * J.r, J.nb[1] + 1.45 * J.r] }, hF: { m: 'fist' }, aB: { to: [J.nb[0] - J.f * 0.45 * J.r, J.nb[1] + 1.35 * J.r] }, hB: { m: 'fist' }, lean: -0.04 }),
  };
  function pose(ch, P, name, u = 1, o = {}) {
    if (!(u > 0) || !POSES[name]) return P;
    const J = rig(ch, P), q = POSES[name](J, J.torso, o), out = { ...P }, e = eio(cl(u, 0, 1));
    for (const k of ['aF', 'aB']) if (q[k]) {
      if (q[k].a) { const tg = rig(ch, { ...P, [k]: q[k] })[k].w; out[k] = { to: mixP(J[k].w, tg, e) }; }
      else out[k] = { to: mixP(J[k].w, q[k].to, e), pref: q[k].pref };
    }
    if (q.hF && e > 0.5) out.hF = { ...(P.hF || {}), ...q.hF };
    if (q.hB && e > 0.5) out.hB = { ...(P.hB || {}), ...q.hB };
    for (const k of ['lean', 'tilt', 'drop', 'lift']) if (q[k] != null) out[k] = lerp(P[k] || 0, q[k], e);
    return out;
  }

  // ================= TITLE (LOCKED: the same font, size and corner position in EVERY video) =================
  // Never change TITLE_LOCK. The title text is "<number>. <title>" when the video is part of a numbered list
  // (titleText(1, 'Finding Reasons to Be Physically Close to You') -> '1. Finding Reasons to Be Physically Close to You'):
  // a number, a period, a space, then the title. Never '#', never ':'. Without a number it is just the title.
  //   titleIntro(x, t, o): the big intro title, placed anywhere (o.at, free per video): the number big in amber above,
  //     then the title WRAPPED onto lines inside o.maxW (never cut, never squeezed, normal word spaces), words pop in one
  //     by one from o.t0; o.hl = words drawn in amber. o = { text, num, t0, at: [cx, cy], maxW: 760, px: 64, hl: [] }
  //   titleFly(x, t, o): titleIntro, then between o.fly[0] and o.fly[1] it shrinks and flies into the corner header.
  //   headerPill(x, text, a): the header, ALWAYS at the same place: pill left edge x 24, centre y 44, Baloo 2 700 28 px.
  //     Call it on every frame after the fly (it stays there until the end).
  const TITLE_LOCK = { x: 24, y: 44, px: 28, w: 700, introW: 800, numPx: 92, dot: '#ffc857' };
  const titleText = (num, s) => (num != null && num !== '' ? num + '. ' : '') + s;
  function headerPill(x, text, a = 1) {
    if (a <= 0.01) return; const L = TITLE_LOCK, c = document.createElement('canvas').getContext('2d'); c.font = F(L.w, L.px);
    const w = c.measureText(text).width + L.px * 1.2 + L.px * 0.9; pill(x, L.x + w / 2, L.y, text, L.px, { a, dot: L.dot, w: L.w, group: 'title' });
  }
  function titleLines(x, words, px, maxW) {
    x.font = F(TITLE_LOCK.introW, px); const sp = x.measureText(' ').width, lines = [[]]; let lw = 0;
    for (const w of words) { const ww = x.measureText(w).width; if (lines[lines.length - 1].length && lw + sp + ww > maxW) { lines.push([]); lw = 0; } lines[lines.length - 1].push({ w, ww }); lw += (lw ? sp : 0) + ww; }
    return { lines, sp };
  }
  function titleIntro(x, t, o) {
    const px = o.px || 64, [cx, cy] = o.at || [640, 300], words = o.text.split(/\s+/), hl = (o.hl || []).map((s) => s.toLowerCase());
    const { lines, sp } = titleLines(x, words, px, o.maxW || 760), lh = px * 1.12, hasN = o.num != null && o.num !== '';
    const top = cy - ((lines.length - 1) * lh) / 2 + (hasN ? TITLE_LOCK.numPx * 0.45 : 0); let k = 0;
    if (hasN) { const u = back(seg(t, o.t0 || 0, (o.t0 || 0) + 0.4), 1.6); if (u > 0) { x.save(); x.translate(cx, top - lh * 0.5 - TITLE_LOCK.numPx * 0.6); x.scale(u, u); title(x, String(o.num), 0, 0, TITLE_LOCK.numPx, C.amber, { group: 'title' }); x.restore(); } }
    lines.forEach((ln, i) => { const tw = ln.reduce((s, q) => s + q.ww, 0) + sp * (ln.length - 1); let wx = cx - tw / 2;
      for (const q of ln) { const u = back(seg(t, (o.t0 || 0) + 0.15 + k * 0.12, (o.t0 || 0) + 0.55 + k * 0.12), 1.4); k++;
        if (u > 0) { x.save(); x.translate(wx + q.ww / 2, top + i * lh + (1 - u) * 24); x.scale(u, u); title(x, q.w, 0, 0, px, hl.includes(q.w.toLowerCase().replace(/[^a-z0-9']/g, '')) ? C.amber : C.white, { group: 'title', w: TITLE_LOCK.introW }); x.restore(); }
        wx += q.ww + sp; } });
  }
  function titleFly(x, t, o) {
    const u = eio(seg(t, o.fly[0], o.fly[1]));
    if (u < 1) { const [cx, cy] = o.at || [640, 300], k = lerp(1, 0.35, u); x.save(); x.globalAlpha *= 1 - u; x.translate(lerp(cx, 200, u), lerp(cy, TITLE_LOCK.y, u)); x.scale(k, k); x.translate(-cx, -cy); titleIntro(x, t, o); x.restore(); }
    headerPill(x, titleText(o.num, o.text), seg(u, 0.55, 1));
  }

  // ================= ACTIVITIES (a body pose for the whole person, not just the arms) =================
  // act(ch, P, name, o) -> { P, prop }: whole-body activities that make scenes lively. Draw any furniture first, then
  // person(x, ch, A.P, st), then A.prop(x, J) (the cup / phone / book / remote on top of the hand).
  //   stand (default) | sit (o.seat m, default 0.46 = a chair; 0.42 = a sofa) | tv (sit + a remote, eyes on the TV) |
  //   lean (back against a wall, one foot crossed, arms crossed) | drink (a cup at the mouth, o.sip 0..1) |
  //   phone (looking down at a phone in both hands) | read (an open book) | walk (o.dist metres walked) |
  //   run (o.dist metres run: longer stride, forward lean, bent arms).
  // o.pxm = px per metre of the shot (needed for sit / walk / run). Combine with POSES for the arms when it fits
  // (pose(ch, act(...).P, 'explain')). Pick a different activity for each scene so the video never looks the same.
  function propCup(x, p, r, ang, col = '#e5383b') { x.save(); x.translate(p[0], p[1]); x.rotate(ang); x.fillStyle = col; rr(x, -0.17 * r, -0.26 * r, 0.34 * r, 0.42 * r, 0.06 * r); x.fill(); x.fillStyle = shade(col, -0.2); x.beginPath(); x.ellipse(0.24 * r, -0.05 * r, 0.1 * r, 0.12 * r, 0, 0, TAU); x.fill(); x.fillStyle = shade(col, 0.3); x.fillRect(-0.17 * r, -0.26 * r, 0.34 * r, 0.07 * r); x.restore(); }
  function propPhone(x, p, r, ang) { x.save(); x.translate(p[0], p[1]); x.rotate(ang); x.fillStyle = '#1f1b2a'; rr(x, -0.16 * r, -0.28 * r, 0.32 * r, 0.56 * r, 0.06 * r); x.fill(); x.fillStyle = '#5cd6ff'; rr(x, -0.12 * r, -0.23 * r, 0.24 * r, 0.44 * r, 0.03 * r); x.fill(); x.restore(); }
  function propBook(x, p, r, ang, col = '#3d6fb6') { x.save(); x.translate(p[0], p[1]); x.rotate(ang); x.fillStyle = col; rr(x, -0.55 * r, -0.3 * r, 1.1 * r, 0.6 * r, 0.05 * r); x.fill(); x.fillStyle = '#f6f1e7'; rr(x, -0.5 * r, -0.26 * r, 0.48 * r, 0.52 * r, 0.03 * r); x.fill(); rr(x, 0.02 * r, -0.26 * r, 0.48 * r, 0.52 * r, 0.03 * r); x.fill(); x.fillStyle = '#d8d0c0'; for (let i = 0; i < 4; i++) { x.fillRect(-0.44 * r, (-0.16 + i * 0.1) * r, 0.36 * r, 0.035 * r); x.fillRect(0.08 * r, (-0.16 + i * 0.1) * r, 0.36 * r, 0.035 * r); } x.restore(); }
  function propRemote(x, p, r, ang) { x.save(); x.translate(p[0], p[1]); x.rotate(ang); x.fillStyle = '#2a2632'; rr(x, -0.06 * r, -0.08 * r, 0.5 * r, 0.16 * r, 0.06 * r); x.fill(); x.fillStyle = '#ff4d5e'; x.beginPath(); x.arc(0.36 * r, 0, 0.035 * r, 0, TAU); x.fill(); x.restore(); }
  function act(ch, P, name, o = {}) {
    const A = AGE[ch.age], r = P.h / (A.hd * 2), f = P.f || 1, pxm = o.pxm || 300, hipH = P.h * A.leg, foot = 0.17 * r, thigh = (hipH - foot) / 2, gy = P.gy;
    const sitP = (seat) => ({ ...P, drop: (hipH - seat * pxm) / r, lean: -0.04, fF: [P.x + f * thigh * 0.98, gy - foot], fB: [P.x + f * (thigh * 0.9 + 0.12 * r), gy - foot] });
    if (name === 'sit') return { P: { ...sitP(o.seat || 0.46), aF: { a: [0.45, 0.6] }, aB: { a: [0.4, 0.6] } } };
    if (name === 'tv') { const q = sitP(o.seat || 0.42), J = rig(ch, q), L = J.torso; return { P: { ...q, aF: { to: [J.shF[0] + f * 0.62 * L, J.shF[1] + 0.62 * L] }, hF: { m: 'fist' }, aB: { a: [0.35, 0.5] } }, prop: (x, J2) => propRemote(x, J2.aF.w, J2.r, f > 0 ? -0.2 : Math.PI + 0.2) }; }
    if (name === 'lean') return { P: pose(ch, { ...P, lean: -0.1, tilt: 0.06, fF: [P.x - f * 0.05 * r, gy - foot], fB: [P.x + f * 0.55 * r, gy - foot] }, 'cross') };
    if (name === 'drink') { const J = rig(ch, P), sip = o.sip == null ? 1 : o.sip, m = [J.hc[0] + f * 0.75 * J.r, J.hc[1] + 0.85 * J.r], low = [J.shF[0] + f * 0.6 * J.torso, J.shF[1] + 0.6 * J.torso], w = mixP(low, m, eio(sip));
      return { P: { ...P, aF: { to: w }, hF: { m: 'fist' }, tilt: -0.1 * sip }, prop: (x, J2) => propCup(x, [J2.aF.w[0] + f * 0.12 * J2.r, J2.aF.w[1] - 0.1 * J2.r], J2.r, f * (-0.15 - 0.5 * sip)) }; }
    if (name === 'phone' || name === 'read') { const J = rig(ch, P), c0 = [J.nb[0] + f * 0.75 * J.r, J.nb[1] + 1.55 * J.r];
      return { P: { ...P, aF: { to: [c0[0] - f * 0.15 * J.r, c0[1] + 0.1 * J.r] }, hF: { m: 'fist' }, aB: { to: [c0[0] + f * 0.25 * J.r, c0[1] + 0.05 * J.r] }, hB: { m: 'fist' }, tilt: 0.16, lean: 0.03 },
        prop: (x, J2) => (name === 'phone' ? propPhone(x, c0, J2.r, f * 0.25) : propBook(x, [c0[0], c0[1] - 0.05 * J2.r], J2.r, f * 0.12)) }; }
    if (name === 'walk') return { P: walkPose(ch, P.x, gy, P.h, f, o.dist || 0, pxm) };
    if (name === 'run') { const S = hipH / pxm * 2.2, ph = ((o.dist || 0) / S) % 1, legL = hipH;
      const fp = (p) => { p = ((p % 1) + 1) % 1; const st = 0.45; if (p < st) return [(0.5 - p / st) * S * pxm * 0.55, 0]; const q = (p - st) / (1 - st); return [(-0.5 + q) * S * pxm * 0.55, -Math.sin(q * Math.PI) * 0.3 * legL]; };
      const fa = fp(ph), fb = fp(ph + 0.5), up = Math.abs(Math.sin(ph * TAU * 2)) * 0.12 * r, sw = Math.sin(ph * TAU) * 0.7;
      return { P: { ...P, lean: 0.17, drop: 0.12, lift: up, fF: [P.x + f * fa[0], gy - foot + fa[1]], fB: [P.x + f * fb[0], gy - foot + fb[1]], aF: { a: [0.15 - sw, 1.25] }, aB: { a: [0.15 + sw, 1.25] }, hF: { m: 'fist' }, hB: { m: 'fist' } } }; }
    return { P };
  }

  // ================= THINKING, SHOWN MANY WAYS (not always the brain) =================
  // thinkFx(x, t, kind, head, r, o): an effect above / around a thinking character's head (head = [x, y], r = head radius).
  //   'bulb' (an idea: a light bulb pops on with rays) | 'gears' (working it out: two gears turning) |
  //   'question' (puzzled: question marks bob up) | 'spark' (a sudden idea: a star burst) | 'dots' (pondering: three
  //   dots fill one by one) | 'swirl' (confused: a spiral spins). The brain close-up (focusShot) is only ONE option, use
  //   it at most once per video; mix these with thought bubbles holding a little picture, a whiteboard doodle, a
  //   character pacing or tapping the chin, a list of options appearing beside them, a lightning bolt, a scale weighing two ideas.
  function thinkFx(x, t, kind, head, r, o = {}) {
    const t0 = o.t0 || 0, u = back(seg(t, t0, t0 + 0.4)), X = head[0] + (o.dx || 0.2) * r, Y = head[1] - 1.9 * r; if (u <= 0) return;
    x.save(); x.translate(X, Y); x.scale(u, u);
    if (kind === 'bulb') { const on = seg(t, t0 + 0.3, t0 + 0.45); if (on > 0) { x.fillStyle = H.rgba('#fff2a8', 0.35 * on); x.beginPath(); x.arc(0, -0.1 * r, 0.95 * r, 0, TAU); x.fill(); x.fillStyle = '#ffd84a'; for (let i = 0; i < 8; i++) { const a = i * TAU / 8; x.save(); x.rotate(a); rr(x, 0.72 * r, -0.05 * r, 0.3 * r * on, 0.1 * r, 0.05 * r); x.fill(); x.restore(); } }
      x.fillStyle = on > 0 ? '#ffe46a' : '#f2ead0'; x.beginPath(); x.arc(0, -0.15 * r, 0.5 * r, 0, TAU); x.fill(); x.fillStyle = '#9aa0ae'; rr(x, -0.24 * r, 0.25 * r, 0.48 * r, 0.32 * r, 0.06 * r); x.fill(); x.fillStyle = '#7a8090'; rr(x, -0.24 * r, 0.33 * r, 0.48 * r, 0.07 * r, 0.03 * r); x.fill(); rr(x, -0.24 * r, 0.45 * r, 0.48 * r, 0.07 * r, 0.03 * r); x.fill(); }
    if (kind === 'gears') { const gear = (gx, gy2, R, n, a, col) => { x.save(); x.translate(gx, gy2); x.rotate(a); x.fillStyle = col; for (let i = 0; i < n; i++) { x.save(); x.rotate(i * TAU / n); rr(x, R * 0.75, -R * 0.16, R * 0.42, R * 0.32, R * 0.08); x.fill(); x.restore(); } x.beginPath(); x.arc(0, 0, R * 0.85, 0, TAU); x.fill(); x.fillStyle = shade(col, -0.25); x.beginPath(); x.arc(0, 0, R * 0.32, 0, TAU); x.fill(); x.restore(); };
      gear(-0.35 * r, 0, 0.5 * r, 8, t * 2, '#ffc857'); gear(0.45 * r, -0.35 * r, 0.36 * r, 7, -t * 2.6 + 0.2, '#5cd6ff'); }
    if (kind === 'question') { for (let i = 0; i < 3; i++) { const b = Math.sin(t * 3 + i * 1.7) * 0.12 * r; x.save(); x.translate((i - 1) * 0.65 * r, (i === 1 ? -0.3 * r : 0) + b); x.rotate((i - 1) * 0.25); title(x, '?', 0, 0, r * (i === 1 ? 1.1 : 0.8), [C.amber, C.white, C.cyan][i]); x.restore(); } }
    if (kind === 'spark') { const p = 1 + 0.08 * Math.sin(t * 9); x.fillStyle = '#ffd84a'; x.beginPath(); for (let i = 0; i < 16; i++) { const a = i * TAU / 16, R = (i % 2 ? 0.32 : 0.8) * r * p; x.lineTo(Math.cos(a) * R, Math.sin(a) * R); } x.closePath(); x.fill(); x.fillStyle = '#fff6c8'; x.beginPath(); x.arc(0, 0, 0.22 * r, 0, TAU); x.fill(); }
    if (kind === 'dots') { x.fillStyle = 'rgba(246,241,231,0.95)'; rr(x, -0.95 * r, -0.4 * r, 1.9 * r, 0.8 * r, 0.4 * r); x.fill(); for (let i = 0; i < 3; i++) { const on = ((t - t0) * 2.2) % 4 > i + 0.5; x.fillStyle = on ? '#6a3a78' : '#c9b8d6'; x.beginPath(); x.arc((i - 1) * 0.55 * r, 0, 0.16 * r, 0, TAU); x.fill(); } }
    if (kind === 'swirl') { x.rotate(t * 3); x.fillStyle = '#a07bff'; for (let i = 0; i < 26; i++) { const a = i * 0.45, R = 0.08 * r + i * 0.03 * r; x.beginPath(); x.arc(Math.cos(a) * R, Math.sin(a) * R, 0.07 * r * (1 - i / 34), 0, TAU); x.fill(); } }
    x.restore();
  }

  // ================= FRONT SHOT (a character turns to the camera and talks to the viewer) =================
  // frontShot(x, t, o): o = { bg (cached canvas, drawn blurred behind), id, st (expr, look, mouth, blink, nod, tilt),
  //   X (head x, default 640), R (head radius, default 120), z (zoom) }. Use it for narration lines spoken to the viewer,
  //   for the hook and for the takeaway, mixed with the whole-body 3/4 shots (never a whole video in one angle).
  const FSB = new WeakMap(); // blurred backgrounds, made once per background canvas
  function frontShot(x, t, o) {
    const ch = CH(o.id) || o.ch;
    if (o.bg) { let b = FSB.get(o.bg); if (!b) { b = blurImg(o.bg, 6); FSB.set(o.bg, b); } x.drawImage(b, -60, -40, 1400, 800); }
    x.save(); cam(x, o.z || 1, o.X || 640, 330);
    frontBust(x, ch, o.X || 640, o.Y || 330, o.R || 120, { look: [0, 0.05], breath: Math.sin(t * 1.7) * 0.5 + 0.5, ...o.st });
    x.restore();
  }

  // ================= SUBJECT FOCUS (cut away from the people to the thing being explained) =================
  // When the script explains a subject (the brain or a way of thinking, the heart, the lungs, an eye, a cell, an animal,
  // a machine), CUT AWAY to it: the characters are NOT in this shot; the subject is drawn BIG in the middle (about 60 % of
  // the screen height), pops in, labels come in one per beat with a line to the part they name, the camera pushes in on
  // the part being talked about, then a moving transition goes back to the characters.
  // focusShot(x, t, o): o = { subj: 'brain' | 'heart' | 'lungs' | 'eyeball' | 'cell' | 'intestines' | fn(x, cx, cy, s, t),
  //   t0: shot start, s: size (default 330 = ~65 % of the height), bg: [top, bottom] colours,
  //   labels: [{ text, at: [u, v] point on the subject in units of s (-1..1), side: 'L' | 'R', t: appear time, dot }],
  //   think: true = thought sparks run along the brain (a 'way of thinking'), push: { at: [u, v], z: 1.35, t0, t1 } }
  const FOCUSBG = {};
  function focusShot(x, t, o) {
    const [c0, c1] = o.bg || ['#2a1f4a', '#6a3a78'], key = c0 + c1;
    if (!FOCUSBG[key]) { const c = document.createElement('canvas'); c.width = 1280; c.height = 720; const g = c.getContext('2d'), gr = g.createLinearGradient(0, 0, 0, 720); gr.addColorStop(0, c0); gr.addColorStop(1, c1); g.fillStyle = gr; g.fillRect(0, 0, 1280, 720); const rg = H.rng(11); for (let i = 0; i < 26; i++) { g.fillStyle = `rgba(255,220,180,${rg.range(0.04, 0.12)})`; g.beginPath(); g.arc(rg.range(0, 1280), rg.range(0, 720), rg.range(20, 90), 0, TAU); g.fill(); } const rad = g.createRadialGradient(640, 360, 60, 640, 360, 520); rad.addColorStop(0, 'rgba(255,200,150,0.28)'); rad.addColorStop(1, 'rgba(255,200,150,0)'); g.fillStyle = rad; g.fillRect(0, 0, 1280, 720); FOCUSBG[key] = c; }
    x.drawImage(FOCUSBG[key], 0, 0);
    const t0 = o.t0 || 0, s = (o.s || 330) * lerp(0.6, 1, back(seg(t, t0, t0 + 0.55))) * (1 + 0.012 * Math.sin(t * 2)), cx = 640, cy = 370 + Math.sin(t * 1.3) * 4;
    const pu = o.push ? eio(seg(t, o.push.t0, o.push.t1)) : 0, pz = lerp(1, (o.push && o.push.z) || 1.35, pu);
    const px = o.push ? cx + o.push.at[0] * s : cx, py = o.push ? cy + o.push.at[1] * s : cy;
    x.save(); x.translate(px, py); x.scale(pz, pz); x.translate(-px, -py);
    const subj = o.subj || 'brain', a = seg(t, t0, t0 + 0.25); x.globalAlpha = a;
    if (typeof subj === 'function') subj(x, cx, cy, s, t);
    else if (subj === 'brain') brain(x, cx, cy, s, 1);
    else if (subj === 'heart') heart(x, cx, cy, s * 0.8, t);
    else if (subj === 'lungs') lungs(x, cx, cy, s * 0.85, 0.5 + 0.5 * Math.sin(t * TAU / 4));
    else if (subj === 'eyeball') eyeball(x, cx, cy, s * 0.8, [Math.sin(t) * 0.3, 0], 0.4);
    else if (subj === 'intestines') intestines(x, cx, cy, s * 0.9, t);
    else if (subj === 'cell') cell(x, cx, cy, s * 0.9, t);
    if (o.think && subj === 'brain') { // thought sparks: glowing dots run between points on the folds, with faint links
      const rg = H.rng(5), N = 14, pts = []; for (let i = 0; i < N; i++) pts.push([cx + rg.range(-0.62, 0.62) * s, cy + rg.range(-0.62, 0.15) * s]);
      x.lineCap = 'round';
      for (let i = 0; i < N; i++) { const p = pts[i], q = pts[(i * 5 + 3) % N], ph = (t * 0.9 + i * 0.37) % 1; x.strokeStyle = 'rgba(255,245,200,0.16)'; x.lineWidth = 1.5; x.beginPath(); x.moveTo(p[0], p[1]); x.lineTo(q[0], q[1]); x.stroke();
        const sx = lerp(p[0], q[0], ph), sy = lerp(p[1], q[1], ph), gl = x.createRadialGradient(sx, sy, 0, sx, sy, 14); gl.addColorStop(0, 'rgba(255,250,200,0.95)'); gl.addColorStop(1, 'rgba(255,220,120,0)'); x.fillStyle = gl; x.beginPath(); x.arc(sx, sy, 14, 0, TAU); x.fill(); }
    }
    x.restore(); x.globalAlpha = 1;
    // labels: pill at the side, a line from it to the point it names (on the zoomed subject), stacked so they never overlap
    const L = (o.labels || []).filter((l) => t >= l.t), cnt = { L: 0, R: 0 };
    for (const l of L) {
      const side = l.side || (l.at[0] < 0 ? 'L' : 'R'), i = cnt[side]++, u = back(seg(t, l.t, l.t + 0.4));
      const tx = px + (cx + l.at[0] * s - px) * pz, ty = py + (cy + l.at[1] * s - py) * pz;
      const lx = side === 'L' ? 210 : 1070, ly = l.y || 200 + i * 86;
      x.save(); x.globalAlpha = cl(u, 0, 1); x.strokeStyle = 'rgba(255,240,225,0.85)'; x.lineWidth = 3; x.beginPath(); x.moveTo(lx + (side === 'L' ? 120 : -120), ly); x.lineTo(lerp(lx + (side === 'L' ? 120 : -120), tx, cl(u, 0, 1)), lerp(ly, ty, cl(u, 0, 1))); x.stroke();
      x.fillStyle = l.dot || C.amber; x.beginPath(); x.arc(tx, ty, 7 * cl(u, 0, 1), 0, TAU); x.fill(); x.restore();
      pill(x, lx, ly, l.text, 28, { s: u, dot: l.dot || C.amber });
    }
  }

  // ================= SCENES (always whole bodies, feet on the floor) =================
  const GY = 690;
  function cam(x, z, cx = 640, cy = 420) { x.translate(cx, cy); x.scale(z, z); x.translate(-cx, -cy); }
  // 1 HOOK: Kai full body, waves hello (arm swings on a spring), the ponytail follows the head
  function exHook(x, W, H_, t) {
    const z = 1 + 0.04 * eo(seg(t, 0, 3));
    x.save(); cam(x, z); bg(x, roomFloor('room', C.warm, 3, GY), 1, 0, 0);
    const thinking = t > TL.think[0] && t < TL.think[1] + 0.1; // expression follows the meaning: asking (talking), then wondering (eyes up to the bubble)
    const st = stOf('kai', t, { look: thinking ? [0.6, -0.8] : [-0.3, 0], expr: thinking ? 'focus' : t > TL.think[1] ? 'happy' : 'neutral', mouth: t > 0.3 && t < 1.4 ? 0.4 * Math.abs(Math.sin(t * 9)) : 0 });
    const wv = eio(seg(t, TL.wave[0], TL.wave[0] + 0.35)) * (1 - eio(seg(t, TL.wave[1], TL.wave[1] + 0.4)));
    const sw = Math.sin((t - TL.wave[0]) * 7) * 0.35 * wv; // waving swing at the elbow
    const P = { x: 820, gy: GY, h: hOf(CAST.kai, PXM) * 0.9, f: -1, lean: st.s.x * 0.12, tilt: 0.05, drop: breath(t), aF: { a: [lerp(0.1, Math.PI + 0.32, wv), lerp(0.2, -0.35, wv) + sw] }, hF: {}, aB: { a: [-0.05, 0.2] } };
    const P2 = pose(CAST.kai, P, 'think', eio(seg(t, TL.think[0], TL.think[0] + 0.35)) * (1 - eio(seg(t, TL.think[1], TL.think[1] + 0.35)))); // a new pose on the new beat
    const J = rig(CAST.kai, P2); floorShadow(x, J, GY); person(x, CAST.kai, P2, st, [-0.8, -0.6]);
    // she wonders: the thought bubble's dots start at her head and the last one overlaps the bubble
    const tp = seg(t, TL.think[0], TL.think[0] + 0.6) * (1 - seg(t, TL.think[1], TL.think[1] + 0.15));
    if (tp > 0) thoughtBubble(x, [J.hc[0] + J.r * 0.8, J.hc[1] - J.r * 0.9], J.hc[0] + J.r * 3.5, J.hc[1] - J.r * 0.35, '0.1 s? 1 s?', 32, tp);
    x.restore();
  }
  // the topic title appears where it is spoken, then flies into the top-left corner and stays there as the header
  const TITLE = 'How fast are you?', TITLE_NUM = null; // a numbered list item would be e.g. TITLE_NUM = 1 -> header '1. How fast are you?'
  function headerBox() { const c = document.createElement('canvas').getContext('2d'); c.font = F(700, 28); const w = c.measureText(TITLE).width + 28 * 1.2 + 28 * 0.9; return { cx: 24 + w / 2, cy: 44, w }; } // the title header sits in the TOP-LEFT corner
  function titleToHeader(x, t) {
    const words = ['How', 'fast', 'are', 'you?'], px = 76;
    x.font = F(800, px); const sp = x.measureText(' ').width, ws = words.map((w) => x.measureText(w).width), tot = ws.reduce((a, b) => a + b, 0) + sp * 3;
    const out = eio(seg(t, TL.header[0], TL.header[1])), hb = headerBox();
    if (out < 1) { // fly: centre and scale move from the spoken position to the header pill's text
      const k = lerp(1, 28 / px, out), gx = lerp(410, hb.cx + 28 * 0.45, eio(seg(out, 0.4, 1))), gy2 = lerp(210, hb.cy, eo(seg(out, 0, 0.32)));
      let wx = -tot / 2; x.save(); x.translate(gx, gy2); x.scale(k, k); x.globalAlpha = 1 - 0.6 * seg(out, 0.7, 1);
      words.forEach((w, i) => { const u = back(seg(t, TL.titleWords + i * 0.2, TL.titleWords + i * 0.2 + 0.4), 1.4); if (u > 0) { x.save(); x.translate(wx + ws[i] / 2, (1 - u) * 30); x.scale(u, u); title(x, w, 0, 0, px, i === 1 ? C.amber : C.white, { group: 'title' }); x.restore(); } wx += ws[i] + sp; }); x.restore(); }
  }
  // the ruler held by Leo's pinch, free fall at g (on real time), stopped by friction in Kai's grip
  function rulerTopAt(top0, t, t0, sm, rt) {
    if (t < t0) return top0; const tau = (t - t0) / sm;
    if (tau < rt) return top0 + dropD(tau) * PXM;
    const v = G * rt, a = 60, ts = Math.min(tau - rt, v / a); // grip friction ~60 m/s^2: stops within ~1 cm
    return top0 + (dropD(rt) + v * ts - 0.5 * a * ts * ts) * PXM;
  }
  // 2 THE DROP: two-shot, whole bodies; Leo holds the ruler up, Kai's open hand waits at its 0 cm end
  const RL = 0.5, RWm = 0.035;
  let HOLD = null;
  function exDrop(x, W, H_, t) {
    const z = 1 + 0.03 * seg(t, 3, 7);
    x.save(); cam(x, z, 640, 380); bg(x, roomFloor('room', C.warm, 3, GY), 1, 0, 0);
    // Leo (dropper): front arm raised so his pinch holds the ruler top; recoils on a spring after letting go
    const sL = stOf('leo', t, { look: [0.6, 0.3], expr: 'focus', ph: 0.7 });
    const rec = kick(t, TL.tDrop, -10, 1.4, 0.35), pinch0 = [700, 236];
    let PL = { x: 480, gy: GY, h: hOf(CAST.leo, PXM), f: 1, lean: 0.04, drop: breath(t, 1), aB: { a: [0.05, 0.25] } };
    HOLD = { w: RWm * PXM, axis: [0, 1] };
    PL = reach(CAST.leo, PL, 'aF', [pinch0[0], pinch0[1] + rec], HOLD);
    const JL = rig(CAST.leo, PL), gL = gripPt(JL.aF, JL.r, JL.f, HOLD);
    const top0 = pinch0[1] - 0.06 * PXM, top = rulerTopAt(top0, t, TL.tDrop, TL.SM, REACT), rx = pinch0[0];
    // Kai (catcher): grip placed on the ruler's bottom end; after the catch the ruler's momentum pushes the hand down
    const catchY = top0 + RL * PXM - 0.01 * PXM, dip = kick(t, CATCH + 0.05, 9, 1.1, 0.3);
    const sK = stOf('kai', t, { look: [-0.6, t < CATCH ? -0.2 : 0.1], expr: t > CATCH ? 'shock' : 'focus' });
    let PK = { x: 850, gy: GY, h: hOf(CAST.kai, PXM), f: -1, lean: 0.1 + sK.s.x * 0.12, drop: breath(t) + (t > CATCH ? kick(t, CATCH, 0.12, 1.2, 0.35) : 0), aB: { a: [0.0, 0.3] } };
    PK = reach(CAST.kai, PK, 'aF', [rx, catchY + dip], HOLD);
    const JK = rig(CAST.kai, PK);
    floorShadow(x, JL, GY); floorShadow(x, JK, GY);
    const cK = seg(t, CATCH - 0.05, CATCH + 0.22);
    // Leo's hand holds the ruler top, then opens; Kai's open hand waits at the bottom, closes, and the ruler stops in it
    const hL = { hold: HOLD, closed: 1 - seg(t, TL.tDrop - 0.05, TL.tDrop + 0.2) };
    const hK = { hold: HOLD, closed: cK };
    person(x, CAST.leo, { ...PL, hF: hL }, sL);
    person(x, CAST.kai, { ...PK, hF: hK }, sK, [-0.8, -0.6]);
    ruler(x, rx, top + (t > CATCH ? dip : 0), RL, PXM, RWm * PXM);
    handOver(x, JL, 'aF', hL);
    handOver(x, JK, 'aF', hK, [-0.8, -0.6]);
    if (t > TL.tDrop && t < CATCH) { const v = G * (t - TL.tDrop) / TL.SM; x.strokeStyle = 'rgba(255,240,215,0.55)'; x.lineWidth = 2; for (let i = 0; i < 3; i++) { const yy = top + 30 + i * 50; x.beginPath(); x.moveTo(rx + 14, yy); x.lineTo(rx + 14, yy - v * 14); x.stroke(); } }
    x.restore();
    const ta = seg(t, TL.timer - 0.15, TL.timer) * (1 - seg(t, 6.8, 7)), tv = Math.min(Math.max(0, (t - TL.tDrop) / TL.SM), REACT);
    if (ta > 0) { const land = seg(t, CATCH, CATCH + 0.35), p = 1 + 0.2 * Math.sin(land * Math.PI); x.save(); x.globalAlpha = ta; x.translate(1080, 150); x.scale(p, p); title(x, tv.toFixed(2) + ' s', 0, 0, 92, t > CATCH ? C.amber : '#fff3dc'); x.restore(); }
    pill(x, 175, 110, 'SLOW-MO ×4', 28, { s: back(seg(t, TL.slowmo, TL.slowmo + 0.3)) * (1 - seg(t, 6.8, 7)), dot: C.red });
    const lp = back(seg(t, TL.cmLabel, TL.cmLabel + 0.35));
    if (lp > 0) { const yy = (catchY + dip) * z + 380 * (1 - z); pill(x, 470, yy - 40, `fell ${Math.round(dropD(REACT) * 100)} cm`, 34, { s: lp, dot: C.amber }); }
  }
  // 3 THE PHYSICS: Kai (whole body) points at the formula card
  function exFormula(x, W, H_, t) {
    bg(x, roomFloor('room', C.warm, 3, GY), 1.02, 20, 0);
    const lookAt = t < TL.fT ? [1, -0.4] : [0.2, 0.1];
    const st = stOf('kai', t, { look: lookAt, expr: t > TL.fT + 0.1 ? 'happy' : 'focus', ph: 1.1 });
    const pt = eio(seg(t, 7.2, 7.6)), tgt = [lerp(400, 585, pt) + (t > TL.fT ? 8 * Math.sin((t - TL.fT) * 6) * Math.exp(-(t - TL.fT) * 2) : 0), lerp(470, 330, pt)];
    const P0 = { x: 300, gy: GY, h: hOf(CAST.kai, PXM) * 1.05, f: 1, lean: 0.05 + st.s.x * 0.12, drop: breath(t, 2), aF: { to: tgt }, hF: { m: 'point' }, aB: { a: [-0.05, 0.25] } };
    const P = pose(CAST.kai, P0, 'present', eio(seg(t, TL.fT + 0.2, TL.fT + 0.55))); // points while it writes, then presents the answer
    const J = rig(CAST.kai, P); floorShadow(x, J, GY); person(x, CAST.kai, P, st);
    const ca = eo(seg(t, 7.05, 7.4));
    x.save(); x.globalAlpha = ca; x.translate((1 - ca) * 80, 0);
    x.fillStyle = 'rgba(20,14,36,0.72)'; rr(x, 610, 110, 590, 470, 30); x.fill();
    x.strokeStyle = 'rgba(255,230,200,0.2)'; x.lineWidth = 2; rr(x, 610, 110, 590, 470, 30); x.stroke();
    const row = (s, y, px, col, u) => { if (u > 0) { x.save(); x.translate(905, y); x.scale(u, u); title(x, s, 0, 0, px, col, { glow: col }); x.restore(); } };
    row('d = ½ g t²', 190, 64, C.white, back(seg(t, TL.fLine, TL.fLine + 0.4)));
    row('d = 31 cm', 290, 48, '#ffe2b8', back(seg(t, TL.fD, TL.fD + 0.35)));
    row('g = 9.8 m/s²', 360, 48, '#bfe9ff', back(seg(t, TL.fG, TL.fG + 0.35)));
    row('t = 0.25 s', 480, 88, C.amber, back(seg(t, TL.fT, TL.fT + 0.45), 1.8));
    x.restore();
  }
  // 4 SEVEN AGES: the whole cast in a row (age 8 to 76), each catches a ruler released by a clamp stand
  const PX4 = 250, GY4 = 560;
  function tester(x, i, X, t) {
    const [id, lab, rt] = FACT.ages[i], ch = CAST[id], ct = TL.aDrop + rt * 4, h = hOf(ch, PX4);
    const st = stOf(id, t, { look: [0.6, t < ct ? -0.3 : 0.1], expr: t > ct ? ((i === 2 || i === 3) && t > TL.aBest ? 'happy' : 'shock') : 'focus', ph: i * 0.9 });
    let P = { x: X, gy: GY4, h, f: 1, lean: 0.06 + st.s.x * 0.1, drop: breath(t, i) + (t > ct ? kick(t, ct, 0.1, 1.2, 0.35) : 0), aB: { a: [0, 0.25] } };
    // the clamp holds the ruler where THIS person can reach: placed from their own shoulder and arm length (kids have
    // shorter arms), so the fist always closes on the ruler instead of stopping short of it
    const J0 = rig(ch, { ...P, drop: 0, lean: 0.06 }), A0 = J0.aF, armL = Math.hypot(A0.e[0] - A0.s[0], A0.e[1] - A0.s[1]) + Math.hypot(A0.w[0] - A0.e[0], A0.w[1] - A0.e[1]);
    const g0 = [A0.s[0] + 0.66 * armL, A0.s[1] + 0.42 * armL], dip = kick(t, ct + 0.05, 7, 1.2, 0.3);
    const HD = { w: RWm * PX4 * 1.2, axis: [0, 1] };
    P = reach(ch, P, 'aF', [g0[0], g0[1] + dip], HD);
    const J = rig(ch, P), rx = g0[0], top0 = g0[1] - RL * PX4 + 0.01 * PX4;
    const fall = t < TL.aDrop ? 0 : Math.min(dropD(Math.min((t - TL.aDrop) / 4, rt)), dropD(rt)), top = top0 + fall * PX4 + (t > ct ? dip : 0);
    // clamp stand: base on the floor, pole, arm, jaws that open at the release
    const sx = rx + 34, open = seg(t, TL.aDrop - 0.02, TL.aDrop + 0.12);
    x.fillStyle = '#2a2236'; rr(x, sx - 26, GY4 - 8, 52, 10, 4); x.fill(); x.fillRect(sx - 3, top0 - 22, 6, GY4 - top0 + 16); x.fillRect(rx - 10, top0 - 24, sx - rx + 13, 6);
    x.fillStyle = '#c9cfdb'; x.fillRect(rx - 10 - open * 6, top0 - 20, 4, 18); x.fillRect(rx + 6 + open * 6, top0 - 20, 4, 18);
    floorShadow(x, J, GY4);
    const cg = seg(t, ct - 0.05, ct + 0.2), hs = { hold: HD, closed: cg };
    person(x, ch, { ...P, hF: hs }, st);
    ruler(x, rx, top, RL, PX4, RWm * PX4 * 1.2);
    handOver(x, J, 'aF', hs);
    x.font = F(800, 28); x.textAlign = 'center'; x.fillStyle = C.white; qcBox(x, lab, X + 22, GY4 + 30, x.measureText(lab).width, 28, x.globalAlpha); x.fillText(lab, X + 22, GY4 + 40);
    const nu = back(seg(t, ct, ct + 0.35));
    if (nu > 0) { x.save(); x.translate(X + 22, GY4 + 84); x.scale(nu, nu); title(x, rt.toFixed(2) + ' s', 0, 0, 38, i === 2 || i === 3 ? C.mint : C.white, { glow: i === 2 || i === 3 ? C.mint : '#ffb45e' }); x.restore(); }
  }
  function exAges(x, W, H_, t) {
    bg(x, roomFloor('room4', C.warm, 5, GY4), 1, 0, 0);
    for (let i = 0; i < 7; i++) { const u = back(seg(t, TL.aIn + i * 0.06, TL.aIn + 0.4 + i * 0.06), 1.2); if (u <= 0) continue; x.save(); x.globalAlpha = cl(u * 2); x.translate((1 - u) * 120, 0); tester(x, i, 70 + i * 176, t); x.restore(); }
    const best = back(seg(t, TL.aBest, TL.aBest + 0.35));
    if (best > 0) pill(x, 70 + 2.5 * 176 + 22, 36, 'fastest in your 20s', 28, { s: best, dot: C.mint });
  }
  // 5 SUBJECT FOCUS: the brain explains the delay. No people in this shot: the subject is BIG, labels come one per beat
  // with a line to the part they name, thought sparks run through it, the camera pushes in on the part being named.
  function exBrain(x, W, H_, t) {
    focusShot(x, t, { subj: 'brain', t0: TL.brain[0], think: true, push: { at: [0.0, -0.5], z: 1.3, t0: TL.bMove, t1: TL.bMove + 1.0 },
      labels: [{ text: 'Eyes see it', at: [0.62, -0.08], side: 'R', y: 330, t: TL.bSee }, { text: 'Brain decides', at: [-0.55, -0.25], side: 'L', y: 240, t: TL.bDecide, dot: C.mint }, { text: 'Hand moves', at: [0.0, -0.56], side: 'R', y: 150, t: TL.bMove, dot: C.coral }] });
  }
  // 6 FRONT SHOT: back to the character, now facing the camera and talking to the viewer (background blurred), zoom in
  function exFront(x, W, H_, t) {
    const talk = t > TL.fTalk[0] && t < TL.fTalk[1];
    frontShot(x, t, { bg: roomFloor('room', C.warm, 3, GY), id: 'kai', z: 1 + 0.14 * eio(seg(t, TL.front[0], TL.front[0] + 1.6)), X: 560,
      st: { expr: 'happy', look: [0, 0.05], mouth: talk ? 0.45 * Math.abs(Math.sin(t * 9)) : 0, blink: blink(t, 3), nod: 0.05 * Math.sin(t * 3) * (talk ? 1 : 0), tilt: 0.04 * Math.sin(t * 1.3) } });
    pill(x, 1010, 330, 'Practice = faster', 34, { s: back(seg(t, TL.fText, TL.fText + 0.4)), dot: C.mint });
  }
  // 7 TAKEAWAY: Kai jumps for joy: anticipation crouch, ballistic flight at g, landing absorbed by the knees
  function exTake(x, W, H_, t) {
    const z = 1 + 0.03 * eo(seg(t, TL.take[0], TL.take[1]));
    x.save(); cam(x, z, 640, 690); bg(x, roomFloor('room', C.warm, 3, GY), 1, 0, 0);
    const v0 = Math.sqrt(2 * G * 0.22), fl = (2 * v0) / G, tj = TL.jump, tau = t - tj;  // a 22 cm jump
    const air = tau > 0 && tau < fl ? (v0 * tau - 0.5 * G * tau * tau) * PXM : 0;
    const crouch = 0.6 * Math.sin(seg(t, tj - 0.3, tj) * Math.PI * 0.5) * (tau < 0 ? 1 : 0) + (tau >= fl ? kick(t, tj + fl, 0.5, 1.6, 0.4) * 1 + 0.5 * Math.exp(-(tau - fl) * 6) : 0);
    const st = stOf('kai', t, { look: [-0.2, -0.1], expr: 'happy', ph: 2 });
    const up = eio(seg(t, tj - 0.15, tj + 0.1));
    const P = { x: 900, gy: GY, h: hOf(CAST.kai, PXM) * 0.86, f: -1, lean: lerp(0.05, -0.05, up) + st.s.x * 0.1, drop: breath(t) + crouch, lift: air, aF: { a: [lerp(0.2, Math.PI + 0.35, up), lerp(0.3, -0.15, up)] }, aB: { a: [lerp(-0.1, Math.PI - 0.35, up), 0.15] }, hF: { m: up > 0.5 ? 'open' : 'round' }, hB: { m: up > 0.5 ? 'open' : 'round' } };
    const J = rig(CAST.kai, P); floorShadow(x, J, GY); person(x, CAST.kai, P, st, [-0.8, -0.6]);
    x.restore();
    const l1 = back(seg(t, TL.line1, TL.line1 + 0.4)), l2 = back(seg(t, TL.line2, TL.line2 + 0.45), 1.8);
    if (l1 > 0) { x.save(); x.translate(390, 250); x.scale(l1, l1); title(x, 'Your brain needs', 0, 0, 56, C.white); x.restore(); }
    if (l2 > 0) { x.save(); x.translate(390, 360); x.scale(l2, l2); title(x, '¼ second', 0, 0, 104, C.amber); x.restore(); }
  }
  // ================= LIBRARY: locations, walking crowds, animals, vehicles, the body =================
  // Everything here follows the same rules as the people: flat shapes with one shadow side and a highlight, ground
  // contact on the floor line, physics for motion (no-slip gaits and wheels, buoyancy on water, flapping lift,
  // undulating swimmers), cached static art, a pure function of t. Sizes come from real metres x px-per-metre.

  // ---------- location backdrops (cached 1400x800, drawn with bg(); ground line at screen y = gy) ----------
  function skyG(g, w, h, top, mid, low) { const s = g.createLinearGradient(0, 0, 0, h); s.addColorStop(0, top); s.addColorStop(0.6, mid); s.addColorStop(1, low); g.fillStyle = s; g.fillRect(0, 0, w, h); }
  function hillsG(g, w, y, amp, col, seed) { const r = H.rng(seed); g.fillStyle = col; g.beginPath(); g.moveTo(0, 900); for (let X = 0; X <= w; X += 20) g.lineTo(X, y - amp * (0.5 + 0.5 * Math.sin(X * 0.004 + seed) * Math.sin(X * 0.0017 + r()))); g.lineTo(w, 900); g.fill(); }
  function treeG(g, X, y, s, kind, leaf, trunk) {
    g.fillStyle = trunk; g.fillRect(X - s * 0.07, y - s * 0.55, s * 0.14, s * 0.55);
    g.fillStyle = leaf;
    if (kind === 'pine') { for (let k = 0; k < 3; k++) { g.beginPath(); g.moveTo(X, y - s * (1.3 - k * 0.25)); g.lineTo(X + s * (0.32 + k * 0.08), y - s * (0.55 - k * 0.12) - s * 0.2); g.lineTo(X - s * (0.32 + k * 0.08), y - s * (0.55 - k * 0.12) - s * 0.2); g.fill(); } }
    else { for (const [dx, dy, rr2] of [[0, -0.85, 0.36], [-0.25, -0.65, 0.28], [0.26, -0.66, 0.29], [0.05, -0.55, 0.3]]) { g.beginPath(); g.arc(X + dx * s, y + dy * s, rr2 * s, 0, TAU); g.fill(); } g.fillStyle = 'rgba(0,0,0,0.12)'; g.beginPath(); g.arc(X + 0.18 * s, y - 0.62 * s, 0.26 * s, 0, TAU); g.fill(); }
  }
  function groundG(g, w, h, fy, top, bottom, lines) { const s = g.createLinearGradient(0, fy, 0, h); s.addColorStop(0, top); s.addColorStop(1, bottom); g.fillStyle = s; g.fillRect(0, fy, w, h - fy); if (lines) { g.fillStyle = lines; for (let i = 0; i < 8; i++) g.fillRect(0, fy + 8 + i * i * 4, w, 2); } g.fillStyle = 'rgba(20,10,30,0.25)'; g.fillRect(0, fy - 2, w, 3); }
  function windowsG(g, X, y, w, h, seed, lit) { const r = H.rng(seed); for (let yy = y + 14; yy < y + h - 20; yy += 34) for (let xx = X + 12; xx < X + w - 22; xx += 30) { g.fillStyle = r() < lit ? 'rgba(255,214,140,0.85)' : 'rgba(30,24,48,0.55)'; g.fillRect(xx, yy, 16, 20); } }
  const DAYSKY = ['#6fa8dc', '#b8d6ee', '#ffe2b8'], DUSKSKY = ['#3a2f6e', '#b4588c', '#ffcf94'];
  // ---------- REAL SIZES: one ground-plane perspective per shot ----------
  // stageModel(gy, P): the people standing on the ground line gy are drawn at P px per metre. A camera with a ~1000 px
  // focal length at eye height (1.6 m) puts the horizon at gy - 1.6*P and the people dp = 1000/P metres away. Anything
  // on the ground d metres away sits on row y(d) and is drawn at s(d) px per metre; at(y) gives the scale for a ground
  // row. So a car on the road behind the people, a bus in the far lane and a 15 m building across the street all get
  // their true size for where they stand (a 4.3 m car next to 1.7 m people, an 11 m bus, buildings taller than the frame).
  const FOCAL = 1000;
  function stageModel(gy, P, eye = 1.6) { const hz = gy - eye * P, dp = FOCAL / P; return { gy, P, hz, dp, y: (d) => hz + (gy - hz) * dp / d, s: (d) => P * dp / d, at: (y) => P * (y - hz) / (gy - hz) }; }
  // street layout in metres from the people: near kerb +1.6, a 7 m road (two lanes), far kerb +8.6, far pavement with
  // street lamps, building fronts at +11.6. streetLane(gy, P, 'near'|'far') = { y, pxm } for a vehicle in that lane.
  const ST = { kerb: 1.6, road: 7, pave: 3 };
  function streetLane(gy, P, which) { const M = stageModel(gy, P), d = M.dp + ST.kerb + (which === 'far' ? ST.road * 0.75 : ST.road * 0.25); return { y: M.y(d), pxm: M.s(d) }; }
  // one building front: base at row yb, scale s px/m, w x h metres; ground-floor shop (window, awning, sign, door),
  // storeys of 3.1 m with 1.2 x 1.6 m windows on a 2.6 m grid, a cornice
  function bldgG(g, X, yb, s, wM, hM, col, r, night) {
    const W2 = wM * s, H2 = hM * s, top = yb - H2;
    g.fillStyle = col; g.fillRect(X, top, W2, H2); g.fillStyle = shade(col, -0.2); g.fillRect(X, top, W2, 0.5 * s); g.fillRect(X + W2 - 0.25 * s, top, 0.25 * s, H2);
    const nb = Math.max(1, Math.floor(wM / 2.6)), bw = W2 / nb;
    for (let fl = 1; fl * 3.1 + 4 < hM - 0.8; fl++) { const wy = yb - (4 + (fl - 1) * 3.1 + 0.9 + 1.6) * s; if (wy + 1.6 * s < 0 || wy > 800) continue; for (let b = 0; b < nb; b++) { const lit = night ? r() < 0.6 : r() < 0.15; g.fillStyle = lit ? 'rgba(255,214,140,0.92)' : night ? 'rgba(28,22,46,0.85)' : 'rgba(150,190,220,0.75)'; g.fillRect(X + b * bw + (bw - 1.2 * s) / 2, wy, 1.2 * s, 1.6 * s); } }
    const aw = r.pick(['#e5383b', '#1fa39a', '#f5c63c', '#3d6fb6', '#ff6b9a']);
    g.fillStyle = night ? 'rgba(255,214,140,0.55)' : 'rgba(120,160,190,0.7)'; g.fillRect(X + 0.6 * s, yb - 2.6 * s, W2 - 1.2 * s - 1.4 * s, 2.2 * s); // shop window
    g.fillStyle = shade(col, -0.35); g.fillRect(X + W2 - 1.9 * s, yb - 2.2 * s, 1.1 * s, 2.2 * s); // door
    for (let k = 0; k < 8; k++) { g.fillStyle = k % 2 ? shade(aw, 0.25) : aw; g.fillRect(X + k * W2 / 8, yb - 3.3 * s, W2 / 8 + 1, 0.55 * s); } // striped awning at 2.75-3.3 m
    g.fillStyle = shade(aw, -0.3); g.fillRect(X + 0.4 * s, yb - 3.95 * s, W2 - 0.8 * s, 0.5 * s); // shop sign band
    if (night) glow(g, X + W2 / 2, yb - 1.6 * s, W2 * 0.45, '#ffd08a', 0.22);
  }
  function streetBD(g, w, h, fy, P, kind) {
    const night = kind === 'night', M = stageModel(fy, P), r = H.rng(kind.length * 131 + Math.round(P));
    if (night) { skyG(g, w, h, '#0c0a22', '#2a2052', '#5a3a6e'); glow(g, w * 0.16, h * 0.12, 120, '#e8ecff', 0.5); g.fillStyle = '#eef0ff'; g.beginPath(); g.arc(w * 0.16, h * 0.12, 26, 0, TAU); g.fill(); }
    else { skyG(g, w, h, ...DUSKSKY); glow(g, w * 0.82, h * 0.18, 260, '#fff2cc', 0.6); }
    const dB = M.dp + ST.kerb + ST.road + ST.pave, yb = M.y(dB), sb = M.s(dB), yfk = M.y(M.dp + ST.kerb + ST.road), ynk = M.y(M.dp + ST.kerb);
    // building fronts across the street, true size: 8-16 m wide, 10-28 m tall (usually taller than the frame)
    let X = -r.range(0, 6) * sb; const cols = night ? ['#241c3e', '#2c2248', '#1e1834', '#33284e'] : ['#4a3a5e', '#5a4668', '#3e3452', '#6a4a62'];
    while (X < w) { const wM = r.range(8, 16), hM = r.range(10, 28); bldgG(g, X, yb, sb, wM, hM, r.pick(cols), r, night); X += wM * sb + 0.3 * sb; }
    g.fillStyle = night ? '#4a4458' : '#8a8494'; g.fillRect(0, yb, w, yfk - yb); // far pavement
    for (let lx = r.range(0, 8) * sb; lx < w; lx += 25 * sb) { const d = M.dp + ST.kerb + ST.road + 0.6, s2 = M.s(d), y0 = M.y(d); g.fillStyle = '#1a1626'; g.fillRect(lx, y0 - 6 * s2, 0.14 * s2, 6 * s2); g.fillRect(lx, y0 - 6 * s2, 1.0 * s2, 0.12 * s2); if (night) glow(g, lx + 0.95 * s2, y0 - 5.9 * s2, 2.2 * s2, '#ffe2a0', 0.55); g.fillStyle = night ? '#fff3c8' : '#d9d2c0'; g.beginPath(); g.arc(lx + 0.95 * s2, y0 - 5.85 * s2, 0.16 * s2, 0, TAU); g.fill(); } // street lamps, 6 m, every 25 m
    g.fillStyle = night ? '#5a5468' : '#a8a2b2'; g.fillRect(0, yfk - 0.15 * M.s(M.dp + ST.kerb + ST.road), w, 0.15 * M.s(M.dp + ST.kerb + ST.road)); // far kerb
    const rg = g.createLinearGradient(0, yfk, 0, ynk); rg.addColorStop(0, night ? '#24202c' : '#3a3644'); rg.addColorStop(1, night ? '#2e2a36' : '#4a4656'); g.fillStyle = rg; g.fillRect(0, yfk, w, ynk - yfk); // road
    { const dc = M.dp + ST.kerb + ST.road / 2, sc = M.s(dc), yc = M.y(dc); g.fillStyle = '#e9e2c4'; for (let xx = -r.range(0, 9) * sc; xx < w; xx += 9 * sc) g.fillRect(xx, yc - 0.06 * sc, 3 * sc, 0.12 * sc); } // centre line: 3 m dashes, 6 m gaps
    const sk = M.s(M.dp + ST.kerb); g.fillStyle = night ? '#5a5468' : '#b0aab8'; g.fillRect(0, ynk - 0.15 * sk, w, 0.15 * sk); // near kerb
    groundG(g, w, h, ynk, night ? '#7a7488' : '#9a94a6', night ? '#55505f' : '#6e6878'); // near pavement where the people stand
    if (kind === 'busstop') { // shelter (2.4 m tall, 4 m wide) and a 2.8 m bus-stop sign on the near pavement, just behind the people
      const d = M.dp + 0.7, s3 = M.s(d), y3 = M.y(d), sx = w * 0.62;
      g.fillStyle = 'rgba(190,225,255,0.35)'; g.fillRect(sx, y3 - 2.3 * s3, 4 * s3, 2.3 * s3); g.fillStyle = '#2b2b3a'; g.fillRect(sx - 0.1 * s3, y3 - 2.45 * s3, 4.2 * s3, 0.15 * s3); g.fillRect(sx, y3 - 2.3 * s3, 0.08 * s3, 2.3 * s3); g.fillRect(sx + 3.92 * s3, y3 - 2.3 * s3, 0.08 * s3, 2.3 * s3); g.fillRect(sx + 0.4 * s3, y3 - 0.5 * s3, 3.2 * s3, 0.1 * s3);
      const px = sx - 1.2 * s3; g.fillRect(px, y3 - 2.8 * s3, 0.07 * s3, 2.8 * s3); g.fillStyle = '#e5383b'; g.beginPath(); g.arc(px + 0.035 * s3, y3 - 2.9 * s3, 0.3 * s3, 0, TAU); g.fill(); g.fillStyle = '#fff'; g.font = F(800, Math.round(0.24 * s3)); g.textAlign = 'center'; g.fillText('BUS', px + 0.035 * s3, y3 - 2.82 * s3);
    }
    return M;
  }
  const isStreet = (k) => k === 'street' || k === 'busstop' || k === 'night';

  // backdrop(kind, gy, { blur, keep }): blur = px of depth-of-field on the background (buildings, far trees, hills,
  // sky) when the script is not about them; the ground band from y = keep (default the ground line) stays sharp, so
  // feet, shadows and props on the floor stay crisp. blur 0 = all sharp (use it when the background IS the subject).
  // o.pxm: px per metre of the people on the ground line (street kinds lay out the road and buildings in true size from it)
  function backdrop(kind, gy, o = {}) {
    const bl = o.blur || 0, P = o.pxm || 150;
    if (bl > 0) return cached('bdb-' + kind + gy + '-' + P + '-' + bl + '-' + (o.keep || ''), 1400, 800, (g, w, h) => {
      const sharp = backdrop(kind, gy, { pxm: P }), keep = o.keep == null ? (isStreet(kind) ? stageModel(gy + 40, P).y(FOCAL / P + ST.kerb) - 2 : gy + 37) : o.keep;
      g.drawImage(blurImg(sharp, bl), 0, 0);
      const fz = 18, gr = g.createLinearGradient(0, keep - fz, 0, keep); // a short fade from soft to sharp at the ground line
      const k = H.layer(w, h), kg = k.getContext('2d'); gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(1, '#000'); kg.fillStyle = gr; kg.fillRect(0, keep - fz, w, fz); kg.fillStyle = '#000'; kg.fillRect(0, keep, w, h - keep);
      const m = H.layer(w, h), mg = m.getContext('2d'); mg.drawImage(sharp, 0, 0); mg.globalCompositeOperation = 'destination-in'; mg.drawImage(k, 0, 0);
      g.drawImage(m, 0, 0);
    });
    const fy = gy + 40;
    return cached('bd-' + kind + gy + (isStreet(kind) ? '-' + P : ''), 1400, 800, (g, w, h) => {
      const r = H.rng(kind.length * 97);
      if (isStreet(kind)) { streetBD(g, w, h, fy, P, kind); return; }
      if (kind === 'room') { g.drawImage(roomFloor('roombd', C.warm, 3, gy), 0, 0); return; }
      if (kind === 'underwater') { // light from the surface, rays, sand floor, kelp, rocks
        const s = g.createLinearGradient(0, 0, 0, h); s.addColorStop(0, '#3fb4d8'); s.addColorStop(0.5, '#1f6fa8'); s.addColorStop(1, '#123e6e'); g.fillStyle = s; g.fillRect(0, 0, w, h);
        g.globalCompositeOperation = 'lighter'; for (let i = 0; i < 6; i++) { const x0 = 150 + i * 220; const rg = g.createLinearGradient(x0, 0, x0 - 200, h); rg.addColorStop(0, 'rgba(200,255,255,0.16)'); rg.addColorStop(1, 'rgba(200,255,255,0)'); g.fillStyle = rg; g.beginPath(); g.moveTo(x0, 0); g.lineTo(x0 + 60, 0); g.lineTo(x0 - 160, h); g.lineTo(x0 - 260, h); g.fill(); } g.globalCompositeOperation = 'source-over';
        groundG(g, w, h, fy, '#d9c48f', '#9b8558');
        for (let i = 0; i < 14; i++) { const kx = r.range(0, w), kh = r.range(120, 320); g.strokeStyle = r.pick(['#2f8a4a', '#3fa35a', '#2a6e44']); g.lineWidth = r.range(8, 16); g.lineCap = 'round'; g.beginPath(); g.moveTo(kx, fy + 10); g.quadraticCurveTo(kx + r.range(-40, 40), fy - kh / 2, kx + r.range(-30, 30), fy - kh); g.stroke(); }
        for (let i = 0; i < 6; i++) { g.fillStyle = r.pick(['#4a5a6a', '#5a6a7a', '#3e4c5a']); g.beginPath(); g.ellipse(r.range(0, w), fy + 12, r.range(30, 70), r.range(18, 40), 0, Math.PI, TAU); g.fill(); }
        return;
      }
      skyG(g, w, h, ...DAYSKY);
      glow(g, w * 0.82, h * 0.18, 260, '#fff2cc', 0.6);
      for (let i = 0; i < 5; i++) { const cx = r.range(0, w), cy = r.range(40, 220), cs = r.range(40, 90); g.fillStyle = 'rgba(255,255,255,0.75)'; for (const [dx, dy, rr2] of [[0, 0, 1], [0.9, 0.15, 0.75], [-0.9, 0.2, 0.7]]) { g.beginPath(); g.arc(cx + dx * cs, cy + dy * cs, rr2 * cs * 0.6, 0, TAU); g.fill(); } }
      if (kind === 'ocean') { // sea to the horizon with wave bands, a sandy beach to stand on
        const hz = fy - 170; const s = g.createLinearGradient(0, hz, 0, fy); s.addColorStop(0, '#2b7fb8'); s.addColorStop(1, '#4fb3d9'); g.fillStyle = s; g.fillRect(0, hz, w, fy - hz);
        g.fillStyle = 'rgba(255,255,255,0.35)'; for (let i = 0; i < 10; i++) { const yy = hz + 6 + i * i * 1.6; for (let xx = (i * 37) % 90; xx < w; xx += 90) g.fillRect(xx, yy, 40 + i * 4, 2); }
        glow(g, w * 0.82, hz + 10, 200, '#fff2cc', 0.5);
        groundG(g, w, h, fy, '#f1d9a6', '#c9a46a'); return;
      }
      if (kind === 'forest') { // three depths of trees, darker and bluer far away
        hillsG(g, w, fy - 160, 60, '#7fae8a', 3);
        for (const [dep, col, tr, n, sc] of [[0, '#5d8f6c', '#4a5a4a', 18, 150], [1, '#3f7a55', '#3d4a3a', 13, 220], [2, '#2d6644', '#2e3a2c', 8, 320]]) for (let i = 0; i < n; i++) treeG(g, r.range(-50, w + 50), fy + dep * 4, sc * r.range(0.8, 1.2), r.pick(['round', 'pine', 'pine']), col, tr);
        groundG(g, w, h, fy, '#6b8f3e', '#3f5a28'); return;
      }
      if (kind === 'field' || kind === 'park' || kind === 'zoo') {
        hillsG(g, w, fy - 120, 50, '#9cc98a', 5); hillsG(g, w, fy - 60, 30, '#86b873', 9);
        for (let i = 0; i < (kind === 'field' ? 6 : 10); i++) treeG(g, r.range(0, w), fy - r.range(20, 60), r.range(110, 170), 'round', r.pick(['#5c9a52', '#4f8a48']), '#6a4a34');
        groundG(g, w, h, fy, '#7fbf5a', '#4f8a38');
        if (kind === 'field') { g.fillStyle = 'rgba(255,255,255,0.06)'; for (let i = 0; i < 6; i++) g.fillRect(i * 240, fy, 120, h - fy); }
        if (kind === 'park') { g.fillStyle = '#e8d3a8'; g.beginPath(); g.moveTo(560, fy); g.lineTo(840, fy); g.lineTo(1100, h); g.lineTo(300, h); g.fill(); g.fillStyle = '#5a3e2a'; g.fillRect(1040, fy - 70, 160, 12); g.fillRect(1040, fy - 40, 160, 10); g.fillRect(1050, fy - 40, 10, 42); g.fillRect(1180, fy - 40, 10, 42); g.fillStyle = '#2b2b3a'; g.fillRect(250, fy - 230, 10, 232); g.beginPath(); g.arc(255, fy - 236, 18, 0, TAU); g.fill(); glow(g, 255, fy - 236, 60, '#fff0c0', 0.5); }
        if (kind === 'zoo') { g.fillStyle = '#8a6a44'; g.fillRect(0, fy - 110, w, 10); g.fillRect(0, fy - 50, w, 8); for (let xx = 10; xx < w; xx += 46) g.fillRect(xx, fy - 120, 8, 122); g.fillStyle = '#6e7a8a'; for (let i = 0; i < 3; i++) { g.beginPath(); g.ellipse(250 + i * 420, fy - 6, 90, 50, 0, Math.PI, TAU); g.fill(); } g.fillStyle = '#2f5a3a'; rr(g, 90, fy - 260, 170, 70, 10); g.fill(); g.fillStyle = '#f6f1e7'; g.font = F(800, 40); g.textAlign = 'center'; g.fillText('ZOO', 175, fy - 212); g.fillStyle = '#5a4030'; g.fillRect(170, fy - 190, 10, 80); }
        return;
      }
      if (kind === 'school') { // classroom: wall, chalkboard, window, clock, wooden floor
        g.fillStyle = '#e9d8b8'; g.fillRect(0, 0, w, fy); g.fillStyle = '#d9c39a'; g.fillRect(0, fy - 120, w, 120);
        g.fillStyle = '#2f5a44'; rr(g, 330, 120, 620, 300, 12); g.fill(); g.strokeStyle = '#8a6a44'; g.lineWidth = 14; rr(g, 330, 120, 620, 300, 12); g.stroke();
        g.strokeStyle = 'rgba(255,255,255,0.55)'; g.lineWidth = 3; g.beginPath(); g.moveTo(380, 190); g.lineTo(560, 190); g.moveTo(380, 240); g.lineTo(640, 240); g.moveTo(380, 290); g.lineTo(520, 290); g.stroke();
        g.fillStyle = '#9fd0f0'; g.fillRect(1040, 120, 260, 220); g.strokeStyle = '#f2ebe0'; g.lineWidth = 12; g.strokeRect(1040, 120, 260, 220); g.beginPath(); g.moveTo(1170, 120); g.lineTo(1170, 340); g.stroke();
        g.fillStyle = '#f6f1e7'; g.beginPath(); g.arc(180, 170, 40, 0, TAU); g.fill(); g.strokeStyle = '#2a2240'; g.lineWidth = 4; g.beginPath(); g.moveTo(180, 170); g.lineTo(180, 142); g.moveTo(180, 170); g.lineTo(200, 178); g.stroke();
        groundG(g, w, h, fy, '#b07a4a', '#7a4e2e', 'rgba(255,220,180,0.12)'); return;
      }
    });
  }
  // drifting clouds / gentle sea waves drawn per frame over a backdrop (cheap)
  function seaSurface(x, t, y0, amp = 6, col = 'rgba(255,255,255,0.55)') { x.strokeStyle = col; x.lineWidth = 3; x.beginPath(); for (let X = 0; X <= 1280; X += 16) { const Y = y0 + waveY(X, t, amp); X ? x.lineTo(X, Y) : x.moveTo(X, Y); } x.stroke(); }
  const waveY = (X, t, amp) => amp * (Math.sin(X * 0.018 - t * 2.1) + 0.5 * Math.sin(X * 0.041 + t * 1.3));

  // ---------- human walk cycle (for crowds, people walking anywhere) ----------
  // Feet are planted while in stance (no sliding): over a stride of length S the stance foot moves backward relative to
  // the hips exactly as fast as the body moves forward. Arms swing opposite to the legs. dist = metres walked.
  function walkPose(ch, X, gy, h, f, dist, pxm) {
    const A = AGE[ch.age], r = h / (A.hd * 2), legL = h * A.leg, S = legL / pxm * 1.1, ph = (dist / S) % 1;
    const foot = (p) => { p = ((p % 1) + 1) % 1; const st = 0.6; if (p < st) return [(0.5 - p / st) * S * pxm * 0.6, 0]; const q = (p - st) / (1 - st); return [(-0.5 + q) * S * pxm * 0.6, -Math.sin(q * Math.PI) * 0.12 * legL]; };
    const fa = foot(ph), fb = foot(ph + 0.5), bob = 0.03 * r * Math.cos(ph * TAU * 2), sw = Math.sin(ph * TAU) * 0.5;
    return { x: X, gy, h, f, lean: 0.05, drop: 0.06 + bob / r, fF: [X + f * fa[0], gy - 0.17 * r + fa[1]], fB: [X + f * fb[0], gy - 0.17 * r + fb[1]], aF: { a: [-sw, 0.3 + Math.max(0, sw) * 0.4] }, aB: { a: [sw, 0.3 + Math.max(0, -sw) * 0.4] } };
  }

  // ---------- animals ----------
  // QUADRUPEDS: body on four two-bone legs with a no-slip walk (diagonal pairs), feet planted, body bobbing, tail and
  // ears swinging. Sizes in metres. dist = metres walked (0 = standing).
  const MAMMALS = {
    dog: { len: 0.75, hip: 0.5, leg: 0.48, neck: 0.22, head: 0.13, snout: 0.6, tail: 0.32, thick: 0.28, col: '#c98a4a', col2: '#f1d2a6', ear: 'flop' },
    cat: { len: 0.5, hip: 0.27, leg: 0.27, neck: 0.12, head: 0.1, snout: 0.25, tail: 0.38, thick: 0.18, col: '#7a7a86', col2: '#d8d8e0', ear: 'point', stripes: true },
    horse: { len: 1.6, hip: 1.45, leg: 1.0, neck: 0.75, head: 0.24, snout: 1.4, tail: 0.6, thick: 0.62, col: '#8a5a3a', col2: '#5a3a26', ear: 'point', mane: '#2a1a12', hoof: true },
    elephant: { len: 2.4, hip: 2.4, leg: 1.4, neck: 0.25, head: 0.55, snout: 0.2, tail: 0.6, thick: 1.5, col: '#8f8a94', col2: '#77727c', ear: 'elephant', trunk: true, legW: 0.42, pillar: true },
    lion: { len: 1.5, hip: 1.0, leg: 0.75, neck: 0.3, head: 0.25, snout: 0.5, tail: 0.8, thick: 0.55, col: '#d9a35a', col2: '#f1d2a6', ear: 'round', mane: '#8a4a1e', tuft: true },
    giraffe: { len: 1.5, hip: 2.0, leg: 1.6, neck: 1.6, head: 0.2, snout: 0.9, tail: 0.6, thick: 0.6, col: '#e8b04a', col2: '#f6e2b0', ear: 'point', spots: '#8a4a1e', hoof: true, neckUp: 0.35 },
  };
  function quad(x, k, X, gy, f, dist, t, pxm, o = {}) {
    const A = MAMMALS[k], L = A.len * pxm, Hh = A.hip * pxm, legL = A.leg * pxm, th = A.thick * pxm, S = A.leg * 1.0, ph = dist / S;
    const bob = (dist ? 1 : 0) * 0.02 * Hh * Math.cos(ph * TAU * 2) + 0.004 * Hh * Math.sin(t * 2);
    // legs carry the body: shoulders/hips sit at 96 % of leg length above the ground, so feet always reach the floor
    const cyL = gy - legL * (A.pillar ? 0.995 : 0.97) + bob, cy = cyL - th * 0.18, sh = [X + f * L * 0.38, cyL], hp = [X - f * L * 0.38, cyL];
    const lw = (A.legW || A.thick * 0.24) * pxm;
    const foot = (p, base) => { p = ((p % 1) + 1) % 1; if (!dist) return [base, gy]; const st = 0.65; if (p < st) return [base + f * (0.5 - p / st) * S * pxm * 0.65, gy]; const q = (p - st) / (1 - st); return [base + f * (-0.5 + q) * S * pxm * 0.65, gy - Math.sin(q * Math.PI) * (A.pillar ? 0.08 : 0.15) * legL]; };
    // anatomy: the FRONT knee (wrist joint) points forward when it flexes, the HIND hock points backward
    const legD = (top, ft, far, front) => { const [kn, an] = ik2(top, [ft[0], ft[1] - 0.03 * legL], legL * 0.52, legL * 0.5, front ? [f, 0.2] : [-f, 0.2]); const c = far ? shade(A.col, -0.25) : A.col; bone(x, top, kn, lw * 1.25, c); bone(x, kn, an, lw, c); x.fillStyle = A.hoof ? '#2a1a12' : far ? shade(A.col2, -0.2) : A.col2; x.beginPath(); x.ellipse(an[0] + f * lw * 0.2, an[1] + lw * 0.2, lw * 0.75, lw * 0.45, 0, 0, TAU); x.fill(); };
    // far legs, tail, body, near legs, neck and head
    legD([sh[0] - f * th * 0.1, sh[1]], foot(ph + 0.5, sh[0] + f * 0.02 * L), true, true); legD([hp[0] + f * th * 0.1, hp[1]], foot(ph, hp[0]), true, false);
    const tsw = Math.sin(t * 3 + ph * TAU) * 0.3, tb = [hp[0] - f * L * 0.08, cy - th * 0.25];
    x.strokeStyle = A.col; x.lineWidth = Math.max(3, lw * 0.5); x.lineCap = 'round'; x.beginPath(); x.moveTo(tb[0], tb[1]); x.quadraticCurveTo(tb[0] - f * A.tail * pxm * 0.6, tb[1] + A.tail * pxm * (0.1 + tsw * 0.3), tb[0] - f * A.tail * pxm * (0.8 + tsw * 0.2), tb[1] + A.tail * pxm * 0.7); x.stroke();
    if (A.tuft) { x.fillStyle = A.mane; x.beginPath(); x.arc(tb[0] - f * A.tail * pxm * (0.8 + tsw * 0.2), tb[1] + A.tail * pxm * 0.7, lw * 0.6, 0, TAU); x.fill(); }
    const bg2 = x.createLinearGradient(0, cy - th / 2, 0, cy + th / 2); bg2.addColorStop(0, shade(A.col, 0.12)); bg2.addColorStop(1, shade(A.col, -0.18));
    x.fillStyle = bg2; x.beginPath(); x.ellipse(X, cy, L * 0.55, th / 2, 0, 0, TAU); x.fill();
    x.save(); x.beginPath(); x.ellipse(X, cy, L * 0.55, th / 2, 0, 0, TAU); x.clip();
    x.fillStyle = A.col2; x.globalAlpha = 0.7; x.beginPath(); x.ellipse(X, cy + th * 0.42, L * 0.45, th * 0.22, 0, 0, TAU); x.fill(); x.globalAlpha = 1;
    if (A.spots) { const rs = H.rng(9); x.fillStyle = A.spots; for (let i = 0; i < 14; i++) { x.beginPath(); x.ellipse(X + rs.range(-0.5, 0.5) * L, cy + rs.range(-0.4, 0.3) * th, th * 0.12, th * 0.09, rs.range(0, 3), 0, TAU); x.fill(); } }
    if (A.stripes) { x.strokeStyle = shade(A.col, -0.3); x.lineWidth = th * 0.08; for (let i = -2; i <= 2; i++) { x.beginPath(); x.moveTo(X + i * L * 0.15, cy - th / 2); x.lineTo(X + i * L * 0.15 - f * th * 0.1, cy); x.stroke(); } }
    x.restore();
    legD(sh, foot(ph, sh[0]), false, true); legD(hp, foot(ph + 0.5, hp[0] - f * 0.02 * L), false, false);
    // neck + head
    const nu = A.neckUp || 0.6, nb = [X + f * L * 0.45, cy - th * 0.2], hd = [nb[0] + f * A.neck * pxm * Math.cos(nu), nb[1] - A.neck * pxm * Math.sin(nu) - (k === 'giraffe' ? A.neck * pxm * 0.6 : 0) + 0.01 * Hh * Math.sin(ph * TAU * 2)];
    bone(x, nb, hd, Math.max(lw * 1.6, th * (k === 'giraffe' ? 0.22 : 0.45)), A.col);
    if (A.spots && k === 'giraffe') { x.fillStyle = A.spots; for (let i = 1; i < 5; i++) { const q = mixP(nb, hd, i / 5); x.beginPath(); x.ellipse(q[0], q[1], th * 0.08, th * 0.06, 0, 0, TAU); x.fill(); } }
    if (A.mane && k !== 'lion') { x.strokeStyle = A.mane; x.lineWidth = th * 0.18; x.beginPath(); x.moveTo(nb[0] - f * th * 0.1, nb[1] - th * 0.2); x.lineTo(hd[0] - f * th * 0.15, hd[1] - th * 0.15); x.stroke(); }
    const hr = A.head * pxm;
    if (k === 'lion') { x.fillStyle = A.mane; x.beginPath(); x.arc(hd[0] - f * hr * 0.2, hd[1], hr * 1.7, 0, TAU); x.fill(); }
    if (A.ear === 'elephant') { x.fillStyle = shade(A.col, -0.12); x.beginPath(); x.ellipse(hd[0] - f * hr * 0.5, hd[1] + hr * 0.1, hr * 0.75, hr * 1.0, f * 0.2 + Math.sin(t * 2) * 0.08, 0, TAU); x.fill(); }
    x.fillStyle = A.col; x.beginPath(); x.arc(hd[0], hd[1], hr, 0, TAU); x.fill();
    const longFace = A.snout >= 0.8; // horse / giraffe: a long face pointing forward and down
    if (longFace) { const fa = 0.85, fc2 = [hd[0] + f * Math.cos(fa) * hr * 1.1, hd[1] + Math.sin(fa) * hr * 1.1]; x.fillStyle = A.col; x.beginPath(); x.ellipse(fc2[0], fc2[1], hr * 1.35, hr * 0.62, f * fa, 0, TAU); x.fill(); const nz = [hd[0] + f * Math.cos(fa) * hr * 2.2, hd[1] + Math.sin(fa) * hr * 2.2]; x.fillStyle = shade(A.col, -0.25); x.beginPath(); x.ellipse(nz[0], nz[1], hr * 0.45, hr * 0.42, 0, 0, TAU); x.fill(); x.fillStyle = '#2a1a1a'; x.beginPath(); x.arc(nz[0] + f * hr * 0.12, nz[1] - hr * 0.05, hr * 0.09, 0, TAU); x.fill(); }
    const sn = [hd[0] + f * hr * (0.6 + A.snout * 0.5), hd[1] + hr * 0.25];
    if (A.trunk) { x.strokeStyle = A.col; x.lineCap = 'round'; x.lineWidth = hr * 0.42; x.beginPath(); x.moveTo(hd[0] + f * hr * 0.6, hd[1] + hr * 0.2); x.quadraticCurveTo(hd[0] + f * hr * 1.3, hd[1] + hr * 1.2, hd[0] + f * hr * (1.0 + 0.2 * Math.sin(t * 1.6)), hd[1] + hr * 2.2); x.stroke(); x.fillStyle = '#f6f1e7'; x.beginPath(); x.moveTo(hd[0] + f * hr * 0.7, hd[1] + hr * 0.5); x.quadraticCurveTo(hd[0] + f * hr * 1.4, hd[1] + hr * 0.8, hd[0] + f * hr * 1.5, hd[1] + hr * 0.4); x.lineTo(hd[0] + f * hr * 0.75, hd[1] + hr * 0.35); x.fill(); }
    else if (!longFace) { x.fillStyle = A.col2; x.beginPath(); x.ellipse(mixP(hd, sn, 0.6)[0], sn[1], hr * (0.4 + A.snout * 0.35), hr * 0.42, 0, 0, TAU); x.fill(); x.fillStyle = '#2a1a1a'; x.beginPath(); x.ellipse(sn[0] + f * hr * 0.15 * A.snout, sn[1] - hr * 0.12, hr * 0.13, hr * 0.1, 0, 0, TAU); x.fill(); }
    if (A.ear === 'point') { x.fillStyle = A.col; x.beginPath(); x.moveTo(hd[0] - f * hr * 0.2, hd[1] - hr * 0.7); x.lineTo(hd[0] - f * hr * 0.45, hd[1] - hr * 1.5); x.lineTo(hd[0] + f * hr * 0.25, hd[1] - hr * 0.9); x.fill(); }
    if (A.ear === 'round') { x.fillStyle = A.col; x.beginPath(); x.arc(hd[0] - f * hr * 0.3, hd[1] - hr * 0.85, hr * 0.32, 0, TAU); x.fill(); }
    if (A.ear === 'flop') { x.fillStyle = shade(A.col, -0.3); x.beginPath(); x.ellipse(hd[0] - f * hr * 0.35, hd[1] + hr * 0.05, hr * 0.32, hr * 0.7, -f * (0.3 + 0.1 * Math.sin(ph * TAU * 2)), 0, TAU); x.fill(); }
    x.fillStyle = C.white; x.beginPath(); x.arc(hd[0] + f * hr * 0.35, hd[1] - hr * 0.2, hr * 0.2, 0, TAU); x.fill(); x.fillStyle = '#1b120e'; x.beginPath(); x.arc(hd[0] + f * hr * 0.42, hd[1] - hr * 0.2, hr * 0.11, 0, TAU); x.fill();
    x.fillStyle = 'rgba(20,10,30,0.25)'; x.beginPath(); x.ellipse(X, gy + 2, L * 0.6, Math.max(4, Hh * 0.05), 0, 0, TAU); x.fill();
  }
  // BIRDS: flying = wings flap (downstroke 60 % of the beat lifts the body, it sinks a little on the upstroke);
  // perched / standing = folded wing, two thin legs to the ground. beat = flaps per second.
  const BIRDS = { sparrow: { s: 0.16, col: '#8a5a3a', col2: '#e8d2b0', beak: '#e0a23a', beat: 12 }, parrot: { s: 0.35, col: '#2fa84f', col2: '#f5c63c', wing2: '#e5383b', beak: '#2a2a2a', beat: 6 }, eagle: { s: 0.85, col: '#5a3a26', col2: '#f6f1e7', beak: '#f5c63c', beat: 2, head: '#f6f1e7' }, duck: { s: 0.5, col: '#f6f1e7', col2: '#f6f1e7', beak: '#ff8a3d', beat: 5 } };
  function bird(x, k, X, Y, f, t, pxm, flying = true) {
    const B = BIRDS[k], s = B.s * pxm, ph = (t * B.beat) % 1, down = ph < 0.6, wa = down ? lerp(0.9, -0.9, ph / 0.6) : lerp(-0.9, 0.9, (ph - 0.6) / 0.4);
    const y = Y + (flying ? (down ? -1 : 1) * 0.04 * s * Math.sin((down ? ph / 0.6 : (ph - 0.6) / 0.4) * Math.PI) : 0);
    if (!flying) { x.strokeStyle = '#e0a23a'; x.lineWidth = Math.max(1.5, s * 0.04); for (const d of [-0.08, 0.06]) { x.beginPath(); x.moveTo(X + d * s, y + s * 0.2); x.lineTo(X + d * s, y + s * 0.5); x.stroke(); } }
    const wing = (far) => { x.save(); x.translate(X - f * s * 0.05, y - s * 0.05); x.rotate(f * (flying ? wa : 0.15) * (far ? 0.85 : 1)); x.scale(f, 1); x.fillStyle = far ? shade(B.col, -0.25) : (B.wing2 || B.col); x.beginPath(); x.moveTo(0, 0); x.quadraticCurveTo(-s * 0.3, -s * (flying ? 0.75 : 0.1), -s * (flying ? 0.75 : 0.42), -s * (flying ? 0.55 : 0.02)); x.quadraticCurveTo(-s * 0.4, s * 0.05, 0, s * 0.12); x.fill(); x.restore(); };
    if (flying) wing(true);
    x.fillStyle = B.col; x.beginPath(); x.ellipse(X, y, s * 0.42, s * 0.22, -f * 0.1, 0, TAU); x.fill();
    x.fillStyle = B.col2; x.beginPath(); x.ellipse(X + f * s * 0.08, y + s * 0.08, s * 0.28, s * 0.12, 0, 0, TAU); x.fill();
    x.fillStyle = B.col; x.beginPath(); x.moveTo(X - f * s * 0.35, y - s * 0.05); x.lineTo(X - f * s * 0.62, y - s * 0.12); x.lineTo(X - f * s * 0.6, y + s * 0.08); x.fill(); // tail
    x.fillStyle = B.head || B.col; x.beginPath(); x.arc(X + f * s * 0.38, y - s * 0.14, s * 0.15, 0, TAU); x.fill();
    x.fillStyle = B.beak; x.beginPath(); x.moveTo(X + f * s * 0.5, y - s * 0.18); x.lineTo(X + f * s * (k === 'duck' ? 0.72 : 0.66), y - s * 0.12); x.lineTo(X + f * s * 0.5, y - s * 0.08); x.fill();
    x.fillStyle = C.white; x.beginPath(); x.arc(X + f * s * 0.42, y - s * 0.17, s * 0.05, 0, TAU); x.fill(); x.fillStyle = '#1b120e'; x.beginPath(); x.arc(X + f * s * 0.435, y - s * 0.17, s * 0.028, 0, TAU); x.fill();
    wing(false);
  }
  // FISH: the body bends in a wave that travels head -> tail and grows toward the tail (that is what pushes the fish);
  // tail fin follows the end slope. speed ~ tail beat x body length x 0.6.
  const FISH = { clownfish: { len: 0.11, h: 0.38, col: '#ff7a1a', band: '#f6f1e7', fin: '#ff9a4a', beat: 3 }, tuna: { len: 1.2, h: 0.26, col: '#3a5a8a', col2: '#c8d4e0', fin: '#f5c63c', beat: 2 }, shark: { len: 2.5, h: 0.22, col: '#7a8a9a', col2: '#e6ecf0', fin: '#6a7a8a', beat: 0.9, dorsal: true } };
  function fish(x, k, X, Y, f, t, pxm) {
    const Fh = FISH[k], L = Fh.len * pxm, n = 18, pts = [];
    for (let i = 0; i <= n; i++) { const u = i / n, amp = L * 0.08 * Math.pow(u, 1.6); pts.push([X + f * L * (0.5 - u), Y + amp * Math.sin(TAU * (u * 0.9 - t * Fh.beat))]); }
    const wd = (u) => L * Fh.h * 0.5 * Math.pow(Math.sin(Math.PI * Math.min(1, u * 0.85 + 0.08)), 0.75);
    const tip = pts[n], pre = pts[n - 2], ta = Math.atan2(tip[1] - pre[1], tip[0] - pre[0]);
    x.save(); x.translate(tip[0], tip[1]); x.rotate(ta); x.fillStyle = Fh.fin; x.beginPath(); x.moveTo(0, 0); x.lineTo(L * 0.22, -L * 0.18); x.lineTo(L * 0.14, 0); x.lineTo(L * 0.22, L * 0.18); x.fill(); x.restore();
    const top = pts.map((p, i) => [p[0], p[1] - wd(i / n)]), bot = pts.map((p, i) => [p[0], p[1] + wd(i / n)]).reverse();
    if (Fh.dorsal) { const p = pts[6]; x.fillStyle = Fh.fin; x.beginPath(); x.moveTo(p[0] + f * L * 0.08, p[1] - wd(6 / n)); x.lineTo(p[0] - f * L * 0.04, p[1] - wd(6 / n) - L * 0.17); x.lineTo(p[0] - f * L * 0.12, p[1] - wd(6 / n) * 0.9); x.fill(); }
    const g = x.createLinearGradient(0, Y - L * Fh.h / 2, 0, Y + L * Fh.h / 2); g.addColorStop(0, shade(Fh.col, 0.1)); g.addColorStop(0.55, Fh.col); g.addColorStop(1, Fh.col2 || shade(Fh.col, -0.2));
    x.fillStyle = g; x.beginPath(); [...top, ...bot].forEach((p, i) => (i ? x.lineTo(p[0], p[1]) : x.moveTo(p[0], p[1]))); x.closePath(); x.fill();
    if (Fh.band) { x.save(); x.clip(); x.fillStyle = Fh.band; for (const u of [0.2, 0.5, 0.78]) { const p = pts[Math.round(u * n)]; x.fillRect(p[0] - L * 0.05, Y - L, L * 0.1, L * 2); } x.restore(); }
    const e = pts[2]; x.fillStyle = C.white; x.beginPath(); x.arc(e[0], e[1] - wd(0.11) * 0.25, L * 0.045, 0, TAU); x.fill(); x.fillStyle = '#1b120e'; x.beginPath(); x.arc(e[0] + f * L * 0.008, e[1] - wd(0.11) * 0.25, L * 0.025, 0, TAU); x.fill();
    const pf = pts[5]; x.fillStyle = shade(Fh.fin, -0.1); x.beginPath(); x.ellipse(pf[0], pf[1] + wd(0.3) * 0.35, L * 0.08, L * 0.035, f * (0.5 + 0.3 * Math.sin(t * 6)), 0, TAU); x.fill();
  }
  // REPTILES: low body on short sprawling legs (lizard / crocodile), the spine swings side to side with the gait;
  // turtle = domed shell with head and flippers; snake = body following a travelling wave along the ground.
  const REPTILES = { lizard: { len: 0.35, col: '#4fa35a', col2: '#c8e07a' }, croc: { len: 3.0, col: '#4a6a3a', col2: '#9aa86a', scutes: true }, turtle: { len: 0.4, col: '#6a8a4a', shell: '#7a5a34' }, snake: { len: 1.5, col: '#5a8a3a', col2: '#d9c96a' } };
  function reptile(x, k, X, gy, f, dist, t, pxm) {
    const R = REPTILES[k], L = R.len * pxm, ph = dist / (R.len * 0.35);
    if (k === 'snake') { const n = 30, w = L * 0.045; x.strokeStyle = R.col; x.lineCap = 'round'; x.lineJoin = 'round'; x.lineWidth = w; x.beginPath(); for (let i = 0; i <= n; i++) { const u = i / n, px = X + f * L * (0.5 - u), py = gy - w * 0.5 - Math.abs(Math.sin(TAU * (u * 1.5 - ph * 0.5))) * L * 0.05 * (1 - u * 0.5); i ? x.lineTo(px, py) : x.moveTo(px, py); } x.stroke(); x.fillStyle = R.col; x.beginPath(); x.ellipse(X + f * L * 0.52, gy - w * 0.7, w * 0.9, w * 0.6, 0, 0, TAU); x.fill(); x.fillStyle = '#1b120e'; x.beginPath(); x.arc(X + f * L * 0.54, gy - w * 0.85, w * 0.15, 0, TAU); x.fill(); x.strokeStyle = '#e5383b'; x.lineWidth = Math.max(1.5, w * 0.12); x.beginPath(); x.moveTo(X + f * L * 0.55, gy - w * 0.6); x.lineTo(X + f * (L * 0.55 + w * (0.8 + 0.4 * Math.sin(t * 9))), gy - w * 0.6); x.stroke(); return; }
    if (k === 'turtle') { const sh = L * 0.5, by = gy - sh * 0.35; for (const d of [-0.3, 0.3]) { const sw = dist ? Math.sin(ph * TAU + d * 9) * 0.25 : 0; x.fillStyle = shade(R.col, d < 0 ? -0.2 : 0); x.beginPath(); x.ellipse(X + d * L, gy - sh * 0.1, sh * 0.18, sh * 0.12, sw, 0, TAU); x.fill(); } x.fillStyle = R.col; x.beginPath(); x.ellipse(X + f * L * 0.48, by - sh * 0.05, sh * 0.2, sh * 0.15, 0, 0, TAU); x.fill(); x.fillStyle = R.shell; x.beginPath(); x.ellipse(X, by, L * 0.42, sh * 0.62, 0, Math.PI, TAU); x.fill(); x.fillStyle = shade(R.shell, -0.2); x.fillRect(X - L * 0.42, by - 2, L * 0.84, sh * 0.1); x.strokeStyle = shade(R.shell, 0.25); x.lineWidth = 2; for (const d of [-0.15, 0.15]) { x.beginPath(); x.moveTo(X + d * L, by); x.lineTo(X + d * L * 1.4, by - sh * 0.55); x.stroke(); } x.fillStyle = '#1b120e'; x.beginPath(); x.arc(X + f * L * 0.55, by - sh * 0.1, sh * 0.03, 0, TAU); x.fill(); return; }
    const bh = L * (k === 'croc' ? 0.09 : 0.08), by = gy - bh * 1.4, lw = bh * 0.55;
    const leg = (bx, p, far) => { p = ((p % 1) + 1) % 1; const lift = dist && p > 0.6 ? Math.sin((p - 0.6) / 0.4 * Math.PI) * bh * 0.5 : 0, sw = dist ? (p < 0.6 ? 0.5 - p / 0.6 : -0.5 + (p - 0.6) / 0.4) * L * 0.08 : 0; const kn = [bx + f * sw * 0.5 + f * bh * 0.3, by - bh * 0.2 - lift * 0.3], ft = [bx + f * sw, gy - lift]; const c = far ? shade(R.col, -0.25) : R.col; bone(x, [bx, by], kn, lw, c); bone(x, kn, ft, lw * 0.8, c); x.fillStyle = c; x.beginPath(); x.ellipse(ft[0] + f * lw * 0.4, ft[1], lw * 0.7, lw * 0.3, 0, 0, TAU); x.fill(); };
    leg(X + f * L * 0.15, ph + 0.5, true); leg(X - f * L * 0.12, ph, true);
    const n = 20, pts = []; for (let i = 0; i <= n; i++) { const u = i / n; pts.push([X + f * L * (0.5 - u), by + Math.sin(TAU * (u * 0.8 - ph * 0.5)) * bh * 0.08]); }
    const wd = (u) => bh * (u < 0.15 ? 0.55 + u * 2.5 : u < 0.45 ? 0.95 : Math.max(0.08, 0.95 - (u - 0.45) * 1.7));
    const top = pts.map((p, i) => [p[0], p[1] - wd(i / n)]), bot = pts.map((p, i) => [p[0], p[1] + wd(i / n) * 0.8]).reverse();
    x.fillStyle = R.col; x.beginPath(); [...top, ...bot].forEach((p, i) => (i ? x.lineTo(p[0], p[1]) : x.moveTo(p[0], p[1]))); x.closePath(); x.fill();
    x.fillStyle = R.col2; x.beginPath(); bot.forEach((p, i) => (i ? x.lineTo(p[0], p[1]) : x.moveTo(p[0], p[1]))); for (let i = n; i >= 0; i--) { const p = pts[i]; x.lineTo(p[0], p[1] + wd(i / n) * 0.35); } x.closePath(); x.fill();
    if (R.scutes) { x.fillStyle = shade(R.col, -0.25); for (let i = 3; i < n - 2; i += 2) { const p = top[i]; x.beginPath(); x.moveTo(p[0] - L * 0.012, p[1] + 1); x.lineTo(p[0], p[1] - bh * 0.25); x.lineTo(p[0] + L * 0.012, p[1] + 1); x.fill(); } }
    const e = top[1]; x.fillStyle = C.white; x.beginPath(); x.arc(e[0], e[1] + bh * 0.15, bh * 0.22, 0, TAU); x.fill(); x.fillStyle = '#1b120e'; x.beginPath(); x.arc(e[0] + f * bh * 0.05, e[1] + bh * 0.15, bh * 0.12, 0, TAU); x.fill();
    leg(X + f * L * 0.18, ph, false); leg(X - f * L * 0.09, ph + 0.5, false);
  }

  // ---------- vehicles ----------
  // Wheels roll without slipping: angle = distance / radius. Bodies ride on a small suspension spring over bumps.
  // Boats float: heave and pitch come from the wave height under bow and stern (same wave function as the sea drawn).
  function wheel(x, cx, cy, r, ang) { x.fillStyle = '#1e1b26'; x.beginPath(); x.arc(cx, cy, r, 0, TAU); x.fill(); x.fillStyle = '#b8bcc8'; x.beginPath(); x.arc(cx, cy, r * 0.55, 0, TAU); x.fill(); x.strokeStyle = '#6a6e7a'; x.lineWidth = Math.max(1.5, r * 0.12); for (let i = 0; i < 5; i++) { const a = ang + (i * TAU) / 5; x.beginPath(); x.moveTo(cx, cy); x.lineTo(cx + Math.cos(a) * r * 0.5, cy + Math.sin(a) * r * 0.5); x.stroke(); } }
  const VEH = { car: { len: 4.3, h: 1.45, wr: 0.33, col: '#e5383b' }, bus: { len: 11, h: 3.1, wr: 0.5, col: '#f5c63c' }, train: { len: 16, h: 3.8, wr: 0.46, col: '#3d6fb6' } };
  function vehicle(x, k, X, gy, f, dist, t, pxm, col) {
    const V = col ? { ...VEH[k], col } : VEH[k], L = V.len * pxm, Hh = V.h * pxm, wr = V.wr * pxm, ang = f * dist / V.wr, sus = Math.sin(dist * 3.1) * 0.006 * Hh + Math.sin(dist * 7.7) * 0.003 * Hh;
    const by = gy - wr * 1.25 + sus, top = by - Hh + wr * 1.2, x0 = X - L / 2;
    const wheelsAt = k === 'car' ? [0.2, 0.8] : k === 'bus' ? [0.18, 0.78] : [0.1, 0.2, 0.8, 0.9];
    if (k === 'train') { x.fillStyle = '#5a4a3a'; x.fillRect(x0 - 200, gy - 4, L + 400, 8); x.fillStyle = '#4a4a54'; for (let xx = x0 - 200 + ((-dist * pxm * f) % 40 + 40) % 40; xx < x0 + L + 200; xx += 40) x.fillRect(xx, gy + 3, 18, 6); }
    x.fillStyle = 'rgba(20,10,30,0.3)'; x.beginPath(); x.ellipse(X, gy + 3, L * 0.5, wr * 0.35, 0, 0, TAU); x.fill();
    const g = x.createLinearGradient(0, top, 0, by); g.addColorStop(0, shade(V.col, 0.15)); g.addColorStop(1, shade(V.col, -0.2)); x.fillStyle = g;
    if (k === 'car') { x.beginPath(); x.moveTo(x0, by); x.lineTo(x0, by - Hh * 0.45); x.quadraticCurveTo(x0 + L * 0.02, by - Hh * 0.55, x0 + L * 0.18, by - Hh * 0.55); x.lineTo(x0 + L * 0.3, top); x.lineTo(x0 + L * 0.68, top); x.lineTo(x0 + L * 0.82, by - Hh * 0.55); x.quadraticCurveTo(x0 + L, by - Hh * 0.52, x0 + L, by - Hh * 0.3); x.lineTo(x0 + L, by); x.closePath(); x.fill(); x.fillStyle = '#9fd0f0'; x.beginPath(); x.moveTo(x0 + L * 0.33, top + Hh * 0.06); x.lineTo(x0 + L * 0.48, top + Hh * 0.06); x.lineTo(x0 + L * 0.48, by - Hh * 0.57); x.lineTo(x0 + L * 0.22, by - Hh * 0.57); x.fill(); x.beginPath(); x.moveTo(x0 + L * 0.51, top + Hh * 0.06); x.lineTo(x0 + L * 0.66, top + Hh * 0.06); x.lineTo(x0 + L * 0.78, by - Hh * 0.57); x.lineTo(x0 + L * 0.51, by - Hh * 0.57); x.fill(); }
    else { rr(x, x0, top, L, by - top, Hh * 0.14); x.fill(); x.fillStyle = '#9fd0f0'; const nw = k === 'bus' ? 6 : 8; for (let i = 0; i < nw; i++) rr(x, x0 + L * (0.08 + i * (0.84 / nw)), top + Hh * 0.12, L * 0.84 / nw - 8, Hh * 0.3, 6), x.fill(); x.fillStyle = shade(V.col, -0.3); x.fillRect(x0, by - Hh * 0.3, L, Hh * 0.06); if (k === 'train') { x.fillStyle = '#f6f1e7'; x.fillRect(x0, top + Hh * 0.55, L, Hh * 0.05); const fx = f > 0 ? x0 + L : x0; x.fillStyle = shade(V.col, 0.05); x.beginPath(); x.ellipse(fx, (top + by) / 2, L * 0.05, (by - top) / 2, 0, f > 0 ? -Math.PI / 2 : Math.PI / 2, f > 0 ? Math.PI / 2 : Math.PI * 1.5); x.fill(); x.fillStyle = '#9fd0f0'; x.beginPath(); x.ellipse(fx, top + Hh * 0.28, L * 0.035, Hh * 0.16, 0, f > 0 ? -Math.PI / 2 : Math.PI / 2, f > 0 ? Math.PI / 2 : Math.PI * 1.5); x.fill(); } }
    const front = f > 0 ? x0 + L : x0; x.fillStyle = '#fff2b0'; x.beginPath(); x.arc(front - f * L * 0.015, by - Hh * 0.32, wr * 0.22, 0, TAU); x.fill(); glow(x, front + f * wr * 0.3, by - Hh * 0.32, wr * 1.2, '#fff2b0', 0.3);
    for (const u of wheelsAt) wheel(x, x0 + L * u, gy - wr, wr, ang);
  }
  function boat(x, X, waterY, f, t, pxm, kind = 'sail') {
    const L = (kind === 'sail' ? 6 : 9) * pxm, yb = waterY + waveY(X + f * L * 0.4, t, 6), ys = waterY + waveY(X - f * L * 0.4, t, 6), cy = (yb + ys) / 2 - L * 0.04, pitch = Math.atan((yb - ys) / (f * L * 0.8));
    x.save(); x.translate(X, cy); x.rotate(pitch); x.scale(f, 1);
    if (kind === 'sail') { x.fillStyle = '#5a3e2a'; x.fillRect(-L * 0.02, -L * 0.75, L * 0.025, L * 0.72); x.fillStyle = '#f6f1e7'; x.beginPath(); x.moveTo(L * 0.01, -L * 0.72); x.quadraticCurveTo(L * 0.3 + Math.sin(t * 1.5) * L * 0.02, -L * 0.35, L * 0.3, -L * 0.06); x.lineTo(L * 0.01, -L * 0.06); x.fill(); x.fillStyle = '#e5383b'; x.beginPath(); x.moveTo(-L * 0.01, -L * 0.6); x.lineTo(-L * 0.25, -L * 0.08); x.lineTo(-L * 0.01, -L * 0.08); x.fill(); }
    else { x.fillStyle = '#f6f1e7'; rr(x, -L * 0.25, -L * 0.2, L * 0.4, L * 0.15, 6); x.fill(); x.fillStyle = '#9fd0f0'; for (let i = 0; i < 4; i++) x.fillRect(-L * 0.22 + i * L * 0.09, -L * 0.17, L * 0.06, L * 0.05); }
    x.fillStyle = kind === 'sail' ? '#3d6fb6' : '#e5383b'; x.beginPath(); x.moveTo(-L * 0.5, -L * 0.06); x.lineTo(L * 0.5, -L * 0.08); x.lineTo(L * 0.38, L * 0.06); x.lineTo(-L * 0.42, L * 0.06); x.closePath(); x.fill();
    x.fillStyle = '#f6f1e7'; x.fillRect(-L * 0.48, -L * 0.065, L * 0.97, L * 0.02);
    x.restore();
    x.fillStyle = 'rgba(255,255,255,0.6)'; for (let i = 0; i < 4; i++) { x.beginPath(); x.ellipse(X - f * (L * 0.55 + i * L * 0.12), waterY + waveY(X - f * (L * 0.55 + i * L * 0.12), t, 6) + 2, L * 0.06 * (1 - i * 0.2), 3, 0, 0, TAU); x.fill(); }
  }
  function submarine(x, X, Y, f, t, pxm) { // hull, sail with periscope, spinning propeller, bubbles that rise faster as they go (buoyancy)
    const L = 12 * pxm, Hh = L * 0.2, y = Y + Math.sin(t * 0.8) * Hh * 0.05;
    for (let i = 0; i < 8; i++) { const age = (t * 0.9 + i / 8) % 1, by = y - age * age * Hh * 3.5, bx = X - f * L * 0.55 - f * age * L * 0.05 + Math.sin(age * 9 + i) * 6; x.strokeStyle = 'rgba(220,250,255,0.7)'; x.lineWidth = 2; x.beginPath(); x.arc(bx, by, 3 + age * 7, 0, TAU); x.stroke(); }
    x.fillStyle = '#f5c63c'; rr(x, X - L / 2, y - Hh / 2, L, Hh, Hh / 2); x.fill(); x.fillStyle = shade('#f5c63c', -0.2); rr(x, X - L / 2, y, L, Hh / 2, Hh / 4); x.fill();
    x.fillStyle = '#f5c63c'; rr(x, X - f * L * 0.05 - L * 0.1, y - Hh * 1.05, L * 0.2, Hh * 0.62, 8); x.fill(); x.strokeStyle = '#4a4a54'; x.lineWidth = 4; x.beginPath(); x.moveTo(X, y - Hh * 1.05); x.lineTo(X, y - Hh * 1.5); x.lineTo(X + f * L * 0.04, y - Hh * 1.5); x.stroke();
    x.fillStyle = '#9fd0f0'; for (let i = 0; i < 4; i++) { x.beginPath(); x.arc(X + f * (L * 0.12 + i * L * 0.08), y - Hh * 0.05, Hh * 0.14, 0, TAU); x.fill(); }
    const px = X - f * L * 0.52, sp = Math.cos(t * 25); x.fillStyle = '#6a6e7a'; x.beginPath(); x.ellipse(px, y - Hh * 0.28 * sp, Hh * 0.08, Hh * 0.28 * Math.abs(sp) + 2, 0, 0, TAU); x.fill(); x.beginPath(); x.ellipse(px, y + Hh * 0.28 * sp, Hh * 0.08, Hh * 0.28 * Math.abs(sp) + 2, 0, 0, TAU); x.fill();
  }
  function airplane(x, X, Y, f, t, pxm, bank = 0) { // fuselage, near wing, tail fin, windows, engine; contrail behind
    const L = 30 * pxm, Hh = L * 0.11;
    x.strokeStyle = 'rgba(255,255,255,0.7)'; x.lineCap = 'round'; for (let i = 0; i < 2; i++) { const g = x.createLinearGradient(X - f * L * 0.5, 0, X - f * L * 2.2, 0); g.addColorStop(0, 'rgba(255,255,255,0.7)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.strokeStyle = g; x.lineWidth = 6 + i * 4; x.beginPath(); x.moveTo(X - f * L * 0.1, Y + Hh * (0.3 + i * 0.25)); x.lineTo(X - f * L * 2.2, Y + Hh * (0.3 + i * 0.25)); x.stroke(); }
    x.save(); x.translate(X, Y + Math.sin(t * 1.2) * Hh * 0.08); x.rotate(bank + Math.sin(t * 0.9) * 0.02); x.scale(f, 1);
    x.fillStyle = shade('#d8dce6', -0.15); x.beginPath(); x.moveTo(-L * 0.05, -Hh * 0.3); x.lineTo(-L * 0.28, -Hh * 0.9); x.lineTo(-L * 0.2, -Hh * 0.9); x.lineTo(L * 0.08, -Hh * 0.3); x.fill(); // far wing
    x.fillStyle = '#f6f1e7'; rr(x, -L / 2, -Hh / 2, L, Hh, Hh / 2); x.fill(); x.beginPath(); x.moveTo(L * 0.42, -Hh / 2); x.quadraticCurveTo(L * 0.56, -Hh * 0.2, L * 0.5, Hh * 0.3); x.lineTo(L * 0.4, Hh / 2); x.fill();
    x.fillStyle = '#3d6fb6'; x.beginPath(); x.moveTo(-L * 0.36, -Hh * 0.45); x.lineTo(-L * 0.5, -Hh * 1.7); x.lineTo(-L * 0.42, -Hh * 1.7); x.lineTo(-L * 0.24, -Hh * 0.45); x.fill(); x.fillRect(-L / 2, -Hh * 0.05, L, Hh * 0.12);
    x.fillStyle = '#9fd0f0'; for (let i = 0; i < 12; i++) x.fillRect(-L * 0.3 + i * L * 0.055, -Hh * 0.25, L * 0.022, Hh * 0.2); x.beginPath(); x.moveTo(L * 0.43, -Hh * 0.38); x.lineTo(L * 0.5, -Hh * 0.18); x.lineTo(L * 0.43, -Hh * 0.18); x.fill();
    x.fillStyle = '#c8ccd8'; x.beginPath(); x.moveTo(-L * 0.05, Hh * 0.1); x.lineTo(-L * 0.24, Hh * 1.1); x.lineTo(-L * 0.12, Hh * 1.1); x.lineTo(L * 0.1, Hh * 0.1); x.fill(); // near wing
    x.fillStyle = '#8a8e9a'; rr(x, -L * 0.06, Hh * 0.45, L * 0.12, Hh * 0.35, Hh * 0.17); x.fill();
    x.restore();
  }

  // ---------- the body: organs and a cell (anatomically correct shapes, motion from physiology) ----------
  // Anterior (front) view, so the PATIENT'S left is on the viewer's right.
  // heart: atria on top, ventricles below, apex down and to the patient's left; aorta arches up and over to the left with
  // three branches; pulmonary trunk in front (blue: carries blood low in oxygen to the lungs); vena cava on the right.
  // Beat = "lub-dub": two quick squeezes then a pause, rate in beats per minute.
  function heart(x, cx, cy, s, t, bpm = 70) {
    const ph = (t * bpm / 60) % 1, sq = 1 - 0.06 * Math.exp(-Math.pow((ph - 0.08) / 0.05, 2)) - 0.035 * Math.exp(-Math.pow((ph - 0.3) / 0.05, 2));
    x.save(); x.translate(cx, cy); x.scale(sq, sq);
    x.strokeStyle = '#3d6fb6'; x.lineCap = 'round'; x.lineWidth = s * 0.16; x.beginPath(); x.moveTo(-s * 0.32, -s * 0.15); x.lineTo(-s * 0.32, -s * 0.85); x.stroke(); // superior vena cava
    x.strokeStyle = '#d93a3a'; x.lineWidth = s * 0.2; x.beginPath(); x.moveTo(-s * 0.05, -s * 0.2); x.bezierCurveTo(-s * 0.08, -s * 0.85, s * 0.4, -s * 0.85, s * 0.42, -s * 0.35); x.stroke(); // aortic arch
    x.lineWidth = s * 0.07; for (const bx of [-0.02, 0.12, 0.26]) { x.beginPath(); x.moveTo(s * bx, -s * 0.68 + Math.abs(bx - 0.12) * s * 0.4); x.lineTo(s * bx, -s * 1.0); x.stroke(); }
    x.strokeStyle = '#4a7fd0'; x.lineWidth = s * 0.17; x.beginPath(); x.moveTo(s * 0.08, -s * 0.15); x.quadraticCurveTo(s * 0.15, -s * 0.55, s * 0.4, -s * 0.55); x.stroke(); // pulmonary trunk
    const g = x.createRadialGradient(-s * 0.15, -s * 0.1, 0, 0, s * 0.1, s * 0.75); g.addColorStop(0, '#e2525a'); g.addColorStop(1, '#a8242e'); x.fillStyle = g;
    x.beginPath(); x.moveTo(-s * 0.45, -s * 0.25); x.bezierCurveTo(-s * 0.55, s * 0.15, -s * 0.15, s * 0.45, s * 0.3, s * 0.62); x.bezierCurveTo(s * 0.55, s * 0.3, s * 0.6, -s * 0.05, s * 0.45, -s * 0.28); x.bezierCurveTo(s * 0.25, -s * 0.42, -s * 0.25, -s * 0.42, -s * 0.45, -s * 0.25); x.fill();
    x.fillStyle = '#c9363e'; x.beginPath(); x.ellipse(-s * 0.36, -s * 0.22, s * 0.17, s * 0.15, 0, 0, TAU); x.fill(); // right atrium
    x.strokeStyle = '#f5c63c'; x.lineWidth = s * 0.025; x.beginPath(); x.moveTo(s * 0.02, -s * 0.18); x.bezierCurveTo(s * 0.0, s * 0.1, s * 0.12, s * 0.35, s * 0.25, s * 0.55); x.stroke(); // interventricular groove + coronary
    x.fillStyle = 'rgba(255,255,255,0.25)'; x.beginPath(); x.ellipse(-s * 0.2, -s * 0.02, s * 0.12, s * 0.06, -0.5, 0, TAU); x.fill();
    x.restore();
  }
  // lungs: right lung (viewer's left) has 3 lobes, left lung 2 lobes with the cardiac notch; trachea with cartilage rings
  // splitting into two bronchi. breath 0..1 inflates them (volume up, diaphragm down).
  function lungs(x, cx, cy, s, breath) {
    const k = 1 + 0.07 * breath;
    x.save(); x.translate(cx, cy);
    x.strokeStyle = '#e8d0c8'; x.lineCap = 'round'; x.lineWidth = s * 0.12; x.beginPath(); x.moveTo(0, -s * 1.1); x.lineTo(0, -s * 0.45); x.moveTo(0, -s * 0.45); x.quadraticCurveTo(-s * 0.1, -s * 0.35, -s * 0.28, -s * 0.25); x.moveTo(0, -s * 0.45); x.quadraticCurveTo(s * 0.1, -s * 0.35, s * 0.28, -s * 0.25); x.stroke();
    x.strokeStyle = '#c9a8a0'; x.lineWidth = s * 0.02; for (let i = 0; i < 6; i++) { x.beginPath(); x.moveTo(-s * 0.06, -s * (1.05 - i * 0.1)); x.lineTo(s * 0.06, -s * (1.05 - i * 0.1)); x.stroke(); }
    for (const sd of [-1, 1]) {
      x.save(); x.scale(sd * k, k);
      const g = x.createLinearGradient(s * 0.1, -s * 0.8, s * 0.7, s * 0.6); g.addColorStop(0, '#f2a0a8'); g.addColorStop(1, '#c9606c'); x.fillStyle = g;
      x.beginPath(); x.moveTo(s * 0.12, -s * 0.75); x.bezierCurveTo(s * 0.3, -s * 0.95, s * 0.72, -s * 0.4, s * 0.72, s * 0.35); x.quadraticCurveTo(s * 0.7, s * 0.62, s * 0.45, s * 0.55);
      if (sd > 0) { x.quadraticCurveTo(s * 0.3, s * 0.45, s * 0.24, s * 0.5); x.quadraticCurveTo(s * 0.12, s * 0.2, s * 0.2, s * 0.05); x.quadraticCurveTo(s * 0.08, -s * 0.1, s * 0.12, -s * 0.2); } // cardiac notch (patient's left lung)
      else { x.quadraticCurveTo(s * 0.15, s * 0.55, s * 0.12, s * 0.3); }
      x.closePath(); x.fill();
      x.strokeStyle = '#a84a56'; x.lineWidth = s * 0.02; x.beginPath(); x.moveTo(s * 0.68, s * 0.0); x.quadraticCurveTo(s * 0.4, s * 0.1, s * 0.16, -s * 0.5); x.stroke(); // oblique fissure
      if (sd < 0) { x.beginPath(); x.moveTo(s * 0.7, -s * 0.18); x.lineTo(s * 0.3, -s * 0.2); x.stroke(); } // horizontal fissure: right lung only
      x.restore();
    }
    x.restore();
  }
  // brain (side view, front to the LEFT): a cloud of overlapping FLAT circles, pink at the front, lilac at the back and
  // along the bottom lobe, no fold lines and no shading; one thin plum edge around the whole shape; a rounded pink stem.
  // Drawn once at 360 px and cached; f = -1 faces right. Parts in units of s (centre 0,0): front ~(-0.5,-0.3),
  // top ~(0,-0.5), back ~(0.62,-0.1), bottom lobe ~(0.05,0.17), cerebellum ~(0.37,0.37), stem ~(0.2,0.55).
  const BRAIN_DOTS = [
      [0.369, 0.369, 0.170, '#d58cbd'],
      [0.057, 0.327, 0.091, '#e299c9'],
      [0.327, 0.256, 0.156, '#e09cd0'],
      [-0.568, -0.142, 0.213, '#f6a8bb'],
      [-0.568, 0.057, 0.165, '#e7a6cc'],
      [-0.426, -0.355, 0.227, '#f8c6d5'],
      [-0.312, -0.369, 0.205, '#f6b2c2'],
      [-0.057, -0.497, 0.170, '#f7a4ae'],
      [-0.241, -0.114, 0.176, '#f59fb4'],
      [0.199, -0.511, 0.131, '#e19cd2'],
      [0.085, -0.227, 0.233, '#dc9ad6'],
      [0.384, -0.426, 0.188, '#e9a7dd'],
      [0.341, -0.128, 0.205, '#f1aad8'],
      [0.625, -0.085, 0.148, '#e0a1d9'],
      [0.534, -0.261, 0.142, '#c9a1e3'],
      [0.582, 0.128, 0.182, '#caa3e4'],
      [-0.213, 0.193, 0.205, '#d4a3e3'],
      [0.099, 0.091, 0.216, '#d4a3e3']];
  let BRAINC = null;
  function brainArt(S) {
    const c = document.createElement('canvas'); c.width = c.height = Math.ceil(S * 2.2); const g = c.getContext('2d'); g.translate(c.width / 2, c.height / 2); g.scale(S, S);
    const EDGE = '#7a3a5e', EW = 0.014, stem = (w, col) => { g.strokeStyle = col; g.lineCap = 'round'; g.lineWidth = w; g.beginPath(); g.moveTo(0.12, 0.36); g.lineTo(0.25, 0.58); g.stroke(); };
    // the edge: the stem and every circle grown by EW in the edge colour, then the shapes on top in their own colours
    const core = (grow) => { g.beginPath(); g.ellipse(0.03, -0.02, 0.64 + grow, 0.36 + grow, 0, 0, TAU); g.fill(); }; // fills the gaps between the circles
    stem(0.115 + EW * 2, EDGE); g.fillStyle = EDGE; core(EW); for (const [x, y, r] of BRAIN_DOTS) { g.beginPath(); g.arc(x, y, r + EW, 0, TAU); g.fill(); }
    stem(0.115, '#e9a2cd'); g.fillStyle = '#eaa6cf'; core(0);
    for (const [x, y, r, col] of BRAIN_DOTS) { g.fillStyle = col; g.beginPath(); g.arc(x, y, r, 0, TAU); g.fill(); }
    return c;
  }
  function brain(x, cx, cy, s, f = 1) {
    if (!BRAINC) BRAINC = brainArt(360);
    const k = s / 360; x.save(); x.translate(cx, cy); x.scale(f * k, k); x.drawImage(BRAINC, -BRAINC.width / 2, -BRAINC.height / 2); x.restore();
  }
  // eyeball (front, slightly turned): white sphere with vessels, iris with fibres, pupil (size 0..1 widens in the dark),
  // corneal highlight; the optic nerve leaves from the back
  function eyeball(x, cx, cy, s, look = [0, 0], pupil = 0.4, irisC = '#6a4a2a') {
    x.strokeStyle = '#f2d6a0'; x.lineCap = 'round'; x.lineWidth = s * 0.28; x.beginPath(); x.moveTo(cx - s * 0.6, cy + s * 0.2); x.quadraticCurveTo(cx - s * 1.1, cy + s * 0.4, cx - s * 1.4, cy + s * 0.3); x.stroke();
    const g = x.createRadialGradient(cx - s * 0.3, cy - s * 0.3, 0, cx, cy, s); g.addColorStop(0, '#ffffff'); g.addColorStop(1, '#d9d2cc'); x.fillStyle = g; x.beginPath(); x.arc(cx, cy, s, 0, TAU); x.fill();
    x.strokeStyle = 'rgba(200,40,50,0.55)'; x.lineWidth = s * 0.015; const rv = H.rng(7); for (let i = 0; i < 7; i++) { const a = rv.range(0, TAU); x.beginPath(); x.moveTo(cx + Math.cos(a) * s * 0.95, cy + Math.sin(a) * s * 0.95); x.quadraticCurveTo(cx + Math.cos(a + 0.2) * s * 0.75, cy + Math.sin(a + 0.2) * s * 0.75, cx + Math.cos(a) * s * 0.6, cy + Math.sin(a) * s * 0.6); x.stroke(); }
    const ix = cx + look[0] * s * 0.3, iy = cy + look[1] * s * 0.3, ir = s * 0.42;
    const ig = x.createRadialGradient(ix, iy, ir * 0.2, ix, iy, ir); ig.addColorStop(0, shade(irisC, 0.35)); ig.addColorStop(1, shade(irisC, -0.3)); x.fillStyle = ig; x.beginPath(); x.arc(ix, iy, ir, 0, TAU); x.fill();
    x.strokeStyle = 'rgba(255,255,255,0.18)'; x.lineWidth = s * 0.012; for (let i = 0; i < 24; i++) { const a = (i / 24) * TAU; x.beginPath(); x.moveTo(ix + Math.cos(a) * ir * 0.4, iy + Math.sin(a) * ir * 0.4); x.lineTo(ix + Math.cos(a) * ir * 0.95, iy + Math.sin(a) * ir * 0.95); x.stroke(); }
    x.fillStyle = '#0e0a0c'; x.beginPath(); x.arc(ix, iy, ir * lerp(0.25, 0.75, pupil), 0, TAU); x.fill();
    x.fillStyle = 'rgba(255,255,255,0.85)'; x.beginPath(); x.ellipse(ix - ir * 0.35, iy - ir * 0.35, ir * 0.18, ir * 0.12, -0.6, 0, TAU); x.fill();
  }
  // intestines (front view): large intestine frames the belly (ascending on the patient's right = viewer's left,
  // transverse across, descending on the patient's left, sigmoid to the rectum) with pouches; small intestine coils inside.
  // Peristalsis: a squeeze wave travels along the small intestine.
  function intestines(x, cx, cy, s, t) {
    x.save(); x.translate(cx, cy);
    const pts = []; for (let j = 0; j < 6; j++) { const yy = -s * 0.32 + j * s * 0.13; for (let i = 0; i <= 14; i++) { const u = i / 14, xx = (j % 2 ? 0.46 - u * 0.92 : -0.46 + u * 0.92) * s * (1 - Math.abs(j - 2.5) * 0.06); pts.push([xx, yy + Math.sin(u * TAU * 2 + j) * s * 0.035]); } }
    const n = pts.length - 1;
    for (let i = 0; i < n; i++) { const wv = 1 + 0.25 * Math.max(0, Math.sin(i * 0.5 - t * 4)); x.strokeStyle = shade('#f0a8a8', -0.1 * (i % 2)); x.lineWidth = s * 0.11 * wv; x.lineCap = 'round'; x.beginPath(); x.moveTo(pts[i][0], pts[i][1]); x.lineTo(pts[i + 1][0], pts[i + 1][1]); x.stroke(); }
    const path = [[-s * 0.25, s * 0.55], [-s * 0.72, s * 0.45], [-s * 0.72, -s * 0.55], [s * 0.72, -s * 0.55], [s * 0.72, s * 0.35], [s * 0.35, s * 0.6], [s * 0.05, s * 0.55], [0, s * 0.85]];
    x.strokeStyle = '#d98a6a'; x.lineWidth = s * 0.2; x.lineJoin = 'round'; x.lineCap = 'round'; x.beginPath(); path.forEach((p, i) => (i ? x.lineTo(p[0], p[1]) : x.moveTo(p[0], p[1]))); x.stroke();
    x.strokeStyle = '#b86a4e'; x.lineWidth = s * 0.015; for (let i = 0; i < path.length - 2; i++) { const [a, b] = [path[i], path[i + 1]]; for (let k = 1; k < 4; k++) { const p = mixP(a, b, k / 4), d = [b[1] - a[1], a[0] - b[0]], dl = Math.hypot(d[0], d[1]) || 1; x.beginPath(); x.moveTo(p[0] - d[0] / dl * s * 0.09, p[1] - d[1] / dl * s * 0.09); x.lineTo(p[0] + d[0] / dl * s * 0.09, p[1] + d[1] / dl * s * 0.09); x.stroke(); } }
    x.fillStyle = '#d98a6a'; x.beginPath(); x.ellipse(-s * 0.72, s * 0.55, s * 0.12, s * 0.09, 0, 0, TAU); x.fill(); // caecum + appendix
    x.strokeStyle = '#d98a6a'; x.lineWidth = s * 0.04; x.beginPath(); x.moveTo(-s * 0.7, s * 0.62); x.quadraticCurveTo(-s * 0.62, s * 0.78, -s * 0.55, s * 0.72); x.stroke();
    x.restore();
  }
  // animal cell: membrane, cytoplasm, nucleus with nucleolus and pores, mitochondria with folds, rough ER, Golgi, vesicles
  function cell(x, cx, cy, s, t) {
    const rg = H.rng(11);
    x.save(); x.translate(cx, cy);
    x.fillStyle = 'rgba(255,214,220,0.9)'; x.strokeStyle = '#e5838f'; x.lineWidth = s * 0.03; x.beginPath(); for (let i = 0; i <= 60; i++) { const a = (i / 60) * TAU, rr2 = s * (1 + 0.035 * Math.sin(a * 5 + t * 1.2) + 0.02 * Math.sin(a * 9 - t)); i ? x.lineTo(Math.cos(a) * rr2, Math.sin(a) * rr2 * 0.85) : x.moveTo(Math.cos(a) * rr2, Math.sin(a) * rr2 * 0.85); } x.closePath(); x.fill(); x.stroke();
    x.strokeStyle = '#7a5aa8'; x.lineWidth = s * 0.03; for (let k = 0; k < 4; k++) { x.beginPath(); x.arc(-s * 0.05, 0, s * (0.42 + k * 0.08), -2.4, -0.6); x.stroke(); }
    x.fillStyle = '#7a5aa8'; for (let i = 0; i < 40; i++) { const a = rg.range(-2.4, -0.6), rr2 = s * rg.range(0.42, 0.68); x.beginPath(); x.arc(-s * 0.05 + Math.cos(a) * rr2, Math.sin(a) * rr2, s * 0.012, 0, TAU); x.fill(); }
    x.fillStyle = '#a07bff'; x.beginPath(); x.arc(-s * 0.05, 0, s * 0.33, 0, TAU); x.fill(); x.strokeStyle = '#7a5aa8'; x.lineWidth = s * 0.02; x.stroke();
    x.fillStyle = '#5a3a8a'; x.beginPath(); x.arc(-s * 0.1, -s * 0.05, s * 0.11, 0, TAU); x.fill();
    x.fillStyle = '#f6f1e7'; for (let i = 0; i < 10; i++) { const a = (i / 10) * TAU; x.beginPath(); x.arc(-s * 0.05 + Math.cos(a) * s * 0.33, Math.sin(a) * s * 0.33, s * 0.015, 0, TAU); x.fill(); }
    for (const [mx, my, ma] of [[0.55, 0.25, 0.4], [-0.55, 0.35, -0.3], [0.3, -0.55, 1.2], [-0.4, -0.45, 0.8], [0.6, -0.2, -0.6]]) { x.save(); x.translate(mx * s + Math.sin(t + mx * 5) * s * 0.02, my * s); x.rotate(ma); x.fillStyle = '#ff8a5a'; x.beginPath(); x.ellipse(0, 0, s * 0.13, s * 0.065, 0, 0, TAU); x.fill(); x.strokeStyle = '#c9502e'; x.lineWidth = s * 0.012; x.beginPath(); x.moveTo(-s * 0.1, 0); for (let k = 0; k < 6; k++) x.lineTo(-s * 0.08 + k * s * 0.033, (k % 2 ? 1 : -1) * s * 0.04); x.stroke(); x.restore(); }
    x.strokeStyle = '#5fbf7a'; x.lineWidth = s * 0.03; for (let k = 0; k < 4; k++) { x.beginPath(); x.arc(s * 0.62, s * 0.55, s * (0.12 + k * 0.05), Math.PI * 1.05, Math.PI * 1.55); x.stroke(); }
    x.fillStyle = '#5fbf7a'; for (let i = 0; i < 4; i++) { x.beginPath(); x.arc(s * (0.35 + i * 0.06), s * (0.62 - i * 0.05) + Math.sin(t * 1.5 + i) * s * 0.02, s * 0.025, 0, TAU); x.fill(); }
    x.restore();
  }

  // ---------- HOME FURNITURE (true sizes in metres, front and side views) ----------
  // furniture(x, kind, view, X, gy, pxm, o): drawn standing on the floor line gy, centred on X, at pxm px per metre.
  // kinds: chair (o.slat = slatted wooden back), table, sofa (o.seats 2|3), armchair, bed, wardrobe, bookshelf;
  // view 'front' | 'side' (side = facing right; o.f = -1 mirrors). o.col = upholstery / main colour, o.wood = wood.
  // What makes each read as itself (keep these): a SOFA has a low wide seat, a row of plump back cushions, a separate
  // seat cushion per seat, rounded arms at both ends and short dark feet; an ARMCHAIR is one seat with a rounded tub back,
  // arms and tapered legs; a CHAIR is a small seat at knee height with a tall back and four thin legs; a TABLE is a thin
  // top at hip height on four legs; a BED is a long low mattress with pillows at a tall headboard and a blanket; a
  // WARDROBE is a tall box with two doors, handles and drawers; a BOOKSHELF is a tall open frame with shelves of books.
  const FURN = { chair: { w: 0.46, d: 0.46, h: 0.9 }, table: { w: 1.6, d: 0.8, h: 0.75 }, sofa: { w: 1.7, d: 0.9, h: 0.86 }, armchair: { w: 0.82, d: 0.84, h: 0.88 }, bed: { w: 1.45, d: 2.05, h: 1.1 }, wardrobe: { w: 1.0, d: 0.6, h: 1.9 }, bookshelf: { w: 0.8, d: 0.3, h: 1.8 } };
  function furniture(x, kind, view, X, gy, s, o = {}) {
    const fr = view === 'front', f = o.f || 1, wood = o.wood || '#9a6436', col = o.col || { chair: '#1fa39a', sofa: '#c8323a', armchair: '#e0a23a', bed: '#2f8fd6', wardrobe: '#8a5a34', bookshelf: '#5a3a26' }[kind] || wood;
    const W2 = (kind === 'sofa' && o.seats === 3 ? 2.2 : (FURN[kind] || { w: 1 }).w), D2 = (FURN[kind] || { d: 1 }).d;
    const B = (x0, y0, x1, y1, c, rad = 0) => { x.fillStyle = c; rr(x, X + Math.min(x0, x1) * s, gy - Math.max(y0, y1) * s, Math.abs(x1 - x0) * s, Math.abs(y1 - y0) * s, rad * s); x.fill(); }; // box in metres (x from centre, y up from the floor)
    const dk = (c, k = -0.22) => shade(c, k), lt = (c, k = 0.12) => shade(c, k);
    x.save(); if (f < 0) { x.translate(2 * X, 0); x.scale(-1, 1); }
    x.fillStyle = 'rgba(20,10,30,0.28)'; x.beginPath(); x.ellipse(X, gy, (fr ? W2 : D2) * s * 0.62, 0.06 * s + 4, 0, 0, TAU); x.fill(); // floor shadow
    const leg = (cx, top, wd, c) => B(cx - wd / 2, 0, cx + wd / 2, top, c, wd * 0.2);
    if (kind === 'chair') {
      const hw = 0.23;
      if (fr) {
        leg(-0.2, 0.45, 0.04, dk(wood, -0.1)); leg(0.2, 0.45, 0.04, dk(wood, -0.1)); B(-0.2, 0.14, 0.2, 0.17, dk(wood, -0.1)); // back legs + rung (behind)
        B(-hw + 0.01, 0.47, -hw + 0.05, 0.9, wood); B(hw - 0.05, 0.47, hw - 0.01, 0.9, wood); // back posts
        if (o.slat) { B(-hw, 0.8, hw, 0.9, lt(wood), 0.02); for (let k = 0; k < 4; k++) B(-0.13 + k * 0.087 - 0.015, 0.55, -0.13 + k * 0.087 + 0.015, 0.8, wood); }
        else B(-hw - 0.01, 0.6, hw + 0.01, 0.9, col, 0.04);
        leg(-0.2, 0.45, 0.045, wood); leg(0.2, 0.45, 0.045, wood); B(-hw - 0.02, 0.43, hw + 0.02, 0.5, o.slat ? lt(wood) : col, 0.025); if (!o.slat) B(-hw - 0.02, 0.43, hw + 0.02, 0.455, dk(col), 0.012);
      } else {
        leg(0.17, 0.45, 0.04, dk(wood, -0.15)); leg(-0.17, 0.45, 0.04, dk(wood, -0.15));
        x.save(); x.translate(X - 0.19 * s, gy - 0.45 * s); x.rotate(-0.09); x.fillStyle = wood; rr(x, -0.025 * s, -0.47 * s, 0.05 * s, 0.47 * s, 0.01 * s); x.fill(); x.fillStyle = o.slat ? lt(wood) : col; rr(x, -0.045 * s, -0.46 * s, o.slat ? 0.05 * s : 0.07 * s, (o.slat ? 0.46 : 0.3) * s, 0.02 * s); x.fill(); x.restore(); // back post leaning back + backrest
        leg(0.2, 0.45, 0.045, wood); leg(-0.19, 0.45, 0.045, wood); B(-0.21, 0.43, 0.23, 0.5, o.slat ? lt(wood) : col, 0.025); B(-0.17, 0.14, 0.2, 0.165, wood);
      }
    } else if (kind === 'table') {
      const hw = (fr ? W2 : D2) / 2;
      leg(-hw + 0.17, 0.72, 0.06, dk(wood, -0.18)); leg(hw - 0.17, 0.72, 0.06, dk(wood, -0.18)); // far legs (darker, inset)
      B(-hw + 0.04, 0.63, hw - 0.04, 0.71, dk(wood, -0.08)); leg(-hw + 0.07, 0.72, 0.065, wood); leg(hw - 0.07, 0.72, 0.065, wood);
      B(-hw - 0.03, 0.71, hw + 0.03, 0.75, lt(wood, 0.15), 0.01); B(-hw - 0.03, 0.71, hw + 0.03, 0.725, dk(wood, -0.05), 0.005);
    } else if (kind === 'sofa') {
      const hw = W2 / 2, n = o.seats === 3 ? 3 : 2, foot = dk(col, -0.65);
      if (fr) {
        for (const sx of [-hw + 0.15, hw - 0.15]) B(sx - 0.03, 0, sx + 0.03, 0.12, foot, 0.01);
        B(-hw + 0.1, 0.1, hw - 0.1, 0.62, dk(col, -0.25), 0.05); // frame behind the cushions
        const iw = (W2 - 0.5) / n; for (let k = 0; k < n; k++) { const x0 = -hw + 0.25 + k * iw; B(x0 + 0.01, 0.46, x0 + iw - 0.01, 0.86, col, 0.09); B(x0 + 0.01, 0.46, x0 + iw - 0.01, 0.52, dk(col, -0.1), 0.03); } // plump back cushions
        for (let k = 0; k < n; k++) { const x0 = -hw + 0.25 + k * iw; B(x0 + 0.01, 0.3, x0 + iw - 0.01, 0.47, lt(col, 0.06), 0.05); B(x0 + 0.01, 0.3, x0 + iw - 0.01, 0.34, dk(col, -0.08), 0.02); } // seat cushions
        B(-hw + 0.15, 0.1, hw - 0.15, 0.3, dk(col, -0.12), 0.03); // front rail
        for (const sd of [-1, 1]) { const ax = sd * (hw - 0.13); B(ax - 0.13, 0.1, ax + 0.13, 0.6, sd < 0 ? col : dk(col, -0.08), 0.06); x.fillStyle = sd < 0 ? lt(col, 0.08) : col; x.beginPath(); x.ellipse(X + ax * s, gy - 0.6 * s, 0.15 * s, 0.07 * s, 0, 0, TAU); x.fill(); } // rolled arms
      } else {
        const hd = D2 / 2;
        for (const sx of [-hd + 0.1, hd - 0.1]) B(sx - 0.03, 0, sx + 0.03, 0.12, foot, 0.01);
        B(-hd, 0.1, -hd + 0.25, 0.86, dk(col, -0.18), 0.08); // tall back
        B(-hd + 0.15, 0.3, hd, 0.47, lt(col, 0.05), 0.05); // seat cushion edge
        B(-hd + 0.02, 0.1, hd, 0.64, col, 0.1); B(-hd + 0.02, 0.56, hd, 0.64, lt(col, 0.08), 0.06); // the arm (covers the seat from the side), padded top
        B(-hd + 0.05, 0.15, hd - 0.03, 0.24, dk(col, -0.1), 0.03);
      }
    } else if (kind === 'armchair') {
      const leg2 = (cx, ang, c) => { x.save(); x.translate(X + cx * s, gy - 0.16 * s); x.rotate(ang); x.fillStyle = c; rr(x, -0.02 * s, 0, 0.04 * s, 0.17 * s, 0.01 * s); x.fill(); x.restore(); };
      if (fr) {
        leg2(-0.25, 0.25, dk(wood, -0.1)); leg2(0.25, -0.25, dk(wood, -0.1));
        x.fillStyle = dk(col, -0.12); x.beginPath(); x.moveTo(X - 0.38 * s, gy - 0.18 * s); x.lineTo(X - 0.38 * s, gy - 0.66 * s); x.quadraticCurveTo(X - 0.38 * s, gy - 0.9 * s, X, gy - 0.9 * s); x.quadraticCurveTo(X + 0.38 * s, gy - 0.9 * s, X + 0.38 * s, gy - 0.66 * s); x.lineTo(X + 0.38 * s, gy - 0.18 * s); x.closePath(); x.fill(); // rounded tub back
        B(-0.25, 0.3, 0.25, 0.46, lt(col, 0.08), 0.06); B(-0.25, 0.18, 0.25, 0.32, dk(col, -0.05), 0.04); // seat cushion + front
        for (const sd of [-1, 1]) B(sd * 0.32 - 0.09, 0.18, sd * 0.32 + 0.09, 0.62, sd < 0 ? col : dk(col, -0.06), 0.08); // arms
      } else {
        leg2(0.3, -0.3, wood); leg2(-0.3, 0.3, dk(wood, -0.1));
        x.fillStyle = dk(col, -0.15); x.beginPath(); x.moveTo(X - 0.42 * s, gy - 0.18 * s); x.lineTo(X - 0.3 * s, gy - 0.86 * s); x.quadraticCurveTo(X - 0.22 * s, gy - 0.92 * s, X - 0.16 * s, gy - 0.84 * s); x.lineTo(X - 0.2 * s, gy - 0.18 * s); x.closePath(); x.fill(); // reclined back
        B(-0.35, 0.18, 0.42, 0.62, col, 0.1); B(-0.3, 0.18, 0.4, 0.3, dk(col, -0.08), 0.04); // arm
      }
    } else if (kind === 'bed') {
      const bc = o.blanket || '#2f8fd6', b2 = o.blanket2 || '#f5c63c', pil = '#f4ead2';
      if (fr) {
        const hw = W2 / 2;
        B(-hw - 0.04, 0, -hw + 0.04, 1.1, dk(wood, -0.15)); B(hw - 0.04, 0, hw + 0.04, 1.1, dk(wood, -0.15)); B(-hw, 0.55, hw, 1.08, dk(wood, -0.05), 0.04); B(-hw + 0.08, 0.62, hw - 0.08, 1.0, lt(wood, 0.05), 0.03); // headboard behind
        for (const sd of [-1, 1]) B(sd * 0.33 - 0.27, 0.6, sd * 0.33 + 0.27, 0.78, pil, 0.07); // two pillows
        B(-hw - 0.02, 0.5, hw + 0.02, 0.66, b2, 0.05); B(-hw - 0.06, 0.28, hw + 0.06, 0.62, bc, 0.05); // folded sheet + blanket hanging over the foot
        B(-hw, 0.1, hw, 0.36, wood, 0.03); B(-hw, 0.1, hw, 0.14, dk(wood), 0.01); leg(-hw + 0.06, 0.12, 0.07, dk(wood, -0.3)); leg(hw - 0.06, 0.12, 0.07, dk(wood, -0.3)); // footboard frame + feet
      } else {
        const hl = D2 / 2;
        B(-hl - 0.05, 0, -hl + 0.02, 1.1, dk(wood, -0.1), 0.02); B(hl - 0.03, 0, hl + 0.04, 0.55, dk(wood, -0.1), 0.02); // headboard (left) and footboard (right)
        B(-hl, 0.18, hl, 0.32, wood, 0.02); B(-hl + 0.02, 0.32, hl - 0.03, 0.52, '#f2ebe0', 0.04); // frame + mattress
        B(-hl + 0.05, 0.5, -hl + 0.6, 0.66, pil, 0.07); // pillow at the head
        B(-hl + 0.55, 0.3, hl - 0.03, 0.56, bc, 0.04); B(-hl + 0.55, 0.3, -hl + 0.75, 0.58, b2, 0.04); // blanket from the pillow to the foot, folded sheet edge
        leg(-hl + 0.06, 0.18, 0.06, dk(wood, -0.3)); leg(hl - 0.08, 0.18, 0.06, dk(wood, -0.3));
      }
    } else if (kind === 'wardrobe') {
      const hw = (fr ? W2 : D2) / 2, c2 = col;
      B(-hw + 0.03, 0, hw - 0.03, 0.08, dk(c2, -0.35)); B(-hw, 0.08, hw, 1.86, fr ? c2 : dk(c2, -0.12), 0.01); B(-hw - 0.02, 1.84, hw + 0.02, 1.9, lt(c2, 0.08), 0.01); // plinth, body, top
      if (fr) {
        for (const sd of [-1, 1]) { B(sd < 0 ? -hw + 0.04 : 0.01, 0.62, sd < 0 ? -0.01 : hw - 0.04, 1.8, lt(c2, 0.05), 0.01); B(sd * 0.06 - 0.012, 1.1, sd * 0.06 + 0.012, 1.3, dk(c2, -0.5), 0.01); } // two doors + handles
        for (let k = 0; k < 2; k++) { B(-hw + 0.04, 0.12 + k * 0.25, hw - 0.04, 0.34 + k * 0.25, lt(c2, 0.03), 0.01); B(-0.08, 0.22 + k * 0.25, 0.08, 0.24 + k * 0.25, dk(c2, -0.5), 0.01); } // two drawers
      }
    } else if (kind === 'bookshelf') {
      const hw = (fr ? W2 : D2) / 2, c2 = col;
      B(-hw, 0, hw, 1.8, fr ? c2 : dk(c2, -0.1), 0.01);
      if (fr) {
        B(-hw + 0.04, 0.06, hw - 0.04, 1.76, dk(c2, -0.4)); // dark back panel
        const r = H.rng(17), BK = ['#e5383b', '#2f8fd6', '#f5c63c', '#3fae5a', '#1fa39a', '#ff8a3d', '#8b5cd6', '#f2ebe0'];
        for (let sh = 0; sh < 5; sh++) { const y0 = 0.06 + sh * 0.34; B(-hw + 0.04, y0, hw - 0.04, y0 + 0.025, c2); let bx = -hw + 0.06; while (bx < hw - 0.12) { const bw = r.range(0.025, 0.05), bh = r.range(0.2, 0.3); if (r() < 0.12) { x.save(); x.translate(X + (bx + 0.02) * s, gy - (y0 + 0.025) * s); x.rotate(0.25); x.fillStyle = r.pick(BK); x.fillRect(0, -bh * s, bw * s, bh * s); x.restore(); bx += 0.09; continue; } B(bx, y0 + 0.025, bx + bw, y0 + 0.025 + bh, r.pick(BK)); bx += bw + 0.004; if (r() < 0.1) bx += 0.08; } }
        B(-hw, 1.75, hw, 1.8, c2);
      }
    }
    x.restore();
  }

  // ---------- LIGHTS and DECORATION (true sizes in metres, front and side views) ----------
  // lightFx(x, kind, view, X, gy, pxm, o) / decor(...): same conventions as furniture(): X = centre, gy = the floor line,
  // pxm px per metre, view 'front' | 'side', o.f = -1 mirrors, o.col main colour, o.on (default true) = lit, with a soft
  // glow (cheap radial gradient) and the bulb / flame / shade lit from inside. Wall pieces hang at their real height
  // above the floor (sconce 1.7 m, picture 1.5 m, clock 1.9 m, mirror 1.6 m, window sill 0.9 m).
  function lightFx(x, kind, view, X, gy, s, o = {}) {
    const fr = view === 'front', on = o.on !== false, col = o.col || { desk: '#1fb3a6', table: '#c8323a', floor: '#2f9a96', lantern: '#2b6a5a', pendant: '#4a4a52', sconce: '#f28a2e', wlantern: '#3a2a30', street: '#4f6a86' }[kind] || '#4f6a86';
    const metal = o.metal || '#e0a63a', warm = '#ffd27a', hot = '#fff3c8';
    const B = (x0, y0, x1, y1, c, rad = 0) => { x.fillStyle = c; rr(x, X + Math.min(x0, x1) * s, gy - Math.max(y0, y1) * s, Math.abs(x1 - x0) * s, Math.abs(y1 - y0) * s, rad * s); x.fill(); };
    const P = (pts, c) => { x.fillStyle = c; x.beginPath(); pts.forEach(([u, v], i) => (i ? x.lineTo(X + u * s, gy - v * s) : x.moveTo(X + u * s, gy - v * s))); x.closePath(); x.fill(); };
    const Ln = (pts, c, w) => { x.strokeStyle = c; x.lineWidth = w * s; x.lineCap = 'round'; x.lineJoin = 'round'; x.beginPath(); pts.forEach(([u, v], i) => (i ? x.lineTo(X + u * s, gy - v * s) : x.moveTo(X + u * s, gy - v * s))); x.stroke(); };
    const C2 = (u, v, rad, c) => { x.fillStyle = c; x.beginPath(); x.arc(X + u * s, gy - v * s, rad * s, 0, TAU); x.fill(); };
    const G = (u, v, rad, a = 0.55) => { if (on) glow(x, X + u * s, gy - v * s, rad * s, warm, a); };
    const cone = (x0, x1, y, x2, x3, y2) => { if (!on) return; const g = x.createLinearGradient(0, gy - y * s, 0, gy - y2 * s); g.addColorStop(0, 'rgba(255,226,150,0.45)'); g.addColorStop(1, 'rgba(255,226,150,0)'); x.fillStyle = g; x.beginPath(); x.moveTo(X + x0 * s, gy - y * s); x.lineTo(X + x1 * s, gy - y * s); x.lineTo(X + x3 * s, gy - y2 * s); x.lineTo(X + x2 * s, gy - y2 * s); x.closePath(); x.fill(); };
    x.save(); if ((o.f || 1) < 0) { x.translate(2 * X, 0); x.scale(-1, 1); }
    const floorShadow2 = (w) => { x.fillStyle = 'rgba(20,10,30,0.25)'; x.beginPath(); x.ellipse(X, gy, w * s, 0.035 * s + 3, 0, 0, TAU); x.fill(); };
    if (kind === 'desk') { // desk lamp, 0.45 m: weighted base, arm, dome shade pointing down
      floorShadow2(0.1); B(-0.08, 0, 0.08, 0.025, shade(col, -0.3), 0.01);
      if (fr) { B(-0.006, 0.02, 0.006, 0.36, metal); G(0, 0.33, 0.25); P([[-0.1, 0.34], [-0.06, 0.42], [0.06, 0.42], [0.1, 0.34]], col); x.fillStyle = col; x.beginPath(); x.ellipse(X, gy - 0.4 * s, 0.07 * s, 0.05 * s, 0, Math.PI, TAU); x.fill(); C2(0, 0.45, 0.012, col); if (on) C2(0, 0.335, 0.03, hot); }
      else { Ln([[0.03, 0.02], [0.12, 0.25], [-0.02, 0.38]], metal, 0.012); C2(0.12, 0.25, 0.014, col); C2(0.03, 0.02, 0.014, col); G(-0.09, 0.31, 0.25); x.save(); x.translate(X - 0.05 * s, gy - 0.37 * s); x.rotate(-0.7); x.fillStyle = col; x.beginPath(); x.moveTo(-0.09 * s, 0.04 * s); x.lineTo(-0.05 * s, -0.04 * s); x.lineTo(0.05 * s, -0.04 * s); x.lineTo(0.09 * s, 0.04 * s); x.closePath(); x.fill(); if (on) { x.fillStyle = hot; x.beginPath(); x.arc(0, 0.045 * s, 0.025 * s, 0, TAU); x.fill(); } x.restore(); }
    } else if (kind === 'table') { // table lamp, 0.55 m: base, stem, drum shade, light cone under the shade
      floorShadow2(0.12); cone(-0.16, 0.16, 0.33, -0.34, 0.34, 0.0); B(-0.07, 0, 0.07, 0.03, shade(col, -0.55), 0.015); B(-0.012, 0.03, 0.012, 0.34, metal);
      if (on) B(-0.15, 0.32, 0.15, 0.34, warm, 0.01); P([[-0.16, 0.33], [-0.09, 0.55], [0.09, 0.55], [0.16, 0.33]], col); P([[0.04, 0.33], [0.04, 0.55], [0.09, 0.55], [0.16, 0.33]], shade(col, -0.15));
      if (!fr) { Ln([[0.06, 0.33], [0.06, 0.2]], '#3a3040', 0.004); C2(0.06, 0.2, 0.01, '#3a3040'); Ln([[0.0, 0.01], [0.25, 0.005]], '#3a3040', 0.008); }
    } else if (kind === 'floor') { // floor lamp, 1.6 m: round base, pole (curved in o.curve / the side view of the arc lamp), drum shade
      floorShadow2(0.2); B(-0.15, 0, 0.15, 0.025, shade(metal, -0.2), 0.012);
      const cv = !fr && o.curve; if (cv) Ln([[0, 0.02], [0, 0.7], [0.03, 1.1], [0.12, 1.3]], metal, 0.02); else B(-0.012, 0.02, 0.012, 1.3, metal);
      const cx = cv ? 0.12 : 0; G(cx, 1.25, 0.6, 0.45); if (on) B(cx - 0.21, 1.24, cx + 0.21, 1.27, warm, 0.01);
      P([[cx - 0.23, 1.25], [cx - 0.16, 1.6], [cx + 0.16, 1.6], [cx + 0.23, 1.25]], col); P([[cx + 0.06, 1.25], [cx + 0.05, 1.6], [cx + 0.16, 1.6], [cx + 0.23, 1.25]], shade(col, -0.15));
      if (!fr) Ln([[0.0, 0.01], [-0.4, 0.004]], '#3a3040', 0.01);
    } else if (kind === 'lantern') { // oil hurricane lantern, 0.32 m: base, glass globe with a flame, wire guards, cap, handle
      floorShadow2(0.1); B(-0.08, 0, 0.08, 0.04, col, 0.012); G(0, 0.14, 0.32, 0.6);
      x.fillStyle = on ? 'rgba(255,236,170,0.92)' : 'rgba(220,230,235,0.6)'; x.beginPath(); x.ellipse(X, gy - 0.14 * s, 0.06 * s, 0.09 * s, 0, 0, TAU); x.fill();
      if (on) { x.fillStyle = '#ffb02e'; x.beginPath(); x.ellipse(X, gy - 0.13 * s, 0.012 * s, 0.03 * s, 0, 0, TAU); x.fill(); }
      if (fr) { Ln([[-0.07, 0.04], [-0.07, 0.23]], col, 0.008); Ln([[0.07, 0.04], [0.07, 0.23]], col, 0.008); Ln([[-0.06, 0.08], [0.06, 0.2]], col, 0.005); Ln([[0.06, 0.08], [-0.06, 0.2]], col, 0.005); }
      else { Ln([[0, 0.04], [0, 0.23]], col, 0.01); Ln([[0.05, 0.05], [0.09, 0.05]], col, 0.01); C2(0.09, 0.05, 0.012, metal); }
      P([[-0.07, 0.22], [-0.04, 0.27], [0.04, 0.27], [0.07, 0.22]], col); B(-0.02, 0.27, 0.02, 0.3, col, 0.005);
      if (fr) { x.strokeStyle = col; x.lineWidth = 0.008 * s; x.beginPath(); x.ellipse(X, gy - 0.25 * s, 0.075 * s, 0.09 * s, 0, Math.PI, TAU); x.stroke(); } else Ln([[0, 0.3], [0, 0.36]], col, 0.008);
    } else if (kind === 'pendant') { // pendant bulb on a cord from the ceiling (o.top = ceiling height, default 2.4 m; bulb at o.at, default 1.9 m)
      const top = o.top || 2.4, at = o.at || 1.9; B(-0.05, top - 0.04, 0.05, top, col, 0.01);
      if (fr) Ln([[0, top - 0.04], [0, at + 0.1]], '#2a2a30', 0.006); else { x.strokeStyle = '#2a2a30'; x.lineWidth = 0.006 * s; x.beginPath(); x.moveTo(X, gy - (top - 0.04) * s); x.quadraticCurveTo(X + 0.05 * s, gy - (at + 0.3) * s, X, gy - (at + 0.1) * s); x.stroke(); }
      B(-0.025, at + 0.03, 0.025, at + 0.11, col, 0.008); if (!fr) B(0.022, at + 0.06, 0.035, at + 0.075, shade(col, 0.3));
      G(0, at - 0.03, 0.4, 0.6); C2(0, at - 0.03, 0.055, on ? '#ffe17a' : '#e8e2d0'); if (on) C2(-0.015, at - 0.015, 0.02, hot);
    } else if (kind === 'sconce') { // wall sconce with a shade, centre 1.7 m up the wall
      const h = o.at || 1.7;
      if (fr) { C2(0, h - 0.09, 0.07, '#2b3550'); B(-0.008, h - 0.09, 0.008, h, metal); G(0, h + 0.02, 0.4, 0.5); P([[-0.12, h], [-0.07, h + 0.12], [0.07, h + 0.12], [0.12, h]], col); }
      else { B(0.1, h - 0.18, 0.13, h, '#2b3550', 0.01); Ln([[0.1, h - 0.09], [0.0, h - 0.09], [0.0, h]], metal, 0.012); G(0, h + 0.02, 0.4, 0.5); P([[-0.12, h], [-0.07, h + 0.12], [0.07, h + 0.12], [0.12, h]], col); }
    } else if (kind === 'wlantern') { // wall lantern (outdoor style) on a scroll bracket, 1.8 m
      const h = o.at || 1.8;
      if (fr) { B(-0.035, h - 0.25, 0.035, h + 0.1, col, 0.02); } else { B(0.13, h - 0.25, 0.16, h + 0.1, col, 0.01); x.strokeStyle = col; x.lineWidth = 0.02 * s; x.beginPath(); x.arc(X + 0.06 * s, gy - (h + 0.06) * s, 0.07 * s, 0, Math.PI, true); x.stroke(); }
      G(0, h - 0.07, 0.4, 0.6); P([[-0.07, h - 0.16], [-0.09, h + 0.02], [0.09, h + 0.02], [0.07, h - 0.16]], on ? '#ffe2a0' : '#d8dde0'); Ln([[-0.07, h - 0.16], [-0.09, h + 0.02]], col, 0.012); Ln([[0.07, h - 0.16], [0.09, h + 0.02]], col, 0.012); Ln([[0, h - 0.16], [0, h + 0.02]], col, 0.008);
      P([[-0.11, h + 0.02], [0, h + 0.1], [0.11, h + 0.02]], col); B(-0.06, h - 0.2, 0.06, h - 0.16, col, 0.01);
    } else if (kind === 'street') { // street lamp, 4 m: plinth, tapered post with rings, lantern on top (front) or on a bracket (side)
      const H2 = o.h || 4; floorShadow2(0.3); B(-0.14, 0, 0.14, 0.5, col, 0.03); B(-0.1, 0.5, 0.1, 0.62, shade(col, 0.1), 0.02); P([[-0.07, 0.62], [-0.045, H2 - 0.4], [0.045, H2 - 0.4], [0.07, 0.62]], col); B(-0.08, 1.2, 0.08, 1.26, shade(col, 0.15), 0.02);
      const lamp = (cx, cy) => { G(cx, cy, 1.0, 0.55); P([[cx - 0.14, cy - 0.22], [cx - 0.2, cy + 0.12], [cx + 0.2, cy + 0.12], [cx + 0.14, cy - 0.22]], on ? '#ffe2a0' : '#d8dde0'); Ln([[cx - 0.14, cy - 0.22], [cx - 0.2, cy + 0.12]], col, 0.03); Ln([[cx + 0.14, cy - 0.22], [cx + 0.2, cy + 0.12]], col, 0.03); P([[cx - 0.26, cy + 0.12], [cx, cy + 0.3], [cx + 0.26, cy + 0.12]], col); C2(cx, cy + 0.34, 0.05, col); B(cx - 0.12, cy - 0.28, cx + 0.12, cy - 0.22, col, 0.02); };
      if (fr) { B(-0.05, H2 - 0.45, 0.05, H2 - 0.3, col); lamp(0, H2 - 0.05); }
      else { C2(0, H2 - 0.35, 0.07, col); Ln([[0, H2 - 0.55], [0.7, H2 - 0.55]], col, 0.04); x.strokeStyle = col; x.lineWidth = 0.025 * s; x.beginPath(); x.arc(X + 0.25 * s, gy - (H2 - 0.75) * s, 0.2 * s, -Math.PI / 2, Math.PI * 0.6); x.stroke(); Ln([[0.7, H2 - 0.55], [0.7, H2 - 0.68]], col, 0.02); lamp(0.7, H2 - 1.0); }
    }
    x.restore();
  }
  function decor(x, kind, view, X, gy, s, o = {}) {
    const fr = view === 'front', col = o.col || { plant: '#c46a3a', vase: '#3d8fd6', tv: '#5a3a26', rug: '#b8323a', frame: '#8a5a34', clock: '#2b3550', window: '#f2ebe0', mirror: '#c9a24a', curtain: '#3fae8a' }[kind] || '#8a5a34';
    const B = (x0, y0, x1, y1, c, rad = 0) => { x.fillStyle = c; rr(x, X + Math.min(x0, x1) * s, gy - Math.max(y0, y1) * s, Math.abs(x1 - x0) * s, Math.abs(y1 - y0) * s, rad * s); x.fill(); };
    const P = (pts, c) => { x.fillStyle = c; x.beginPath(); pts.forEach(([u, v], i) => (i ? x.lineTo(X + u * s, gy - v * s) : x.moveTo(X + u * s, gy - v * s))); x.closePath(); x.fill(); };
    const E = (u, v, rx, ry, a, c) => { x.fillStyle = c; x.beginPath(); x.ellipse(X + u * s, gy - v * s, rx * s, ry * s, a, 0, TAU); x.fill(); };
    const sh = (w) => { x.fillStyle = 'rgba(20,10,30,0.25)'; x.beginPath(); x.ellipse(X, gy, w * s, 0.035 * s + 3, 0, 0, TAU); x.fill(); };
    x.save(); if ((o.f || 1) < 0) { x.translate(2 * X, 0); x.scale(-1, 1); }
    if (kind === 'plant') { // potted plant, 0.9 m: tapered pot with a rim, a fan of leaves
      sh(0.2); const lc = ['#3f8f4a', '#4fa858', '#2f7a3e'], r = H.rng(fr ? 21 : 22);
      for (let k = 0; k < 9; k++) { const a = -1.3 + k * 0.32 + r.range(-0.08, 0.08), L = r.range(0.32, 0.55); E(Math.sin(a) * L * 0.5, 0.38 + Math.cos(a) * L * 0.55, 0.06, L * 0.5, a, lc[k % 3]); }
      P([[-0.15, 0.36], [-0.11, 0], [0.11, 0], [0.15, 0.36]], col); B(-0.17, 0.33, 0.17, 0.4, shade(col, 0.12), 0.02); P([[0.04, 0.33], [0.06, 0], [0.11, 0], [0.15, 0.33]], shade(col, -0.15));
    } else if (kind === 'vase') { // vase of flowers, 0.6 m
      sh(0.09); const r = H.rng(fr ? 31 : 32), fc = ['#ff6b9a', '#f5c63c', '#e5383b', '#f6f1e7', '#8b5cd6'];
      for (let k = 0; k < 6; k++) { const a = -0.5 + k * 0.2, tx = Math.sin(a) * 0.2, ty = 0.32 + Math.cos(a) * 0.26; x.strokeStyle = '#3f8f4a'; x.lineWidth = 0.012 * s; x.beginPath(); x.moveTo(X, gy - 0.28 * s); x.quadraticCurveTo(X + tx * 0.3 * s, gy - (ty - 0.1) * s, X + tx * s, gy - ty * s); x.stroke(); E(tx + 0.03, ty - 0.08, 0.025, 0.012, a, '#4fa858'); const c = r.pick(fc); for (let p = 0; p < 5; p++) { const pa = p * TAU / 5; E(tx + Math.cos(pa) * 0.025, ty + Math.sin(pa) * 0.025, 0.022, 0.016, pa, c); } E(tx, ty, 0.014, 0.014, 0, '#f5c63c'); }
      x.fillStyle = col; x.beginPath(); x.moveTo(X - 0.04 * s, gy - 0.3 * s); x.quadraticCurveTo(X - 0.12 * s, gy - 0.16 * s, X - 0.06 * s, gy); x.lineTo(X + 0.06 * s, gy); x.quadraticCurveTo(X + 0.12 * s, gy - 0.16 * s, X + 0.04 * s, gy - 0.3 * s); x.closePath(); x.fill(); B(-0.05, 0.28, 0.05, 0.31, shade(col, 0.15), 0.01);
    } else if (kind === 'tv') { // TV on a low stand: stand 1.2 x 0.5 x 0.4 m, 50-inch TV 1.1 x 0.65 m
      sh(fr ? 0.65 : 0.25); const w = fr ? 0.6 : 0.2;
      B(-w, 0.06, w, 0.5, col, 0.02); B(-w + 0.04, 0, -w + 0.08, 0.06, shade(col, -0.4)); B(w - 0.08, 0, w - 0.04, 0.06, shade(col, -0.4));
      if (fr) { for (const sd of [-1, 1]) { B(sd < 0 ? -w + 0.04 : 0.01, 0.1, sd < 0 ? -0.01 : w - 0.04, 0.46, shade(col, 0.08), 0.01); B(sd * 0.06 - 0.03, 0.27, sd * 0.06 + 0.03, 0.29, shade(col, -0.4)); }
        B(-0.15, 0.5, 0.15, 0.53, '#2a2a30', 0.01); B(-0.03, 0.52, 0.03, 0.6, '#2a2a30'); B(-0.56, 0.6, 0.56, 1.27, '#22222a', 0.015); const g = x.createLinearGradient(X - 0.5 * s, gy - 1.2 * s, X + 0.5 * s, gy - 0.66 * s); g.addColorStop(0, '#2c3e66'); g.addColorStop(1, '#14182a'); x.fillStyle = g; rr(x, X - 0.53 * s, gy - 1.24 * s, 1.06 * s, 0.61 * s, 0.01 * s); x.fill(); x.fillStyle = 'rgba(255,255,255,0.08)'; x.beginPath(); x.moveTo(X - 0.53 * s, gy - 1.24 * s); x.lineTo(X - 0.15 * s, gy - 1.24 * s); x.lineTo(X - 0.45 * s, gy - 0.63 * s); x.lineTo(X - 0.53 * s, gy - 0.63 * s); x.fill(); }
      else { B(-0.08, 0.5, 0.08, 0.53, '#2a2a30', 0.01); B(-0.015, 0.52, 0.015, 0.6, '#2a2a30'); B(-0.03, 0.6, 0.03, 1.27, '#22222a', 0.01); }
    } else if (kind === 'rug') { // rug on the floor, 2.0 x 1.4 m, seen from eye height: a flat patterned shape in perspective (near edge wide, far edge narrower) with fringes
      const w = fr ? 1.0 : 0.7, d2 = fr ? 0.16 : 0.22, q = (k) => [[-w * (1 - 0.15 * k), d2 * k], [w * (1 - 0.15 * k), d2 * k]];
      P([[-w, 0], [w, 0], [w * 0.85, d2], [-w * 0.85, d2]], col); P([[-w * 0.9, 0.015], [w * 0.9, 0.015], [w * 0.78, d2 - 0.015], [-w * 0.78, d2 - 0.015]], shade(col, 0.2)); P([[-w * 0.8, 0.03], [w * 0.8, 0.03], [w * 0.7, d2 - 0.03], [-w * 0.7, d2 - 0.03]], col);
      P([[0, 0.035], [w * 0.32, d2 / 2], [0, d2 - 0.035], [-w * 0.32, d2 / 2]], '#f5c63c');
      x.strokeStyle = '#f2ebe0'; x.lineWidth = 0.008 * s; for (let k = 0; k < 12; k++) { const u = -w + k * (2 * w) / 11; x.beginPath(); x.moveTo(X + u * s, gy); x.lineTo(X + u * s, gy + 0.035 * s); x.stroke(); }
    } else if (kind === 'frame') { // picture on the wall, 0.5 x 0.4 m, centre 1.5 m up
      const h = o.at || 1.5;
      if (fr) { B(-0.25, h - 0.2, 0.25, h + 0.2, col, 0.01); B(-0.21, h - 0.16, 0.21, h + 0.16, '#f2ebe0'); B(-0.17, h - 0.12, 0.17, h + 0.12, '#9fd0f0'); P([[-0.17, h - 0.12], [-0.17, h - 0.02], [-0.05, h + 0.05], [0.05, h - 0.02], [0.17, h + 0.04], [0.17, h - 0.12]], '#4fa858'); x.fillStyle = '#f5c63c'; x.beginPath(); x.arc(X + 0.1 * s, gy - (h + 0.07) * s, 0.03 * s, 0, TAU); x.fill(); }
      else B(-0.015, h - 0.2, 0.015, h + 0.2, shade(col, -0.15), 0.005);
    } else if (kind === 'clock') { // wall clock, 0.32 m across, centre 1.9 m up
      const h = o.at || 1.9;
      if (fr) { E(0, h, 0.16, 0.16, 0, col); E(0, h, 0.135, 0.135, 0, '#f6f1e7'); x.strokeStyle = '#2a2240'; for (let k = 0; k < 12; k++) { const a = k * TAU / 12; x.lineWidth = (k % 3 ? 0.006 : 0.012) * s; x.beginPath(); x.moveTo(X + Math.cos(a) * 0.105 * s, gy - h * s + Math.sin(a) * 0.105 * s); x.lineTo(X + Math.cos(a) * 0.125 * s, gy - h * s + Math.sin(a) * 0.125 * s); x.stroke(); } const t2 = o.time || 0, ha = (t2 / 12) * TAU - Math.PI / 2 + 2.2, ma = t2 * TAU - Math.PI / 2 + 1.1; x.lineWidth = 0.014 * s; x.beginPath(); x.moveTo(X, gy - h * s); x.lineTo(X + Math.cos(ha) * 0.06 * s, gy - h * s + Math.sin(ha) * 0.06 * s); x.stroke(); x.lineWidth = 0.009 * s; x.beginPath(); x.moveTo(X, gy - h * s); x.lineTo(X + Math.cos(ma) * 0.095 * s, gy - h * s + Math.sin(ma) * 0.095 * s); x.stroke(); E(0, h, 0.012, 0.012, 0, '#e5383b'); }
      else B(-0.02, h - 0.16, 0.02, h + 0.16, col, 0.01);
    } else if (kind === 'mirror') { // wall mirror, 0.5 x 1.0 m, centre 1.6 m up
      const h = o.at || 1.6;
      if (fr) { B(-0.27, h - 0.52, 0.27, h + 0.52, col, 0.25); const g = x.createLinearGradient(X - 0.2 * s, gy - (h + 0.4) * s, X + 0.2 * s, gy - (h - 0.4) * s); g.addColorStop(0, '#d8eef5'); g.addColorStop(1, '#8fb4c8'); x.fillStyle = g; rr(x, X - 0.23 * s, gy - (h + 0.48) * s, 0.46 * s, 0.96 * s, 0.22 * s); x.fill(); x.fillStyle = 'rgba(255,255,255,0.45)'; P([[-0.12, h + 0.3], [-0.05, h + 0.3], [-0.16, h - 0.1], [-0.2, h - 0.05]], 'rgba(255,255,255,0.45)'); }
      else B(-0.02, h - 0.52, 0.02, h + 0.52, shade(col, -0.15), 0.01);
    } else if (kind === 'window') { // window with curtains: glass 1.2 x 1.4 m, sill 0.9 m, curtains on a rod
      const sill = o.at || 0.9, top = sill + 1.4, cc = o.curtain || '#3fae8a';
      if (fr) { B(-0.66, sill - 0.04, 0.66, top + 0.04, col, 0.01); const g = x.createLinearGradient(0, gy - top * s, 0, gy - sill * s); g.addColorStop(0, '#7fb8e8'); g.addColorStop(1, '#d8eef8'); x.fillStyle = g; x.fillRect(X - 0.6 * s, gy - top * s, 1.2 * s, 1.4 * s); B(-0.02, sill, 0.02, top, col); B(-0.6, sill + 0.68, 0.6, sill + 0.72, col); B(-0.72, sill - 0.08, 0.72, sill, shade(col, -0.12), 0.01);
        B(-0.85, top + 0.1, 0.85, top + 0.13, '#5a3a26', 0.015); for (const sd of [-1, 1]) { const x0 = sd * 0.62, x1 = sd * 0.9; P([[x0, top + 0.1], [x1, top + 0.1], [x1 + sd * 0.02, sill - 0.3], [x0 + sd * 0.08, sill - 0.3]], cc); x.fillStyle = shade(cc, -0.18); for (let k = 1; k < 4; k++) { const u = x0 + (x1 - x0) * k / 4; x.fillRect(X + u * s, gy - (top + 0.1) * s, 0.025 * s, (top + 0.4 - sill) * s); } } }
      else { B(-0.05, sill - 0.04, 0.05, top + 0.04, col, 0.01); B(-0.1, sill - 0.08, 0.06, sill, shade(col, -0.12)); B(-0.04, top + 0.1, 0.12, top + 0.13, '#5a3a26'); P([[0.02, top + 0.1], [0.14, top + 0.1], [0.16, sill - 0.3], [0.03, sill - 0.3]], cc); }
    }
    x.restore();
  }

  // ---------- TREES and GRASS (true sizes in metres, front and side views, gentle wind sway) ----------
  // tree(x, kind, view, X, gy, pxm, o): kinds oak (12 m, crown 9 m), pine (15 m), palm (10 m), birch (12 m), willow (9 m),
  // baobab (14 m, bottle trunk); o.style 'soft' (default: scalloped, overlapping crowns) or 'round' (simple circles /
  // stacked triangles); o.h = height in metres; o.t = time for the sway; o.seed varies the shape. view 'side' = the same
  // tree seen from the side (lean, open branches, the crown off-centre).
  // grass(x, kind, view, X, gy, pxm, o): kinds broad (0.7 m), spiky (0.6 m), clump (bush 0.6 m), reed (cattails 1.8 m),
  // fern (0.7 m). grassStrip(x, gy, x0, x1, pxm, o) scatters small tufts along a ground line cheaply.
  const TREEH = { oak: 12, pine: 15, palm: 10, birch: 12, willow: 9, baobab: 14 };
  function tree(x, kind, view, X, gy, s, o = {}) {
    const fr = view === 'front', H2 = (o.h || TREEH[kind] || 10), t = o.t || 0, sw = Math.sin(t * 1.3 + X * 0.01) * 0.012, r = H.rng((o.seed || 1) * 31 + kind.length * 7 + (fr ? 0 : 5)), round = o.style === 'round';
    const G1 = o.col || '#4f9a4a', G2 = shade(G1, -0.22), G3 = shade(G1, 0.18), bark = o.bark || '#6a4a30';
    const PX = (u) => X + u * s, PY = (v) => gy - v * s;
    const disc = (u, v, rad, c) => { x.fillStyle = c; x.beginPath(); x.arc(PX(u), PY(v), rad * s, 0, TAU); x.fill(); };
    const trunk = (h, w0, w1, lean, c) => { x.fillStyle = c; x.beginPath(); x.moveTo(PX(-w0 * 0.7), PY(0)); x.quadraticCurveTo(PX(-w0 * 0.45), PY(h * 0.1), PX(-w1 / 2 + lean * h), PY(h)); x.lineTo(PX(w1 / 2 + lean * h), PY(h)); x.quadraticCurveTo(PX(w0 * 0.45), PY(h * 0.1), PX(w0 * 0.7), PY(0)); x.closePath(); x.fill(); if (!RIM) { x.fillStyle = 'rgba(0,0,0,0.18)'; x.beginPath(); x.moveTo(PX(w0 * 0.1), PY(0)); x.lineTo(PX(w1 * 0.1 + lean * h), PY(h)); x.lineTo(PX(w1 / 2 + lean * h), PY(h)); x.quadraticCurveTo(PX(w0 * 0.45), PY(h * 0.1), PX(w0 * 0.7), PY(0)); x.fill(); } };
    const branch = (u0, v0, u1, v1, w, c) => { x.strokeStyle = c; x.lineWidth = w * s; x.lineCap = 'round'; x.beginPath(); x.moveTo(PX(u0), PY(v0)); x.quadraticCurveTo(PX((u0 + u1) / 2), PY((v0 + v1) / 2 + 0.3), PX(u1), PY(v1)); x.stroke(); };
    x.fillStyle = 'rgba(20,10,30,0.25)'; x.beginPath(); x.ellipse(X, gy, (kind === 'baobab' ? 4 : 2.2) * s, 0.25 * s + 3, 0, 0, TAU); x.fill();
    if (kind === 'oak') {
      const cw = 4.4, cy = H2 * 0.62, lean = fr ? 0 : 0.03;
      trunk(H2 * 0.55, 1.6, 0.8, lean, bark); branch(lean * 5, H2 * 0.45, -2.2, H2 * 0.62, 0.35, bark); branch(lean * 5, H2 * 0.48, 2.0 + (fr ? 0 : 0.6), H2 * 0.66, 0.32, bark);
      const blobs = fr ? [[0, 0.95, 0.42], [-0.55, 0.75, 0.34], [0.55, 0.78, 0.34], [-0.7, 0.45, 0.3], [0.7, 0.45, 0.3], [-0.25, 0.4, 0.32], [0.3, 0.42, 0.33], [0, 0.65, 0.38]] : [[0.1, 0.95, 0.35], [-0.35, 0.75, 0.3], [0.55, 0.7, 0.3], [-0.4, 0.42, 0.26], [0.75, 0.4, 0.24], [0.15, 0.55, 0.3]];
      if (!round) { x.fillStyle = G2; x.beginPath(); x.ellipse(PX((fr ? 0 : 0.6) + sw * H2 * 0.6), PY(cy + 0.4), cw * 0.95 * s, H2 * 0.27 * s, 0, 0, TAU); x.fill(); }
      blobs.forEach(([u, v, rd], i) => { const cx = u * cw + sw * H2 * v, cyy = cy + (v - 0.6) * H2 * 0.55; if (round) { disc(cx, cyy, rd * cw * 0.62, i % 2 ? G1 : G3); } else { for (let k = 0; k < 9; k++) { const a = k * TAU / 9; disc(cx + Math.cos(a) * rd * cw * 0.75, cyy + Math.sin(a) * rd * cw * 0.68, rd * cw * 0.36, i % 3 === 0 ? G2 : G1); } disc(cx, cyy, rd * cw * 0.8, i % 3 === 0 ? G2 : G1); disc(cx - rd * cw * 0.22, cyy + rd * cw * 0.22, rd * cw * 0.42, G3); } });
    } else if (kind === 'pine') {
      const lean = fr ? 0 : 0.02, tiers = round ? 5 : 6;
      trunk(H2 * 0.18, 0.7, 0.45, 0, bark);
      for (let k = 0; k < tiers; k++) { const u = k / tiers, y0 = H2 * (0.12 + u * 0.78), y1 = y0 + H2 * (round ? 0.28 : 0.26), w = (1 - u) * 3.2 + 0.4, off = (fr ? 0 : (k % 2 ? 0.3 : -0.2)) + sw * y1 + lean * y1, c = k % 2 ? G2 : shade(G1, -0.3);
        x.fillStyle = c; x.beginPath(); x.moveTo(PX(off), PY(y1));
        if (round) { x.lineTo(PX(off + w), PY(y0)); x.lineTo(PX(off - w), PY(y0)); }
        else { const n = 5; for (let q = 0; q <= n; q++) { const uu = q / n; x.lineTo(PX(off + w * uu), PY(y1 - (y1 - y0) * uu - (q % 2 ? 0 : H2 * 0.03))); } for (let q = n; q >= 0; q--) { const uu = q / n; x.lineTo(PX(off - w * uu * (fr ? 1 : 0.85)), PY(y1 - (y1 - y0) * uu - (q % 2 ? 0 : H2 * 0.03))); } }
        x.closePath(); x.fill(); if (!RIM) { x.fillStyle = shade(G1, 0.05); x.beginPath(); x.moveTo(PX(off), PY(y1)); x.lineTo(PX(off - w * 0.9), PY(y0 + 0.2)); x.lineTo(PX(off - w * 0.2), PY(y0 + 0.3)); x.closePath(); x.fill(); } }
    } else if (kind === 'palm') {
      const bend = fr ? 0.6 : 2.2, top = [bend + sw * H2 * 2, H2]; // curved, ringed trunk
      x.strokeStyle = shade(bark, 0.1); x.lineWidth = 0.5 * s; x.lineCap = 'round'; x.beginPath(); x.moveTo(PX(0), PY(0)); x.quadraticCurveTo(PX(fr ? 0 : -0.4), PY(H2 * 0.55), PX(top[0]), PY(top[1])); x.stroke();
      if (!RIM) for (let k = 1; k < 14; k++) { const u = k / 14, bx = (1 - u) * (1 - u) * 0 + 2 * (1 - u) * u * (fr ? 0 : -0.4) + u * u * top[0], by = 2 * (1 - u) * u * H2 * 0.55 + u * u * H2; x.strokeStyle = shade(bark, -0.25); x.lineWidth = 0.05 * s; x.beginPath(); x.moveTo(PX(bx - 0.2), PY(by)); x.lineTo(PX(bx + 0.2), PY(by + 0.08)); x.stroke(); }
      const fronds = fr ? [-2.6, -2.0, -1.3, -0.6, 0.6, 1.3, 2.0, 2.6, 0] : [-2.4, -1.7, -1.0, 0.4, 1.2, 1.9, 2.5];
      fronds.forEach((a, i) => { const L = 3.6 + (i % 2) * 0.6, ang = -Math.PI / 2 + a * 0.55 + sw * 3 + Math.sin(t * 2 + i) * 0.03, ex = top[0] + Math.cos(ang) * L, ey = top[1] - Math.sin(ang) * L * -1 - Math.abs(a) * 0.55 - 0.5; const mx = top[0] + Math.cos(ang) * L * 0.5, my = top[1] + 0.8 - Math.abs(a) * 0.1;
        x.fillStyle = i % 2 ? G1 : G2; x.beginPath(); x.moveTo(PX(top[0]), PY(top[1])); x.quadraticCurveTo(PX(mx - 0.7), PY(my + 1.0), PX(ex), PY(ey)); x.quadraticCurveTo(PX(mx + 0.5), PY(my - 0.6), PX(top[0]), PY(top[1] - 0.3)); x.fill();
        if (!round && !RIM) { x.strokeStyle = shade(G1, 0.25); x.lineWidth = 0.06 * s; for (let q = 1; q < 6; q++) { const u = q / 6, qx = (1 - u) * (1 - u) * top[0] + 2 * (1 - u) * u * mx + u * u * ex, qy = (1 - u) * (1 - u) * top[1] + 2 * (1 - u) * u * (my + 0.2) + u * u * ey; x.beginPath(); x.moveTo(PX(qx), PY(qy)); x.lineTo(PX(qx + (a < 0 ? -0.3 : 0.3)), PY(qy - 0.4)); x.stroke(); } } });
      disc(top[0] - 0.2, top[1] - 0.25, 0.22, '#6a4a2a'); disc(top[0] + 0.2, top[1] - 0.3, 0.22, '#5a3e22');
    } else if (kind === 'birch') {
      const lean = fr ? 0 : 0.05, trunkC = '#f2ede2';
      if (round) { const cl = [[0, 0.92, 0.9], [-0.9, 0.82, 0.8], [0.9, 0.84, 0.8], [-0.5, 0.68, 0.75], [0.6, 0.66, 0.75], [0, 0.74, 0.85], [-0.2, 0.58, 0.6]]; cl.forEach(([u, v, rd], i) => disc(u * 1.6 + lean * H2 + (fr ? 0 : 0.6) + sw * H2, v * H2, rd, ['#7ac04a', '#a8d040', '#4f9a3a'][i % 3])); }
      else { x.fillStyle = G1; x.beginPath(); x.ellipse(PX(lean * H2 * 0.7 + (fr ? 0 : 0.5) + sw * H2), PY(H2 * 0.68), 2.0 * s, H2 * 0.33 * s, 0, 0, TAU); x.fill(); if (!fr) { disc(-1.2, H2 * 0.5, 1.0, G2); disc(1.6, H2 * 0.45, 0.9, G2); } }
      trunk(H2 * 0.92, 0.5, 0.25, lean, trunkC); if (!RIM) { x.fillStyle = '#2a2420'; for (let k = 0; k < 12; k++) { const v = H2 * (0.05 + k * 0.07), u = lean * v + (k % 2 ? 0.12 : -0.15); x.fillRect(PX(u), PY(v), 0.22 * s, 0.07 * s); } }
      branch(lean * H2 * 0.6, H2 * 0.6, lean * H2 * 0.6 - 1.2, H2 * 0.78, 0.09, trunkC); branch(lean * H2 * 0.7, H2 * 0.7, lean * H2 * 0.7 + 1.1, H2 * 0.86, 0.08, trunkC);
    } else if (kind === 'willow') {
      const lean = fr ? 0 : 0.05;
      trunk(H2 * 0.5, 1.3, 0.7, lean, bark); if (!fr) { branch(lean * 5, H2 * 0.45, -2, H2 * 0.75, 0.2, bark); branch(lean * 5, H2 * 0.48, 2.4, H2 * 0.8, 0.18, bark); }
      disc(lean * H2 * 0.8, H2 * 0.72, 3.3, G2);
      for (let k = 0; k < 16; k++) { const u = -3.6 + k * 0.48 + lean * H2 * 0.8, top2 = H2 * (0.92 - Math.abs(u) * 0.05), L = H2 * r.range(0.35, 0.55), swy = Math.sin(t * 1.6 + k) * 0.15; x.fillStyle = k % 2 ? G1 : G3; x.beginPath(); x.ellipse(PX(u + swy), PY(top2 - L / 2), 0.32 * s, L / 2 * s, 0, 0, TAU); x.fill(); }
    } else if (kind === 'baobab') {
      const lean = fr ? 0 : 0.02;
      x.fillStyle = bark; x.beginPath(); x.moveTo(PX(-2.2), PY(0)); x.quadraticCurveTo(PX(-2.8), PY(H2 * 0.45), PX(-0.9), PY(H2 * 0.72)); x.lineTo(PX(0.9 + lean * H2), PY(H2 * 0.72)); x.quadraticCurveTo(PX(2.8), PY(H2 * 0.45), PX(2.2), PY(0)); x.closePath(); x.fill();
      if (!RIM) { x.fillStyle = 'rgba(0,0,0,0.15)'; x.beginPath(); x.moveTo(PX(0.6), PY(0)); x.quadraticCurveTo(PX(1.6), PY(H2 * 0.4), PX(0.6), PY(H2 * 0.72)); x.lineTo(PX(0.9), PY(H2 * 0.72)); x.quadraticCurveTo(PX(2.8), PY(H2 * 0.45), PX(2.2), PY(0)); x.fill(); }
      const arms = fr ? [[-3.6, 0.9], [-1.8, 1.0], [0.4, 1.04], [2.4, 0.98], [3.8, 0.88]] : [[-2.6, 0.92], [0, 1.02], [2.8, 0.95]];
      arms.forEach(([u, v], i) => { branch(u * 0.2, H2 * 0.7, u, H2 * v - 0.3, 0.45, bark); x.fillStyle = i % 2 ? G1 : G2; x.beginPath(); x.ellipse(PX(u + sw * H2), PY(H2 * v), 1.5 * s, 0.45 * s, 0, 0, TAU); x.fill(); if (!RIM) { x.fillStyle = G3; x.beginPath(); x.ellipse(PX(u - 0.3 + sw * H2), PY(H2 * v + 0.12), 0.9 * s, 0.2 * s, 0, 0, TAU); x.fill(); } });
    }
  }
  function grass(x, kind, view, X, gy, s, o = {}) {
    const fr = view === 'front', t = o.t || 0, G1 = o.col || '#5fb84a', G2 = shade(G1, -0.25), G3 = shade(G1, 0.2), r = H.rng((o.seed || 1) * 13 + kind.length);
    const PX = (u) => X + u * s, PY = (v) => gy - v * s, wind = (k) => Math.sin(t * 2.2 + k * 0.7 + X * 0.02) * 0.04;
    const blade = (u0, ang, L, w, c) => { const ex = u0 + Math.sin(ang) * L, ey = Math.cos(ang) * L, mx = u0 + Math.sin(ang) * L * 0.5, my = ey * 0.5; x.fillStyle = c; x.beginPath(); x.moveTo(PX(u0 - w / 2), PY(0)); x.quadraticCurveTo(PX(mx - w * 0.3), PY(my), PX(ex), PY(ey)); x.quadraticCurveTo(PX(mx + w * 0.3), PY(my), PX(u0 + w / 2), PY(0)); x.closePath(); x.fill(); };
    x.fillStyle = 'rgba(20,10,30,0.22)'; x.beginPath(); x.ellipse(X, gy, (kind === 'reed' ? 0.25 : 0.35) * s, 0.04 * s + 2, 0, 0, TAU); x.fill();
    if (kind === 'broad') { const n = fr ? 11 : 5; for (let k = 0; k < n; k++) { const u = (k / (n - 1) - 0.5) * (fr ? 1 : 0.3), ang = u * (fr ? 1.4 : 1.0) + wind(k); blade(u * 0.25, ang, 0.7 * (1 - Math.abs(u) * 0.55), 0.11, [G1, G2, G3][k % 3]); } }
    else if (kind === 'spiky') { const n = fr ? 15 : 7; for (let k = 0; k < n; k++) { const u = (k / (n - 1) - 0.5) * (fr ? 1 : 0.25), ang = u * (fr ? 2.2 : 0.8) + wind(k); blade(u * 0.08, ang, 0.62 * (1 - Math.abs(u) * 0.45), 0.035, [G1, G3][k % 2]); } }
    else if (kind === 'clump') { const w = fr ? 0.42 : 0.24; const bl = fr ? [[0, 0.42, 0.18], [-0.24, 0.32, 0.16], [0.24, 0.32, 0.16], [-0.32, 0.14, 0.14], [0.32, 0.14, 0.14], [0, 0.18, 0.2], [-0.12, 0.5, 0.12], [0.14, 0.5, 0.12]] : [[0, 0.44, 0.14], [-0.12, 0.3, 0.13], [0.12, 0.28, 0.13], [0, 0.14, 0.16]]; bl.forEach(([u, v, rd], i) => { x.fillStyle = i % 3 === 0 ? G2 : G1; x.beginPath(); x.arc(PX(u * w / 0.42 + wind(i) * v), PY(v), rd * s, 0, TAU); x.fill(); if (!RIM) { x.fillStyle = G3; x.beginPath(); x.arc(PX(u * w / 0.42 - rd * 0.25), PY(v + rd * 0.25), rd * 0.45 * s, 0, TAU); x.fill(); } }); }
    else if (kind === 'reed') { const n = fr ? 6 : 2; for (let k = 0; k < n; k++) { const u = (k - (n - 1) / 2) * (fr ? 0.07 : 0.05), h = 1.3 + r() * 0.5, ang = (fr ? u * 0.6 : 0) + wind(k) * 0.6, tx = u + Math.sin(ang) * h; x.strokeStyle = G2; x.lineWidth = 0.022 * s; x.beginPath(); x.moveTo(PX(u), PY(0)); x.quadraticCurveTo(PX(u + Math.sin(ang) * h * 0.4), PY(h * 0.5), PX(tx), PY(h)); x.stroke(); x.fillStyle = '#8a5a2a'; x.beginPath(); x.ellipse(PX(tx), PY(h - 0.1), 0.035 * s, 0.12 * s, ang, 0, TAU); x.fill(); x.strokeStyle = G2; x.lineWidth = 0.01 * s; x.beginPath(); x.moveTo(PX(tx), PY(h + 0.02)); x.lineTo(PX(tx), PY(h + 0.12)); x.stroke(); } if (fr) for (const sd of [-1, 1]) blade(sd * 0.08, sd * 0.6, 0.45, 0.07, G1); else blade(0.02, 0.15, 0.6, 0.04, G1); }
    else if (kind === 'fern') { const n = fr ? 7 : 2; for (let k = 0; k < n; k++) { const u = (k / Math.max(1, n - 1) - 0.5) * (fr ? 1 : 0.6), ang = u * (fr ? 1.8 : 0.8) + wind(k), L = 0.7 * (1 - Math.abs(u) * 0.35); const seg = 9; let px = u * 0.05, py = 0, a = ang; for (let q = 0; q < seg; q++) { const nx = px + Math.sin(a) * L / seg, ny = py + Math.cos(a) * L / seg; x.strokeStyle = G2; x.lineWidth = 0.018 * s; x.beginPath(); x.moveTo(PX(px), PY(py)); x.lineTo(PX(nx), PY(ny)); x.stroke(); const lf = 0.09 * (1 - q / seg) + 0.02; x.fillStyle = q % 2 ? G1 : G3; for (const sd of [-1, 1]) { x.beginPath(); x.ellipse(PX(nx + Math.cos(a) * sd * lf * 0.6), PY(ny - Math.sin(a) * sd * lf * 0.6), lf * s * 0.7, 0.025 * s, -a + sd * 0.5, 0, TAU); x.fill(); } px = nx; py = ny; a += (ang > 0 ? 1 : -1) * 0.12; } } }
  }
  function grassStrip(x, gy, x0, x1, s, o = {}) { const r = H.rng(o.seed || 9), kinds = o.kinds || ['broad', 'spiky', 'clump']; for (let X = x0; X < x1; X += r.range(0.4, 1.2) * s) grass(x, r.pick(kinds), r() < 0.7 ? 'front' : 'side', X, gy + r.range(0, 4), s * r.range(0.6, 1.0), { t: o.t, seed: Math.round(X), col: o.col }); }

  // ---------- library contact sheets (reference pages; also used to check the drawings) ----------
  function labelAt(x, s, X, Y) { x.font = F(800, 28); x.textAlign = 'center'; x.fillStyle = C.white; x.lineJoin = 'round'; x.strokeStyle = 'rgba(30,16,40,0.75)'; x.lineWidth = 6; x.strokeText(s, X, Y); x.fillText(s, X, Y); }
// viewsOf: a line-up from the FRONT, from BEHIND and in 3/4 view (head and shoulders), like its character sheet
function viewsOf(x, t, CS, seed) {
    x.drawImage(roomBG('vbg' + seed, C.warm, seed), -60, -40, 1400, 800);
    const ids = Object.keys(CS), gap = 1180 / ids.length, rows = [[150, 'FRONT VIEW'], [375, 'BACK VIEW'], [585, '3/4 VIEW']];
    ids.forEach((id, i) => {
      const ch = CS[id], X = 110 + gap * (i + 0.5), R = 34 * Math.sqrt(ch.hM / 1.66);
      x.save(); x.beginPath(); x.rect(X - gap / 2, 40, gap, 212); x.clip(); frontBust(x, ch, X, rows[0][0] - (ch.hM - 1.3) * 40, R, { expr: i % 3 === 0 ? 'happy' : 'neutral', blink: blink(t, i) }); x.restore();
      const b = backBust(ch, R, 0); x.save(); x.beginPath(); x.rect(X - gap / 2, 262, gap, 212); x.clip(); x.drawImage(b.img, X - b.cx, rows[1][0] - (ch.hM - 1.3) * 40 - b.cy); x.restore();
      x.save(); x.beginPath(); x.rect(X - gap / 2, 500, gap, 140); x.clip(); const h = hOf(ch, 300), P = { x: X, gy: 0, h, f: 1, lean: 0.02, drop: 0, aB: { a: [0, 0.2] }, aF: { a: [0.1, 0.25] } }, J0 = rig(ch, P); P.gy = rows[2][0] + 10 - (J0.hc[1] - 0); const J = rig(ch, P); person(x, ch, P, { look: [0.4, 0], expr: i % 2 ? 'happy' : 'neutral', blink: blink(t, i + 2), hair: { th: 0, th2: 0 } }); x.restore();
      x.font = F(800, 22); x.textAlign = 'center'; x.fillStyle = C.white; x.fillText(ch.name, X, 680); x.font = F(700, 18); x.fillStyle = 'rgba(255,240,225,0.85)'; x.fillText(ch.tag[0] + ' ' + ch.tag[1], X, 704);
    });
    rows.forEach(([y, s]) => { x.save(); x.translate(56, y + 20); x.rotate(-Math.PI / 2); x.font = F(800, 22); x.textAlign = 'center'; x.fillStyle = '#ffd08a'; x.fillText(s, 0, 0); x.restore(); });
  }

  const SHEETS = {
    locations(x, W, H_, t) {
      const kinds = ['park', 'busstop', 'school', 'room', 'street', 'field', 'ocean', 'forest', 'zoo'], tw = 1280 / 3, th = 720 / 3;
      kinds.forEach((k, i) => { const X = (i % 3) * tw, Y = Math.floor(i / 3) * th; x.save(); x.beginPath(); x.rect(X + 2, Y + 2, tw - 4, th - 4); x.clip(); x.translate(X, Y); x.scale(1 / 3, 1 / 3); x.drawImage(backdrop(k, 560), -60, -40, 1400, 800); if (k === 'ocean') seaSurface(x, t, 560 - 170 + 4); x.restore(); labelAt(x, k === 'busstop' ? 'bus station' : k === 'street' ? 'crowded street' : k === 'field' ? 'grass field' : k, X + tw / 2, Y + 36); });
    },
    crowd(x, W, H_, t) { // crowded street: people walking both ways with planted feet, true heights, true depth scale
      const gy = 600, M = stageModel(gy, 150); x.drawImage(backdrop('street', gy, { pxm: 150 }), -60, -40, 1400, 800);
      Object.keys(CAST).map((id, i) => ({ id, i, d: M.dp + (i % 3) * 0.55 })).sort((a, b) => b.d - a.d).forEach(({ id, i, d }) => { const ch = CAST[id], f = i % 2 ? 1 : -1, v = 1.2 + (i % 3) * 0.15, pm = M.s(d), X = ((i * 157 + f * t * v * pm) % 1500 + 1500) % 1500 - 110, h = hOf(ch, pm), P = walkPose(ch, X, M.y(d), h, f, t * v, pm); person(x, ch, P, stOf(id, t, { look: [f * 0.3, 0], ph: i })); });
      labelAt(x, 'crowded street: walk cycle, true sizes', 640, 50);
    },
    animals(x, W, H_, t) { // every animal at its real size for the row it stands on (one ground-plane scale, stageModel)
      const gy = 520, M = stageModel(gy, 95); x.drawImage(backdrop('field', gy), -60, -40, 1400, 800);
      const at = (y) => M.at(y);
      quad(x, 'elephant', 210, gy, 1, t * 1.2, t, at(gy)); quad(x, 'giraffe', 520, gy, 1, t * 1.6, t, at(gy)); quad(x, 'horse', 800, gy, -1, t * 2, t, at(gy)); quad(x, 'lion', 1060, gy, -1, t * 1.6, t, at(gy));
      quad(x, 'dog', 380, gy + 120, 1, t * 1.4, t, at(gy + 120)); quad(x, 'cat', 640, gy + 125, 1, 0, t, at(gy + 125)); reptile(x, 'croc', 960, gy + 135, -1, t * 0.5, t, at(gy + 135)); reptile(x, 'turtle', 1200, gy + 140, -1, t * 0.1, t, at(gy + 140)); reptile(x, 'lizard', 120, gy + 150, 1, t * 0.6, t, at(gy + 150)); reptile(x, 'snake', 800, gy + 170, 1, t * 0.6, t, at(gy + 170));
      bird(x, 'eagle', 300, 150, 1, t, 120); bird(x, 'parrot', 620, 120, -1, t, 160); bird(x, 'sparrow', 900, 200, 1, t, 240); bird(x, 'duck', 1100, 140, -1, t, 140);
      labelAt(x, 'mammals · birds · reptiles (true sizes)', 640, 46);
    },
    sea(x, W, H_, t) { // true sizes: clownfish (11 cm) near the camera, shark (4 m) and tuna (2 m) in the middle, a 30 m submarine far away
      const gy = 650; x.drawImage(backdrop('underwater', gy), -60, -40, 1400, 800);
      x.save(); x.globalAlpha = 0.55; submarine(x, 900, 260, -1, t, 13); x.restore(); // far: small, hazy
      fish(x, 'shark', 360 + Math.sin(t * 0.3) * 40, 300, 1, t, 110); fish(x, 'tuna', 920, 380, -1, t, 120);
      for (let i = 0; i < 4; i++) fish(x, 'clownfish', 180 + i * 80, 560 + (i % 2) * 34, 1, t + i * 0.3, 620); // near the camera, by the reef
      labelAt(x, 'fish · submarine (true sizes, by depth)', 640, 46);
    },
    vehicles(x, W, H_, t) { // a wide street shot at 60 px/m: people, car, bus, a train on a viaduct, all at true size
      const gy = 600, P = 60, M = stageModel(gy, P); x.drawImage(backdrop('street', gy, { pxm: P }), -60, -40, 1400, 800);
      { const d = M.dp + ST.kerb + ST.road + 1.6, s2 = M.s(d), y0 = M.y(d), deck = y0 - 6 * s2; x.fillStyle = '#4a4656'; x.fillRect(0, deck, 1280, 0.8 * s2); for (let px = 40; px < 1280; px += 12 * s2) x.fillRect(px, deck, 0.9 * s2, 6 * s2); vehicle(x, 'train', 640, deck, 1, t * 8, t, s2); } // viaduct 6 m high
      const far = streetLane(gy, P, 'far'), near = streetLane(gy, P, 'near');
      vehicle(x, 'bus', 380, far.y, 1, t * 6, t, far.pxm); vehicle(x, 'car', 900, near.y, -1, t * 7, t, near.pxm);
      [['ben', 180, 1], ['grace', 250, 1], ['leo', 1150, -1]].forEach(([id, X, f], i) => { const ch = CAST[id], Pp = { x: X, gy, h: hOf(ch, P), f, lean: 0.02, drop: breath(t, i), aB: { a: [-0.05, 0.25] }, aF: { a: [0.1, 0.3] } }; floorShadow(x, rig(ch, Pp), gy); person(x, ch, Pp, stOf(id, t, { look: [f * 0.4, 0], ph: i })); });
      airplane(x, 980, 110, -1, t, 9, -0.05);
      labelAt(x, 'train · bus · car · people: same scale (true sizes)', 640, 46);
    },
    ocean(x, W, H_, t) { const gy = 640; x.drawImage(backdrop('ocean', gy), -60, -40, 1400, 800); const wl = gy - 170 + 70; x.save(); x.fillStyle = '#3a95c8'; x.fillRect(0, wl, 1280, gy - wl); x.restore(); seaSurface(x, t, wl, 6); boat(x, 420, wl, 1, t, 40, 'sail'); boat(x, 900, wl, -1, t, 36, 'ferry'); seaSurface(x, t + 0.3, wl + 18, 5, 'rgba(255,255,255,0.35)'); labelAt(x, 'boats float on the waves', 640, 46); },
    hands(x, W, H_, t) { // the HAND SHEET: 8 poses, each = one rounded finger box + one slim thumb (pointing adds the index box)
      x.drawImage(roomBG('handsbg', C.warm, 7), -60, -40, 1400, 800);
      const ch = CAST.omar, r = 250, sleeve = (w, u) => { const p = [w[0] - u[0] * 0.02 * r, w[1] - u[1] * 0.02 * r]; box(x, [p[0] - u[0] * 0.07 * r, p[1] - u[1] * 0.07 * r], u, 0.075 * r, 0.3 * r, 4, null, '#f2ebe0'); box(x, [p[0] - u[0] * 0.3 * r, p[1] - u[1] * 0.3 * r], u, 0.23 * r, 0.36 * r, 4, null, shade('#1f6f78', 0)); x.fillStyle = 'rgba(0,0,0,0.18)'; };
      const cells = [['OPEN FRONT', [0, -1], { m: 'open', view: 'front' }, 1], ['OPEN BACK', [0, -1], { m: 'open', view: 'back' }, 1], ['HOLDING FRONT', [1, 0], { hold: { w: 0.08 * r, axis: [0, 1] }, view: 'front' }, 1], ['HOLDING BACK', [1, 0], { hold: { w: 0.08 * r, axis: [0, 1] }, view: 'back' }, 1],
        ['POINTING FRONT', [1, 0], { m: 'point', view: 'front' }, 1], ['POINTING BACK', [-1, 0], { m: 'point', view: 'back' }, -1], ['SIDE RIGHT', [1, 0], { m: 'thumb', view: 'front' }, 1], ['SIDE LEFT', [-1, 0], { m: 'thumb', view: 'front' }, -1]];
      SKIN = ch.skin;
      cells.forEach(([name, u, spec, f], i) => {
        const cx = 160 + (i % 4) * 320, cy = i < 4 ? 180 : 500, raised = u[1] < 0;
        const w = raised ? [cx, cy + 60] : [cx - u[0] * 55, cy], arm = { e: [w[0] - u[0] * 200, w[1] - u[1] * 200], w }, mid = raised ? cx - 200 : null;
        if (spec.hold) { const G = gripPt(arm, r, f, spec.hold); ruler(x, G[0], cy - 140, 1.0, 280, spec.hold.w); }
        const k = r * 0.012; x.save(); x.translate(k, -k); RIM = C.rim; hand(x, arm, r, spec, f, mid, 'over'); RIM = null; x.restore();
        hand(x, arm, r, spec, f, mid, 'over'); sleeve(w, u);
        labelAt(x, name, cx, i < 4 ? 340 : 600);
      });
    },
    hands2(x, W, H_, t) { // MORE HAND POSES: same rule, extra fingers only where the pose needs them (V, OK ring, trigger finger)
      x.drawImage(roomBG('hands2bg', C.warm, 8), -60, -40, 1400, 800);
      const ch = CAST.omar, r = 250, teal = '#1f6f78';
      const sleeve = (w, u) => { const p = [w[0] - u[0] * 0.02 * r, w[1] - u[1] * 0.02 * r]; box(x, [p[0] - u[0] * 0.07 * r, p[1] - u[1] * 0.07 * r], u, 0.075 * r, 0.3 * r, 4, null, '#f2ebe0'); box(x, [p[0] - u[0] * 0.3 * r, p[1] - u[1] * 0.3 * r], u, 0.23 * r, 0.36 * r, 4, null, teal); };
      const L = (arm, lx, ly) => handLocal(arm, r, 1, arm.mid, lx, ly);
      const cells = [
        ['HOLDING GUN', [1, 0], { m: 'gun' }, (arm) => { const P = (a, b) => L(arm, a, b); x.save(); const o = P(-0.12, -0.34); x.translate(o[0], o[1]); x.fillStyle = '#3c414c'; rr(x, 0.1 * r, 0.12 * r, 0.16 * r, 0.42 * r, 0.04 * r); x.fill(); x.strokeStyle = '#3c414c'; x.lineWidth = 0.035 * r; x.beginPath(); x.arc(0.4 * r, 0.24 * r, 0.075 * r, 0, Math.PI); x.stroke(); x.fillStyle = '#545a66'; rr(x, 0, 0, 0.8 * r, 0.17 * r, 0.03 * r); x.fill(); x.fillStyle = '#6c7380'; x.fillRect(0.04 * r, 0.02 * r, 0.72 * r, 0.04 * r); x.strokeStyle = '#3c414c'; x.lineWidth = 0.015 * r; for (let i = 0; i < 4; i++) { x.beginPath(); x.moveTo((0.12 + i * 0.04) * r, 0.07 * r); x.lineTo((0.1 + i * 0.04) * r, 0.15 * r); x.stroke(); } x.restore(); }],
        ['HOLDING PHONE', [1, 0], { hold: { w: 0.11 * r, axis: [0.28, -0.96] } }, (arm, sp) => { const G = gripPt(arm, r, 1, sp.hold), a = sp.hold.axis; x.save(); x.translate(G[0], G[1]); x.rotate(Math.atan2(a[1], a[0]) - Math.PI / 2); x.fillStyle = '#23262e'; rr(x, -0.06 * r, -0.38 * r, 0.12 * r, 0.76 * r, 0.03 * r); x.fill(); x.fillStyle = '#4b5060'; rr(x, -0.045 * r, -0.36 * r, 0.03 * r, 0.72 * r, 0.015 * r); x.fill(); x.restore(); }],
        ['OK SIGN', [0, -1], { m: 'ok', view: 'front' }],
        ['PEACE SIGN', [0, -1], { m: 'peace', view: 'front' }],
        ['WRITING', [1, 0], { m: 'write' }, (arm) => { const a = L(arm, -0.08, -0.48), b = L(arm, 0.5, 0.2), d = [b[0] - a[0], b[1] - a[1]], n = Math.hypot(d[0], d[1]); x.save(); x.translate(a[0], a[1]); x.rotate(Math.atan2(d[1], d[0])); x.fillStyle = '#2f8a7a'; rr(x, 0, -0.035 * r, n * 0.85, 0.07 * r, 0.02 * r); x.fill(); x.fillStyle = '#f1d3a0'; x.beginPath(); x.moveTo(n * 0.85, -0.035 * r); x.lineTo(n, 0); x.lineTo(n * 0.85, 0.035 * r); x.fill(); x.fillStyle = '#2a2240'; x.beginPath(); x.moveTo(n * 0.95, -0.01 * r); x.lineTo(n, 0); x.lineTo(n * 0.95, 0.01 * r); x.fill(); x.fillStyle = '#c94a5a'; rr(x, -0.06 * r, -0.035 * r, 0.07 * r, 0.07 * r, 0.02 * r); x.fill(); x.restore(); }],
        ['PINCHING', [1, 0], { m: 'pinch' }, (arm) => { const c = L(arm, 0.45, -0.09); x.fillStyle = '#e5383b'; x.beginPath(); x.arc(c[0], c[1], 0.03 * r, 0, TAU); x.fill(); }, 'after'],
        ['CLENCHED FIST', [0, -1], { m: 'fist', view: 'front' }],
        ['POINTING AT YOU', null, { m: 'pointcam', cuff: teal }],
      ];
      SKIN = ch.skin;
      cells.forEach(([name, u, spec, prop, when], i) => {
        const cx = 160 + (i % 4) * 320, cy = i < 4 ? 180 : 500;
        if (!u) { const arm = { e: [cx, cy + 1], w: [cx, cy] }; const k = r * 0.012; x.save(); x.translate(k, -k); RIM = C.rim; hand(x, arm, r, spec, 1, null, 'over'); RIM = null; x.restore(); hand(x, arm, r, spec, 1, null, 'over'); labelAt(x, name, cx, i < 4 ? 340 : 600); return; }
        const raised = u[1] < 0, w = raised ? [cx, cy + 60] : [cx - u[0] * 80, cy + 20], arm = { e: [w[0] - u[0] * 200, w[1] - u[1] * 200], w, mid: raised ? cx - 200 : null };
        if (prop && when !== 'after') prop(arm, spec);
        const k = r * 0.012; x.save(); x.translate(k, -k); RIM = C.rim; hand(x, arm, r, spec, 1, arm.mid, 'over'); RIM = null; x.restore();
        hand(x, arm, r, spec, 1, arm.mid, 'over'); sleeve(w, u); if (prop && when === 'after') prop(arm, spec);
        labelAt(x, name, cx, i < 4 ? 340 : 600);
      });
    },
    cast2(x, W, H_, t) { castSheet(x, W, H_, t, CAST2, 'The cast · line-up 2'); },
    views2(x, W, H_, t) { viewsOf(x, t, CAST2, 11); },
    cast3(x, W, H_, t) { castSheet(x, W, H_, t, CAST3, 'Variations · line-up 3'); }, views3(x, W, H_, t) { viewsOf(x, t, CAST3, 21); },
    cast4(x, W, H_, t) { castSheet(x, W, H_, t, CAST4, 'Variations · line-up 4'); }, views4(x, W, H_, t) { viewsOf(x, t, CAST4, 22); },
    cast5(x, W, H_, t) { castSheet(x, W, H_, t, CAST5, 'Variations · line-up 5'); }, views5(x, W, H_, t) { viewsOf(x, t, CAST5, 23); },
    cast6(x, W, H_, t) { castSheet(x, W, H_, t, CAST6, 'Variations · line-up 6'); }, views6(x, W, H_, t) { viewsOf(x, t, CAST6, 24); },
    furniture(x, W, H_, t) { // HOME FURNITURE, front and side views, true sizes (row 1 and row 2 each one scale)
      x.drawImage(roomBG('furnbg', C.warm, 13), -60, -40, 1400, 800);
      const s1 = 150, g1 = 290, s2 = 125, g2 = 630, L = (s, X, y) => { x.font = F(800, 20); x.textAlign = 'center'; x.fillStyle = C.white; const m = s.match(/^(.*) \((.*)\)$/); if (m) { x.fillText(m[1], X, y); x.fillText('(' + m[2] + ')', X, y + 22); } else x.fillText(s, X, y); };
      [['chair', 'front', 75, {}], ['chair', 'side', 175, {}], ['table', 'front', 395, {}], ['table', 'side', 625, {}], ['sofa', 'front', 875, {}], ['sofa', 'side', 1150, {}]].forEach(([k, v, X, o]) => { furniture(x, k, v, X, g1, s1, o); L(k + ' (' + v + ')', X, g1 + 34); });
      [['armchair', 'front', 70, {}], ['armchair', 'side', 185, {}], ['bed', 'front', 360, {}], ['bed', 'side', 600, {}], ['wardrobe', 'front', 820, {}], ['wardrobe', 'side', 935, {}], ['bookshelf', 'front', 1050, {}], ['bookshelf', 'side', 1180, {}]].forEach(([k, v, X, o]) => { furniture(x, k, v, X, g2, s2, o); L((k === 'wardrobe' ? 'cabinet' : k) + ' (' + v + ')', X, g2 + 34); });
      labelAt(x, 'home furniture · true sizes', 640, 36);
    },
    furniture2(x, W, H_, t) { // variations: 3-seat sofa, slatted wooden chairs, other colours; a person for scale
      x.drawImage(roomBG('furnbg2', C.warm, 14), -60, -40, 1400, 800);
      const s1 = 135, g1 = 290, g2 = 630, L = (s, X, y) => { x.font = F(800, 20); x.textAlign = 'center'; x.fillStyle = C.white; const m = s.match(/^(.*) \((.*)\)$/); if (m) { x.fillText(m[1], X, y); x.fillText('(' + m[2] + ')', X, y + 22); } else x.fillText(s, X, y); };
      [['sofa', 'front', 200, { seats: 3, col: '#2f4f8a' }], ['sofa', 'side', 430, { col: '#2f4f8a' }], ['armchair', 'front', 580, { col: '#d49a2a' }], ['armchair', 'side', 700, { col: '#d49a2a' }], ['bed', 'front', 880, { blanket: '#1fa39a', blanket2: '#f2ebe0' }], ['bed', 'side', 1120, { blanket: '#1fa39a', blanket2: '#f2ebe0' }]].forEach(([k, v, X, o]) => { furniture(x, k, v, X, g1, s1, o); L(k + ' (' + v + ')', X, g1 + 34); });
      [['bookshelf', 'front', 130, { col: '#4a2e1e' }], ['bookshelf', 'side', 260, { col: '#4a2e1e' }], ['wardrobe', 'front', 420, { col: '#c0632e' }], ['wardrobe', 'side', 560, { col: '#c0632e' }], ['chair', 'front', 860, { slat: true, wood: '#c88a4a' }], ['chair', 'side', 960, { slat: true, wood: '#c88a4a' }], ['table', 'side', 1080, { wood: '#c88a4a' }]].forEach(([k, v, X, o]) => { furniture(x, k, v, X, g2, s1, o); L((k === 'wardrobe' ? 'cabinet' : k) + ' (' + v + ')', X, g2 + 34); });
      const ch = CH('arjun'), P = { x: 700, gy: g2, h: hOf(ch, s1), f: 1, lean: 0.02, drop: breath(t, 1), aB: { a: [-0.05, 0.25] }, aF: { a: [0.1, 0.3] } }; floorShadow(x, rig(ch, P), g2); person(x, ch, P, stOf('arjun', t, { look: [0.5, 0], expr: 'happy' })); L('person for scale', 700, g2 + 34);
      labelAt(x, 'variations · same scale as a person', 640, 36);
    },
    lights(x, W, H_, t) { // INDOOR LIGHTS, front and side views, true sizes (row 1 at 300 px/m, row 2 at 170 px/m)
      x.drawImage(roomBG('lightbg', C.warm, 15), -60, -40, 1400, 800); x.fillStyle = 'rgba(20,12,30,0.25)'; x.fillRect(0, 0, 1280, 720);
      const L = (s, X, y) => { x.font = F(800, 20); x.textAlign = 'center'; x.fillStyle = C.white; const m = s.match(/^(.*) \((.*)\)$/); if (m) { x.fillText(m[1], X, y); x.fillText('(' + m[2] + ')', X, y + 22); } else x.fillText(s, X, y); };
      const g1 = 270, s1 = 300; [['desk', 'front', 90, 'desk lamp'], ['desk', 'side', 230, 'desk lamp'], ['table', 'front', 400, 'table lamp'], ['table', 'side', 560, 'table lamp'], ['lantern', 'front', 720, 'oil lantern'], ['lantern', 'side', 840, 'oil lantern'], ['pendant', 'front', 1000, 'pendant bulb', { top: 0.85, at: 0.35 }], ['pendant', 'side', 1140, 'pendant bulb', { top: 0.85, at: 0.35 }]].forEach(([k, v, X, n, o]) => { lightFx(x, k, v, X, g1, s1, o); L(n + ' (' + v + ')', X, g1 + 32); });
      const g2 = 650, s2 = 170; [['floor', 'front', 120, 'floor lamp'], ['floor', 'side', 300, 'arc floor lamp', { curve: true }], ['sconce', 'front', 500, 'wall sconce', { at: 1.4 }], ['sconce', 'side', 650, 'wall sconce', { at: 1.4 }], ['wlantern', 'front', 830, 'wall lantern', { at: 1.4 }], ['wlantern', 'side', 980, 'wall lantern', { at: 1.4 }]].forEach(([k, v, X, n, o]) => { lightFx(x, k, v, X, g2, s2, o); L(n + ' (' + v + ')', X, g2 + 30); });
      const ch = CH('emma'), P = { x: 1170, gy: g2, h: hOf(ch, s2), f: -1, lean: 0.02, drop: breath(t, 1), aB: { a: [-0.05, 0.25] }, aF: { a: [0.1, 0.3] } }; floorShadow(x, rig(ch, P), g2); person(x, ch, P, stOf('emma', t, { look: [-0.4, 0], expr: 'happy' }), [-0.8, -0.6]); L('person for scale', 1170, g2 + 30);
      labelAt(x, 'lights · true sizes · lit (warm glow)', 640, 36);
    },
    lights2(x, W, H_, t) { // OUTDOOR LIGHTS: street lamps at 4 m next to a person and a bench (110 px/m)
      x.drawImage(backdrop('field', 640), -60, -40, 1400, 800); x.fillStyle = 'rgba(20,12,50,0.45)'; x.fillRect(0, 0, 1280, 720);
      const g = 640, sc = 110, L = (s, X, y) => { x.font = F(800, 22); x.textAlign = 'center'; x.fillStyle = C.white; x.fillText(s, X, y); };
      lightFx(x, 'street', 'front', 200, g, sc); L('street lamp (front)', 200, g + 36); lightFx(x, 'street', 'side', 470, g, sc); L('street lamp (side)', 520, g + 36);
      lightFx(x, 'lantern', 'front', 760, g, sc * 2.2, { col: '#8a2a2a' }); L('lantern (near)', 760, g + 36);
      x.fillStyle = '#5a3e2a'; const bx = 900; x.fillRect(bx, g - 0.45 * sc, 1.8 * sc, 0.06 * sc); x.fillRect(bx, g - 0.8 * sc, 1.8 * sc, 0.06 * sc); x.fillRect(bx + 0.1 * sc, g - 0.45 * sc, 0.06 * sc, 0.45 * sc); x.fillRect(bx + 1.64 * sc, g - 0.45 * sc, 0.06 * sc, 0.45 * sc); x.fillRect(bx + 0.1 * sc, g - 0.86 * sc, 0.06 * sc, 0.42 * sc); x.fillRect(bx + 1.64 * sc, g - 0.86 * sc, 0.06 * sc, 0.42 * sc); x.fillRect(bx, g - 0.66 * sc, 1.8 * sc, 0.06 * sc); L('bench 1.8 m', bx + 0.9 * sc, g + 36);
      const ch = CH('karim'), P = { x: 1180, gy: g, h: hOf(ch, sc), f: -1, lean: 0.02, drop: breath(t, 1), aB: { a: [-0.05, 0.25] }, aF: { a: [0.1, 0.3] } }; floorShadow(x, rig(ch, P), g); person(x, ch, P, stOf('karim', t, { look: [-0.4, 0] }), [-0.8, -0.6], C.rimCool); L('person 1.75 m', 1180, g + 64);
      labelAt(x, 'outdoor lights · same scale as a person', 640, 36);
    },
    decor(x, W, H_, t) { // DECORATION, front and side views, true sizes; wall pieces at their real height on the wall
      x.drawImage(roomBG('decobg', C.warm, 16), -60, -40, 1400, 800);
      const L = (s, X, y) => { x.font = F(800, 20); x.textAlign = 'center'; x.fillStyle = C.white; const m = s.match(/^(.*) \((.*)\)$/); if (m) { x.fillText(m[1], X, y); x.fillText('(' + m[2] + ')', X, y + 22); } else x.fillText(s, X, y); };
      const g1 = 300, s1 = 120; x.fillStyle = 'rgba(20,10,30,0.25)'; x.fillRect(0, g1 - 2, 1280, 3);
      [['window', 'front', 150], ['window', 'side', 330], ['frame', 'front', 480], ['frame', 'side', 590], ['clock', 'front', 720], ['clock', 'side', 830], ['mirror', 'front', 980], ['mirror', 'side', 1110]].forEach(([k, v, X]) => { decor(x, k, v, X, g1, s1); L((k === 'frame' ? 'picture' : k) + ' (' + v + ')', X, g1 + 30); });
      const g2 = 640, s2 = 200;
      [['plant', 'front', 90], ['plant', 'side', 230], ['vase', 'front', 360], ['vase', 'side', 450], ['tv', 'front', 650], ['tv', 'side', 860], ['rug', 'front', 1080, 0.5]].forEach(([k, v, X]) => { decor(x, k, v, X, g2, s2); L((k === 'tv' ? 'TV on stand' : k === 'plant' ? 'potted plant' : k === 'vase' ? 'flowers' : k) + ' (' + v + ')', X, g2 + 30); });
      labelAt(x, 'decoration · true sizes', 640, 36);
    },
    trees(x, W, H_, t) { // TREES (soft style), front and side, true heights at 20 px/m, a person for scale
      x.drawImage(roomBG('treebg', C.warm, 17), -60, -40, 1400, 800);
      const L = (s, X, y) => { x.font = F(800, 20); x.textAlign = 'center'; x.fillStyle = C.white; const m = s.match(/^(.*) \((.*)\)$/); if (m) { x.fillText(m[1], X, y); x.fillText('(' + m[2] + ')', X, y + 22); } else x.fillText(s, X, y); };
      const s1 = 20, g1 = 330, g2 = 650;
      [['oak', 'front', 110], ['oak', 'side', 300], ['pine', 'front', 470], ['pine', 'side', 610], ['palm', 'front', 800], ['palm', 'side', 1000]].forEach(([k, v, X]) => { tree(x, k, v, X, g1, s1, { t }); L(k + ' (' + v + ')', X, g1 + 28); });
      [['birch', 'front', 90], ['birch', 'side', 220], ['willow', 'front', 400], ['willow', 'side', 600], ['baobab', 'front', 850], ['baobab', 'side', 1080]].forEach(([k, v, X]) => { tree(x, k, v, X, g2, s1, { t, h: k === 'baobab' ? 11 : undefined }); L(k + ' (' + v + ')', X, g2 + 28); });
      const ch = CH('leo'), P = { x: 1220, gy: g2, h: hOf(ch, s1), f: -1, lean: 0, drop: 0, aB: { a: [0, 0.2] }, aF: { a: [0.1, 0.25] } }; person(x, ch, P, { expr: 'happy' }); L('person 1.8 m', 1220, g2 + 28);
      labelAt(x, 'trees · true heights (soft style)', 640, 30);
    },
    trees2(x, W, H_, t) { // TREES (round style: circles and stacked triangles), front and side
      x.drawImage(roomBG('treebg2', C.warm, 18), -60, -40, 1400, 800);
      const L = (s, X, y) => { x.font = F(800, 20); x.textAlign = 'center'; x.fillStyle = C.white; const m = s.match(/^(.*) \((.*)\)$/); if (m) { x.fillText(m[1], X, y); x.fillText('(' + m[2] + ')', X, y + 22); } else x.fillText(s, X, y); };
      const s1 = 20, g1 = 330, g2 = 650, o = { style: 'round', t };
      [['oak', 'front', 110], ['oak', 'side', 300], ['pine', 'front', 470], ['pine', 'side', 610], ['palm', 'front', 800], ['palm', 'side', 1000]].forEach(([k, v, X]) => { tree(x, k, v, X, g1, s1, o); L(k + ' (' + v + ')', X, g1 + 28); });
      [['birch', 'front', 90], ['birch', 'side', 220], ['willow', 'front', 400], ['willow', 'side', 600], ['baobab', 'front', 850], ['baobab', 'side', 1080]].forEach(([k, v, X]) => { tree(x, k, v, X, g2, s1, { ...o, h: k === 'baobab' ? 11 : undefined }); L(k + ' (' + v + ')', X, g2 + 28); });
      const ch = CH('mia'), P = { x: 1220, gy: g2, h: hOf(ch, s1), f: -1, lean: 0, drop: 0, aB: { a: [0, 0.2] }, aF: { a: [0.1, 0.25] } }; person(x, ch, P, { expr: 'happy' }); L('girl 1.25 m', 1220, g2 + 28);
      labelAt(x, 'trees · simple round style', 640, 30);
    },
    grasses(x, W, H_, t) { // GRASS and small plants, front and side, true heights at 260 px/m, swaying; a child for scale
      x.drawImage(roomBG('grassbg', C.warm, 19), -60, -40, 1400, 800);
      const L = (s, X, y) => { x.font = F(800, 20); x.textAlign = 'center'; x.fillStyle = C.white; const m = s.match(/^(.*) \((.*)\)$/); if (m) { x.fillText(m[1], X, y); x.fillText('(' + m[2] + ')', X, y + 22); } else x.fillText(s, X, y); };
      const s1 = 260, g = 590;
      [['broad', 'front', 80], ['broad', 'side', 195], ['spiky', 'front', 305], ['spiky', 'side', 405], ['clump', 'front', 520], ['clump', 'side', 640], ['reed', 'front', 750], ['reed', 'side', 845], ['fern', 'front', 955], ['fern', 'side', 1060]].forEach(([k, v, X]) => { grass(x, k, v, X, g, s1, { t }); L(k + ' (' + v + ')', X, g + 30); });
      const ch = CH('finn'), P = { x: 1190, gy: g, h: hOf(ch, s1), f: -1, lean: 0, drop: breath(t, 1), aB: { a: [0, 0.2] }, aF: { a: [0.1, 0.25] } }; floorShadow(x, rig(ch, P), g); person(x, ch, P, stOf('finn', t, { look: [-0.5, 0.2], expr: 'happy' })); L('boy 1.27 m', 1190, g + 30);
      grassStrip(x, 712, 0, 1280, 55, { t });
      labelAt(x, 'grass and small plants · true heights · wind sway', 640, 30);
    },
    views(x, W, H_, t) { // the cast from the FRONT, from BEHIND and turned away (angled back view), like the line-up sheet
      x.drawImage(roomBG('viewsbg', C.warm, 9), -60, -40, 1400, 800);
      const ids = Object.keys(CAST), gap = 1180 / ids.length, rows = [[150, 'FRONT VIEW'], [375, 'BACK VIEW'], [585, 'ANGLED BACK VIEW']];
      ids.forEach((id, i) => {
        const ch = CAST[id], X = 110 + gap * (i + 0.5), R = 34 * Math.sqrt(ch.hM / 1.66);
        x.save(); x.beginPath(); x.rect(X - gap / 2, 40, gap, 212); x.clip(); frontBust(x, ch, X, rows[0][0] - (ch.hM - 1.3) * 40, R, { expr: i % 3 === 0 ? 'happy' : 'neutral', blink: blink(t, i) }); x.restore();
        const b = backBust(ch, R, 0); x.save(); x.beginPath(); x.rect(X - gap / 2, 262, gap, 212); x.clip(); x.drawImage(b.img, X - b.cx, rows[1][0] - (ch.hM - 1.3) * 40 - b.cy); x.restore();
        const a = backBust(ch, R, 1); x.save(); x.beginPath(); x.rect(X - gap / 2, 500, gap, 140); x.clip(); x.drawImage(a.img, X - a.cx, rows[2][0] - a.cy); x.restore();
        x.font = F(800, 22); x.textAlign = 'center'; x.fillStyle = C.white; x.fillText(ch.name, X, 680); x.font = F(700, 18); x.fillStyle = 'rgba(255,240,225,0.85)'; x.fillText(ch.tag[0] + ' ' + ch.tag[1], X, 704);
      });
      rows.forEach(([y, s]) => { x.save(); x.translate(56, y + 20); x.rotate(-Math.PI / 2); x.font = F(800, 22); x.textAlign = 'center'; x.fillStyle = '#ffd08a'; x.fillText(s, 0, 0); x.restore(); });
    },
    ots(x, W, H_, t) { // conversation: Kai talks (front portrait), Leo listens in the foreground (back view, turned to her)
      otsShot(x, t, { bg: backdrop('room', 560, { blur: 10 }), speaker: 'kai', listener: 'leo', side: 'L', st: { expr: 'happy', mouth: 0.5 + 0.5 * Math.sin(t * 14), blink: blink(t, 1), breath: Math.sin(t * 1.7), tilt: 0.04 * Math.sin(t * 0.9) } });
      labelAt(x, 'over-the-shoulder: speaker front, listener back', 640, 46);
    },
    ots2(x, W, H_, t) { // reverse shot: Leo answers, Kai in the foreground from behind
      otsShot(x, t, { bg: backdrop('room', 560, { blur: 10 }), speaker: 'leo', listener: 'kai', side: 'R', st: { expr: 'focus', mouth: 0.4 + 0.4 * Math.sin(t * 12), blink: blink(t, 2), breath: Math.sin(t * 1.7) } });
      labelAt(x, 'reverse shot', 640, 46);
    },
    focus(x, W, H_, t) { // background NOT in the script: buildings + passing traffic out of focus, the people sharp
      const gy = 610, P = 210; x.drawImage(backdrop('night', gy, { blur: 12, pxm: P }), -60, -40, 1400, 800);
      const far = streetLane(gy, P, 'far'), near = streetLane(gy, P, 'near');
      soft(x, 10, (g) => { [['bus', '#f5c63c', 0.1, far, -1], ['car', '#3d6fb6', 0.0, near, 1], ['car', '#e5383b', 0.55, near, 1]].forEach(([k, c, o, L, dir], i) => { const v = 9 + i, d = t * v, span = 2400, X = ((o * span + dir * d * L.pxm) % span + span) % span - 560; vehicle(g, k, X, L.y, dir, d, t, L.pxm, c); }); });
      const PL = { x: 470, gy, h: hOf(CAST.leo, P), f: 1, lean: 0.03, drop: breath(t, 1), aF: { a: [0.5 + 0.15 * Math.sin(t * 3), 0.9] }, aB: { a: [-0.05, 0.25] } };
      const PZ = { x: 800, gy, h: hOf(CAST.zara, P), f: -1, lean: 0.03, drop: breath(t, 2), aB: { a: [-0.05, 0.25] } };
      const JL = rig(CAST.leo, PL), JZ = rig(CAST.zara, PZ); floorShadow(x, JL, gy); floorShadow(x, JZ, gy);
      person(x, CAST.leo, PL, stOf('leo', t, { look: [1, 0], expr: 'happy', mouth: 0.5 + 0.5 * Math.sin(t * 13), ph: 1 }), [0.8, -0.6], C.rimCool);
      person(x, CAST.zara, PZ, stOf('zara', t, { look: [-1, 0], expr: 'neutral', ph: 2 }), [-0.8, -0.6], C.rimCool);
      labelAt(x, 'background out of focus: not in the script', 640, 50);
    },
    acts(x, W, H_, t) { // ACTIVITIES (act()): sit on a chair, watch TV on the sofa, lean on a wall, drink, phone, read, walk, run
      bg(x, roomFloor('room4', C.warm, 5, GY4), 1, 0, 0); const pxm = 168, ch = CAST.kai, gy = [330, 662];
      const cells = [['sit', 110, 0], ['tv', 420, 0], ['lean', 760, 0], ['drink', 1080, 0], ['phone', 110, 1], ['read', 420, 1], ['walk', 760, 1], ['run', 1080, 1]];
      for (const [n, X, row] of cells) { const g0 = gy[row], P0 = { x: X, gy: g0, h: hOf(ch, pxm), f: 1, aF: { a: [0.1, 0.25] }, aB: { a: [-0.05, 0.2] }, hF: {}, hB: {} };
        if (n === 'sit') furniture(x, 'chair', 'side', X + 8, g0, pxm, { col: '#1fa39a' });
        if (n === 'tv') { furniture(x, 'sofa', 'side', X + 10, g0, pxm, { col: '#c8323a' }); decor(x, 'tv', 'side', X + 175, g0, pxm, { f: -1 }); }
        if (n === 'lean') { x.fillStyle = '#5a3a5e'; x.fillRect(X - 52, g0 - 300, 26, 300); }
        const A = act(ch, P0, n, { pxm, dist: t * (n === 'run' ? 3 : 1.2), sip: 0.5 + 0.5 * Math.sin(t * 2) }), J = rig(ch, A.P);
        floorShadow(x, J, g0); person(x, ch, A.P, { look: n === 'phone' || n === 'read' ? [0.4, 0.8] : [0.4, 0], expr: n === 'run' ? 'focus' : 'happy', blink: 0, hair: { th: 0, th2: 0 } }); if (A.prop) A.prop(x, J);
        x.font = F(800, 22); x.textAlign = 'center'; x.fillStyle = C.white; x.fillText(n, X, g0 + 26); }
    },
    think(x, W, H_, t) { // THINKING WITHOUT THE BRAIN (thinkFx): bulb, gears, question marks, spark, dots, swirl
      bg(x, roomFloor('room4', C.warm, 5, GY4), 1, 0, 0); const ch = CAST.leo, names = ['bulb', 'gears', 'question', 'spark', 'dots', 'swirl'], P2 = { think: 'think', bulb: 'idea', spark: 'idea', question: 'scratch', dots: 'think', swirl: 'shrug', gears: 'think' };
      names.forEach((n, i) => { const X = 120 + i * 208, P0 = { x: X, gy: 640, h: 380, f: 1, aF: { a: [0.1, 0.25] }, aB: { a: [-0.05, 0.2] }, hF: {}, hB: {} }, P = pose(ch, P0, P2[n], 1, { t }), J = rig(ch, P);
        floorShadow(x, J, 640); person(x, ch, P, { look: [0.3, -0.8], expr: n === 'swirl' || n === 'question' ? 'worry' : n === 'bulb' || n === 'spark' ? 'happy' : 'focus', blink: 0, hair: { th: 0, th2: 0 } });
        thinkFx(x, 2, n, J.hc, J.r, { t0: 0 }); x.font = F(800, 22); x.textAlign = 'center'; x.fillStyle = C.white; x.fillText(n, X, 668); });
    },
    titles(x, W, H_, t) { // TITLE (locked): numbered intro title wrapped onto lines, and the fixed top-left header
      bg(x, roomFloor('room4', C.warm, 5, GY4), 1, 0, 0);
      titleIntro(x, 3, { text: 'Finding Reasons to Be Physically Close to You', num: 1, t0: 0, at: [430, 330], hl: ['physically', 'close'] });
      headerPill(x, titleText(1, 'Finding Reasons to Be Physically Close to You'));
      pill(x, 1000, 620, 'header: always here, same font', 24, { dot: C.mint });
    },
    poses(x, W, H_, t) { // POSE LIBRARY (pose()): 13 poses on one character, so nobody just walks back and forth
      bg(x, roomFloor('room4', C.warm, 5, GY4), 1, 0, 0); const ch = CAST.kai, names = Object.keys(POSES);
      names.forEach((n, i) => { const X = 70 + (i % 7) * 190, gy = i < 7 ? 330 : 660, P0 = { x: X, gy, h: 250, f: 1, lean: 0.02, drop: 0, aF: { a: [0.1, 0.25] }, aB: { a: [-0.05, 0.2] }, hF: {}, hB: {} };
        const P = pose(ch, P0, n, 1, { t }), J = rig(ch, P); floorShadow(x, J, gy);
        person(x, ch, P, { look: n === 'idea' || n === 'think' ? [0.3, -0.8] : [0.3, 0], expr: { cheer: 'happy', thumbs: 'happy', wave: 'happy', worry: 'worry', shrug: 'worry', think: 'focus', scratch: 'focus', idea: 'happy' }[n] || 'neutral', blink: 0, hair: { th: 0, th2: 0 } });
        x.font = F(800, 22); x.textAlign = 'center'; x.fillStyle = C.white; x.fillText(n, X, gy + 26); });
    },
    front(x, W, H_, t) { // FRONT SHOT: the character turns to the camera and talks to the viewer (background blurred)
      frontShot(x, t, { bg: roomFloor('room4', C.warm, 5, GY4), id: 'kai', st: { expr: 'happy', mouth: 0.4, blink: 0 } });
      pill(x, 1040, 120, 'Front shot: talking to you', 26, { dot: C.amber });
    },
    focus3(x, W, H_, t) { // SUBJECT FOCUS: no people, a BIG brain, thought sparks, labels with lines, push-in on a part
      focusShot(x, 3, { subj: 'brain', t0: 0, think: true, labels: [{ text: 'Thinking', at: [-0.5, -0.3], side: 'L', y: 230, t: 0 }, { text: 'Memory', at: [0.08, 0.18], side: 'R', y: 330, t: 0 }, { text: 'Balance', at: [0.37, 0.37], side: 'R', y: 470, t: 0 }] });
    },
    focus2(x, W, H_, t) { // the cars ARE the subject: road and traffic sharp, only the buildings stay soft
      const gy = 610, P = 210, M = stageModel(gy, P), keep = stageModel(gy + 40, P).y(M.dp + ST.kerb + ST.road + ST.pave) - 2;
      x.drawImage(backdrop('night', gy, { blur: 12, pxm: P, keep }), -60, -40, 1400, 800);
      const far = streetLane(gy, P, 'far'), near = streetLane(gy, P, 'near'), d = t * 10;
      vehicle(x, 'bus', 1500 - ((d * far.pxm) % 2600), far.y, -1, d, t, far.pxm, '#f5c63c'); vehicle(x, 'car', ((d * near.pxm) % 2200) - 300, near.y, 1, d, t, near.pxm, '#3d6fb6');
      const oy = gy + 60, PO = { x: 1080, gy: oy, h: hOf(CAST.omar, M.at(oy)), f: -1, lean: 0.04, drop: breath(t, 3), aF: { a: [Math.PI * 0.5, 0.05] }, aB: { a: [-0.05, 0.25] } };
      const JO = rig(CAST.omar, PO); floorShadow(x, JO, oy); person(x, CAST.omar, PO, stOf('omar', t, { look: [-1, -0.1], expr: 'focus', ph: 3 }), [-0.8, -0.6], C.rimCool);
      labelAt(x, 'cars in the script: kept sharp', 640, 50);
    },
    body(x, W, H_, t) {
      x.fillStyle = '#1e1832'; x.fillRect(0, 0, W, H_); for (let i = 0; i < 6; i++) { x.fillStyle = 'rgba(255,255,255,0.04)'; rr(x, 20 + (i % 3) * 420, 20 + Math.floor(i / 3) * 350, 400, 330, 20); x.fill(); }
      heart(x, 220, 190, 120, t); lungs(x, 640, 200, 110, 0.5 + 0.5 * Math.sin(t * TAU / 4)); brain(x, 1060, 180, 140, 1);
      eyeball(x, 240, 540, 95, [Math.sin(t) * 0.6, 0], 0.35 + 0.2 * Math.sin(t * 0.7)); intestines(x, 640, 520, 120, t); cell(x, 1060, 530, 130, t);
      [['heart', 220, 315], ['lungs', 640, 315], ['brain', 1060, 315], ['eyeball', 220, 665], ['intestines', 640, 665], ['cell', 1060, 665]].forEach(([s, X, Y]) => labelAt(x, s, X, Y));
    },
  };

  // CAST SHEET (the style's hero frame): every character, whole body, side by side at true relative heights
  function castSheet(x, W, H_, t, CS = CAST, ttl = 'The cast') {
    bg(x, roomFloor('room4', C.warm, 5, GY4), 1, 0, 0);
    const ids = Object.keys(CS), gap = (1280 - 60) / ids.length;
    ids.forEach((id, i) => {
      const ch = CS[id], X = 30 + gap * (i + 0.5), wv = id === 'ben' ? 0.5 + 0.5 * Math.sin(t * 6) : 0;
      const st = stOf(id, t, { look: [0.2, 0], expr: i % 3 === 0 ? 'happy' : 'neutral', ph: i * 0.7 });
      const P = { x: X, gy: GY4, h: hOf(ch, 255), f: i < ids.length / 2 ? 1 : -1, lean: 0.02, drop: breath(t, i), aB: { a: [-0.05, 0.25] }, aF: id === 'ben' ? { a: [Math.PI + 0.3, -0.3 + 0.3 * wv] } : { a: [0.12, 0.3] }, hF: {} };
      const J = rig(ch, P); floorShadow(x, J, GY4); person(x, ch, P, st, P.f > 0 ? [0.8, -0.6] : [-0.8, -0.6]);
      x.font = F(800, 28); x.textAlign = 'center'; x.fillStyle = C.white; x.fillText(ch.name, X, GY4 + 40);
      x.font = F(700, 28); x.fillStyle = 'rgba(255,240,225,0.88)'; x.fillText(ch.tag[0], X, GY4 + 72); x.fillText(ch.tag[1], X, GY4 + 102);
    });
    title(x, ttl, 640, 70, 56, C.white);
  }

  // CAMERA ZOOM (immersive): every beat slowly pushes in or pulls out (alternating), and key moments get a short punch.
  // Amounts stay small (3-7 %) so text never leaves the safe area; the header and the finish are not zoomed.
  const ZOOM = [[0, 3, 'in', 0.13, 820, 620], [3, 7, 'out', 0.05, 300, 240], [7, 10.5, 'in', 0.09, 480, 420], [10.5, 13.6, 'out', 0.06, 330, 330], [13.6, 17.6, 'in', 0.05, 640, 360], [17.6, 20.6, 'in', 0.04, 560, 330], [20.6, 24.2, 'in', 0.08, 900, 560]]; // zoom on EVERY beat: [start, end, in|out, amount, aim x, aim y]
  function camAim(t) { for (const q of ZOOM) if (t >= q[0] && t < q[1]) return [q[4] || 640, q[5] || 390]; const q = ZOOM[ZOOM.length - 1]; return [q[4] || 640, q[5] || 390]; }
  function camZoom(t) {
    let z = 1; for (const [a, b, d, k] of ZOOM) if (t >= a && t < b) { const u = eio(seg(t, a, b)); z = d === 'in' ? 1 + k * u : 1 + k * (1 - u); }
    if (t >= ZOOM[ZOOM.length - 1][1]) z = 1 + ZOOM[ZOOM.length - 1][3];
    for (const h of [CATCH, TL.fT, TL.jump + 0.45]) if (t > h) z += 0.03 * Math.exp(-(t - h) * 5) * Math.sin(Math.min(1, (t - h) * 12) * Math.PI * 0.5);
    return z;
  }

  // ---------- transitions ----------
  // slide push: the next shot pushes the old one off sideways (two drawImage-free redraws, clipped)
  function push(x, W, H_, t, t0, t1, A_, B_) {
    const u = eio(seg(t, t0, t1)), off = u * W;
    x.save(); x.beginPath(); x.rect(0, 0, W - off, H_); x.clip(); x.translate(-off, 0); A_(); x.restore();
    x.save(); x.beginPath(); x.rect(W - off, 0, off, H_); x.clip(); x.translate(W - off, 0); B_(); x.restore();
    x.fillStyle = 'rgba(255,214,160,0.6)'; x.fillRect(W - off - 3, 0, 6, H_);
  }

  // ---------- finishing: dust in the light, vignette, film grain (all cached / tiny) ----------
  let FIN = null;
  function finTex() {
    if (FIN) return FIN;
    const vig = H.layer(1280, 720), vg = vig.getContext('2d');
    H.vignette(vg, 1280, 720, 0.55, '18,8,30');
    const S = 256, tile = H.layer(S, S), tc = tile.getContext('2d'), img = tc.createImageData(S, S), d = img.data, r = H.rng(4242);
    for (let i = 0; i < d.length; i += 4) { const v = 128 + (r() + r() + r() - 1.5) * 92; d[i] = d[i + 1] = d[i + 2] = v; d[i + 3] = 255; }
    tc.putImageData(img, 0, 0);
    FIN = { vig, tile }; return FIN;
  }
  function finish(x, W, H_, t) {
    const r = H.rng(31);
    x.fillStyle = 'rgba(255,220,170,0.4)';
    for (let i = 0; i < 36; i++) { const sp = r.range(6, 20), px = (r.range(0, W + 200) + t * sp) % (W + 200) - 100, py = (r.range(0, H_) - t * sp * 0.4 + H_ * 4) % H_, s = r.range(1, 3.2); x.globalAlpha = 0.3 + 0.3 * Math.sin(t * 2 + i); x.beginPath(); x.arc(px, py, s, 0, TAU); x.fill(); }
    x.globalAlpha = 1;
    const T = finTex(); x.drawImage(T.vig, 0, 0, W, H_);
    const f = Math.floor(t * 24), pat = x.createPattern(T.tile, 'repeat'); pat.setTransform(new DOMMatrix().translateSelf((f * 73) % 256, (f * 151) % 256));
    x.save(); x.globalCompositeOperation = 'overlay'; x.globalAlpha = 0.1; x.fillStyle = pat; x.fillRect(0, 0, W, H_); x.restore();
  }
  function header(x, a) { const hb = headerBox(); pill(x, hb.cx, hb.cy, TITLE, 28, { a, dot: C.amber, group: 'title' }); }
  // ---------- TRANSITIONS between shots (never a plain hard cut in a conversation) ----------
  // trans(x, t, t0, t1, kind, A, B): A(ctx) = the outgoing shot, B(ctx) = the incoming one, both drawn at the same t.
  //  'push'  slide-push: B pushes A off sideways (dir +1 = B from the right)
  //  'fade'  cross-fade (B is drawn into a buffer only during the transition, then laid over A with rising alpha)
  //  'wipe'  a soft diagonal wipe moving across
  //  'whip'  whip pan: both shots slide fast with motion streaks, eased in and out
  //  'zoom'  zoom-through: A scales up and fades into B, which settles from slightly larger
  let TRB = null;
  function trBuf() { if (!TRB) TRB = H.layer(1280, 720); const g = TRB.getContext('2d'); g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, 1280, 720); return g; }
  function trans(x, t, t0, t1, kind, A, B, dir = 1) {
    const u = eio(seg(t, t0, t1)), W = 1280, H_ = 720;
    if (kind === 'push' || kind === 'whip') {
      const off = u * W * dir, whip = kind === 'whip';
      x.save(); x.translate(-off, 0); A(x); x.restore();
      x.save(); x.translate(W * dir - off, 0); B(x); x.restore();
      if (whip) { const sp = Math.sin(u * Math.PI); x.fillStyle = `rgba(255,236,210,${0.18 * sp})`; const r = H.rng(77); for (let i = 0; i < 14; i++) x.fillRect(0, r.range(0, H_), W, r.range(2, 7) * (1 + sp * 3)); }
      else { x.fillStyle = 'rgba(255,214,160,0.6)'; x.fillRect(dir > 0 ? W - off - 3 : -off - 3, 0, 6, H_); }
      return;
    }
    if (kind === 'zoom') { x.save(); const z = 1 + 0.25 * u; x.translate(640, 360); x.scale(z, z); x.translate(-640, -360); A(x); x.restore(); const g = trBuf(); g.translate(640, 360); g.scale(1.12 - 0.12 * u, 1.12 - 0.12 * u); g.translate(-640, -360); B(g); x.save(); x.globalAlpha = u; x.drawImage(TRB, 0, 0); x.restore(); return; }
    A(x); const g = trBuf(); B(g);
    x.save();
    if (kind === 'wipe') { const e = -300 + u * (W + 600); x.beginPath(); x.moveTo(-400, 0); x.lineTo(e - 180, 0); x.lineTo(e + 180, H_); x.lineTo(-400, H_); x.closePath(); x.clip(); /* B = the part LEFT of the moving edge */ x.drawImage(TRB, 0, 0); x.restore(); x.save(); x.strokeStyle = 'rgba(255,230,200,0.7)'; x.lineWidth = 6; x.beginPath(); x.moveTo(e - 180, 0); x.lineTo(e + 180, H_); x.stroke(); }
    else { x.globalAlpha = u; x.drawImage(TRB, 0, 0); }
    x.restore();
  }

  // ---------- CONVERSATION DEMO (talk(), talkSound(), TK): side view and front views mixed, moving transitions ----------
  // Beats alternate the SIDE (3/4) whole-body two-shot with the FRONT over-the-shoulder shot / reverse shot, so the
  // conversation is not always seen from the front; every change of shot is a transition (push, fade, wipe, whip).
  const TK = { D: 0 }, TKS = [ // shot, time span, who talks (spans), expressions, zoom, transition INTO this shot
    { k: 'side', t: [0, 3.0], sp: 'kai', talk: [[0.3, 2.7]], ex: { kai: () => 'happy', leo: () => 'neutral' }, z: ['in', 0.05] },
    { k: 'ots', t: [3.0, 5.6], sp: 'kai', ls: 'leo', side: 'L', talk: [[3.3, 5.3]], ex: { kai: (t) => t < 4.4 ? 'focus' : 'happy' }, z: ['in', 0.05], tr: ['push', 0.5, 1] },
    { k: 'ots', t: [5.6, 8.2], sp: 'leo', ls: 'kai', side: 'R', talk: [[5.9, 6.9], [7.2, 7.9]], ex: { leo: (t) => t < 7.05 ? 'focus' : 'shock' }, z: ['out', 0.05], tr: ['fade', 0.45] },
    { k: 'side', t: [8.2, 10.6], sp: 'kai', talk: [[8.5, 10.1]], ex: { kai: () => 'happy', leo: (t) => t < 9.2 ? 'shock' : 'happy' }, z: ['in', 0.06], tr: ['whip', 0.45, -1], bub: 8.9 },
  ];
  TK.D = TKS[TKS.length - 1].talk[0][1] + 2; TK.cuts = TKS.slice(1).map((b) => [b.t[0], b.t[0] + b.tr[1]]);
  const tkHead = { kai: headRig((t) => [0.12 * Math.sin(t * 1.3) + (t > 8.2 && t < 8.7 ? 0.2 * Math.sin(seg(t, 8.2, 8.7) * Math.PI) : 0), 0.04 * Math.sin(t * 2.1)], { len: 2.6 }), leo: headRig((t) => [t > 7.05 && t < 7.6 ? -0.25 * Math.sin(seg(t, 7.05, 7.6) * Math.PI) : 0.05 * Math.sin(t * 1.1), 0], { len: 0.6 }) };
  const tkTalk = (b, t) => b.talk.some(([p, q]) => t > p && t < q), tkMouth = (t) => 0.45 + 0.4 * Math.sin(t * 15) * Math.sin(t * 6.3 + 1);
  function tkSide(x, t, b) { // whole-body 3/4 two-shot: Kai (left, facing right) talks to Leo (right, facing left)
    bg(x, roomFloor('room', C.warm, 3, GY), 1.02, 0, 0);
    const ids = [['kai', 400, 1], ['leo', 880, -1]], J = {};
    for (const [id, X, f] of ids) {
      const ch = CAST[id], s = tkHead[id](t), tk = b.sp === id && tkTalk(b, t), g = Math.sin(t * 2.4);
      const P = { x: X, gy: GY, h: hOf(ch, PXM), f, lean: 0.04 + s.x * 0.12, drop: breath(t, id === 'kai' ? 0 : 2), aB: { a: [-0.05, 0.25] },
        aF: tk ? { a: [0.95 + 0.18 * g, 0.85 - 0.25 * g] } : { a: [0.1, 0.3] }, hF: tk ? { m: 'open' } : {} };
      J[id] = rig(ch, P); floorShadow(x, J[id], GY);
      person(x, ch, P, { s, look: [f * 0.8, -0.05], expr: (b.ex[id] || (() => 'neutral'))(t), blink: blink(t, id === 'kai' ? 0.4 : 1.7), mouth: tk ? tkMouth(t) : 0, hair: { th: s.th, th2: s.th2 } }, f > 0 ? [0.8, -0.6] : [-0.8, -0.6]);
    }
    return J;
  }
  function tkOts(x, t, b) {
    const tk = tkTalk(b, t), nod = b.sp === 'leo' && t > 7.05 ? -0.06 * Math.exp(-(t - 7.05) * 3) : 0.02 * Math.sin(t * 2.1) * (tk ? 1 : 0.3);
    otsShot(x, t, { bg: backdrop('room', 560, { blur: 10 }), speaker: b.sp, listener: b.ls, side: b.side, drift: 1,
      st: { expr: b.ex[b.sp](t), mouth: tk ? tkMouth(t) : 0, blink: blink(t, b.sp === 'kai' ? 0.4 : 1.7), breath: Math.sin(t * 1.7), nod, tilt: 0.03 * Math.sin(t * 0.8) }, lb: { nod: 0 } });
  }
  // one shot with its own slow zoom (and the punch on a bubble); returns the side-shot skeletons for placing a bubble
  function tkShot(x, t, b) {
    const u = eio(seg(t, b.t[0], b.t[1])); let z = b.z[0] === 'in' ? 1 + b.z[1] * u : 1 + b.z[1] * (1 - u);
    if (b.bub && t > b.bub) z += 0.03 * Math.exp(-(t - b.bub) * 5) * Math.sin(Math.min(1, (t - b.bub) * 12) * Math.PI * 0.5);
    const fx = b.k === 'ots' ? 640 + (b.side === 'R' ? -1 : 1) * 170 : 640, fy = b.k === 'ots' ? 300 : 360;
    x.save(); x.translate(fx, fy); x.scale(z, z); x.translate(-fx, -fy);
    const J = b.k === 'side' ? tkSide(x, t, b) : (tkOts(x, t, b), null);
    x.restore();
    return { J, z, fx, fy };
  }
  function talk(ctx, W, H_, t) {
    const x = ctx; QC.text.length = 0; QC.people.length = 0; t = Math.min(t, TK.D + 60);
    let i = TKS.findIndex((e) => t < e.t[1]); if (i < 0) i = TKS.length - 1;
    const b = TKS[i];
    let R;
    if (i > 0 && t < b.t[0] + b.tr[1]) { const a = TKS[i - 1]; trans(x, t, b.t[0], b.t[0] + b.tr[1], b.tr[0], (g) => tkShot(g, t, a), (g) => { R = tkShot(g, t, b); }, b.tr[2] || 1); }
    else R = tkShot(x, t, b);
    if (b.bub && t > b.bub && R && R.J) { // speech bubble beside Kai's head, its tail at her mouth (screen space: through the zoom)
      const J = R.J.kai, mz = [R.fx + (J.hc[0] + J.f * 0.45 * J.r - R.fx) * R.z, R.fy + (J.hc[1] + 0.42 * J.r - R.fy) * R.z];
      speechBubble(x, mz, 640, 150, '0.25 s!', 48, seg(t, b.bub, b.bub + 0.3));
    }
    finish(x, W, H_, t);
  }
  function talkSound(k) { k.play('pop', TKS[3].bub, { gain: 0.7 }); TKS.slice(1).forEach((b) => k.play('whoosh', b.t[0], { gain: b.tr[0] === 'fade' ? 0.12 : 0.28, minor: true })); }

  registerStyle({
    id: 'golden-hour-figures',
    name: 'Golden-Hour Flat Figures',
    category: 'Popular Explainer Looks',
    description: 'Flat 2D whole-body characters (a cast of ten, age 8 to 76, plus a library of locations, animals, vehicles and organs) with different brown skin tones, simple flat faces, black hair in a different style per person and full chunky clothes, standing on the floor of soft golden-hour rooms with baked bokeh; warm rim light, two-block hands (finger block + slim thumb), physics-true motion (gravity, springs, swinging hair, planted feet), glowing rounded numbers, dark glass labels, dust and film grain.',
    motion: 'Physics-led: things fall and people jump at g, heads and hands move on damped springs, ponytails swing as pendulums driven by the head, feet stay planted while knees bend (IK); gentle push-ins, slow motion with a real-time clock, slide-push transitions.',
    fonts: ['800 76px "Baloo 2"', '700 28px "Baloo 2"', '800 30px "Baloo 2"'],
    duration: 5, frameT: 4.6, readsPixels: false,
    draw(ctx, W, H_, t) { castSheet(ctx, W, H_, t); finish(ctx, W, H_, t); },
    // reference pages for the library (locations, crowd, animals, sea, vehicles, ocean, body): sheets[name](ctx, W, H_, t)
    sheets: SHEETS,
    talk, talkSound, talkDuration: TK.D, talkCuts: TK.cuts,

    explainerDuration: TL.D,
    cuts: TL.cuts,
    explainerNote: 'Whole-body staging explains it: a young woman waves and asks, two people do a slow-motion ruler drop (gravity is the clock, d = 1/2 g t^2), she points at the formula card, seven testers from age 8 to 76 catch rulers released by clamp stands, and she jumps for the answer.',
    explainer(ctx, W, H_, t) {
      const x = ctx; QC.text.length = 0; QC.people.length = 0;
      t = Math.min(t, TL.D + 60); // past the end the last scene simply holds (the renderer may run longer for a long voiceover)
      // each scene keeps its OWN zoom: during a transition the outgoing scene holds the zoom it ended on (zt), so its size
      // never jumps when the next zoom beat starts
      const Z = (fn, zt = t) => (g) => { const z = camZoom(zt), [ax, ay] = camAim(zt); g.save(); g.translate(ax, ay); g.scale(z, z); g.translate(-ax, -ay); fn(g, W, H_, t); g.restore(); };
      // scene changes are moving transitions (wipe, fade, push, zoom-through), each listed in TL.cuts
      const SC = [[0, exHook], [TL.drop[0], exDrop, 'wipe', 0.5], [TL.formula[0], exFormula, 'fade', 0.5], [TL.ages[0], exAges, 'push', 0.45], [TL.brain[0], exBrain, 'zoom', 0.5], [TL.front[0], exFront, 'push', 0.45], [TL.take[0], exTake, 'fade', 0.5]];
      let i = SC.length - 1; while (i > 0 && t < SC[i][0]) i--;
      if (i > 0 && t < SC[i][0] + SC[i][3]) trans(x, t, SC[i][0], SC[i][0] + SC[i][3], SC[i][2], Z(SC[i - 1][1], SC[i][0] - 1e-3), Z(SC[i][1]));
      else Z(SC[i][1])(x);
      // the title: spoken big (free position), then it flies into the LOCKED top-left header and stays there to the end
      titleFly(x, t, { text: TITLE, num: TITLE_NUM, t0: TL.titleWords, at: [410, 210], px: 76, hl: ['fast'], fly: TL.header });
      finish(x, W, H_, t);
    },

    explainerSound(k) {
      const D = TL.D, hz = k.hz;
      const peak = (t0, t1) => { for (let i = 0; i <= 200; i++) if (back(i / 200) >= 1) return t0 + ((t1 - t0) * i) / 200; return t1; };
      const pluck = (t, n, g = 1, p = 0) => { const f = hz(n); k.tone(t, { f, dur: 0.8, gain: 0.18 * g, a: 0.003, pan: p, verb: 0.3 }); k.tone(t, { f: f * 3, dur: 0.12, gain: 0.03 * g, a: 0.001, pan: p }); };
      k.bed('room', 0, D, { gain: 0.8 });
      k.music('pad', 0, D, { bpm: 72, gain: 0.4, chords: [['F3', 'A3', 'C4', 'E4'], ['D3', 'F3', 'A3', 'C4'], ['Bb2', 'D3', 'F3', 'A3'], ['C3', 'E3', 'G3', 'Bb3']] });
      ['How', 'fast', 'are', 'you?'].forEach((w, i) => k.play('tick', TL.titleWords + i * 0.2 + 0.15, { f: 3000 + i * 300, gain: 0.5, minor: true }));
      pluck(peak(TL.titleWords + 0.2, TL.titleWords + 0.6), 'A4', 0.8);
      k.play('swish', TL.header[0], { gain: 0.5, pan: -0.5, minor: true });
      k.play('click', TL.drop[0], { gain: 0.4, minor: true });
      k.play('pop', peak(TL.slowmo, TL.slowmo + 0.3), { f: 700, gain: 0.4, pan: -0.6, minor: true });
      k.play('click', TL.tDrop, { f: 1200, gain: 0.6, pan: 0.2 });                                  // hand lets go
      k.noise(TL.tDrop, { dur: CATCH - TL.tDrop, color: 'pink', filter: 'bandpass', f: [[0, 300], [CATCH - TL.tDrop, 1600]], q: 0.8, gain: 0.22, a: 0.8 }); // the fall speeds up
      for (let tt = TL.tDrop + 0.08; tt < CATCH; tt += 0.12) k.play('count', tt, { gain: 0.45, pan: 0.6, minor: true });
      k.play('slap', CATCH, { gain: 1.0, pan: 0.2 }); k.play('thud', CATCH + 0.02, { f: 120, gain: 0.4 });
      pluck(CATCH + 0.06, 'C5', 0.9, 0.6);
      k.play('pop', peak(TL.cmLabel, TL.cmLabel + 0.35), { f: 560, gain: 0.5, pan: 0.4 }); pluck(TL.cmLabel + 0.1, 'E5', 0.7, 0.4);
      k.play('whoosh', TL.formula[0] + 0.05, { dur: 0.35, gain: 0.4, minor: true });
      [[TL.fLine, 0.6], [TL.fD, 0.45], [TL.fG, 0.45]].forEach(([tt, d]) => k.play('stroke', tt, { material: 'marker', dur: d, gain: 0.5, pan: 0.4, minor: true }));
      k.play('ding', TL.fT, { f: 'A5', gain: 0.8, pan: 0.3 });
      k.play('whoosh', TL.ages[0], { dur: 0.45, gain: 0.6 });
      for (let i = 0; i < 7; i++) k.play('pop', TL.aIn + 0.3 + i * 0.06, { f: 480 + i * 70, gain: 0.4, minor: true });
      k.play('click', TL.aDrop, { f: 1600, gain: 0.5 }); // the clamps open
      FACT.ages.forEach(([, , rt], i) => { k.play('slap', TL.aDrop + rt * 4, { gain: 0.5, pan: -0.75 + i * 0.25 }); pluck(TL.aDrop + rt * 4 + 0.05, ['C5', 'D5', 'G5', 'A5', 'E5', 'D5', 'C5'][i % 7], 0.45, -0.75 + i * 0.25); });
      k.play('success', TL.aBest + 0.1, { gain: 0.6, pan: 0.2 });
      k.play('whoosh', TL.brain[0], { dur: 0.45, gain: 0.6 });                                   // cut away to the brain
      [[TL.bSee, 'C5'], [TL.bDecide, 'E5'], [TL.bMove, 'G5']].forEach(([tt, n], i) => { k.play('pop', peak(tt, tt + 0.4), { f: 520 + i * 90, gain: 0.5, pan: i === 0 ? -0.5 : 0.5 }); pluck(tt + 0.08, n, 0.7, i === 0 ? -0.5 : 0.5); });
      k.play('sparkle', TL.brain[0] + 0.6, { n: 5, gain: 0.4, minor: true }); k.play('ding', TL.bDecide + 0.05, { f: 'A5', gain: 0.6 });
      k.play('whoosh', TL.front[0], { dur: 0.4, gain: 0.5, minor: true });                        // back to the character, front shot
      k.play('pop', peak(TL.fText, TL.fText + 0.4), { f: 640, gain: 0.5, pan: 0.4 }); pluck(TL.fText + 0.08, 'A4', 0.8, 0.4);
      k.play('whoosh', TL.take[0], { dur: 0.4, gain: 0.5, minor: true });
      const fl = (2 * Math.sqrt(2 * G * 0.22)) / G; k.play('swish', TL.jump, { gain: 0.5, minor: true }); k.play('thud', TL.jump + fl, { f: 110, gain: 0.55 }); // jump take-off and landing (flight time from g)
      pluck(peak(TL.line1, TL.line1 + 0.4), 'F4', 0.9);
      const l2 = peak(TL.line2, TL.line2 + 0.45);
      ['F3', 'C4', 'F4', 'A4', 'C5', 'G5'].forEach((n, i) => k.tone(l2 + i * 0.012, { f: n, type: 'triangle', dur: 1.6, gain: 0.07, a: 0.02, verb: 0.35, filter: 'lowpass', f2: 2000, pan: (i / 5 - 0.5) * 0.6 }));
      k.play('impact', l2, { gain: 0.5 }); k.play('sparkle', l2 + 0.1, { n: 6, gain: 0.7 });
    },
  });
}
```

FINAL CHECKLIST: READ THIS LAST, BEFORE YOU ANSWER (the video is not done until every line is true)
1. I get an MP4 FILE I can download: either the MP4 you rendered with make-mp4.cjs (attach it), or, if you can't run it, the HTML with the working "⬇ Export MP4" button and one line telling me to open it, add my MP3 and click it. The page has that button in every case.
2. My uploaded MP3 / WAV / M4A is IN the MP4 (passed to make-mp4.cjs, or loaded in the button's file input), never left out or cut; the video lasts until it ends + 2 s.
3. The sound effects are in the MP4 (`scoreSound` with the SOUND kit: whooshes on transitions, pops on labels, the event sounds on their frames), under my voice.
4. SHOT RULES are met: zoom or camera move on every beat, varied shot sizes and angles, front shots, a new pose every beat, a focus shot for every subject explained, props and place details.
5. Words on screen: only the title, numbers / percentages and phrases I gave come from the script; everything else is your own short relatable phrase tied to the topic and the pose.
6. Every object is flat shapes with no lines inside, the right silhouette and a fitting palette.
7. The title: "<number>. <title>" (no #, no :), full text, Baloo 2, intro wrapped and never cut; the header pill sits at the exact locked top-left place (x 24, y 44, 28 px) from the fly to the last frame.
8. Scenes differ: a different activity in each (sit, lean, drink, tv, phone, read, walk, run…), thinking shown with varied devices, not the brain every time.
9. The renderer's checks pass (no overlaps, no off-screen text, no covered faces, no jumps, no flashes).
