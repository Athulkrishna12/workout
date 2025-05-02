var readline = require('readline-sync');
let variable = readline.question('Enter a variable: ');

let length = readline.questionInt('Enter the length of the rectangle: ');
let breath = readline.questionInt('Enter the breath of the rectangle: ');
let rectangle = parseInt(length) * parseInt(breath);
let length = readline.questionInt('Enter the length of the square: ');
let square = length * length;
let length = readline.questionInt('Enter the radius of the circle: ');
let circle = 3.14 * length * length;
let length = readline.questionInt('Enter the base of the triangle: ');
let triangle = (length * breath) / 2;

if(
    variable == "rectangle"
){
   
    console.log("The area of the rectangle is: " + rectangle);
}
else if(
    variable == "square"
){
    let length = readline.questionInt('Enter the length of the square: ');
    console.log("The area of the square is: " + square);
}
else if(
    variable == "circle"
){
    let length = readline.questionInt('Enter the radius of the circle: ');
    console.log("The area of the circle is: " + circle);
}
else if(
    variable == "triangle"
){
    let length = readline.questionInt('Enter the base of the triangle: ');
    let breath = readline.questionInt('Enter the height of the triangle: ');
    console.log("The area of the triangle is: " + triangle);
}
else{
    console.log("Invalid variable. Please enter rectangle, square, circle, or triangle.");
}