                     // Variables and Data Types in JavaScript

let age = 21;
console.log(age);

age = 19; // reassigning the value of age
console.log(age);

if (true) {
    let age3 = 30;
    console.log(age3); // accessing the variable age3 declared inside the if block will not result in an error 
    // because it is accessible inside the block
}

 // console.log(age3);
  // accessing the variable age3 declared inside the if block will result in an error 
  // because it is not accessible outside the block

  function printAge() {
    console.log(age); // accessing the variable age declared outside the function
}

printAge();