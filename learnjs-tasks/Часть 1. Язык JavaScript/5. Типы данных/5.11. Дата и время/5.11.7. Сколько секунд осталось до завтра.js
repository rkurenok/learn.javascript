"use strict"

// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToTomorrow() {
    let dateNow = new Date();
    let dateTomorrow = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate() + 1);

    return Math.round((dateTomorrow - dateNow) / 1000);
}