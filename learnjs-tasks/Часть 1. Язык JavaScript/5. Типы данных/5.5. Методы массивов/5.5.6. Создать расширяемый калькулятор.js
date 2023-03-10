"use strict"

// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей.
// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. 
// Метод должен понимать плюс + и минус -.
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. 
// Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

function Calculator() {
    this.calculate = (str) => {
        let elems = str.split(' ');
        let operator = elems[1];
        let a = +split[0];
        let b = +split[2];

        if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[operator](a, b);
    };

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.addMethod = (name, func) => {
        this.methods[name] = func;
    };
}