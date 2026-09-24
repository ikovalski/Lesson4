//Вывести сегодняшнюю дату в формате:
//День/Месяц/Год Часы:Минуты:Секунду - Например 02/05/2026 22:15:30

const now: Date = new Date();
const date: string = now.getDate().toString().padStart(2, "0");
const month: string = (now.getMonth() + 1).toString().padStart(2, "0");
const year: number = now.getFullYear();
const hour: string = now.getHours().toString().padStart(2, "0");
const min: string = now.getMinutes().toString().padStart(2, "0");
const sec: string = now.getSeconds().toString().padStart(2, "0");

console.log(`${date}/${month}/${year} ${hour}:${min}:${sec}`);
