"use strict"

// Установите фокус на мышь. Затем используйте клавиши со стрелками, чтобы её двигать:

// P.S. Не добавляйте обработчики никуда, кроме элемента #mouse.

// P.P.S. Не изменяйте HTML/CSS, подход должен быть общим и работать с любым элементом.

mouse.tabIndex = 0;

mouse.addEventListener('click', e => {
    mouse.style.left = mouse.getBoundingClientRect().left + 'px';
    mouse.style.top = mouse.getBoundingClientRect().top + 'px';
    mouse.style.position = 'fixed';
});


mouse.addEventListener('keydown', e => {
    if (e.key == 'ArrowLeft') {
        mouse.style.left = parseInt(mouse.style.left) - mouse.offsetWidth + 'px';
    }
    else if (e.key == 'ArrowRight') {
        mouse.style.left = parseInt(mouse.style.left) + mouse.offsetWidth + 'px';
    }
    else if (e.key == 'ArrowUp') {
        mouse.style.top = parseInt(mouse.style.top) - mouse.offsetHeight + 'px';
    }
    else if (e.key == 'ArrowDown') {
        mouse.style.top = parseInt(mouse.style.top) + mouse.offsetHeight + 'px';
    }

    return false;
});