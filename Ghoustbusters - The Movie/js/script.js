const body = document.querySelector('body'),
  header = document.querySelector('.header'),
  nav = document.querySelector('.navigation'),
  menu = document.querySelector('.mobile-menu'),
  mobileMenu = document.querySelector('.mobile-menu'),
  headerInner = document.querySelector('.header__inner');

menu.addEventListener('click', () => {
  body.classList.toggle('lock');
  nav.classList.toggle('navigation--close');
  header.classList.toggle('header--full-height');
  mobileMenu.classList.toggle('mobile-menu--open');
});

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth >= 600) {
    headerInner.insertAdjacentElement('beforeend', nav);
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 600) {
    headerInner.insertAdjacentElement('beforeend', nav);
  } else {
    header.insertAdjacentElement('beforeend', nav);
  }
});
