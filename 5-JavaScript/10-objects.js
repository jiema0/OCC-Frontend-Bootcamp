// Notes: Objects, arrays , dates and functions are the non-primitive data types. Unlike the number and string that just store value directly, these are reference type. They store references to the location in memory. (Sounds complicated so lets just say they are a reference to a data)

const person = {
    firstName: "Kim",
    lastName: "Doe",
    nickname: "KD",
    age: 28,
    height: "5'6",
    hobbies: ["reading", "dancing", "gaming", "coding"],

//method
greet: function(){
    // console.log("Hello, my name is", this.firstName);
    console.log(`Hellow, my name is ${this.firstName} and I'm ${this.age}`);
    }

};


//dot notation
console.log(person.firstName);
console.log(person.hobbies);
person.greet();


// adding new properties
person.nationality = "Chinese"
console.log(person.nationality);

// adding new method
person.talkHobbiess = function(){
    console.log(`I like ${person.hobbies[2]}`);
}
person.talkHobbiess()

// OOP object-oriented programming
const movie = {
    title: 'Harry Potter',
    genre: 'Advanture',
    cast: ['Dan', 'Emma'],
    series: true
}

person.faveriteMovie = movie;
console.log(person.faveriteMovie.genre);

//Destructuring Objects
// long to extract every elements
// const lastName = person.lastName;
// const nickname = person.nickname;

const {lastName, nickname, age} = person; 
console.log(lastName, nickname, age);

const {height} = person;
console.log(height);


