"use strict"

// Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup

let room = {
    number: 23
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
    place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

alert(JSON.stringify(meetup, function replacer(key, value) {
    /* ваш код */
    if (key == "" && value == meetup) {
        return undefined;
    }
    return value;
}));

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/