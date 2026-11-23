// SPDX-License-Identifier: MIT
// Two Lines of Morning Light — make.fun bounty entry
// u-gudril-cool-two-lines-of-morning-light-ade94fc5
//
// Writes one original two-line micro poem about light and morning to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output). Node 22, stdlib only,
// no network, fully deterministic: the same poem every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM: string =
  "Morning light slips under the door, a thin blade,\n" +
  "and the floor gives it somewhere to stand.";

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
