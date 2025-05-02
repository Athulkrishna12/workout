var readline = require('readline-sync');
let num1 = readline.questionInt('Enter a number: ');
let num2 = readline.questionInt('Enter another number: ');
let sum = parseInt(num1) + parseInt(num2);
console.log("The sum is: " + sum);
