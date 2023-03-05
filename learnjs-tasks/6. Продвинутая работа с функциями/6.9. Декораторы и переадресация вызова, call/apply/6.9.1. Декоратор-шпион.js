"use strict"

// Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.

// Каждый вызов должен сохраняться как массив аргументов.

function work(a, b) {
    console.log(a + b); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}

function spy(func) {
    function countFuncCalls(...args) {
        countFuncCalls.calls.push(args);
        return func.apply(this, args);
    }

    countFuncCalls.calls = [];

    return countFuncCalls;
}