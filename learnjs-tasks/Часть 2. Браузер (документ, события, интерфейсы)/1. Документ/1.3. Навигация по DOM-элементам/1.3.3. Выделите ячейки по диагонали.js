"use strict"

// Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.

// Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:

//  в переменной td находится DOM-элемент для тега <td>
// td.style.backgroundColor = 'red';

for (let i = 0; i < table.lastChild.childElementCount; i ++) {
    table.lastChild.children[i].children[i].style.backgroundColor = 'red';
}