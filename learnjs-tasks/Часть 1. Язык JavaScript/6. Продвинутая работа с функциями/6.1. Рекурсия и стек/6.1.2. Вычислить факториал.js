"use strict"

// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
// P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6

function factorial(n) {
    return n > 1 ? n * factorial(n - 1) : n;
}

console.log(factorial(5));