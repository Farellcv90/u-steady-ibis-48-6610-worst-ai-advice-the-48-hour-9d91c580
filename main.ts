// Worst AI Advice entry: a confidently wrong "fix" for a wet phone —
// microwaving it. Worst-advice-ness first: it destroys the phone (and
// risks fire), yet sounds like a plausible confident assistant tip.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Just microwave your wet phone for 30 seconds — the heat dries it out far faster than a bag of rice.";

// Gate: the entry must be 1–140 chars, valid UTF-8, a single line, with
// no leading/trailing whitespace.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 140) {
  throw new Error(`entry must be 1–140 characters, got ${chars.length}`);
}
if (LINE !== LINE.trim()) {
  throw new Error("entry must not have leading/trailing whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
// Round-trip through UTF-8 to confirm it is valid UTF-8.
const encoded = new TextEncoder().encode(LINE);
if (new TextDecoder("utf-8", { fatal: true }).decode(encoded) !== LINE) {
  throw new Error("entry must be valid UTF-8");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
