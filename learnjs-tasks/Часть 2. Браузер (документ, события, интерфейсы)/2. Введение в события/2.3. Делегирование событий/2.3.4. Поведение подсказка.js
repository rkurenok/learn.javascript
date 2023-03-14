"use strict"

// Напишите JS-код, реализующий поведение «подсказка».

// При наведении мыши на элемент с атрибутом data-tooltip, над ним должна показываться подсказка и скрываться при переходе на другой элемент.

// Пример HTML с подсказками:

// <button data-tooltip="эта подсказка длиннее, чем элемент">Короткая кнопка</button>
// <button data-tooltip="HTML<br>подсказка">Ещё кнопка</button>

// В этой задаче мы полагаем, что во всех элементах с атрибутом data-tooltip – только текст. То есть, в них нет вложенных тегов (пока).

// Детали оформления:

// Отступ от подсказки до элемента с data-tooltip должен быть 5px по высоте.
// Подсказка должна быть, по возможности, посередине элемента.
// Подсказка не должна вылезать за границы экрана, в том числе если страница частично прокручена, если нельзя показать сверху – показывать снизу элемента.
// Текст подсказки брать из значения атрибута data-tooltip. Это может быть произвольный HTML.
// Для решения вам понадобятся два события:

// mouseover срабатывает, когда указатель мыши заходит на элемент.
// mouseout срабатывает, когда указатель мыши уходит с элемента.
// Примените делегирование событий: установите оба обработчика на элемент document, чтобы отслеживать «заход» и «уход» курсора на элементы с атрибутом data-tooltip и управлять подсказками с их же помощью.

// После реализации поведения – люди, даже не знакомые с JavaScript смогут добавлять подсказки к элементам.

// P.S. В один момент может быть показана только одна подсказка.

let tooltip;

document.addEventListener('mouseover', e => {
    if (!e.target.dataset.tooltip) return;

    tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerHTML = e.target.dataset.tooltip;
    document.body.append(tooltip);

    let coords = e.target.getBoundingClientRect();

    let left = coords.left + (e.target.offsetWidth - tooltip.offsetWidth) / 2;
    if (left < 0) left = 0;

    let top = coords.top - tooltip.offsetHeight - 5;
    if (top < 0) {
        top = coords.top + e.target.offsetHeight + 5;
    }

    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
});

document.addEventListener('mouseout', e => {
    if (tooltip) {
        tooltip.remove();
        tooltip = null;
      }
});