"use strict"

// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbersInterval(from, to) {
    let num = from;

    let timerId = setInterval(() => {
        if (num <= to) {
            console.log(num);
            num++;
        }
        else {
            clearInterval(timerId);
        }
    }, 1000);
}

function printNumbersTimeout(from, to) {
    let num = from;

    setTimeout(function start() {
        if (num <= to) {
            console.log(num);
            num++;
            setTimeout(start, 1000);
        }
    }, 1000);
}

printNumbersInterval(1, 4);
printNumbersTimeout(-4, -1);