// JavaScript Looping Statements

// 1. JavaScript for Loop

console.log("JavaScript for Loop!");

for (let i = 0; i <= 4; i++) {
    console.log(i);
}

// 2. JavaScript while Loop

console.log("JavaScript while Loop!");

let j = 5;
while (j <= 8) {
    console.log(j);
    j++;
}

// 3. JavaScript do...while Loop

console.log("JavaScript do...while Loop!");

let k = 9;
do {
    console.log(k);
    k++
} while (k <= 10);

// JavaScript Control Flow Statements

// 1. JavaScript if Statement

console.log("JavaScript if Statement");

let login = true;
if (login == true) {
    console.log("Login Sucess");
}

// 2. JavaScript if...else Statement

let sign_in = false;
if (sign_in === true) {
    console.log("SignIn Success");
} else {
    console.log("SignIn Failed");
}

// 3. JavaScript if...else if...else Statement

let age = 20;

if (age <= 12) {
    console.log("Child");
} else if (age > 12 && age < 23) {
    console.log("Teenage");
} else {
    console.log("Adult");
}

// 4. JavaScript Switch Statement