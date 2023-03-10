"use strict"

// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.

function sumToCycle(n) {
    let result = 0;

    for (let i = 1; i <= n; i++) {
        result += i;
    }

    return result;
}

function sumToRecursion(n) {
    return n > 1 ? n + sumToRecursion(n - 1) : n;
}

function sumToProgression(n) {
    return n * ++n / 2
}

console.log(sumToCycle(100));
console.log(sumToRecursion(100));
console.log(sumToProgression(100));