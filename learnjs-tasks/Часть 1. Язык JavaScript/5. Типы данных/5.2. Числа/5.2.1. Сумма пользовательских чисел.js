"use strict"

// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

let firstNum = +prompt("Введите первое число");
let secondNum = +prompt("Введите второе число");

if (isNaN(firstNum) && isNaN(secondNum)) {
    alert(firstNum + secondNum);
}