"use strict"

// Усовершенствуйте решение предыдущего задания Покажите заметку около элемента (абсолютное позиционирование): 
// научите функцию positionAt(anchor, position, elem) вставлять elem внутрь anchor.

// Новые значения для аргумента position:

// top-out, right-out, bottom-out – работают так же, как раньше, они вставляют elem сверху/справа/снизу anchor.
// top-in, right-in, bottom-in – вставляют elem внутрь anchor: приклеивают его к верхнему/правому/нижнему краю.

function positionAt(anchor, position, elem) {

    let anchorCoords = {
        top: anchor.getBoundingClientRect().top + scrollY,
        left: anchor.getBoundingClientRect().left + scrollX
    };

    if (position == "top-out") {
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
    }
    else if (position == "right-out") {
        elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
        elem.style.top = anchorCoords.top + "px";
    }
    else if (position == "bottom-out") {
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
    }
    if (position == "top-in") {
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + "px";
    }
    else if (position == "right-in") {
        elem.style.width = '150px';
        elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + "px";
        elem.style.top = anchorCoords.top + "px";
    }
    else if (position == "bottom-in") {
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + "px";
    }
}