// functions - set of instrutions
function greet(){
    console.log("Instruction #1");
    console.log("Instruction #1");
    console.log("Instruction #1");
    console.log("Happy Holiday!");
}

greet();


//function hoisting 
//1. function declaration - function can be defined later
functionDeclaration();
function functionDeclaration(){
    console.log("Hello World! I'm a function declaration!");
}

//2. function expression
const functionExpression = function() {
    console.log("Hello Universe! I'm a function expression!");
}
functionExpression(); // recommend to use this to avoid use the function before defining it 
// Additionally...
// Function expressions - flexible and great for dynamic situations
// Function declarations - reliable and hoisted for easy use

//function with parameters
function greet(name){
    console.log(`Hello, ${name}`);
}
// Think of parameter as the placeholder, meanwhile the argument is the actual value we're putting in the function parameter.
greet("Jie")

//function with a return value - no code execute after return
function sum(a, b){
    return a + b
}
console.log("sum:", sum(1, 4));



// Anonymous Function - no direct name - anonymous is "function () {}
let greet2 = function () {
    console.log('Hi Hi!')
}
greet2()

// Higher order function 
function calculate(operation, x, y) {
    return operation(x, y)
}

// callback function
function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

//using higher-order function
let sum1 = calculate(add, 1, 5)
let subtract1 = calculate(subtract, 10, 5)

console.log('Result of addition:', sum1);
console.log('Result of substraction:', subtract1);