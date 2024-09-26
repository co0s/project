let counts = 7;
let array = [];

for (let i = 1; i <= counts; ++i) {
  array.push(i);
}

const shuffle = (array) => {
  let j = array.length, t, i;

  while (j) {
    i = Math.floor(Math.random() * j--);
    temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }

  return array;
}

console.log(shuffle(array));

let n = 1;
let arr = shuffle(array);

let index = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === n) {
    index = i;
    break;
  };
};

if (index === 0) {
  console.log("Элемент не найден");
} else {
  console.log("Индекс элемента", index);
};