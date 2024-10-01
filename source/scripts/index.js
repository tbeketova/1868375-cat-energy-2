/* в этот файл добавляет скрипты*/

//Находим кнопку бургер-меню и навигационное меню
document.addEventListener('DOMContentLoaded', function () {
  const buttonToggle = document.querySelector('.navigation__toggle');
  const nav = document.querySelector('.navigation');

    // При нажатии на кнопку добавляем или удаляем класс 'navigation--opened' и 'navigation--closed'
  buttonToggle.addEventListener('click', function () {
    nav.classList.toggle('navigation--opened');
    nav.classList.toggle('navigation--closed');
  });
});
