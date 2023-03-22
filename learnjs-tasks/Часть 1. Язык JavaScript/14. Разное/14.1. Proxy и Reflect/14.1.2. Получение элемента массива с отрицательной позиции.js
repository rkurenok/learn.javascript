"use strict"

// В некоторых языках программирования возможно получать элементы массива, используя отрицательные индексы, отсчитываемые с конца.

// Другими словами, array[-N] – это то же, что и array[array.length - N].

// Создайте прокси, который реализовывал бы такое поведение.

let array = [1, 2, 3];

array = new Proxy(array, {
    /* ваш код */
    get(target, prop, receiver) {
        if (prop < 0) {
            prop = target.length + Number(prop);
        }
        return Reflect.get(target, prop, receiver);
    }
});

console.log(array[-1]); // 3
console.log(array[-2]); // 2

// вся остальная функциональность массивов должна остаться без изменений