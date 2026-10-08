// Call by Value

let value = 450;

function changeValue(newValue) {
    newValue = 500;
}

changeValue(value);
console.log(value);

// Call by Reference

let obj = {
    name: "Sarthak Sen",
    age: 24,
    isStudent: true
};

function changeObject(reference) {
    reference.name = "Senior Developer";
    reference.age = 25;
}

changeObject(obj);
console.log(obj.name); // Senior Developer
console.log(obj.age); // 25
