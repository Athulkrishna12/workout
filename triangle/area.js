var readline =require('readline-sync');
let breath = readline.questionInt('enter the breath of the triangle: ');
let height = readline.questionInt('enter the height of the triangle: ');
let area = (breath*height)/2;
console.log("the area of the triangle is :" +area);
