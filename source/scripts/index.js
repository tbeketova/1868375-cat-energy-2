document.querySelector('.navigation__toggle').addEventListener('click', () => {
  const nav = document.querySelector('.navigation');

  console.log('Кнопка нажата'); // Проверка срабатывания обработчика

  // Проверяем, закрыто ли меню
  if (nav.classList.contains('navigation--closed')) {
      nav.classList.remove('navigation--closed');
      nav.classList.add('navigation--opened');
  } else {
      nav.classList.remove('navigation--opened');
      nav.classList.add('navigation--closed');
  }

  console.log(nav.classList); // Вывод текущих классов
});
