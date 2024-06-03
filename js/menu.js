const btnMenuOpen = document.getElementsByClassName('header-menu-button')[0];
const btnMenuClose = document.getElementsByClassName('menu-close')[0];
const menu = document.getElementsByClassName('mobile-menu')[0];

const btnOrderOpen = document.getElementsByClassName('hero-btn')[0];
const btnOrderClose = document.getElementsByClassName('modal-close-btn')[0];
const modal = document.getElementsByClassName('backdrop')[0];

btnMenuOpen.addEventListener('click', function () {
  menu.classList.add('is-open');
});

btnMenuClose.addEventListener('click', function () {
  menu.classList.remove('is-open');
});

btnOrderOpen.addEventListener('click', function () {
  modal.classList.add('is-open');
});

btnOrderClose.addEventListener('click', function () {
  modal.classList.remove('is-open');
});