import { places } from "../data/discover.mjs";

// ---- Cards ----
const container = document.querySelector("#discover-grid");

places.forEach((place, i) => {
  const card = document.createElement("section");
  card.className = "card";
  card.style.gridArea = `c${i + 1}`;
  card.innerHTML = `
    <h2>${place.name}</h2>
    <figure><img src="${place.image}" alt="${place.alt}" width="300" height="200" loading="lazy"></figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button type="button">Learn more</button>`;
  container.appendChild(card);
});

// ---- Last visit message ----
const msgBox = document.querySelector("#visit-message");
const msgText = document.querySelector("#visit-text");
const KEY = "discover-last-visit";
const DAY = 1000 * 60 * 60 * 24;

let last = null;
try { last = localStorage.getItem(KEY); } catch { /* storage unavailable */ }
const now = Date.now();

if (!last) {
  msgText.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const diff = now - Number(last);
  if (diff < DAY) {
    msgText.textContent = "Back so soon! Awesome!";
  } else {
    const days = Math.floor(diff / DAY);
    msgText.textContent = `You last visited ${days} ${days === 1 ? "day" : "days"} ago.`;
  }
}
try { localStorage.setItem(KEY, String(now)); } catch { /* ignore */ }

document.querySelector("#visit-close").addEventListener("click", () => msgBox.remove());
