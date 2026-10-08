                    // Call by Value vs Call by Reference:

let age = 24; // primitive data type
let newAge = age; // copy of the value of age is assigned to newAge

console.log("Age: " + age); // 24
console.log("New Age: " + newAge); // 24

let person = { // non-primitive data type
    name: "Sarthak Sen",
    age: 24,
    isStudent: true
};

let newPerson = person; // reference of the person object is assigned to newPerson

console.log("Access : " + newPerson.name); // Sarthak Sen
console.log("Update : " + (newPerson.name = "Senior Developer")); // Senior Developer

console.log("Access : " + person.name); // Sarthak Sen
