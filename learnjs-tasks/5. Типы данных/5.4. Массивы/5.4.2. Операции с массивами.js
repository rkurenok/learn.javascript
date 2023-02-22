"use strict"

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива

let styles = ["Джаз", "Блюз"];
console.log(styles);

styles.push("Рок-н-ролл");
console.log(styles);

styles[Math.round(styles.length / 2) - 1] = "Классика";
console.log(styles);

console.log(styles.shift());

styles.unshift("Рэп", "Регги");
console.log(styles);