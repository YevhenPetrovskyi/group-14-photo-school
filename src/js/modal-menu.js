  window.addEventListener('DOMContentLoaded', event => {
    const omenu = document.querySelector('.head-btn-menu-open');
    if (omenu) {
      omenu.addEventListener('click', openMenu, false);
    }
    const cmenu = document.querySelector('.head-btn-menu-close');
    if (cmenu) {
      cmenu.addEventListener('click', closeMenu, false);
    }
    let elements = document.querySelectorAll(".head-menu-link");
    elements.forEach(el => el.addEventListener('click', event => {closeMenu();}));
  });
  function openMenu() {
    document.getElementById('menu-block').classList.remove('is-close');
    document.getElementById('menu-block').classList.add('is-open');
  }
  function closeMenu() {
    document.getElementById('menu-block').classList.remove('is-open');
    document.getElementById('menu-block').classList.add('is-close');
  }
