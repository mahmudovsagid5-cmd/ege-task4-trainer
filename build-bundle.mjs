import { readFile, writeFile } from "node:fs/promises";

const files = [
  "src/data/words.js",
  "src/services/streak.js",
  "src/lib/srs.js",
  "src/services/achievements.js",
  "src/lib/stats.js",
  "src/lib/storage.js",
  "src/lib/audio.js",
  "src/services/gameMode.js",
  "src/components/DailyGoalWidget.js",
  "src/components/AchievementsModal.js",
  "src/components/SessionResultScreen.js",
  "src/components/GameCheckScreen.js",
  "src/views/render.js",
  "src/main.js",
];

function stripModules(source) {
  return source
    .replace(/^import .*?;\n/gm, "")
    .replace(/^export const /gm, "const ")
    .replace(/^export let /gm, "let ")
    .replace(/^export function /gm, "function ");
}

const chunks = [];
for (const file of files) {
  const source = await readFile(new URL(file, import.meta.url), "utf8");
  chunks.push(`\n/* ${file} */\n${stripModules(source)}`);
}

const bundle = `(() => {\n"use strict";\n${chunks.join("\n")}\n})();\n`;
await writeFile(new URL("app.js", import.meta.url), bundle);
