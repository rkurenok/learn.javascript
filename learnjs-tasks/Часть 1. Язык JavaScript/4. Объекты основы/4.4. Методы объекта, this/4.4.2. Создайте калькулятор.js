"use strict"

// Создайте объект calculator (калькулятор) с тремя методами:
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
    // ... ваш код ...
    read() {
        this.x = +prompt("Введите первое число");
        this.y = +prompt("Введите второе число");
    },
    sum() {
        return this.x + this.y;
    },
    mul() {
        return this.x * this.y;
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );