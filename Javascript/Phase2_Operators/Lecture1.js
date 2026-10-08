// JavaScript Operators

// Arithmetic Operators

let a = 10;
let b = 5;
console.log("Addition: " + (a + b)); // 15
console.log("Subtraction: " + (a - b)); // 5
console.log("Multiplication: " + (a * b)); // 50
console.log("Division: " + (a / b)); // 2
console.log("Modulus: " + (a % b)); // 0        

// Assignment Operators

let c = 10;

c += 5;
console.log("c after += 5: " + c); // 15

c -= 3;
console.log("c after -= 3: " + c); // 12

c *= 2;
console.log("c after *= 2: " + c); // 24

c /= 2;
console.log("c after /= 2: " + c); // 12


// Comparison Operators

let d = 10;
console.log("d == 10: " + (d == 10)); // true
console.log("d === 10: " + (d === "10")); // false
console.log("d != 5: " + (d != 5)); // true
console.log("d !== 10: " + (d !== 10)); // false   
console.log("d > 5: " + (d > 5)); // true
console.log("d < 15: " + (d < 15)); // true
console.log("d >= 10: " + (d >= 10)); // true
console.log("d <= 10: " + (d <= 10)); // true


// Logical Operators

let e = true;
let f = false;

console.log("e && f: " + (e && f)); // false
console.log("e || f: " + (e || f)); // true
console.log("!e: " + (!e)); // false
console.log("!f: " + (!f)); // true

// Bitwise Operators

let  g = 10, h = 12;

console.log(g & h); // 8
console.log(g | h); // 14
console.log(g ^ h); // 6
console.log(~h); // ~x = -(x + 1) = -13
console.log(~-g); // 9

// Ternary Operator

let age = 17;
let canVote = (age >= 18) ? "Eligible" : "Not Eligible";

console.log("Voting Eligibility: " + canVote); // Not Eligible

// Comma Operator

let x = (1, 2, 3);
console.log("Value of x: " + x); // 3

let  y = 10, z = 23;
console.log("Claude" + (y * z)); // 230

// Unary Operators

let num = 5;

console.log("num: " + num); // 5
console.log("++num: " + ++num); // 6
console.log("num++: " + num++); // 6
console.log("num: " + num); // 7

console.log("num: " + (++num + --num + 10));  // 25