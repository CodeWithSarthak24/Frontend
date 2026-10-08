                            // Variables and Data Types in JavaScript

console.log("Welcome Sarthak");

// Variables in JavaScript

name = "Sarthak";
console.log(name);

var age = 21;
console.log(age);

age = 19; // reassigning the value of age
console.log(age);

var age = 25; // redeclaring the variable age
console.log(age);

function printAge() {
    console.log(age); // accessing the variable age declared outside the function
}

/*
function printName() {
    var name2 = "John"; // declaring a new variable name inside the function
    console.log(name2); // accessing the variable name declared inside the function
}

console.log(name2); 
// accessing the variable name declared inside the function will result in an error
//  because it is not accessible outside the function
*/

if (true) {
    var age3 = 30;
}

console.log(age3);
 // accessing the variable age3 declared inside the if block will not result in an error because var is function-scoped, 
 // not block-scoped

 



