//Угадай число ДЗ
function guessTheNumber() {
   const secretNumber = Math.floor(Math.random() * 100) + 1;
   let attempts = 0;
   let guessed = false;

   alert("Добро пожаловать в игру 'Угадай число'!");
   alert("Я загадал число от 1 до 100. Попробуй угадать!");

   while (!guessed) {
       const guess = parseInt(prompt("Введите ваше число:"));

       if (isNaN(guess)) {
           alert("Пожалуйста, введите целое число.");
           continue; 
       }

       attempts++;

       if (guess < secretNumber) {
           alert("Загаданное число больше.");
       } else if (guess > secretNumber) {
           alert("Загаданное число меньше.");
       } else {
           alert(`Поздравляю! Вы угадали число за ${attempts} попыток!`);
           guessed = true;
       }
   }
}

//Задание 1 дз5
function min(a, b) {
    if (a <= b) {
       return a;
    } else {
       return b;
    }
 }
 console.log(min(4, 8));
 console.log(min(6, 6));
 
 //Задание 2 дз5
 function isEven(number) {
    return number % 2 === 0 ? 'Число четное' : 'Число нечетное';
 }
 console.log(isEven(4));
 console.log(isEven(3));
 

 
 //Задание 3 дз5
 function printSquare(number) {
    const square = number * number;
    console.log(`Квадрат числа ${number} равен ${square}`);
 }
 
 function getSquare(number) {
    return number * number;
 }
 
 printSquare(10); 
 
 const squaredValue = getSquare(3);
 console.log(`Результат: ${squaredValue}`);  
 

 //Задание 4 дз5
 function askAge() {
    const ageInput = prompt("Сколько вам лет?");
 
    if (ageInput === null || ageInput.trim() === "") {
        console.log("Вы ничего не ввели.");
        return;
    }
 
    const age = parseInt(ageInput);
 
    if (isNaN(age)) {
        console.log("Вы ввели неправильное значение.");
    } else if (age < 0) {
        console.log("Вы ввели неправильное значение.");
    } else if (age >= 0 && age <= 12) {
        console.log("Привет, друг!");
    } else {
        console.log("Добро пожаловать!");
    }
 }
 
 askAge();
 

 //Задание 5 дз5
 function multiplyNumbers(c, d) {
    const numC = Number(c);
    const numD = Number(d);
 
    if (isNaN(numC) || isNaN(numD)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return numC * numD;
    }
 }
 
 console.log(multiplyNumbers(1, 2));       
 console.log(multiplyNumbers("3", "4"));  
 console.log(multiplyNumbers(5, "abc"));
 

 //Задание 6 дз5
 function cubeNumber() {
    const input = prompt("Введите число:");
 
    if (input === null || input.trim() === "") {
        return "Вы ничего не ввели.";
    }
 
    const number = Number(input);
 
    if (isNaN(number)) {
        return 'Переданный параметр не является числом';
    } else {
        const cube = number ** 3;
        return `${number} в кубе равняется ${cube}`;
    }
 }
 
 console.log(cubeNumber());
 

 //задание 7 дз5
 const circle1 = {
    radius: 3, 
 
    getArea() {
        return Math.PI * this.radius ** 2;
    },
 
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
 };
 
 const circle2 = {
    radius: 7, 
 
    getArea() {
        return Math.PI * this.radius ** 2;
    },
 
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
 };
 
 console.log("circle1:");
 console.log("Площадь:", circle1.getArea());          
 console.log("Периметр:", circle1.getPerimeter());    
 
 console.log("circle2:");
 console.log("Площадь:", circle2.getArea());         
 console.log("Периметр:", circle2.getPerimeter()); 


