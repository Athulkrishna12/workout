var readline  = require ('readline-sync');
let num1 = readline.questionInt('Enter a number: ');
let num2 = readline.questionInt('Enter another number: ');
if(num1>num2){
    console.log("the largest number is:" + num1);

    
}
else{
    console.log("the largest number is:" + num2);
}