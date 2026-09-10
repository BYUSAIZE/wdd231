// ============================================
// navigation.js — hamburger menu toggle
// ============================================

const menuButton = document.getElementById('menu-button');
const navigation = document.getElementById('navigation');

menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', isOpen);
    menuButton.innerHTML = isOpen ? '&times;' : '&#9776;';
});