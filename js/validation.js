/*
 * Answer validation: decides whether typed text is a song by the given artist.
 * Knows nothing about scoring — it returns the matched song and its tier index.
 */
window.SS = window.SS || {};

(function () {
  function normalize(text) {
    return String(text)
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .toLowerCase()
      .replace(/&/g, " and ")
      .replace(/['’‘`]/g, "")
      .replace(/[^a-z0-9 ]+/g, " ")
      .trim()
      .replace(/^(the|a|an) /, "")
      .replace(/\s+/g, "");
  }

  // Keys a title can be matched by: full title, title without "(...)",
  // and the bracketed part itself when it is a substantial phrase.
  function keysForTitle(title) {
    const keys = new Set([normalize(title)]);
    const stripped = title.replace(/\([^)]*\)/g, " ").trim();
    if (stripped) keys.add(normalize(stripped));
    const inner = (title.match(/\(([^)]*)\)/g) || []).map((m) => normalize(m.slice(1, -1)));
    inner.filter((k) => k.length >= 8).forEach((k) => keys.add(k));
    keys.delete("");
    return [...keys];
  }

  function levenshtein(a, b) {
    if (a === b) return 0;
    const prev = Array.from({ length: b.length + 1 }, (_, i) => i);
    for (let i = 1; i <= a.length; i++) {
      let diag = prev[0];
      prev[0] = i;
      for (let j = 1; j <= b.length; j++) {
        const tmp = prev[j];
        prev[j] = Math.min(prev[j] + 1, prev[j - 1] + 1, diag + (a[i - 1] === b[j - 1] ? 0 : 1));
        diag = tmp;
      }
    }
    return prev[b.length];
  }

  // Allowed typos grow with answer length; short titles must be exact.
  function allowedTypos(len) {
    if (len <= 4) return 0;
    if (len <= 8) return 1;
    return 2;
  }

  /** items: [{ title, tier, aliases? }] -> searchable entries */
  function buildIndex(items) {
    const entries = [];
    items.forEach((item) => {
      [item.title, ...(item.aliases || [])].forEach((name) =>
        keysForTitle(name).forEach((key) => entries.push({ key, item })));
    });
    return entries;
  }

  /** Returns the matched item, or null. Exact key first, then closest typo match. */
  function matchIndex(entries, input) {
    const key = normalize(input);
    if (key.length < 1) return null;
    const exact = entries.find((e) => e.key === key);
    if (exact) return exact.item;
    let best = null;
    for (const e of entries) {
      const limit = allowedTypos(Math.min(e.key.length, key.length));
      if (limit === 0 || Math.abs(e.key.length - key.length) > limit) continue;
      const d = levenshtein(key, e.key);
      if (d <= limit && (!best || d < best.d)) best = { d, e };
    }
    return best ? best.e.item : null;
  }

  const songIndexCache = {};
  function songIndex(artistId) {
    if (songIndexCache[artistId]) return songIndexCache[artistId];
    const artist = SS.ARTISTS_BY_ID[artistId];
    const items = [];
    artist.tiers.forEach((songs, tier) =>
      songs.forEach((title) => items.push({ title, tier, aliases: (artist.aliases || {})[title] || [] })));
    return (songIndexCache[artistId] = buildIndex(items));
  }

  SS.validation = {
    normalize,
    buildIndex,
    matchIndex,
    /** Song mode: returns { title, tier } or null if not a known song by the artist. */
    match(artistId, input) {
      const item = matchIndex(songIndex(artistId), input);
      return item ? { title: item.title, tier: item.tier } : null;
    }
  };
})();
