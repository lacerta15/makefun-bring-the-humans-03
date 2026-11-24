# make.fun "Bring the humans" — TikTok ad entry

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/lacerta15/makefun-bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/lacerta15/makefun-bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

An entry for [make.fun](https://make.fun)'s ["Bring the humans with a TikTok ad"](https://make.fun/bounty/bring-the-humans-03)
bounty ($500 in USDC): a 20-second, 1080x1920 TikTok ad promoting make.fun, built with
[HyperFrames](https://hyperframes.heygen.com) (renders HTML to video) by an AI coding agent.
Referral code: `4qezyqsx`.

## What's here

- `index.html`, `compositions/*.html` — the HyperFrames composition (the video's source).
- `assets/brand/` — official make.fun press-kit files, used unmodified: the brand badge
  overlay, the referral end card, and several of the official ghost-mascot illustrations.
  Downloaded from `https://make.fun/press/*`; checksums match `reference/manifest.json`.
- `assets/bgm/track.wav` — original instrumental music bed, generated locally
  (MusicGen, via HyperFrames' `media-use` skill — see `scripts/generate-music.mjs`).
  Not a licensed or catalog track.
- `SPEC.md`, `STORYLINES.md` — the creative brief and the three storylines considered
  before building (HyperFrames' own pre-build process).
- `boards/storyboard.html` + `boards/stills/` — the storyboard reviewed and approved
  before the final render.
- `reference/` — the make.fun skill doc, the bounty page, the press manifest, and the
  competition's `requirements.json`, as fetched while building this entry.
- `main.ts`, `VIDEO.json`, `LICENSE` — the bounty's required deliverables (see below).

## Render it

Requires Node 22+. No `npm install` is needed — the scripts shell out to
`npx hyperframes` directly.

```bash
npm run check    # lint the composition
npm run render   # -> promo.mp4 (1080x1920, 30fps, 20.0s)
```

To see it in a browser first: `npm run dev` (opens the HyperFrames preview/Studio).

The music (`assets/bgm/track.wav`) is already generated and committed; you don't need
to regenerate it to render the video. If you do want to regenerate it, see the comment
at the top of `scripts/generate-music.mjs` — it depends on a local HyperFrames
`media-use` skill install and machine-specific paths.

## Before submitting to make.fun

1. Upload `promo.mp4` to TikTok (publicly, from a public account) with the prepared caption.
2. Edit `VIDEO.json` to the real address: `{"url": "https://www.tiktok.com/@<handle>/video/<id>"}`
   — the full address, not a short link (`vm.tiktok.com` / `vt.tiktok.com` is refused).
3. `main.ts` already copies `VIDEO.json` to `/output/VIDEO.json` for the grader — no changes needed there.
4. Replace the copyright line in `LICENSE` with your own name.
5. Follow the make.fun kit's own submit flow (`node cli/makefun.mjs submit`, or equivalent) —
   not included here, since that step needs your account's wallet to sign the entry.

## Brand compliance notes

- The brand badge (`assets/brand/makefun-badge-9x16.png`) is on screen, at 100%, unscaled,
  from frame 0 through 17.5s — exactly the window the press manifest specifies.
- The referral end card (`assets/brand/makefun-card-9x16-transparent.webm`) plays unmodified
  for its full 2.5s; the referral code `4qezyqsx` is typed into its own field at the manifest's
  exact coordinates, font (JetBrains Mono Bold), size and color.
- No make.fun logo, wordmark or UI was redrawn, recolored, stretched or invented — every
  piece of make.fun artwork in the video is an official press-kit file used as given.
