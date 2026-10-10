// JavaScript Return Statement

// How does the Return Statement Work?

// Case 1: Using Return Without a Value

function noValue() {
    return;
}

let a = noValue();
console.log(a);

console.log(noValue());

// Case 2: Returning Value from function

function withValue() {
    return 10 * 2;
}

let b = withValue();
console.log(b);

console.log(withValue());

// Case 3: Returning Objects, Arrays, and Functions

function employees(id, profileName) {
    return {
        id: id,
        jobRole: profileName
    };
}

let sarthak = employees(12498, "Full Stack");

console.log(sarthak);

function noRuturn() { }

console.log(noRuturn);

function square(num) {
    return num * num;
}

console.log(square(12));