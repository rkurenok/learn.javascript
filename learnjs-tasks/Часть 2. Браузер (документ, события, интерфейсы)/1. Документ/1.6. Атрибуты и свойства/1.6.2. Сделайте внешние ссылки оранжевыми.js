"use strict"

// Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.

// Ссылка является внешней, если:

// Её href содержит ://
// Но не начинается с http://internal.com.

let links = document.querySelectorAll('a');

for (let i = 0; i < links.length; i++) {
    let href = links[i].getAttribute('href');
    
    if (href.includes('://') && !href.startsWith('http://internal.com')) {
        links[i].style.color = 'orange';
    }
}