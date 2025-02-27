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



//Простая арифметика
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
