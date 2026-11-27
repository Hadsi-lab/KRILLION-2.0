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

  score(tierIndex) {
    const tier = this.TIERS[tierIndex];
    return { tier, points: tier.points };
  },

  /** 0..1 — how far the background sinks for a given score. */
  depthFraction(points) {
    return Math.max(0, Math.min(1, points / this.MAX_POINTS));
  }
};
