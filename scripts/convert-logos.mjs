#!/usr/bin/env node
/**
 * Optional: use sharp to convert TIF/PNG in project root to webp in public/branding.
 * Run: npm run branding:convert
 */
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
let sharp;
try {
  sharp = require("sharp");
} catch {
  console.warn("sharp not available; skip conversion.");
  process.exit(0);
}

import { readdir, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outDir = join(root, "public", "branding");
await mkdir(outDir, { recursive: true });
const files = await readdir(root);
const images = files.filter((f) => /\.(tif|tiff|png|jpg|jpeg)$/i.test(f));
for (const f of images) {
  const base = f.replace(/\.[^.]+$/, "").toLowerCase().replace(/\s+/g, "-");
  const dest = join(outDir, `${base}.webp`);
  await sharp(join(root, f)).webp({ quality: 85 }).toFile(dest);
  console.log("Wrote", dest);
}
if (images.length === 0) {
  console.log("No source images in project root.");
}
