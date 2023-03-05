"use strict"

// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

function f(a, b) {
    console.log(a + b);
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

Function.prototype.defer = function(ms) {
    return (...args) => {
        setTimeout(() => f.apply(this, args), ms);
    }
}