#!/usr/bin/env node
/*
 * Usage: node tools/build.js
 * Bundles index.html, its stylesheet and scripts into one self-contained file:
 * dist/snuffleupagus-songs.html (works when opened directly or hosted anywhere).
 */
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
const read = (f) => fs.readFileSync(path.join(root, f), "utf8");

let html = read("index.html");
html = html.replace(/<link rel="stylesheet" href="([^"]+)"\s*\/?>/g, (_, href) => `<style>\n${read(href)}\n</style>`);
html = html.replace(/<script src="([^"]+)"><\/script>/g, (_, src) =>
  `<script>\n/* ${src} */\n${read(src).replace(/<\/script/gi, "<\\/script")}\n</script>`);

const out = path.join(root, "dist", "snuffleupagus-songs.html");
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, html);
console.log(`Wrote ${path.relative(root, out)} (${(html.length / 1024).toFixed(0)} KB)`);
