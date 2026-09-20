const num1: number = 7.9078;
const num2: number = 2.09754;

//Написать программу, которая выведет целочисленную сумму двух чисел,
// для оптимизации - сделать проверку на целое число

const newNum = num1 + num2;

console.log(Number.isInteger(newNum) ? newNum : Math.round(newNum));
