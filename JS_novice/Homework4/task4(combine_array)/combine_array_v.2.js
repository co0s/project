const arr1 = [2, 2, 17, 21, 45, 12, 54, 31, 53];
const arr2 = [12, 44, 23, 5];

let arr = [];
let allLength = arr1.length + arr2.length;

for (let i = 0; i < allLength; i++) {
    if (i < arr1.length) {
        arr.push(arr1[i]);
    } else {
        arr.push(arr2[i - arr1.length]);
    }
}

console.log(arr);