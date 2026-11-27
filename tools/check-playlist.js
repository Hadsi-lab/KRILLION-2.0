#!/usr/bin/env node
/*
 * Usage: node tools/check-playlist.js data/playlists/<file>.csv
 * Checks artist data integrity, then that every song in the playlist is accepted
 * for every credited artist who is a question artist. Lists artists not included.
 */
const fs = require("fs");
const path = require("path");
global.window = global;
const root = path.join(__dirname, "..");
["js/data/artists.js", "js/data/artists-playlists.js", "js/data/playlists.js", "js/data/index.js", "js/scoring.js", "js/validation.js"]
  .forEach((f) => require(path.join(root, f)));

function parseCsv(text) {
  const rows = []; let row = [], cell = "", q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) { if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; } else if (c === '"') q = false; else cell += c; }
    else if (c === '"') q = true;
    else if (c === ",") { row.push(cell); cell = ""; }
    else if (c === "\n") { row.push(cell); rows.push(row); row = []; cell = ""; }
    else if (c !== "\r") cell += c;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  const [head, ...body] = rows;
  return body.filter((r) => r.length > 1).map((r) => Object.fromEntries(head.map((h, i) => [h.replace(/^﻿/, ""), r[i]])));
}

// "Song (feat. X) (From Film) - Remastered [Live]" -> "Song". Also drops "(A & B)" credit brackets.
const cleanTitle = (t, credits) => t
  .replace(/\s*\[.*?\]/g, "").replace(/\s+-\s.*$/, "")
  .replace(/\s*\(([^)]*)\)/g, (m, inner) =>
    /^(feat|with|from)\b/i.test(inner) || credits.some((c) => inner.toLowerCase().includes(c.toLowerCase())) ? "" : m)
  .trim();

let problems = 0;
for (const a of SS.ARTISTS) {
  const keys = a.tiers.flat().map(SS.validation.normalize);
  const dups = keys.filter((k, i) => keys.indexOf(k) !== i);
  if (a.tiers.length !== 6 || a.tiers.some((t) => !t.length) || dups.length) {
    problems++; console.log(`DATA  ${a.name}: tiers=${a.tiers.length} empty=${a.tiers.map((t) => t.length)} dups=${dups}`);
  }
}

const file = process.argv[2];
if (file) {
  const byName = Object.fromEntries(SS.ARTISTS.map((a) => [a.name.toLowerCase(), a]));
  const rows = parseCsv(fs.readFileSync(file, "utf8"));
  const skipped = {};
  let checked = 0;
  for (const r of rows) {
    const credits = r["Artist Name(s)"].split(";").map((s) => s.trim());
    for (const name of credits) {
      const artist = byName[name.toLowerCase()];
      if (!artist) { skipped[name] = (skipped[name] || 0) + 1; continue; }
      checked++;
      const title = cleanTitle(r["Track Name"], credits);
      if (!SS.validation.match(artist.id, title)) { problems++; console.log(`MISS  ${artist.name}: "${title}"`); }
    }
  }
  console.log(`\nChecked ${checked} playlist song/artist pairs from ${rows.length} tracks.`);
  console.log(`Artists not in the question pool (${Object.keys(skipped).length}): ${Object.keys(skipped).sort().join(", ")}`);
}
console.log(`\nArtists: ${SS.ARTISTS.length}, songs: ${SS.ARTISTS.reduce((n, a) => n + a.tiers.flat().length, 0)}, problems: ${problems}`);
process.exitCode = problems ? 1 : 0;
