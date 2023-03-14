"use strict"

// Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант.
// P.S. Используйте делегирование.

thumbs.addEventListener('click', e => {
    let newImg = e.target.closest('a');

    if (!newImg) return;

    largeImg.src = newImg.href;
    largeImg.alt = newImg.title;

    e.preventDefault();
});