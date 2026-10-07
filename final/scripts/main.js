// js/main.js
import { initProducts } from "./products.js";
import { initModal } from "./modal.js";

document.addEventListener("DOMContentLoaded", () => {
    // 1. Dynamic Footer Copyright Year
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Mobile Navigation Menu Toggle
    const menuButton = document.getElementById("menu-button");
    const siteNav = document.getElementById("site-nav");

    if (menuButton && siteNav) {
        menuButton.addEventListener("click", () => {
            const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
            menuButton.setAttribute("aria-expanded", !isExpanded);
            siteNav.classList.toggle("open");
        });
    }

    // 3. Initialize Products Page if element exists
    initProducts();

    // 4. Initialize Modal functionality if element exists
    initModal();
});