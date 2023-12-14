//Inheritance
class Animal {
    constructor(name) {
        this.name = name
    }

    eat() {
        console.log(`${this.name} is eating. `);
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof woof!");
    }
}

class Goat extends Animal {
    bark() {
        console.log("Meeeeee!");
    }
}

const myDog = new Dog("Luna")
myDog.bark();
myDog.eat();


const myGoat = new Goat("Pina")
myGoat.bark();
myGoat.eat();