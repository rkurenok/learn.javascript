"use strict"

// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr

function unique(arr) {
    /* ваш код */
    let result = [];

    for (let elem of arr) {
        if (!result.includes(elem)) {
            result.push(elem);
        }
    }

    return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O