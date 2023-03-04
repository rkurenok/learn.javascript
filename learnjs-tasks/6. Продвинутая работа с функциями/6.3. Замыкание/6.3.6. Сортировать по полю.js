"use strict"

// У нас есть массив объектов, который нужно отсортировать:
// Можем ли мы сделать его короче, например вот таким?
// users.sort(byField('name'));
// users.sort(byField('age'));

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(fieldName) {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}