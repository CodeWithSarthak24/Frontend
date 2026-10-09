// Example:

console.log("Rohit">"Rahit");

console.log(10 < "6"); // "6" is converted to number 6

console.log("Microsoft"<"Infosys");

console.log("Microsoft">"Microsofz");

// console.log(10<true);

// Operator Precedence

console.log(10 + 20 * 5); // 110 not 150
console.log((10 + 20) * 5); // 150

console.log("-------------");

// 100 (it stops at 'p')
console.log(parseInt("100px"));

// NaN (it stops at 'c')
console.log(parseInt("c100px"));

// NaN (it stops at 'c')
console.log(parseFloat("c100px"));

// 100 (it stops at 'p')
console.log(parseFloat("100px"));

// 100.01 (it stops at 'x')
console.log(parseFloat("100.01x"));