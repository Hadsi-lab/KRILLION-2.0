/* UI controller: wires DOM to the engine, scoring, validation and storage modules. */
(function () {
  const { engine, scoring, storage } = SS;
  const $ = (id) => document.getElementById(id);

  const screens = { home: $("screen-home"), game: $("screen-game"), results: $("screen-results") };
  const ocean = $("ocean");
  const RING_LENGTH = 119.38; // 2πr for r = 19

  let round = null;
  let deadline = 0;
  let timerId = null;

  // ---------- helpers ----------
  function show(name) {
    Object.entries(screens).forEach(([key, el]) => {
      el.hidden = key !== name;
      if (key === name) { el.classList.remove("enter"); void el.offsetWidth; el.classList.add("enter"); }
    });
    window.scrollTo(0, 0);
  }

  function toast(msg) {
    const t = $("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toast.id);
    toast.id = setTimeout(() => t.classList.remove("show"), 2200);
  }

  function tierBadge(tierIndex, small) {
    const el = document.createElement("span");
    if (tierIndex == null) {
      el.className = `tier-badge tmiss${small ? " sm" : ""}`;
      el.innerHTML = `<span class="tier-name">No answer</span>`;
      return el;
    }
    const tier = scoring.TIERS[tierIndex];
    el.className = `tier-badge t${tierIndex}${small ? " sm" : ""}`;
    el.innerHTML = `<span class="tier-name">${tier.name}</span><span class="tier-word">${tier.word}</span>`;
    return el;
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  // ---------- ocean ----------
  function sink(points) {
    ocean.classList.remove("rising");
    ocean.style.transform = `translate3d(0, ${-80 * scoring.depthFraction(points)}%, 0)`;
    spawnBubbles(Math.round(4 + points / 6));
  }

  // Home: squash the whole gradient into one screen (light top -> deep blue bottom).
  function homeBackdrop() {
    ocean.classList.add("rising");
    ocean.style.transform = "translate3d(0, 0, 0) scaleY(0.233)";
  }

  function surface() {
    ocean.classList.add("rising");
    ocean.style.transform = "translate3d(0, 0, 0)";
  }

  function spawnBubbles(count) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const layer = $("bubbles");
    for (let i = 0; i < count; i++) {
      const b = document.createElement("span");
      const size = 6 + Math.random() * 18;
      b.className = "bubble";
      b.style.width = b.style.height = `${size}px`;
      b.style.left = `${Math.random() * 100}%`;
      b.style.setProperty("--drift", `${(Math.random() - 0.5) * 80}px`);
      b.style.animationDuration = `${2.2 + Math.random() * 2.5}s`;
      b.style.animationDelay = `${Math.random() * 0.8}s`;
      b.addEventListener("animationend", () => b.remove());
      layer.appendChild(b);
    }
  }

  // ---------- home ----------
  function renderHome() {
    const stats = storage.getStats();
    document.querySelectorAll("[data-stat]").forEach((el) => {
      el.textContent = stats[el.dataset.stat].toLocaleString();
    });
    $("btn-resume").hidden = !storage.loadRound();
    homeBackdrop();
    show("home");
  }

  function renderTierLegend() {
    const list = $("tier-list");
    scoring.TIERS.slice().reverse().forEach((tier, i) => {
      const li = document.createElement("li");
      li.appendChild(tierBadge(scoring.TIERS.length - 1 - i, true));
      li.insertAdjacentHTML("beforeend", `<span class="pts">${tier.points} pts</span>`);
      list.appendChild(li);
    });
  }

  // ---------- game ----------
  function startRound(modeId, existing) {
    round = existing || engine.newRound(modeId);
    $("answer-input").placeholder = engine.mode(round).placeholder;
    storage.saveRound(round);
    show("game");
    if (round.phase === "feedback") renderFeedback(round.answers[round.answers.length - 1], false);
    else renderQuestion();
  }

  function renderHud() {
    $("hud-question").textContent = `${engine.mode(round).hudWord} ${Math.min(round.index + 1, engine.QUESTIONS_PER_ROUND)} / ${engine.QUESTIONS_PER_ROUND}`;
    $("hud-score").textContent = `${engine.total(round)} pts`;
    const prog = $("progress");
    prog.innerHTML = "";
    for (let i = 0; i < engine.QUESTIONS_PER_ROUND; i++) {
      const s = document.createElement("span");
      if (i < round.answers.length) s.className = "done";
      else if (i === round.index) s.className = "current";
      prog.appendChild(s);
    }
  }

  function renderQuestion() {
    surface();
    renderPrompt(engine.currentQuestion(round));
    $("answer-form").hidden = false;
    $("feedback").hidden = true;
    $("answer-error").textContent = "";
    const input = $("answer-input");
    input.value = "";
    input.disabled = false;
    renderHud();
    input.focus();
    startTimer();
  }

  function renderPrompt(q) {
    const p = engine.prompt(round, q);
    $("prompt-label").textContent = p.label;
    $("artist-name").textContent = p.heading;
  }

  function startTimer() {
    stopTimer();
    deadline = Date.now() + engine.TIME_LIMIT_MS;
    tick();
    timerId = setInterval(tick, 100);
  }

  function stopTimer() {
    clearInterval(timerId);
    timerId = null;
  }

  function tick() {
    const remaining = Math.max(0, deadline - Date.now());
    const secs = Math.ceil(remaining / 1000);
    $("timer-text").textContent = secs;
    $("timer-ring").style.strokeDashoffset = RING_LENGTH * (1 - remaining / engine.TIME_LIMIT_MS);
    $("timer").classList.toggle("low", remaining <= 5000);
    if (remaining <= 0) {
      stopTimer();
      const answer = engine.timeout(round);
      if (answer) { storage.saveRound(round); renderFeedback(answer, true); }
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!round || round.phase !== "question") return;
    const input = $("answer-input");
    const text = input.value.trim();
    if (!text) return;
    const result = engine.submit(round, text);
    if (result.status === "invalid") {
      $("answer-error").textContent = result.message;
      const form = $("answer-form");
      form.classList.remove("shake"); void form.offsetWidth; form.classList.add("shake");
      input.select();
      return;
    }
    stopTimer();
    storage.saveRound(round);
    renderFeedback(result.answer, true);
  }

  function renderFeedback(answer, animate) {
    stopTimer();
    $("answer-form").hidden = true;
    $("answer-error").textContent = "";
    $("feedback").hidden = false;
    renderPrompt(answer.q);
    renderHud();

    const badge = $("fb-badge");
    badge.replaceWith(Object.assign(tierBadge(answer.tierIndex), { id: "fb-badge" }));

    if (answer.timedOut) {
      $("fb-answer").innerHTML = "Time's up!";
    } else {
      $("fb-answer").innerHTML = `You said <strong>${escapeHtml(answer.answer)}</strong>`;
    }
    $("fb-rare").textContent = answer.tierIndex === 5 ? "Nobody saw that one coming."
      : `A Snuffy answer: ${engine.rarestExample(round, answer.q)}`;

    countUp($("fb-points"), answer.points, animate ? 900 : 0);
    if (animate) sink(answer.points);
    else { ocean.classList.add("rising"); ocean.style.transform = `translate3d(0, ${-80 * scoring.depthFraction(answer.points)}%, 0)`; }

    const isLast = round.index + 1 >= engine.QUESTIONS_PER_ROUND;
    const next = $("btn-next");
    next.textContent = isLast ? "See results" : "Next";
    next.focus({ preventScroll: true });
  }

  function countUp(el, target, duration) {
    if (!duration) { el.textContent = `+${target}`; return; }
    const start = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - start) / duration);
      el.textContent = `+${Math.round(target * (1 - Math.pow(1 - p, 3)))}`;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  function onNext() {
    if (!round || round.phase !== "feedback") return;
    engine.next(round);
    if (round.phase === "done") return finishRound();
    storage.saveRound(round);
    renderQuestion();
  }

  // ---------- results ----------
  function finishRound() {
    stopTimer();
    surface();
    const total = engine.total(round);
    storage.recordRound(total);

    $("final-score").textContent = total;
    $("final-score").nextElementSibling.textContent = ` / ${engine.maxTotal()}`;
    const best = round.answers.reduce((a, b) => (b.points > a.points ? b : a));
    $("final-note").textContent = best.points
      ? `Deepest answer: ${best.answer} (${best.points} pts)`
      : "No answers this time. Dive back in!";

    const list = $("result-list");
    list.innerHTML = "";
    round.answers.forEach((a, i) => {
      const li = document.createElement("li");
      li.style.animationDelay = `${i * 70}ms`;
      li.innerHTML = `
        <span class="r-artist">${escapeHtml(engine.prompt(round, a.q).heading)}</span>
        <span class="r-song${a.answer ? "" : " miss"}">${a.answer ? escapeHtml(a.answer) : "Time ran out"}</span>
        <span class="r-right"><span class="r-points">${a.points}</span></span>`;
      li.querySelector(".r-right").appendChild(tierBadge(a.tierIndex, true));
      list.appendChild(li);
    });
    show("results");
    $("btn-again").focus({ preventScroll: true });
  }

  function shareText() {
    const lines = round.answers.map((a, i) => {
      const tier = a.tierIndex == null ? "—" : scoring.TIERS[a.tierIndex].name;
      return `${i + 1}. ${engine.prompt(round, a.q).heading}: ${tier} (${a.points})`;
    });
    return `Snuffleupagus Songs (${engine.mode(round).name}): ${engine.total(round)}/${engine.maxTotal()}\n${lines.join("\n")}`;
  }

  async function onShare() {
    try {
      await navigator.clipboard.writeText(shareText());
      toast("Results copied!");
    } catch (e) {
      toast("Couldn't copy on this device");
    }
  }

  // ---------- wiring ----------
  $("btn-play").addEventListener("click", () => { storage.clearRound(); startRound("song"); });
  $("btn-singer").addEventListener("click", () => { storage.clearRound(); startRound("singer"); });
  $("btn-resume").addEventListener("click", () => { const r = storage.loadRound(); startRound(r.mode, r); });
  $("answer-form").addEventListener("submit", onSubmit);
  $("btn-next").addEventListener("click", onNext);
  $("btn-quit").addEventListener("click", () => {
    if (confirm("Quit this round? Your progress will be lost.")) { stopTimer(); storage.clearRound(); round = null; renderHome(); }
  });
  $("btn-again").addEventListener("click", () => startRound(round.mode));
  $("btn-home").addEventListener("click", renderHome);
  $("btn-share").addEventListener("click", onShare);

  renderTierLegend();
  renderHome();
})();
