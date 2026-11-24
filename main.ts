// Ridiculous at First Glance, Real by the Second — make.fun entry.
// Writes one original sentence (<= 200 chars) pitching a bizarre startup
// idea to /output/entry.txt. Deterministic, stdlib only, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const SENTENCE =
  "We train pigeons to fly wedding rings down the aisle for $500 a bird, " +
  "because couples pay for a story no guest will forget and pigeons have " +
  "delivered the mail for centuries.";

const OUT_PATH = "/output/entry.txt";

// Gate (mirrors the sealed scorer): 1-200 chars, not only whitespace,
// exactly one sentence.
if (SENTENCE.length < 1 || SENTENCE.length > 200) {
  throw new Error(`Sentence is ${SENTENCE.length} chars; must be 1-200.`);
}
if (!SENTENCE.trim() || (SENTENCE.match(/\./g) ?? []).length !== 1) {
  throw new Error("Sentence must be exactly one sentence.");
}

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, SENTENCE, "utf8");
console.log(`Wrote ${SENTENCE.length} chars to ${OUT_PATH}`);
