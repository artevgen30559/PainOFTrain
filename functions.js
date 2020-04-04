"use strict"; // Включает "современный" режим

// Yes, no — функции колбеки.
// Колбек функции — функции, которые вызываются в определенный момент, если это потребуется
function ask(text, yes, no) {
    if (text == 'yes') yes();
    else no();
}
let yes = function() {
    console.log('DA');
};
let no = function() {
    console.log('NET');
};
ask('yess', yes, no);


// Стрелочные функции
let arrowFoo = () => console.log('I\'m arrow foo');
arrowFoo();

let arrowFoo2 = (arg1, arg2) => console.log(arg1 + arg2);
arrowFoo2(10, 20);

let arrowFoo3 = () => {
    console.log('I\'m arrowFoo and i have body');
}
arrowFoo3();

// Остаточные параметры
function sems(...args) {
    for (let arg of args) {
        console.log(arg); // выведет 1,2,3,4,5
    }
}
sems(1, 2, 3, 4, 5);

// Оператор расширения
function sems2(a, b, c) {
    console.log(a + b + c);
}
let arrSems = [3, 3, 3];
sems2(...arrSems); // распечатал наш массив в виде отдельных элементов

let strSems = 'HelloWorld';
console.log([...strSems]); // Создаст массив из букв
console.log(...strSems); // Выведет каждую букву по отдельности


// Замыкание
function makeCounter() {
    let count = 0;
    return () => count++;
}
let newC = makeCounter(); // Здесь мы присвоили newC результат выполнения функции. А также мы инициализировали переменную count. Она теперь доступна переменной newC (которая уже стала функцией)
newC(); // Вызывается код count++
newC(); // Вызывается код count++
newC = null; // Очистка памяти


// Асинхронность
function sumNumber(callback, a, b) {
	console.log('Loading...');
	setTimeout(() => {
		console.log('Ready!');
		viewResult(a + b);
	}, 1000);
}

sumNumber(viewResult, 50, 100);

function viewResult(number) {
	console.log(number);
}































//
