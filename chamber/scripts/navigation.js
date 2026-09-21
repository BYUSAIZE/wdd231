// ============================================
// navigation.js — hamburger menu toggle
// ============================================

document.addEventListener("DOMContentLoaded", () => {
    // Support both ID naming conventions
    const menuButton = document.getElementById('menu-button') || document.getElementById('menu-toggle');
    const navigation = document.getElementById('navigation') || document.getElementById('main-nav');

    if (menuButton && navigation) {
        menuButton.addEventListener('click', () => {
            const isOpen = navigation.classList.toggle('open');
            menuButton.setAttribute('aria-expanded', isOpen);
            menuButton.innerHTML = isOpen ? '&times;' : '&#9776;';
        });
    }
});