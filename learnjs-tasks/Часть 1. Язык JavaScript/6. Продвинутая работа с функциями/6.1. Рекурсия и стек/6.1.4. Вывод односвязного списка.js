"use strict"

// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

//   Напишите функцию printList(list), которая выводит элементы списка по одному.
// Сделайте два варианта решения: используя цикл и через рекурсию.

function printListCycle(list) {
    let temp = list;

    while (temp) {
        console.log(temp.value);
        temp = temp.next;
    }
}

function printListRecursion(list) {
    console.log(list.value);

    if (list.next) {
        printListRecursion(list.next)
    }
}

printListCycle(list);
printListRecursion(list);