"use strict"

// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

function f() {
    console.log("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду

Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
}