// Select DOM Items
const menu = document.querySelector('#menu-main');
const menuBtn = document.querySelector('#menu-btn-main');
const menuBranding = document.querySelector('#menu-branding-main');
const menuNav = document.querySelector('#menu-nav-main');
const navItems = document.querySelectorAll('.nav-items');

// Set initial state of the menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach((item) => item.classList.add('show'));
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach((item) => item.classList.remove('show'));
    showMenu = false;
  }
}
