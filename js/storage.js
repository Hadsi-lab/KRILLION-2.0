/* Player profile & progress persistence (localStorage). */
window.SS = window.SS || {};

(function () {
  const KEY = "snuffleupagus-songs.v1";

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function save(data) {
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { /* storage unavailable */ }
  }
  function today() {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  }

  SS.storage = {
    getStats() {
      const s = load().stats || {};
      const isToday = s.day === today();
      return {
        totalPoints: s.totalPoints || 0,
        roundsPlayed: s.roundsPlayed || 0,
        bestScore: s.bestScore || 0,
        roundsToday: isToday ? s.roundsToday || 0 : 0,
        bestToday: isToday ? s.bestToday || 0 : 0,
        day: today()
      };
    },

    /** Records a finished round, clears the in-progress round, returns updated stats. */
    recordRound(score) {
      const data = load();
      const s = this.getStats();
      s.totalPoints += score;
      s.roundsPlayed += 1;
      s.bestScore = Math.max(s.bestScore, score);
      s.roundsToday += 1;
      s.bestToday = Math.max(s.bestToday, score);
      data.stats = s;
      delete data.current;
      save(data);
      return s;
    },

    saveRound(round) { const d = load(); d.current = round; save(d); },
    loadRound() {
      const r = load().current;
      return r && r.mode && SS.modes[r.mode] ? r : null; // ignore rounds saved by older versions
    },
    clearRound() { const d = load(); delete d.current; save(d); }
  };
})();
