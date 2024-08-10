interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    breed: string;
}

// const myDog: Dog = {
//     name: "Rex",
//     age: 5,
//     breed: "Labrador"
// };

// let dataString: Dog 

// dataString = {
//     name: "Rex",
//     age: 5,
//     breed: "Labrador"
// };


// class Animal {
//     constructor(public name: string, public age: number) {}

//     speak(): void {
//         console.log(`${this.name} makes a noise.`);
//     }
// }

// class Dog extends Animal {
//     constructor(name: string, age: number, public breed: string) {
//         super(name, age);
//     }

//     speak(): void {
//         console.log(`${this.name} barks.`);
//     }
// }

// const myDog = new Dog("Rex", 5, "Labrador");
// myDog.speak(); 


interface Vehicle {
    brand: string; 
    speed: number; 
    start(): void; 
    stop(): void; 
}

class Car implements Vehicle {
    brand: string;
    speed: number;

    constructor(brand: string, speed: number) {
        this.brand = brand;
        this.speed = speed;
    }

    start(): void {
        console.log(`${this.brand} car started.`);
    }

    stop(): void {
        console.log(`${this.brand} car stopped.`);
    }
}

const myCar = new Car("Toyota", 120);
myCar.start(); 
myCar.stop(); 
