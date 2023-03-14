"use strict"

// Сделать таблицу сортируемой: при клике на элемент <th> строки таблицы должны сортироваться по соответствующему столбцу.
// Каждый элемент <th> имеет атрибут data-type
// В примере выше первый столбец содержит числа, а второй – строки. Функция сортировки должна это учитывать, ведь числа сортируются иначе, чем строки.
// Сортировка должна поддерживать только типы "string" и "number"
// P.S. Таблица может быть большой, с любым числом строк и столбцов.

grid.addEventListener('click', e => {
    if (e.target.tagName != 'TH') return;

    sortTable(e.target.cellIndex, e.target.dataset.type);
});

function sortTable(colNum, colType) {
    let tbody = grid.querySelector('tbody');
    let rows = Array.from(tbody.rows);

    if (colType == 'number') {
        rows.sort((a, b) => a.cells[colNum].innerHTML - b.cells[colNum].innerHTML);
    }
    else if (colType == 'string') {
        rows.sort((a, b) => a.cells[colNum].innerHTML > b.cells[colNum].innerHTML ? 1 : -1);
    }

    tbody.append(...rows);
}