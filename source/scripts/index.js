/* в этот файл добавляет скрипты*/

//Находим кнопку бургер-меню и навигационное меню
document.addEventListener('DOMContentLoaded', function () {
  const buttonToggle = document.querySelector('.navigation__toggle');
  const nav = document.querySelector('.navigation');

  // Убираем класс nojs, если JavaScript работает
  nav.classList.remove('navigation--nojs');

    // При нажатии на кнопку добавляем или удаляем класс 'navigation--opened' и 'navigation--closed'
  buttonToggle.addEventListener('click', function () {
    nav.classList.toggle('navigation--closed');
    nav.classList.toggle('navigation--closed');

    console.log(nav.classList);
  });
  
});

/* document.addEventListener('DOMContentLoaded', function () {
  const buttonToggle = document.querySelector('.navigation__toggle'); // Находим кнопку
  const nav = document.querySelector('.navigation'); // Находим навигационное меню

  buttonToggle.addEventListener('click', function () {
      // Проверяем текущее состояние
      if (nav.classList.contains('navigation--closed')) {
          nav.classList.remove('navigation--closed'); // Убираем закрытое состояние
          nav.classList.add('navigation--opened'); // Добавляем открытое состояние
          buttonToggle.querySelector('span').textContent = 'Закрыть меню'; // Меняем текст кнопки
      } else {
          nav.classList.remove('navigation--opened'); // Убираем открытое состояние
          nav.classList.add('navigation--closed'); // Добавляем закрытое состояние
          buttonToggle.querySelector('span').textContent = 'Открыть меню'; // Меняем текст кнопки
      }
      console.log(nav.classList); // Логируем текущее состояние классов для отладки
  });
}); */

