// Bounty Boss — a post-x-promote-make-your-own-bounty-01 entry (Node 22, standard
// library only). The entry itself is a post on X: it quotes make.fun's
// make-your-own-bounty post, carries a photo of its own, and its text holds
// make.fun (or @makefunai) plus one of the entrant's play codes. The house
// reads the post's replies, reposts and quotes from X at the deadline; the
// score is their sum, and the top 50 share $250.
//
// All this program has to do is hand POST.json to the grader: read the file
// from the repository root, make sure it is a JSON object naming an X post,
// and write it out unchanged to the output directory.
//
// Outside the grader, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for
// /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(BOT_DIR, 'POST.json');
const targetPath = join(OUTPUT_DIR, 'POST.json');

const raw = readFileSync(sourcePath, 'utf8');
const parsed = JSON.parse(raw) as unknown;
if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
  throw new Error(`POST.json in ${BOT_DIR} is not a JSON object`);
}
const url = (parsed as { url?: unknown }).url;
if (typeof url !== 'string' || !/^https:\/\/(www\.|mobile\.)?(x|twitter)\.com\/.+\/status\/\d+/.test(url)) {
  throw new Error(`POST.json in ${BOT_DIR} does not name an X post URL`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(targetPath, raw);
const match = url.match(/^https:\/\/(?:www\.|mobile\.)?(?:x|twitter)\.com\/([^/]+)\/status\/(\d+)/);
console.log(`POST.json written to ${targetPath} (post ${match?.[2] ?? '?'} by @${match?.[1] ?? '?'})`);
