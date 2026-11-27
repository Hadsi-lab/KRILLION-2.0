/*
 * Answer validation: matches typed text against song titles or singer names
 * (case, punctuation, aliases, small typos, partial names). Knows nothing about scoring.
 */
window.SS = window.SS || {};

(function () {
  // Lowercase words without accents/punctuation; drops a leading "the/a/an".
  function words(text) {
    return String(text)
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .toLowerCase()
      .replace(/&/g, " and ")
      .replace(/['’‘`]/g, "")
      .replace(/[^a-z0-9 ]+/g, " ")
      .trim()
      .replace(/^(the|a|an) /, "")
      .split(/\s+/)
      .filter(Boolean);
  }

  function normalize(text) {
    return words(text).join("");
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

  /**
   * items: [{ title, tier, aliases? }], most popular first -> searchable entries.
   * entries.words holds each name split into words, for partial-name matching.
   */
  function buildIndex(items) {
    const entries = [];
    entries.words = [];
    items.forEach((item) => {
      [item.title, ...(item.aliases || [])].forEach((name) => {
        keysForTitle(name).forEach((key) => entries.push({ key, item }));
        const stripped = name.replace(/\([^)]*\)/g, " ");
        entries.words.push({ tokens: words(stripped), item });
      });
    });
    return entries;
  }

  /*
   * Partial match: the typed words are the start of a name ("Michael" -> Michael Jackson,
   * "Bohemian" -> Bohemian Rhapsody), or with mode "name", a surname ("Swift").
   * Returns the first (most popular) match.
   */
  function partialMatch(entries, input, mode) {
    const typed = words(input);
    if (typed.join("").length < 3) return null;
    for (const w of entries.words) {
      if (w.tokens.length <= typed.length) continue;
      const prefix = typed.every((t, i) => t === w.tokens[i]);
      const surname = mode === "name" && typed.length === 1 && w.tokens[w.tokens.length - 1] === typed[0];
      if (prefix || surname) return w.item;
    }
    return null;
  }

  /**
   * Returns the matched item, or null. Exact key first, then (if options.partial is
   * "prefix" or "name") a partial name, then the closest typo match.
   */
  function matchIndex(entries, input, options = {}) {
    const key = normalize(input);
    if (key.length < 1) return null;
    const exact = entries.find((e) => e.key === key);
    if (exact) return exact.item;
    const partial = options.partial ? partialMatch(entries, input, options.partial) : null;
    if (partial) return partial;
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
  // The data lists songs from most to least popular (grouped by tier); the scored
  // tier comes from each song's rank, using the shared tier shares in scoring.js.
  function songItems(artistId) {
    const artist = SS.ARTISTS_BY_ID[artistId];
    const titles = artist.tiers.flat();
    return titles.map((title, i) => ({
      title, tier: SS.scoring.tierForRank(i, titles.length), aliases: (artist.aliases || {})[title] || []
    }));
  }

  function songIndex(artistId) {
    if (songIndexCache[artistId]) return songIndexCache[artistId];
    return (songIndexCache[artistId] = buildIndex(songItems(artistId)));
  }

  SS.validation = {
    normalize,
    buildIndex,
    matchIndex,
    songItems,
    /** Song mode: returns { title, tier } or null if not a known song by the artist. */
    match(artistId, input) {
      const item = matchIndex(songIndex(artistId), input, { partial: "prefix" });
      return item ? { title: item.title, tier: item.tier } : null;
    }
  };
})();
