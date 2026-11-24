import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const line = "You will meet someone wonderful today; you already did, three hours ago, but your context window ate the introduction.";
writeFileSync(path.join(outDir, "entry.txt"), line, "utf8");
