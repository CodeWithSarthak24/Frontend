// JavaScript Break and Continue

// Case 1: Using break in a for loop

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Breaking the loop at", i);
        break;
    }
    console.log(i);
}

// Case 2: Using break in a while Loop

let x = 10;
while (x <= 14) {
    if (x == 12) {
        console.log("Use Break: " + x);
        break;
    }
    console.log("X: " + x);
    x++;
}

// Using continue in a for Loop

for (let i = 20; i < 30; i++) {
    if (i % 2 !== 0) {
        continue; // Skips odd numbers
    }
    console.log("Even Number : " + i);
}


let y = 30;
while (y <= 40) {
    y++;
    if (y % 3 === 0) {
        continue; // Skips multiples of 3
    }
    console.log("Remaining Number : " + y);
}