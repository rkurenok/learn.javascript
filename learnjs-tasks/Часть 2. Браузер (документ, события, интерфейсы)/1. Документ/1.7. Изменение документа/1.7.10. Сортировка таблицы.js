"use strict"

let sortTR = Array.from(table.querySelectorAll('tr')).slice(1).sort((a, b) => a.querySelectorAll('td')[0].innerHTML > b.querySelectorAll('td')[0].innerHTML ? 1 : -1);
