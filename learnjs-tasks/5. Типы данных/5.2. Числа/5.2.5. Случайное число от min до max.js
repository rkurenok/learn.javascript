"use strict"

// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max)

function random(min, max) {
    return min + (max - min) * Math.random();
}

console.log( random(1, 5) ); // 1.2345623452
console.log( random(1, 5) ); // 3.7894332423
console.log( random(1, 5) ); // 4.3435234525