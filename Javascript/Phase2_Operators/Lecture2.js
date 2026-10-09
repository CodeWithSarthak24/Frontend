// TypeCasting

let num = 10;
let str = String(num);
console.log(typeof num + " " + typeof str);;

let x = "23";
let y = Number(x);
console.log(typeof x + " " + typeof y);

// NaN: Not a number(Type of it is number)

let z = "120rr";
let a = Number(z);

console.log(a);

let result = true;
let logic = Number(result);
console.log(logic);

let login = false;
let logic2 = Number(login);
console.log(logic2);

console.log(Number("Hello"));
console.log(Number(true));
console.log(Number("Hello45"));

console.log("----------");

console.log(Number(null));
console.log(Number(undefined));

// null--> 0
// undefined-->NaN 

console.log(Boolean(0));
console.log(Boolean("ty"));
console.log(Boolean(null));
console.log(Boolean(""));

console.log("----------");

// Problem:

let ans1 = 0.1;
let ans2 = 0.3;
let ans3 = ans1 + ans2;
console.log("Answer: " + ans3);

console.log("----------");

// 1: null is loosely equal to undefined only

console.log(null == undefined);
console.log(null === undefined);
console.log(null == 0);
console.log(null == "");
console.log(null == false);
console.log(null == true);

console.log("----------");

// In this case : >,<,>=,<= 
// (null --> number, undefined --> NaN)

console.log(null >= 0);
console.log(null <= 0);
console.log(null > 0);
console.log(null < 0);
console.log(null >= undefined);
console.log(undefined >= 0);

console.log("----------");

// Chaining Operator

let obj = {
    name: "Sarthak sen",
    age:24,
    address: {
        city: "Pune"
    }
};

console.log(obj.name);
console.log(obj.address.city);

console.log(obj.address?.city);
console.log(obj.address?.pincode);
