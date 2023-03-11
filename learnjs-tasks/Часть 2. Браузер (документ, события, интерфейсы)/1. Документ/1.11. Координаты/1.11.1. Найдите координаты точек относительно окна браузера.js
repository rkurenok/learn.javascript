"use strict"

// В ифрейме ниже располагается документ с зелёным «полем».

// Используйте JavaScript, чтобы найти координаты углов, обозначенных стрелками.

// В документе уже реализована функциональность, когда при клике на любом месте показываются соответствующие координаты.

// Ваш код должен при помощи DOM получить четыре пары координат:

// верхний левый, внешний угол (это просто).
// нижний правый, внешний угол (тоже просто).
// верхний левый, внутренний угол (чуть сложнее).
// нижний правый, внутренний угол (есть несколько способов, выберите один).
// Координаты, вычисленные вами, должны совпадать с теми, которые возвращаются по клику мыши.

// P.S. Код должен работать, если у элемента другие размеры или есть рамка, без привязки к конкретным числам.

let coords = elem.getBoundingClientRect();
let topLeftOuterAngle = [coords.left, coords.top];
let bottomRightOuterAngle = [coords.right, coords.bottom];
let topLeftInnerAngle = [coords.left + frame.clientLeft, coords.top + frame.clientTop];
let bottomRightInnerAngle = [coords.left + frame.clientLeft + frame.clientWidth, coords.top + frame.clientTop + frame.clientHeight];