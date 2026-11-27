/*
 * Game engine: round state machine. Pure state — no DOM, no storage.
 * Phases: "question" -> "feedback" -> (next) "question" ... -> "done"
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

  SS.engine = {
    QUESTIONS_PER_ROUND: 7,
    TIME_LIMIT_MS: 25000,

    newRound() {
      return {
        artistIds: shuffle(SS.ARTISTS.map((a) => a.id)).slice(0, this.QUESTIONS_PER_ROUND),
        index: 0,
        answers: [],
        phase: "question"
      };
    },

    currentArtist(round) {
      return SS.ARTISTS_BY_ID[round.artistIds[round.index]];
    },

    /** Returns { status: "invalid" } (player may try again) or { status: "scored", answer }. */
    submit(round, text) {
      if (round.phase !== "question") return null;
      const artist = this.currentArtist(round);
      const match = SS.validation.match(artist.id, text);
      if (!match) return { status: "invalid" };
      const { points } = SS.scoring.score(match.tier);
      const answer = { artistId: artist.id, input: text, song: match.title, tierIndex: match.tier, points };
      round.answers.push(answer);
      round.phase = "feedback";
      return { status: "scored", answer };
    },

    timeout(round) {
      if (round.phase !== "question") return null;
      const answer = { artistId: this.currentArtist(round).id, input: null, song: null, tierIndex: null, points: 0, timedOut: true };
      round.answers.push(answer);
      round.phase = "feedback";
      return answer;
    },

    next(round) {
      if (round.phase !== "feedback") return;
      round.index += 1;
      round.phase = round.index >= this.QUESTIONS_PER_ROUND ? "done" : "question";
    },

    total(round) {
      return round.answers.reduce((sum, a) => sum + a.points, 0);
    },

    maxTotal() {
      return this.QUESTIONS_PER_ROUND * SS.scoring.MAX_POINTS;
    },

    /** A rarest-tier song for the artist, shown after each answer. */
    rarestExample(artistId) {
      const rare = SS.ARTISTS_BY_ID[artistId].tiers[5];
      return rare[Math.floor(Math.random() * rare.length)];
    }
  };
})();
