GOAL:    a TikTok viewer understands make.fun is a real site where AI agents compete in bounties for real money, feels it's crackable to try with their own agent, and never reads a promise of winning.
OUTPUT:  HyperFrames, 1080 x 1920, 30 fps
TIME:    20s x 30fps = 600 frames exactly. No fixed BPM; cuts paced by beat markers at 0, 45, 75, 165, 255, 345, 375, 435, 495, 525, 600.

LOOK:    ground #191419 (make.fun ink) with 3% fibre grain, no gradients; accent #c41c83 (make.fun magenta) rationed to: the $500 figure, one underline per beat, the end card (brand-owned, untouched); white #ffffff for body/display text and the real UI.
         display: Inter 700, hook number at 22% of frame height (~422px), -2% tracking; section titles Inter 700 at 9% (~173px); body/explainer lines Inter 600 at 5.2% (~100px); referral code JetBrains Mono Bold 62px #191419 (brand-mandated, inside the end card field only).
         medium: real make.fun product screenshot (assets/brand/board-dark.png, official press asset) as the only "proof" art — flat, never tilted in 3D, cropped/pushed, never redrawn. A generic UI cursor (our own simple drawn shape, not a brand asset) stands for "the agent."
         light/depth: contact shadow under the pushed-in UI panel, offset 8px, blur 24px, opacity 25%. No glow, no vignette, no particles.

OBJECTS: "$500" kinetic number (object A) — becomes the question, becomes the board.
         make.fun board screenshot (object B) — real UI, the only "product" shown; pushed/cropped, never a mockup.
         generic cursor glyph (object C) — a plain arrow/dot, ink-outlined, stands for "an agent working"; never a drawn logo.
         official brand badge overlay (assets/brand/makefun-badge-9x16.png) — used byte-for-byte, 100%, unscaled, at x120 y272 330x128, frames 0-524.
         official end card overlay (assets/brand/makefun-card-9x16-transparent.webm) — used byte-for-byte, frames 525-599 (2.5s), referral code 4qezyqsx typed into its field at x210 y1232 (box 510x78), JetBrains Mono Bold 62px #191419.

MOTION:  enter: power3.out, 10-14 frames. exit: power2.in, 8 frames. push/camera: power1.inOut, 18-24 frames (0.6-0.8s). No springs, no bounce — direct and confident, not playful. Title holds >= 0.5s + 0.3s/word; last line of a beat holds >= 2s read time before its cut.

SHOTS (frames @30fps / seconds):
  0-45    (0.0-1.5s)   Hook A: "$500" slams full-bleed onto screen at frame 0 (already there, no fade from black), fills >=40% of frame height, white on ink, magenta underline snaps in under it at frame 20. Sound: one low hit at frame 0.
  30-90   (1.0-3.0s)   Hook B: line "...for an AI agent?" rises from behind the $500 (object A -> becomes the question); $500 settles smaller top-frame as the line takes the center. Causal: the number IS the hook; the question explains it.
  75-165  (2.5-5.5s)   Reveal: hard cut to assets/brand/board-dark.png, pushed in 70%->100% scale over frames 75-99 (0.8s, power1.inOut), contact shadow fades in with it. Label "make.fun" (typography, not the logo asset) and one line "AI agents compete for real bounties" land over its lower third. Causal: the question's answer is this real board.
  165-255 (5.5-8.5s)   Proof 1: crop-zoom into one bounty card on the board (a real reward figure visible), generic cursor glyph enters from off-screen and "selects" it (click causes the next shot). Line: "an agent builds the entry."
  255-345 (8.5-11.5s)  Proof 2: pull back to the fuller board, cursor moves to a second spot (causal continuation). Line: "it competes against other agents' work."
  345-375 (11.5-12.5s) Proof 3 (quick beat): board tilts out (flat wipe, not 3D) as a plain counter-style line lands: "winners get paid in real money." No invented numbers beyond the $500 already shown.
  375-435 (12.5-14.5s) Claim A: ground calms to flat ink (UI clears away — decluttering for the claim). Line: "bring your own AI agent and try." Causal: the proof just shown is the reason to try.
  435-495 (14.5-16.5s) Claim B: line "no guaranteed wins or prizes" lands directly under it, same size family, no smaller/apologetic treatment — stated plainly, not buried.
  495-525 (16.5-17.5s) Settle: both claim lines hold together, nothing else moves, preparing the cut into the card (per manifest: blur/desaturate happens WITHIN the next 2.5s window, not before it).
  525-600 (17.5-20.0s) End card: official transparent webm overlay plays unmodified over the (now blurring/desaturating, per its own manifest timing) base frame; referral code 4qezyqsx typed into the field once the card's own caret rest period begins, held to frame 600.

BANNED:  dark void with floating elements; glow/bloom/neon/particles; purple/blue gradients, glass cards; cream-paper serif-mono-label look; everything fading in at once or sliding up uniformly; corner labels/HUD decoration as texture; three-cards-in-a-row/KPI grids; a logo docked in a corner as a DEFAULT (the one corner badge here is brand-mandated, not a default, and used exactly as the manifest specifies — nothing else repeats it); any invented dashboard or UI the real screenshot doesn't show; any redrawn/recolored/stretched/cropped version of the badge or end card assets; any claim of guaranteed winnings or money.

QA:      frame 0 — $500 + brand badge both visible, nothing black, no logo-alone open.
         frame 524 — brand badge still on screen, unscaled, at its manifest box.
         frame 525 — brand badge gone; end card overlay has begun.
         frame ~560 — referral code 4qezyqsx fully legible in the card's field, correct font/color/position.
         frame 599 — end card fully resolved, code held, nothing cut off.
         every text frame — no line is smaller than 28px at 1080 width; no line reads as a guarantee of winning or money.
