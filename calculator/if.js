var readline = require('readline-sync');
let num1 = readline.questionInt('Enter a number: ');
let num2 = readline.questionInt('Enter another number: ');
let sum = parseInt(num1) + parseInt(num2);
let difference = parseInt(num1) - parseInt(num2);
let product = parseInt(num1) * parseInt(num2);
let division = parseInt(num1) / parseInt(num2);
let variable = readline.question('Enter a variable: ');
if(
    variable == "sum"
){
    console.log("The sum is: " + sum);
}
else if(
    variable == "difference"
){
    console.log("The difference is: " + differnce);
}
else if(
    variable == "product"
){
    console.log("The product is: " + product);
}
else if(
    variable == "division"
){
    console.log("The division is: " + division);
}   