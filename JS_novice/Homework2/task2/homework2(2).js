let first = 13.123456789;
let second = 2.123;
let precision = 3;

let firstNormalized = Math.round(
    first%1 * Math.pow(10, precision)
);

let secondNormalized = Math.round(
    second%1 * Math.pow(10, precision)
);

console.log('число1', firstNormalized);
console.log('число2', secondNormalized);
console.log('исходные числа ранвны', first === second);
console.log('числа равны', firstNormalized === secondNormalized);
console.log('первое число больше', firstNormalized > secondNormalized);
console.log('первое число меньше', firstNormalized < secondNormalized);
