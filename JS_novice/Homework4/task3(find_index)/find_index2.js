
let n = 3;
let arr = [1,2,3,4,5,6,7,8,9];

let index = -1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === n) {
    index = i;
    break;
  };
};

if (index === -1) {
  console.log("Элемент не найден");
} else {
  console.log("Индекс элемента", index);
};