// ============================================
// date.js — footer copyright year & last modified
// ============================================

document.addEventListener("DOMContentLoaded", () => {
    // Support both id="currentyear" and id="current-year"
    const yearSpan = document.getElementById('currentyear') || document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Support both id="lastModified" and id="last-modified"
    const lastModP = document.getElementById('lastModified') || document.getElementById('last-modified');
    if (lastModP) {
        lastModP.textContent = `Last Modified: ${document.lastModified}`;
    }
});