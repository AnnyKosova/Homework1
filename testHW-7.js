//Задание 1 дз7
const strJs = 'js';
console.log(strJs.toUpperCase());


//Задание 2 дз7
const fruits = ["apple", "banana", "apricot", "orange"];
const searchAp = 'ap';

fruits.forEach((fruit) => {
    if (fruit.toLowerCase().startsWith(searchAp.toLowerCase())) {
        console.log(fruit);
    }
});

//Задание 3 дз7
let average = 7.4;
console.log(Math.floor(average));
console.log(Math.ceil(average));
console.log(Math.round(average));

//Задание 4 дз7
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max (52, 53, 49, 77, 21, 32));

//Задание 5 дз7
let num = Math.random() * 10;
console.log(Math.floor(num) + 1);

//Задание 6 дз7
const returnRandomNum = (n) => {
    const length = Math.floor(n / 2);
    let arr = [];

    for (let i = 0; i < length; i++) {
        const randomNum = Math.floor(Math.random() * n);
        arr.push(randomNum);
    }
    
    return arr;
};
console.log(returnRandomNum(10));


//Задание 7 дз7
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInRange(1,7));

//Задание 8 дз7
let findDate = new Date();
console.log(findDate);

//Задание 9 дз7
let currentDate = new Date();
let days73 = 73 * 24 * 60 * 60 * 1000;
let daysFuture73 = new Date(currentDate.getTime() + days73);

console.log(daysFuture73);

//Задание 10 дз7
const formatDate = (date) => {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = days[date.getDay()];

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    const formattedDate = `Дата: ${dayOfMonth} ${month} ${year} — это ${dayOfWeek}.`;
    const formattedTime = `Время: ${hours}:${minutes}:${seconds}`;

    return `${formattedDate}\n${formattedTime}`;
};

let myDate = new Date();
console.log(formatDate(myDate));
