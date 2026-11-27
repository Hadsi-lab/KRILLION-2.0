/*
 * Game modes. Each mode supplies its questions, prompt text and answer checking;
 * the engine, scoring and UI are shared.
 */
window.SS = window.SS || {};

(function () {
  function shuffle(list) {
    const a = list.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  SS.modes = {
    song: {
      id: "song",
      name: "Guess the Rarest Song",
      hudWord: "Song",
      placeholder: "Type a song title…",
      pickQuestions: (n) => shuffle(SS.ARTISTS.map((a) => a.id)).slice(0, n),
      prompt: (q) => ({ label: "Name a song by", heading: SS.ARTISTS_BY_ID[q].name }),
      check(q, input) {
        const m = SS.validation.match(q, input);
        if (m) return { status: "ok", title: m.title, tier: m.tier };
        return { status: "invalid", message: `We don't know "${input}" as a song by ${SS.ARTISTS_BY_ID[q].name}. Try another!` };
      },
      rarestExample(q) {
        const rare = SS.ARTISTS_BY_ID[q].tiers[5];
        return rare[Math.floor(Math.random() * rare.length)];
      }
    },

    singer: {
      id: "singer",
      name: "Guess the Rarest Singer",
      hudWord: "Singer",
      placeholder: "Type a singer's name…",
      // Mostly pop: each pop category once, extra pop questions to fill POP_SHARE, then other categories.
      pickQuestions(n) {
        const ids = SS.singers.CATEGORIES.map((c) => c.id);
        const pop = ids.filter((id) => id.endsWith("pop"));
        const other = shuffle(ids.filter((id) => !id.endsWith("pop")));
        const popCount = Math.max(pop.length, Math.round(n * 0.6));
        const picks = shuffle(pop).slice(0, popCount);
        while (picks.length < popCount) picks.push(pop[Math.floor(Math.random() * pop.length)]);
        return shuffle([...picks, ...other.slice(0, n - popCount)]);
      },
      prompt(q) {
        const c = SS.singers.category(q);
        const heading = c.label.charAt(0).toUpperCase() + c.label.slice(1);
        return { label: `Name ${c.article}`, heading };
      },
      check(q, input) {
        const m = SS.singers.match(q, input);
        if (m.status === "ok") return m;
        const label = SS.singers.category(q).label;
        const message = m.status === "wrong-category"
          ? `${m.title} doesn't count as ${SS.singers.category(q).article} ${label}. Try another!`
          : `We don't know "${input}" as ${SS.singers.category(q).article} ${label}. Try another!`;
        return { status: "invalid", message };
      },
      rarestExample: (q) => SS.singers.rarestExample(q)
    }
  };
})();
