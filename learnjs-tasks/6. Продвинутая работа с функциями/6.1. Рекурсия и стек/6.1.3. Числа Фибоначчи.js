"use strict"

// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

// P.S. Все запуски функций из примера выше должны работать быстро. Вызов fib(77) должен занимать не более доли секунды.

// function fib(n) {
//     if (n <= 2) {
//         return 1;
//     }

//     return fib(n - 1) + fib(n - 2);
// }

function fib(n) {
    let a = 1, b = 1, c;

    for (let i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }

    return b;
}

console.log(fib(3));
console.log(fib(7));
console.log(fib(77));