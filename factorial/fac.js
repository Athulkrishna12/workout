var readline = require('readline-sync');
let num1 = readline.questionInt('Enter a number: ');
function factorial(num1){
    let fact = 1;
    for(let i = 1; i <= num1; i++){
        fact *= i;
    }
    return fact;
}
let result = factorial(num1);
console.log("The factorial of " + num1 + " is: " + result);