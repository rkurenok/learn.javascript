"use strict"

// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.

function makeCounter() {
    let count = 0;

    // ... ваш код ...

    function counter() {
        return count++;
    }

    counter.set = (val) => count = val;

    counter.decrease = () => count--;

    return counter;
}