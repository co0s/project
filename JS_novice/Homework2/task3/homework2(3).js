let n = 0;
let m = 100

let range = Math.abs(m-n);
let random1 = Math.round(Math.random() * range);
let random2 = Math.round(Math.random() * range)

let min = Math.min(n, m);

console.log(min + random1);
console.log(min + random2);

if (random1 > random2) {
    console.log(">");
  } else if (random1 < random2) {
    console.log("<");
  } else if (random1 >= random2) {
    console.log("≥");
  } else if (random1 <= random2) {
    console.log("≤");
  } else if (random1 === random2) {
    console.log("===");
  } else if (random1 !== random2) {
    console.log("!=");
  }