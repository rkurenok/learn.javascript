"use strict"

// Создайте интерфейс, позволяющий ввести сумму банковского вклада и процент, а затем рассчитать, какая это будет сумма через заданный промежуток времени.
// Любое изменение введённых данных должно быть обработано немедленно.

// initial: начальная сумма денег
// interest: проценты, например, 0.05 означает 5% в год
// years: сколько лет ждать
let result;

let form = document.forms.calculator;
(form.money.oninput = form.months.onchange = form.interest.oninput = function() {
    let initial = +form.money.value;
    if (!initial) return;

    let interest = form.interest.value * 0.01;
    if (!interest) return;

    let years = form.months.value / 12;
    if (!years) return;

    result = Math.round(initial * (1 + interest) ** years);
    let height = result / form.money.value * 100 + 'px';
    document.getElementById('height-after').style.height = height;
    document.getElementById('money-before').innerHTML = form.money.value;
    document.getElementById('money-after').innerHTML = result;
})();