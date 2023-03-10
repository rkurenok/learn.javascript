"use strict"

// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.

function Calculator() {
    this.read = () => {
        this.x = +prompt("Введите первое число");
        this.y = +prompt("Введите второе число");
    };
    this.sum = () => {
        return this.x + this.y;
    };
    this.mul = () => {
        return this.x * this.y;
    };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );