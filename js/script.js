const menuButton = document.querySelector('.menu-button');
const menuBody = document.querySelector('.header__body');
const menuClose = document.querySelector('.header__close');
const body = document.querySelector('body');

const removeMenu = () => {
  menuBody.classList.remove('active');
  body.classList.remove('_lock');
};

menuButton.addEventListener('click', (e) => {
  menuBody.classList.add('active');
  body.classList.add('_lock');
});

menuClose.addEventListener('click', (e) => {
  removeMenu();
});

document.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('_lock') ||
    e.target.classList.contains('header__item') ||
    e.target.classList.contains('header__link')
  ) {
    removeMenu();
  }
});
