const menuButton = document.querySelector('.menu-button');
const menuBody = document.querySelector('.header__body');
const menuClose = document.querySelector('.header__close');
const body = document.querySelector('body');

menuButton.addEventListener('click', (e) => {
  menuBody.classList.add('active');
  body.classList.add('_lock');
});

menuClose.addEventListener('click', (e) => {
  menuBody.classList.remove('active');
  body.classList.remove('_lock');
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('_lock')) {
    menuBody.classList.remove('active');
    body.classList.remove('_lock');
  }
});
