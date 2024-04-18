const menuBtn = document.querySelector('.header__toggle');
const menuMobile = document.querySelector('.main-nav');
const menuMobileSecond = document.querySelector('.auth-nav');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-open');
	menuMobile.classList.toggle('is-open');
	menuMobileSecond.classList.toggle('is-open');
});


document.addEventListener('DOMContentLoaded', function() {
	const listItems = document.querySelectorAll('.start__list-item');
	const firstItem = listItems[0]; // Получаем первый элемент списка

	// Добавляем класс start__list-item--hover к первому элементу списка по умолчанию
	firstItem.classList.add('start__list-item--hover');

	listItems.forEach(function(item) {
			item.addEventListener('click', function() {
					// Удаляем класс start__list-item--hover у всех элементов списка
					listItems.forEach(function(item) {
							item.classList.remove('start__list-item--hover');
					});

					// Добавляем класс start__list-item--hover к текущему элементу списка
					this.classList.add('start__list-item--hover');
			});
	});
});