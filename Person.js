class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    tellMyname() {
        console.log(`I am ${this.name}`)
    }

    tellMyage() {
        console.log(`I am ${this.age} years olds`);
    }
}

const Person1 = new Person("Jonh", 40) 
Person1.tellMyname();
Person1.tellMyage();

const Person2 = new Person("Mary", 35)
Person2.tellMyname();
Person2.tellMyage();
