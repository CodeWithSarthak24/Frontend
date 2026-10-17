console.log("Math Function");

let a = 10, b = 20.1091;
let c = b.toFixed(2); // after deciaml

console.log(c + " " + typeof c);
console.log(b.toPrecision(4)); // from starting
console.log(b.toString);

let x = new Number(10);

let y = new Number(10);

console.log(x == y);
console.log(x === y);

let obj1 = {
    name : 'Sarthak'
}

let obj2 = {
    name : 'ALex'
}

console.log(obj1 === obj2);

let obj3 = obj2;

console.log(obj3 === obj2);

let q = 90, o = q;

console.log(q === o);

console.log(Math.PI);
console.log(Math.LN10);

console.log(Math.floor(10.8)); // lower value
console.log(Math.ceil(10.8)); // upper value

console.log(Math.sqrt(10));
console.log(Math.max(199,200,1000));
console.log(Math.random());

console.log(Math.abs(-19));
console.log(Math.abs(56));

console.log(Math.round(10.6));
console.log(Math.round(15.2));
console.log(Math.round(15.2));

console.log(Boolean ({}));
console.log(Boolean ([]));
console.log(Boolean ({name : 'Sarthak'}));
console.log(Boolean (null));
console.log(Boolean (0));
console.log(Boolean (undefined));
console.log(Boolean (NaN));
console.log(Boolean (new Number(60)));


// Range [0,1) : It will generate random value btw 0 and 1, where 0 is included but 1 is not included.

console.log(Math.random() * 10); // range : (0 - 9)


console.log(Math.floor(Math.random() * 10));

// range : (1 - 10)

 console.log(Math.floor(Math.random() * 10) + 1);


// if i mul by 10 i get value btw : 0 - 9
// but if i mul by 6 i get value btw : 0 - 5
// range : (1 - 6)

 console.log(Math.floor(Math.random() * 6) + 1);  

 // range : (15 - 25)

 //  it will generate value btw : 0 - 10 and then add 15 into them
  console.log(Math.floor(Math.random() * 11) + 15); 
  
  
  // Formula : Math.floor(Math.random()*(max-min+1))+min

  // OTP Generate: (4 - digit number i.e., 1000 - 9999)

  console.log(Math.floor(Math.random() * (9999 - 1000 + 1)) +  1000); 


