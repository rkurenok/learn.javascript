"use strict"

// У нас есть дерево, структурированное как вложенные списки ul/li.

// Напишите код, который выведет каждый элемент списка <li>:

// Какой в нём текст (без поддерева) ?
// Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?

let li = document.querySelectorAll('ul li');

for (let i = 0; i < li.length; i++) {
    console.log(li[i].firstChild.data.trim() + " :" + li[i].querySelectorAll('li').length);
}