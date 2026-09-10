// ============================================
// date.js — footer copyright year & last modified
// ============================================

document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent =
    `Last Modified: ${document.lastModified}`;