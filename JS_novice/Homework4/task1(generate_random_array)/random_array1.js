let arr = [];

let n = -3;
let m = -10;
let count = 42;

for (let i = 0; i < count; i++) {
    arr.push(Math.round(Math.random() * (m - n) + n));
}

console.log(arr);