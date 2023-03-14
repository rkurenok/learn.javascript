"use strict"

// Создайте дерево, которое по клику на заголовок скрывает-показывает потомков
// Требования:

// Использовать только один обработчик событий (применить делегирование)
// Клик вне текста заголовка (на пустом месте) ничего делать не должен.

const allLI = tree.querySelectorAll('li');

allLI.forEach(li => {
    let span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling);
});

tree.addEventListener('click', e => {
    if (e.target.tagName != 'SPAN') return;

    let children = e.target.parentNode.querySelector('ul');
      if (!children) return;

      children.hidden = !children.hidden;
});