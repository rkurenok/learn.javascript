"use strict"

// Есть дерево, организованное в виде вложенных списков ul/li.

// Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте.

let li = document.querySelectorAll('ul li');

for (let i = 0; i < li.length; i++) {
    let childLICount = li[i].querySelectorAll('li').length;

    if (childLICount == 0) break;

    li[i].firstChild.data = li[i].firstChild.data.trim() + " [" + childLICount + " ]";
}