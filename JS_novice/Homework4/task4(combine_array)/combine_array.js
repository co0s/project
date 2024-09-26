const arr1 = [2, 2, 17, 21, 45, 12, 54, 31, 53];
const arr2 = [12, 44, 23, 5];
let arr = [];

for (let i = 0; i < arr1.length; i++) {
  arr.push(arr1[i]);
}

for (let i = 0; i < arr2.length; i++) {
  arr.push(arr2[i]);
}

console.log(arr);