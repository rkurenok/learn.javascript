"use strict"

// Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.
// Выберите один из двух способов решения этой задачи:

// Создать строку, а затем присвоить через container.innerHTML.
// Создавать узлы через методы DOM.
// Если получится – сделайте оба.

// P.S. Желательно, чтобы в дереве не было лишних элементов, в частности -– пустых <ul></ul> на нижнем уровне.


let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};

function createTree(obj) {
    if (!Object.keys(obj)) return;

    let ul = document.createElement('ul');

    for (let key in obj) {
        let li = createElement('li');
        li.textContent = key;

        let childrenUl = createTree(obj[key]);

        if (childrenUl) {
            li.append(childrenUl);
        }

        ul.append(li);
    }

    return ul;
}

// function createTree(obj) {
//     let li = '';
//     let ul;

//     for (let key in obj) {
//         li += '<li>' + key + createTree(obj[key]) + '</li>';
//     }

//     if (li) {
//         ul = '<ul>' + li + '</ul>'
//     }

//     return ul || '';
// }