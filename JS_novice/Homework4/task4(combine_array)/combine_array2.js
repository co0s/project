// Исходные массивы
var arr1 = [2, 2, 17, 21, 45, 12, 54, 31, 53];
var arr2 = [12, 44, 23, 5];

// Создаем новый пустой массив
var newArr = [];

// Перебираем элементы первого массива и добавляем их в новый массив
for (var i = 0; i < arr1.length; i++) {
  newArr.push(arr1[i]);
}

// Перебираем элементы второго массива и добавляем их в новый массив
for (var j = 0; j < arr2.length; j++) {
  newArr.push(arr2[j]);
}

// Выводим результат объединения в консоль
console.log(newArr);