"use strict"

// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.

const text = document.querySelector("div#text");
const btn = document.querySelector('input#hider');
btn.addEventListener("click", e => {
    text.innerText = "";
});