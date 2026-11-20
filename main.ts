// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry is the video itself: a 33-second vertical GTA 6 clip cut from
// Rockstar's Grand Theft Auto VI Trailer 2 (trailer 2, 128.0s-158.0s of the
// official upload), cropped to 9:16 with a blurred fill, a "GTA 6 IS COMING /
// MAY 26 2026" hook up front, and make.fun's pitch on screen and in voiceover
// ("Make clips like this with AI and earn money on make.fun") plus a 3-second
// end card carrying make.fun/bounty/gta6-clipper-01. The clip was rendered
// with ffmpeg in the session that built this repository; see README.md.
//
// All this program has to do is copy VIDEO.json from the repository root to
// /output/VIDEO.json, where the gate reads it. That is all the program has
// to do: the house reads the video's views from YouTube, not from anything
// this program writes. Nothing this program writes about the video is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
