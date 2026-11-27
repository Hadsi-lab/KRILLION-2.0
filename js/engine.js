/*
 * Game engine: round state machine. Pure state — no DOM, no storage.
 * Phases: "question" -> "feedback" -> (next) "question" ... -> "done"
 * Mode-specific behaviour (questions, prompts, answer checking) lives in modes.js.
 */
window.SS = window.SS || {};

SS.engine = {
  QUESTIONS_PER_ROUND: 7,
  TIME_LIMIT_MS: 25000,

  newRound(modeId) {
    return {
      mode: modeId,
      questions: SS.modes[modeId].pickQuestions(this.QUESTIONS_PER_ROUND),
      index: 0,
      answers: [],
      phase: "question"
    };
  },

  mode(round) { return SS.modes[round.mode]; },
  currentQuestion(round) { return round.questions[round.index]; },
  prompt(round, q) { return this.mode(round).prompt(q); },

  /** Returns { status: "invalid", message } (player may try again) or { status: "scored", answer }. */
  submit(round, text) {
    if (round.phase !== "question") return null;
    const q = this.currentQuestion(round);
    const result = this.mode(round).check(q, text);
    if (result.status !== "ok") return { status: "invalid", message: result.message };
    const { points } = SS.scoring.score(result.tier);
    const answer = { q, input: text, answer: result.title, tierIndex: result.tier, points };
    round.answers.push(answer);
    round.phase = "feedback";
    return { status: "scored", answer };
  },

  timeout(round) {
    if (round.phase !== "question") return null;
    const answer = { q: this.currentQuestion(round), input: null, answer: null, tierIndex: null, points: 0, timedOut: true };
    round.answers.push(answer);
    round.phase = "feedback";
    return answer;
  },

  next(round) {
    if (round.phase !== "feedback") return;
    round.index += 1;
    round.phase = round.index >= this.QUESTIONS_PER_ROUND ? "done" : "question";
  },

  total(round) { return round.answers.reduce((sum, a) => sum + a.points, 0); },
  maxTotal() { return this.QUESTIONS_PER_ROUND * SS.scoring.MAX_POINTS; },
  rarestExample(round, q) { return this.mode(round).rarestExample(q); }
};
