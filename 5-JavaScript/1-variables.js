console.log("Hello World!"); // every line is a statement

/* This is how to comment a multiple lines of code */
// This is how to comment single line of code

// empty line/blank spaces is ignored; 


// Statements: JavaScript code is composed of statements that perform specific actions. Each statement typically ends with a semicolon (;), although it is not always required.

// Comments: You can add comments in JavaScript to provide explanations or make notes within the code. There are two types of comments: single-line comments, starting with //, and multi-line comments, enclosed between /* and */.

// Case sensitivity: JavaScript is case-sensitive, meaning that uppercase and lowercase letters are treated differently. For example, "variable" and "Variable" would be considered as two separate variables.

// Whitespace: JavaScript ignores spaces, tabs, and line breaks (collectively called whitespace) that are not necessary for code execution. However, whitespace can enhance code readability.

// Blocks: Code blocks in JavaScript are enclosed in curly braces ({}) and are used to group statements together. Blocks are often used in control structures like loops and conditional statements.

/* 
datatypes: 
    variables
        let
        var
        const
*/

// Variables
let name = 'Jay!111'
console.log('This is the name of the user:', name) 

let last_name  = 'Smith'
let first_name = 'John'
console.log('The full name is', first_name, last_name) 

var myFavoriteGame = "Animal Crossing"
console.log("This is my favorite game:", myFavoriteGame)

// ; is not necessary but good to have 

// difference btw let amd var: scope
if (true) {
    let myFavoriteDrink = 'water' 
    console.log(myFavoriteDrink)
    var mySecondFavDrink = 'tea' // not recommended, use with caution
}; 

// console.log(myFavoriteDrink) // local variable 
console.log(mySecondFavDrink) // global variable 

//short for constant
const gravity = 9.8
  





