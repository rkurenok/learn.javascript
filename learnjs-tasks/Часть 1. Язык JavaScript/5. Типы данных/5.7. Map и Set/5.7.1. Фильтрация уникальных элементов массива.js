"use strict"

// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
// P.S. Здесь мы используем строки, но значения могут быть любого типа.
// P.P.S. Используйте Set для хранения уникальных значений.

function unique(arr) {
    /* ваш код */
    return Array.from(new Set(arr));
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(values) ); // Hare,Krishna,:-O