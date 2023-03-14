"use strict"

// Создайте <div>, который превращается в <textarea>, если на него кликнуть.

// <textarea> позволяет редактировать HTML в элементе <div>.

// Когда пользователь нажимает Enter или переводит фокус, <textarea> превращается обратно в <div>, и его содержимое становится HTML-кодом в <div>.

let div = document.querySelector("#view");
let textarea = null;

div.addEventListener('click', e => {
    textarea = document.createElement('textarea');
    textarea.value = div.innerHTML;

    div.replaceWith(textarea);
    textarea.focus();

    textarea.addEventListener('keydown', e => {
        if (e.key == 'Enter') this.blur();
    });
    
    textarea.addEventListener('blur', e => {
        div.innerHTML = textarea.value;
        textarea.replaceWith(div);
    });
});

