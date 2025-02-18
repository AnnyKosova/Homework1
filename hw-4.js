//Задание 1
for (let i = 0; i < 2; i++) {
    console.log ("Привет");
}

//Задание 2
for (let a = 1; a <= 5; a++) {
    console.log(a);
}

//Задание 3
 for (let b =7; b <= 22; b++) {
    console.log(b);
}
 
 
//Задание 4
 const obj = {
    Nik : '200',
    Vasya : '300',
    Petya : '400'
 }
 
 for (let key in obj) {
   console.log(`${key}: ${obj[key]} долларов`);
 }
 
//Задание 5

 let n =1000;
 let num =0;
 while (n >= 50) {
    n /= 2;
    console.log(n);
    num++; 
 }
 console.log(`Количество циклов: ${num}`);
 
//Задание 6
 let dayFriday = 5;
 let allDay = 31;
 for (let c = dayFriday; c <= allDay; c += 7) {
    console.log(`Сегодня пятница, ${c}-е число. Необходимо подготовить отчет.`);
 
 }
