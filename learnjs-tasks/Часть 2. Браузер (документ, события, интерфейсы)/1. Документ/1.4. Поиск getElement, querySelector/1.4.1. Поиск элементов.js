"use strict"

// Вот документ с таблицей и формой.

// Как найти?…

// Таблицу с id="age-table".
// Все элементы label внутри этой таблицы (их три).
// Первый td в этой таблице (со словом «Age»).
// Форму form с именем name="search".
// Первый input в этой форме.
// Последний input в этой форме.
// Откройте страницу table.html в отдельном окне и используйте для этого браузерные инструменты разработчика.

const table = document.querySelector('#age-table');
console.log(table);
console.log(table.querySelectorAll('label'));
console.log(table.querySelector('td'));
const form = document.querySelector('form[name="search"]');
console.log(form);
console.log(form.querySelector('input'));
console.log(form.lastElementChild);