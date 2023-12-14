// POlymorphism
// overwrite parental function
class Animal {
    makeSound() {
        return " The animal makes a noise"
    }
}

class Dog extends Animal {
    makeSound() {
        return super.makeSound() + ", woof woof!"
    }
}

class Cat extends Animal {
    makeSound() {
        return super.makeSound() + ", meow meow!"
    }
}

const dog = new Dog();
console.log(dog.makeSound());

const cat = new Cat();
console.log(cat.makeSound());

