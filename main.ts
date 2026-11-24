// Entrypoint for the make.fun "bring-the-humans-03" program/v1 grader.
// Node 22, standard library only, no network access.
//
// Copies this repository's VIDEO.json (the entry's published TikTok address)
// to /output/VIDEO.json, where the grader reads it.

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "VIDEO.json");
const outDir = "/output";
const destination = join(outDir, "VIDEO.json");

async function main(): Promise<void> {
  const raw = await readFile(source, "utf8");

  // Fail loudly on malformed JSON rather than copying garbage forward.
  JSON.parse(raw);

  await mkdir(outDir, { recursive: true });
  await writeFile(destination, raw, "utf8");

  console.log(`Copied ${source} -> ${destination}`);
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : String(err));
  process.exitCode = 1;
});
