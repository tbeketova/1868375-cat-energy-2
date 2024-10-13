const nav = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toggle');
nav.classList.remove('navigation--nojs');

navToggle.addEventListener('click', () => {
  //console.log('Кнопка нажата');
  if (nav.classList.contains('navigation--closed')) {
    nav.classList.remove('navigation--closed');
    nav.classList.add('navigation--opened');
  } else {
    nav.classList.add('navigation--closed');
    nav.classList.remove('navigation--opened');
  }
  //console.log(nav.classList);
});
