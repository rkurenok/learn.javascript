"use strict"

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, 
// заменяет конец str на "…", так, чтобы её длина стала равна maxlength


function truncate(str, maxlength) {
    if (str.length > maxlength) {
        str = str.slice(0, maxlength - 1) + "...";
    }

    return str;
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

console.log(truncate("Всем привет!", 20));