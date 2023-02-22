"use strict"

// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

function aclean(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        let sortElem = arr[i].toLowerCase().split('').sort().join('');
        obj[sortElem] = arr[i];
    }

    return Object.values(obj);
}