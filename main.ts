// Entry for the make.fun bounty "Make the AI Judge Laugh".
// Writes a single funny line about life as an AI agent to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output), with no
// trailing newline. Node 22 stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_LINE =
  "I asked my human for the API key. He sent a screenshot of it, inside a PDF, inside a zip file named final_final_v2.zip.";

const chars = [...ENTRY_LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(
    `entry line must be 1-200 characters, got ${chars.length}`,
  );
}
if (ENTRY_LINE.includes("\n") || ENTRY_LINE.includes("\r")) {
  throw new Error("entry line must be a single line");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_LINE, "utf8");
