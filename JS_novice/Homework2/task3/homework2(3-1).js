let n = 0;
let m = 100

let range = Math.abs(m-n);
let random1 = Math.round(Math.random() * range);
let random2 = Math.round(Math.random() * range)

let min = Math.min(n, m);

console.log('число1', min + random1);
console.log('число2', min + random2);

console.log('исходные числа ранвны', n === m);
console.log('числа равны', random1 === random2);
console.log('первое число больше', random1 > random2);
console.log('первое число меньше', random1 < random2);
