"use strict"

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру

function checkSpam(str) {
    let lowStr = str.toLowerCase();
    if (lowStr.includes("viagra") || lowStr.includes("xxx")) {
        return true;
    }

    return false;
}