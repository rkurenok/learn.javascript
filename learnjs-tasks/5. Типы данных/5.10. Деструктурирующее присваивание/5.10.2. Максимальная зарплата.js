"use strict"

// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

function topSalary(salaries) {
    let topSalary = 0;
    let nameOfTopSalary = null;

    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > topSalary) {
            nameOfTopSalary = name;
            topSalary = salary;
        }
    }

    return nameOfTopSalary;
}