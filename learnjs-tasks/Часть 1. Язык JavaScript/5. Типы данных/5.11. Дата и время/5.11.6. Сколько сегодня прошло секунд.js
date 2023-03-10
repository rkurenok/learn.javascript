"use strict"

// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToday() {
    let dateNow = new Date();
    let dateToday = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());

    return Math.round((dateNow - dateToday) / 1000);
}