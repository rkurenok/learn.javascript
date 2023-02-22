"use strict"

// Напишите функцию formatDate(date), форматирующую date по следующему принципу:
// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

function formatDate(date) {
    let diff = new Date() - date; // разница в миллисекундах

    if (diff < 1000) { // меньше 1 секунды
      return 'прямо сейчас';
    }
  
    let sec = Math.round(diff / 1000); // преобразовать разницу в секунды
  
    if (sec < 60) {
      return sec + ' сек. назад';
    }
  
    let min = Math.round(diff / 60000); // преобразовать разницу в минуты
    if (min < 60) {
      return min + ' мин. назад';
    }

    let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let month = date.getMonth() + 1 < 10 ? '0' + date.getMonth() + 1 : date.getMonth() + 1;
    let year = date.getFullYear().toString().slice(-2);
    let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );