// Front-end only for now. Mode buttons will route to game screens later.
const toast = document.querySelector(".toast");
let toastTimer;

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2000);
}

document.querySelectorAll(".mode-card").forEach((btn) => {
  btn.addEventListener("click", () => {
    const title = btn.querySelector(".mode-title").textContent;
    showToast(`${title} — coming soon`);
  });
});
