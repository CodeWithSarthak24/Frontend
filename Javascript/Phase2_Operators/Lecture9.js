console.log("String And Dates");


const str1 = "Java"; // using Double Quotes
const str2 = 'Python'; // using Single Quotes
const str3 = `React`; // using backticks

console.log(str1 + " " + str2 + " " + str3);

const str4 = `Js
Node`;

console.log(str4);

console.log(str1.length);
console.log(str1[0]);

let price = 4000;
let str = `Course fees : ${price}`;

console.log(str);

let course = `Next Js`;
course[0] = `Q`; // Strings are Immutable
console.log(course);

let subject = `javascript`;

let lower = subject.toLowerCase();
console.log(lower);

let upper = subject.toUpperCase();
console.log(upper);

// Finding Substrings

let address = `Hyderabad`;

console.log(address.charAt(0));
console.log(address.indexOf(`H`));
console.log(address.lastIndexOf(`a`));
console.log(address.concat(`, Pune`));
console.log(address.indexOf(`bad`));
console.log(address.includes(`der`));
console.log(address.includes(`un`));

// Splitting a String into an Array

let job_role = `Ai,Full Stack,Devops`;

console.log(job_role.split(`,`));

let age = `23 56 56 23 68`;

console.log(age.split(` `));

// The JavaScript Date Object

const now = new Date();
console.log(now); 

const currentTimestamp = now.toJSON();
console.log(currentTimestamp);

const currentTimestamp2 = now.toString();
console.log(currentTimestamp2);

const currentTimestamp3 = now.toDateString();
console.log(currentTimestamp3);

const currentTimestamp4 = now.toISOString();
console.log(currentTimestamp4);

const currentTimestamp5 = now.toUTCString();
console.log(currentTimestamp5);

const currentTimestamp6 = now.toLocaleTimeString();
console.log(currentTimestamp6);

// Create a Specific Date (The Recommended Way)

//  You provide the components as numbers in this order:
//  year, month, day, hours, minutes, seconds, ms.

const myDate = new Date(2026, 9, 18, 14, 40, 11, 125);

console.log(myDate.toString());

// The issue with your code is that the month parameter in JavaScript's Date constructor is zero-indexed,
// meaning months are counted from 0 (January) to 11 (December).
// When you pass 10 as the month, JavaScript interprets it as November, not October

console.log("Date!");

let min = now.getMinutes();
console.log(min);

let mon = now.getMonth();
console.log(mon);

// Similarily...

console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getDay());  // sunday = 0, monday = 1 and so on...
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

const n = Date.now();
console.log(n);

const d = new Date(1792315417816);
console.log(d); // UTC Format
console.log(d.toString());

const d2 = new Date(0);
console.log(d2.toString());