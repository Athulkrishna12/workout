var readline = require('readline-sync');
let length = readline.questionInt('enter the length of the square: ');
let area = length*length;
console.log("the area of the square is: " + area);