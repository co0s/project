var arr1 = [2, 2, 17, 21, 45, 12, 54, 31, 53];
var arr2 = [12, 44, 23, 5];
var combinedArray = [];

for (var i = 0; i < arr1.length; i++) {
  combinedArray.push(arr1[i]);
}

for (var i = 0; i < arr2.length; i++) {
  combinedArray.push(arr2[i]);
}

console.log(combinedArray);