//Задание 1 дз6
const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
    console.log(numbs[i]); 
    if (numbs[i] == 10) break; 
}

//Задание 2 дз6
const figures = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < figures.length; i++) {
    if (figures[i] === 4) {
        console.log(`Индекс числа 4: ${i}`);
        break; 
    }
}

//Задание 3 дз6
const numbsSecond = [1, 3, 5, 10, 20];
let joinedSecond = numbsSecond.join(' ');
console.log(joinedSecond);

//Задание 4 дз6
const result = [];

for (let i = 0; i < 3; i++) {
    const row = [];
    
    for (let j = 0; j < 3; j++) {
        row.push(1); 
    }
    
    result.push(row);
}

console.log(result);

//Задание 5 дз6
let numbsThird = [1, 1, 1];
numbsThird.push(2, 2, 2);
console.log(numbsThird);


//Задание 6 дз6
const arrSecond = [9, 8, 7, 'a', 6, 5];
arrSecond.sort((a, b) => a - b);

const filterArrSecond = arrSecond.filter((num) => typeof num === 'number');

console.log(filterArrSecond); 

//Задание 7 дз6
const game = [9, 8, 7, 6, 5];

const answer = prompt("Угадай число");
const userNumber = Number(answer);

if (isNaN(userNumber)) {
    alert("Пожалуйста, введите число!");
} else if (game.includes(userNumber)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}


//Задание 8 дз6
const str = 'abcdef';
const reversedStr = str.split('').reverse().join('');
console.log(reversedStr); 

//Задание 9 дз6
const arrayFirst = [
    [1, 2, 3],
    [4, 5, 6]
];
const arraySecond = [ ...arrayFirst[0], ...arrayFirst[1] ];
console.log(arraySecond);


//Задание 10 дз6
const numbers = [3, 7, 2, 9, 5, 1, 8, 4, 6, 10];

for (let i = 0; i < numbers.length - 1; i++) {
    const sum = numbers[i] + numbers[i + 1];
    
    console.log(`Сумма элементов ${numbers[i]} и ${numbers[i + 1]} равна ${sum}`);
}

//Задание 11 дз6
function squareArray(numbers) {
    const squaredNumbers = numbers.map(number => number ** 2);
    console.log(squaredNumbers);
  }
  
  const inputArray = [1, 2, 3, 4, 5];
  squareArray(inputArray);


//Задание 12 дз6
function getStringLengths(stringsArray) {
    return stringsArray.map((str) => str.length);
}

const words = ["table", "chair", "book", "cat"];
const lengths = getStringLengths(words);

console.log(lengths); 


//Задание 13 дз6
function getNegativeNumbers(arrayOfNumbers) {
    return arrayOfNumbers.filter((number) => number < 0);
    }
    
const array = [3, -5, 10, -2, 0, -8, 7];
const negativeNumbers = getNegativeNumbers(array);
    
console.log(negativeNumbers); // [-5, -2, -8]


//Задание 14 дз6
const randomNumbers = [];

for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * 11); 
    randomNumbers.push(randomNumber);
}

const evenNumbers = randomNumbers.filter((number) => number % 2 === 0);

console.log("Исходный массив:", randomNumbers);
console.log("Массив с чётными числами:", evenNumbers);


//Задание 15 дз6
const randomValues = [];
for (let i = 0; i < 6; i++) {
  randomValues.push(Math.floor(Math.random() * 10) + 1);
}

const average = randomValues.reduce((sum, current) => sum + current, 0) / randomValues.length;

console.log(average);