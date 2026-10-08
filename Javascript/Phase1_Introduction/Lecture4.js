                        // Variables and Data Types in JavaScript


// Primitives Data Types

let age = 24;
console.log(typeof age); // number

let name = "Sarthak Sen";
console.log(typeof name); // string 

let isStudent = true;
console.log(typeof isStudent); // boolean

let phoneNumber = 1234567890n;
console.log(typeof phoneNumber); // bigint

let height = 5.9;
console.log(typeof height); // number

let jobTitle = "Software Engineer";
console.log(typeof jobTitle); // string

let gender = 'Male';
console.log(typeof gender); // string

let  location;
console.log(typeof location); // undefined

let salary = null;
console.log(typeof salary); // object

// Non-Primitives Data Types

function greet() {
    console.log("Hello, welcome to JavaScript!");
}

greet();

console.log(typeof greet); // function

let array = [1, 2, 3, 4, 5];
console.log(array+ " " + " type: " + typeof array); // object

let person = {
    name: "Sarthak Sen",
    age: 24,
    isStudent: true
};
console.log("type: " + typeof person); // object