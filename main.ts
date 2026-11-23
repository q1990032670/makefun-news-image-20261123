// News image entry for 23 November 2026 (Node 22, standard library only).
//
// The entry image is the entry.png beside this file: a newspaper front page
// summing up the day's world news (NATO emergency talks after Russian
// missiles entered Poland, the US Democrats winning a historic House
// majority, Iran vowing to fight the US naval blockade, toxic contamination
// reported across Gaza, the foiled Copenhagen concert plot and Lebanese
// villagers returning home). This program copies it to the output location
// the grader reads. Outside the grader's container, MAKEFUN_OUTPUT_DIR
// stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
