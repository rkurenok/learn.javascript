"use strict"

// У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//     },
//     down() {
//         this.step--;
//     },
//     showStep: function () { // показывает текущую ступеньку
//         alert(this.step);
//     }
// };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () { // показывает текущую ступеньку
        alert(this.step);
        return this;
    }
}

ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0