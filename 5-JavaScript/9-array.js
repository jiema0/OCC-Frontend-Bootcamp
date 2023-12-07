// intro to arrays
// array is a data type
let superheroes = ['Superman', 'Batman', 'Joker', 'Spiderman', 'Wonder woman'];

console.log("Hero 1 is :", superheroes[0]);
console.log("Hero 5 is :", superheroes[4]);

superheroes[2] = "Dr. Strange";
console.log(superheroes);

// Push method - adding a new value to the array
superheroes.push("Joker");
console.log(superheroes);

// Pop method - removing the last value 
superheroes.pop()
console.log(superheroes);

// array iteration
for (let i = 0; i < 5; i++) {
    console.log("Hero", i + 1,"is", superheroes[i]);
}

// forEach method
superheroes.forEach(function(hero){
    console.log(hero);
});

// Array method
console.log("The length of array is", superheroes.length) ;

console.log("The index of Batman is", superheroes.indexOf("Batman")) ;

console.log("Joined Array: ", superheroes.join('-'));

let slicedArray = superheroes.slice(1, 3);
console.log(slicedArray);