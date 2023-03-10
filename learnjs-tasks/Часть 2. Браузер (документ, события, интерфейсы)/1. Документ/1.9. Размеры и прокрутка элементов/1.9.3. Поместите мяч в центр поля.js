"use strict"


// Каковы координаты центра поля?
// Вычислите их и используйте, чтобы поместить мяч в центр поля:

// Элемент должен позиционироваться за счёт JavaScript, а не CSS.
// Код должен работать с любым размером мяча (10, 20, 30 пикселей) и любым размером поля без привязки к исходным значениям.
// P.S. Да, центрирование можно сделать при помощи чистого CSS, но задача именно на JavaScript. 
// Далее будут другие темы и более сложные ситуации, когда JavaScript будет уже точно необходим, это – своего рода «разминка».

img.style.left = Math.round(rectangle.clientWidth / 2 - img.offsetWidth / 2) + 'px';
img.style.top = Math.round(rectangle.clientHeight / 2 - img.offsetHeight / 2) + 'px';