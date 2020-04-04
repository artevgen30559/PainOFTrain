"use strict"; // Включает "современный" режим

// Вычисляемое свойство
let nickname = 'userStatus';
let object = {
    [nickname]: 'User', // nickname заменится на поле 'userStatus'
    property: 'test'
};
console.log(object['userStatus']);

delete object.property; // Удаление поля
console.log('property' in object); // Проверка есть ли такое поле в объекте

for (let key in object) {
    console.log(key); // Выведет поля
    console.log(object[key]); // Выведет значения
}

// Symbol уникален. Нельзя создать 2 одинаковых
let id = Symbol('id');
id = 12312;

// Конструктор объектов
function People(name, age) {
    this.name = name;
    this.age = age;
    this.hello = function() {
        console.log('Hello, my name is ' + this.name + ' and age ' + this.age);
    };
}
let people = new People('Artem', 20);
people.hello();
