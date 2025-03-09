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



//Простая арифметика ДЗ
function simpleArithmetic() {
    const gameSecond = () => {
        const mathOperators = ['+', '-', '*', '/'];
        const a = Math.floor(Math.random() * 10) + 1; 
        const b = Math.floor(Math.random() * 10) + 1; 
        const mathOperatorIndex = Math.floor(Math.random() * 4); 
        const operator = mathOperators[mathOperatorIndex]; 
        const question = `${a} ${operator} ${b}`; 
        let result = 0; 
     
        switch (operator) {
           case '+': 
              result = a + b;
              break;
           case '-':
              result = a - b;
              break; 
           case '*':
              result = a * b;
              break;  
           case '/':
              result = (a / b).toFixed(2); 
              break;
           default:
              break;
        }
     
        const userAnswer = parseFloat(prompt(`Решите задачу: ${question}`));
     
        if (isNaN(userAnswer)) {
           alert("Пожалуйста, введите число!");
           return; 
        }
     
        if (parseFloat(userAnswer) === parseFloat(result)) { 
           alert('Верно! 🎉');
        } else {
           alert(`Неверно. Правильный ответ: ${result}`);
        }
     };
     
     for (let i = 0; i < 4; i++) {
        gameSecond();
     }
}

//Переверни текст ДЗ
function turnTheTextOver() {
    alert("Добро пожаловать в игру 'Переверни текст'!");

    while (true) {
        const playerInput = prompt("Напиши текст:");

        if (/^[\p{L}]+$/u.test(playerInput)) {
            const reversedText = playerInput.split("").reverse().join("");
            alert(`Перевёрнутый текст: ${reversedText}`);
            break; 
        } else {
            alert("Пожалуйста, введите только буквы.");
        }
    }
}

//Викторина ДЗ
function startQuiz() {
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];
    let score = 0; 
    
    quiz.forEach((questionObj) => {
        alert(`${questionObj.question}\n${questionObj.options.join("\n")}`);
    
        const userAnswer = Number(prompt("Введите номер правильного ответа:"));
    
        if (userAnswer === questionObj.correctAnswer) {
            score++; 
        }
    });
    
    alert(`Вы ответили правильно на ${score} из ${quiz.length} вопросов.`);
}


//Игра «Камень, ножницы, бумага»
function stoneScissorsPaper() {
    let userAnswer = prompt('Выберите: «камень», «ножницы» или «бумага»').toLowerCase(); 

const variants = ["камень", "ножницы", "бумага"];

const choosingAcomputer = variants[Math.floor(Math.random() * variants.length)];

if (!variants.includes(userAnswer)) {
    alert("Ошибка! Пожалуйста, выберите «камень», «ножницы» или «бумага».");
} else {
    alert(`Ваш выбор: ${userAnswer}\nВыбор компьютера: ${choosingAcomputer}`);

    if (userAnswer === choosingAcomputer) {
        alert("Ничья! Выборы совпали.");
    } else if (
        (userAnswer === "камень" && choosingAcomputer === "ножницы") ||
        (userAnswer === "ножницы" && choosingAcomputer === "бумага") ||
        (userAnswer === "бумага" && choosingAcomputer === "камень")
    ) {
        alert(`Вы победили! ${userAnswer} побеждает ${choosingAcomputer}.`);
    } else {
        alert(`Вы проиграли! ${choosingAcomputer} побеждает ${userAnswer}.`);
    }
}
}
