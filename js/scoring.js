/* Rarity/scoring engine: maps a rarity tier (0 = most common, 5 = rarest) to points. */
window.SS = window.SS || {};

SS.scoring = {
  TIERS: [
    { id: "elmo",    name: "Elmo",    word: "Awful",       points: 10 },
    { id: "monster", name: "Monster", word: "Meh",         points: 15 },
    { id: "noodle",  name: "Noodle",  word: "Normal",      points: 30 },
    { id: "grouchy", name: "Grouchy", word: "Great",       points: 60 },
    { id: "abby",    name: "Abby",    word: "Awesome",     points: 85 },
    { id: "snuffy",  name: "Snuffy",  word: "Spectacular", points: 100 }
  ],
  MAX_POINTS: 100,

  /*
   * Share of answers in each tier, as cumulative cut-offs by popularity rank.
   * Shares never grow from Elmo (most answers, easiest) to Snuffy (fewest, hardest):
   * 19% Elmo, 19% Monster, 18% Noodle, 18% Grouchy, 14% Abby, 12% Snuffy.
   */
  TIER_CUTS: [0.19, 0.38, 0.56, 0.74, 0.88, 1],

  /** Tier for the item at popularity rank `index` (0 = most popular) out of `count`. */
  tierForRank(index, count) {
    return this.TIER_CUTS.findIndex((c) => (index + 1) / count <= c + 1e-9);
  },

  score(tierIndex) {
    const tier = this.TIERS[tierIndex];
    return { tier, points: tier.points };
  },

  /** 0..1 — how far the background sinks for a given score. */
  depthFraction(points) {
    return Math.max(0, Math.min(1, points / this.MAX_POINTS));
  }
};
