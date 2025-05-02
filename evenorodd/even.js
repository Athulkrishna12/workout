var readline = require('readline-sync');
let num1 = readline.questionInt('Enter a number: ');
if(num1 % 2 == 0){
    console.log("The number is even.");
}
else{
    console.log("The number is odd.");
}