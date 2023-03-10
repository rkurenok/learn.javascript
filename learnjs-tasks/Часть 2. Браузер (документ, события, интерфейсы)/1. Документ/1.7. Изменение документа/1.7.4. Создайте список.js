"use strict"

// Напишите интерфейс для создания списка.

// Для каждого пункта:

// Запрашивайте содержимое пункта у пользователя с помощью prompt.
// Создавайте элемент <li> и добавляйте его к <ul>.
// Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
// Все элементы должны создаваться динамически.

// Если пользователь вводит HTML-теги, они должны обрабатываться как текст.

let ul = document.createElement('ul');

while (true) {
    let text = prompt('Введите содержимое пункта');

    if (!text) break;

    let li = document.createElement('li');
    li.textContent = text;
    ul.append(li);
}