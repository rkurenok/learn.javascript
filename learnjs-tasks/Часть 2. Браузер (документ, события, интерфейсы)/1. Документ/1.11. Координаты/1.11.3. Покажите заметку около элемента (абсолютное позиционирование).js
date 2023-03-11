"use strict"

// Измените код решения предыдущего задания так, чтобы элемент заметки использовал свойство position:absolute вместо position:fixed.

// Это предотвратит расхождение элементов при прокрутке страницы.

function positionAt(anchor, position, elem) {

    let anchorCoords = {
        top: anchor.getBoundingClientRect().top + scrollY,
        left: anchor.getBoundingClientRect().left + scrollX
    };

    if (position == "top") {
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
    }
    else if (position == "right") {
        elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
        elem.style.top = anchorCoords.top + "px";
    }
    else if (position == "bottom") {
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
    }

}