"use strict"

// Напишите функцию createCalendar(elem, year, month).

// Вызов функции должен создать календарь для заданного месяца month в году year и вставить его в elem.

// Календарь должен быть таблицей, где неделя – это <tr>, а день – это <td>. 
// У таблицы должен быть заголовок с названиями дней недели, каждый день – <th>, первым днём недели должен быть понедельник.

function createCalendar(elem, year, month) {
    let namesDayOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    let table = document.createElement('table');

    let countDays = new Date(year, month, 0).getDate();
    let dayOfWeek = new Date(year, month - 1, 1).getDay();
    
    if (dayOfWeek == 0) dayOfWeek = 7;
    let countWeek = Math.ceil((countDays + dayOfWeek - 1) / 7);

    for (let i = 0; i < countWeek + 1; i++) {
        let tr = document.createElement('tr');

        if (i == 0) {
            for (let j = 0; j < namesDayOfWeek.length; j++) {
                let th = document.createElement('th');
                th.innerText = namesDayOfWeek[j];
                tr.append(th);
            }
        }
        else {
            for (let j = 0; j < namesDayOfWeek.length; j++) {
                let td = document.createElement('td');
                tr.append(td);
            }
        }
        table.append(tr);
    }

    let allTD = table.querySelectorAll('td');
    
    for (let i = dayOfWeek - 1; i <= countDays + dayOfWeek - 2; i++) {
        allTD[i].innerHTML = i - dayOfWeek + 2;
    }

    elem.append(table);
}