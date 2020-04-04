"use strict"; // Включает "современный" режим

// Массивы очередь
// push - добавляет элемент в конец (операция стека)
// pop - удаляет последний элемент (операция стека)
// shift - удаляет элемент в начале, сдвигая массив
// unshift - добавляет элемент в начало массива

// Методы массивов
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.splice(0, 1); // начиная с позиции 1, удалить 1 элемент
arr.splice(0, 0, 0, 0.5); // вставляет два элемента (0 и 0.5) в начало массива
let arr2 = arr.slice(0, 2); // Копирует элементы начиная с 0 индекса до 2
let arr3 = arr.concat([0,2], [4, 6]); // Массив arr объединяется с двумя массивами в скобках

arr.forEach(function(item, index, array) {
    // Перебор массива. Item - каждый элемент массива
    // Index - позиция каждого элемента
    // Array - сам массив полностью
});

// Функция reduce хранит результат предыдущей итерации (хранит в переменной sum - хотя можно назвать как угодно)
let arrRed = [1, 2, 3, 4, 5];
let result = arrRed.reduce((previousValue, item, index, array) => previousValue + item);
console.log(result);

let taskArr1 = [1, 2, 3, 4, 5];
let taskArr2 = [6, 7, 8, 9, 10];
let obj = {};

for (let i = 0; i < taskArr1.length; i++) {
    obj[taskArr1[i]] = taskArr2[i];
}
console.log(obj);

// Поиск в массиве
let arr4 = [56, 12, 2, 'name', 'user', 12, true, 100, 'ignore'];
arr4.indexOf('name', 0); // Ищет эллемент, начминая с 0 позиции. Возвращает индекс, если элемент найден
arr4.lastIndexOf('name', 9); // То же самое, но ищет с конца
arr4.includes('name', 0); // Возвращает true, если элемент найден

// Поиск в массиве объектов
let arr5 = [{name: 'Artem', id: 12}, {name: 'Stas', id: 26}];
arr5.find(item => item.id == 12); // Вернет элемент, у которого id = 26
arr5.filter(item => item.id < 30); // Вернет все элементы, у которых id < 30

// Преобразование массива
let arr6 = ['TestName', 'TestSurname', 'TestAge'];
arr6.map(item => item.length); // преобразует каждый элемент массива в его длинну

let str = 'Artem, Stas, Nikolay, Misha';
let arr7 = str.split(', '); // Откинет запятую и пробел и сделает массив из имён
let arr8 = str.split(''); // Элементы массива будут отдельными символами
let newStr = arr7.join(', '); // Наоборот, сделает из массива строку, разделив элементы запятой и пробелом

// Методы перебора объектов
let persone = {
    name: 'Artem',
    age: 20,
    height: 183
};
console.log(Object.keys(persone)); // Выводит название ключей у объекта persone
console.log(Object.values(persone)); // Выводит значения полей у объекта persone
console.log(Object.entries(persone)); // Выводит массив пар (ключ, значение)


// Деструктуризация
let arrDest = ['Artem', 'Komarov', 19];
let [firstName, surname, age, weight] = arrDest;
console.log(surname); // Выведет Komarov

let [firstName2, surname2, , weight2 = 'kg'] = arrDest; // , , - пропуск age
console.log(weight2); // Выведет kg, т.к было установлено значение по умолчанию

let options = {
    title: 'Menu',
    width: 100,
    height: 200
};

// Деструктуризация объектов
let {title, width, height} = options;
console.log(title);

// Деструктуризация вложенных объектов
let options2 = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

let {size: {width2, height2}, items: [item1, item2], extra} = options2;
console.log(item1);
