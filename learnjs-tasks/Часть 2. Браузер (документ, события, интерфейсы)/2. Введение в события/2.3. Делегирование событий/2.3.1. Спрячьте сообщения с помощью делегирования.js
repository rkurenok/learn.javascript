"use strict"

// Дан список сообщений с кнопками для удаления [x]. Заставьте кнопки работать.
// P.S. Используйте делегирование событий. Должен быть лишь один обработчик на элементе-контейнере для всего.

const panes = document.querySelectorAll(".pane");
panes.forEach(pane => {
    pane.addEventListener("click", e => {
        if (e.target.tagName != "BUTTON") return;

        pane.style.display = 'none';
    })
})