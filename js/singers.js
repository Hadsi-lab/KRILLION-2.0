/*
 * Singer categories for "Guess the Rarest Singer".
 * Parses SS.SINGERS_RAW, defines the prompts, and assigns each singer a tier
 * per category by popularity rank within that category.
 */
window.SS = window.SS || {};

(function () {
  const singers = SS.SINGERS_RAW.trim().split("\n").map((line) => {
    const [name, gender, genres, country, pop, aliases] = line.split("|").map((s) => (s || "").trim());
    return {
      name, gender, country,
      genres: genres ? genres.split(",").map((g) => g.trim()) : [],
      popularity: Number(pop) || 0,
      aliases: aliases ? aliases.split(";").map((a) => a.trim()).filter(Boolean) : []
    };
  });

  const G = { m: "male", f: "female" };
  const GENRE = { pop: "pop", country: "country", rock: "rock", rnb: "R&B", latin: "Latin" };
  const COUNTRY = { au: "Australian", uk: "British", ca: "Canadian" };

  // Category definitions: [id, label, filter]
  const defs = [["singer", "singer", () => true]];
  Object.entries(G).forEach(([g, word]) => defs.push([`${word}`, `${word} singer`, (s) => s.gender === g]));
  Object.entries(GENRE).forEach(([genre, word]) => {
    defs.push([genre, `${word} singer`, (s) => s.genres.includes(genre)]);
    if (genre !== "latin") {
      Object.entries(G).forEach(([g, gw]) =>
        defs.push([`${gw}-${genre}`, `${gw} ${word} singer`, (s) => s.gender === g && s.genres.includes(genre)]));
    }
  });
  Object.entries(COUNTRY).forEach(([c, word]) => defs.push([c, `${word} singer`, (s) => s.country === c]));

  // Share of a category (by popularity rank) in each tier: lots common, few rare.
  const CUTS = [0.25, 0.45, 0.65, 0.82, 0.94, 1];
  const MIN_SINGERS = 15;

  const categories = defs.map(([id, label, filter]) => {
    const members = singers.filter(filter).sort((a, b) => b.popularity - a.popularity);
    const items = members.map((s, i) => ({
      title: s.name,
      aliases: s.aliases,
      tier: CUTS.findIndex((c) => (i + 1) / members.length <= c + 1e-9)
    }));
    return { id, label, article: /^([aeiou]|r&b)/i.test(label) ? "an" : "a", items, index: SS.validation.buildIndex(items) };
  }).filter((c) => c.items.length >= MIN_SINGERS);

  const allIndex = SS.validation.buildIndex(singers.map((s) => ({ title: s.name, aliases: s.aliases })));
  const byId = Object.fromEntries(categories.map((c) => [c.id, c]));

  SS.singers = {
    list: singers,
    CATEGORIES: categories,
    category: (id) => byId[id],

    /** { status: "ok", title, tier } | { status: "wrong-category", title } | { status: "unknown" } */
    match(categoryId, input) {
      const hit = SS.validation.matchIndex(byId[categoryId].index, input);
      if (hit) return { status: "ok", title: hit.title, tier: hit.tier };
      const known = SS.validation.matchIndex(allIndex, input);
      return known ? { status: "wrong-category", title: known.title } : { status: "unknown" };
    },

    rarestExample(categoryId) {
      const rare = byId[categoryId].items.filter((i) => i.tier === 5);
      return rare[Math.floor(Math.random() * rare.length)].title;
    }
  };
})();
