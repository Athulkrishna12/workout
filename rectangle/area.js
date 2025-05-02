var readline = require('readline-sync');
let length = readline.questionInt('enter the length of the rectangle: ');
let breath = readline.questionInt('enter the breath of the reactangle; ');
let area = length*breath;
console.log("the area of the rectangle is :" +area);;
