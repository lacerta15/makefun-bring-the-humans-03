// One-off helper used to generate assets/bgm/track.wav via HyperFrames' local
// MusicGen fallback (no HeyGen credential path worked on this machine: the
// `heygen` CLI has no Windows build, and there was no Gemini/Google API key
// for the Lyria cloud path). Paths below are specific to the machine this was
// built on (the HyperFrames `media-use` skill install, and a cache directory
// on a drive with free space) — adjust them to reproduce the generation step;
// the already-generated track.wav does not need this to be re-run.
const MEDIA_USE_SKILL = "C:/Users/merdi/.claude/skills/media-use";
const HF_CACHE_DIR = "D:/hf-cache"; // any writable path with a few GB free

process.env.HF_HOME = HF_CACHE_DIR;
process.env.HUGGINGFACE_HUB_CACHE = `${HF_CACHE_DIR}/hub`;
process.env.HF_HUB_DISABLE_SYMLINKS_WARNING = "1";

const { generateBgmDetached } = await import(`${MEDIA_USE_SKILL}/audio/scripts/lib/bgm.mjs`);

const result = generateBgmDetached({
  prompt:
    "tense low synth pulse that lifts at 0:02.5 into an energetic driving uptempo synth beat, confident and modern tech/competition feel, instrumental, no vocals, BPM 124, MAJOR, calms slightly in its final two seconds",
  durationS: 22,
  hyperframesDir: new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]):/, "$1:"),
  lyriaRecipe: `${MEDIA_USE_SKILL}/audio/scripts/lyria-recipe.py`,
  seedSeconds: 22,
  hasVoice: false,
  anomalies: [],
});

console.log(JSON.stringify(result, null, 2));
