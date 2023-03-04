"use strict"

// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.

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

function printListCycle(list) {
    let arr = [];
    let temp = list;

    while (temp) {
        arr.push(temp.value);
        temp = temp.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

function printListRecursion(list) {
    if (list.next) {
        printListRecursion(list.next)
    }
    
    console.log(list.value);

}

printListCycle(list);
printListRecursion(list);