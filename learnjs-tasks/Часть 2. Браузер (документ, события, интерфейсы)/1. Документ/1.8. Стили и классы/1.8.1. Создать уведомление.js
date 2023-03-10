"use strict"

// Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> с заданным содержимым. 
// Уведомление должно автоматически исчезнуть через 1,5 секунды.

function showNotification(options) {
    let div = document.createElement('div');
    div.className = 'notification';
    div.style.top = options.top + "px";
    div.style.right = options.right + "px";
    div.innerText = options.html;
    div.classList.toggle(options.classList);

    setTimeout(() => div.style.display = "none", 1500);
}