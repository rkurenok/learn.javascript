"use strict"

// Создайте кнопку, которая будет скрывать себя по нажатию.

const btn = document.querySelector("button");
btn.addEventListener("click", e => {
    btn.style.display = 'none';
});