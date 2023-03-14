"use strict"

// Создайте функцию showPrompt(html, callback), которая выводит форму с сообщением (html), полем ввода и кнопками OK/ОТМЕНА.

// Пользователь должен ввести что-то в текстовое поле и нажать Enter или кнопку «OK», после чего должна вызываться функция callback(value) со значением поля.
// Если пользователь нажимает Esc или кнопку «ОТМЕНА», тогда вызывается callback(null).
// В обоих случаях нужно завершить процесс ввода и закрыть диалоговое окно с формой.

// Требования:

// Форма должна быть в центре окна.
// Форма является модальным окном, это значит, что никакое взаимодействие с остальной частью страницы невозможно, пока пользователь не закроет его.
// При показе формы, фокус должен находиться сразу внутри <input>.
// Клавиши Tab/Shift+Tab должны переключать фокус между полями формы, не позволяя ему переходить к другим элементам страницы.

// P.S. HTML/CSS исходного кода к этой задаче содержит форму с фиксированным позиционированием, но вы должны сделать её модальной.

function showPrompt(text, callback) {
    let coverDiv = document.createElement('div');
    coverDiv.id = 'cover-div';
    document.body.style.overflowY = 'hidden';
    document.body.append(coverDiv);

    let form = document.getElementById('prompt-form');
    let container = document.getElementById('prompt-form-container');
    document.getElementById('prompt-message').innerHTML = text;
    form.text.value = '';

    form.addEventListener('submit', e => {
        let value = form.text.value;
        if (value == '') return false;

        result(value);
        return false;
    });

    form.cancel.addEventListener('click', e => {
        result(null);
    });

    document.addEventListener('keydown', e => {
        if (e.key == 'Escape') {
            result(null);
        }
    });

    let firstElem = form.elements[0];
    let lastElem = form.elements[form.elements.length - 1];

    lastElem.addEventListener('keydown', e => {
        if (e.key == 'Tab' && !e.shiftKey) {
            firstElem.focus();
            return false;
        }
    });

    firstElem.addEventListener('keydown', e => {
        if (e.key == 'Tab' && e.shiftKey) {
            lastElem.focus();
            return false;
        }
    });

    container.style.display = 'block';
    form.elements.text.focus();

    function result(value) {
        document.getElementById('cover-div').remove();
        document.body.style.overflowY = '';

        container.style.display = 'none';
        document.onkeydown = null;
        callback(value);
    }
}

document.getElementById('show-button').addEventListener('click', e => {
    showPrompt("Введите текст", value => {
        alert(value);
    });
});