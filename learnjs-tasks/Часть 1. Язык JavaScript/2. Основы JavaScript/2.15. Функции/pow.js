"use strict"

function pow(x, n) {
    return x ** n;
}

let x = prompt("Введите число");
let n = prompt("Введите степень");

if (n < 1) {
    alert("Степень должна быть больше либо равна 1");
}
else {
    alert(pow(x, n));
}