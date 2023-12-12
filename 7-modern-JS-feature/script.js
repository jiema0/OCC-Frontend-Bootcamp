// Arrow Function  -- another way to write function which is concise
// const myFunction = () => {}
// arrow function is pretty common in the advance concepts and frameworks of JS.

const greet = () => {
    console.log('Merry Xmas!');
};
greet();


//enhanced object literals
const person = {
    name: "Luna",
    age: 7,
    greeting() {
        console.log(`My name is ${this.name}.`);
    }
}

person.greeting();

// spread and rest operators -- convienent way to operate array and function
// spread
function sum(x,y,z) {
    return x + y + z
};

const numbers = [1, 2, 3]
console.log(sum(...numbers));

//rest -- opposite to spead, rest are in an array
function myFunction(firstArgument, ...restOfArgs) {
    console.log(firstArgument);
    console.log(restOfArgs);
};

myFunction('first', 'second', 'third', 'fourth');

// Common JS Built-in Methods
// Arrays
// filter
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
const even = numbers2.filter((number) => number % 2 == 0)
console.log(even);
const odd = numbers2.filter((number) => number % 2 == 1)
console.log(odd);

// String
// split
const message = "Hello, dear Universe!"
const words = message.split(' ')
console.log(words);

// includes
const sentence = "The quick brown fox jumps over the lazy dog."
const containsWord = sentence.includes('fox')
console.log(containsWord);

// length
const sentenceLength = sentence.length;
console.log(sentenceLength);


// Object
const cat = {
    name: "Kim",
    age: 2,
    color: ["golden", "white"]
}

// keys
console.log(Object.keys(cat));

// values
console.log(Object.values(cat));

// entries
console.log(cat);
console.log(Object.entries(cat));

// Math
// max and min
const maxNumber = Math.max(10, 4, 6, 90)
console.log(maxNumber);

const minNumber = Math.min(10, 4, 6, 90)
console.log(minNumber);

// random -between 0 and 1
const randomValue = Math.random();
console.log(randomValue);

// round
console.log(Math.round(randomValue))

// floor
console.log(Math.floor(randomValue))

// ceil
console.log(Math.ceil(randomValue))

// Nested Math Methods
const randomNumber = Math.floor(Math.random() * 100)
console.log("random number between 1 to 100:", randomNumber);

// Other Methods
// Date
const currentDate = new Date();
console.log(currentDate);

const Xmas = new Date(2023, 11, 25)
console.log('When is Xmas?', Xmas);

// toFixed
const price = 12.3664233.toFixed(2)
console.log(price);

// toString
console.log(price.toString() + 1);

