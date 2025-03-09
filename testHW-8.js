//Задание 1 ДЗ8
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

people.sort((a, b) => a.age - b.age);

console.log(people);   



//Задание 2 ДЗ8
function isPositive(num) {
    return num > 0; 
}

function isMale(person) {
    return person.gender === 'male'; 
}

function filter(arr, ruleFunction) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) { 
            output.push(arr[i]); 
        }
    }
    return output; 
}

console.log(filter([3, -4, 1, 9], isPositive));
    
const peopleSecond = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];
    
console.log(filter(peopleSecond, isMale));


//Задание 3 ДЗ8
const intervalId = setInterval(() => {
    console.log(new Date()); 
}, 3000); 

setTimeout(() => {
    clearInterval(intervalId); 
    console.log('30 секунд прошло'); 
}, 30000); 



//Задание 4 ДЗ8
function delayForSecond(callback) {
    setTimeout(() => {
         callback();
}, 1000);
}
delayForSecond(function () {
   console.log('Привет, Глеб!');
}) 


//Задание 5 ДЗ8
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));