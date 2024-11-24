
// let listArray = []
// let listName = ''

//отрисовка списка
export function getTodoList(owner) {
    const localData = localStorage.getItem(owner)
    if (localData !== null && localData !== '') {
        return JSON.parse(localData)
    }
    return []; // Возвращаем пустой массив **************************************
}


//добавляем эл
export function createTodoItem({ owner, name }) {
    const listArray = getTodoList(owner)
    let newItem = {
        id: getNewID(listArray),
        owner,
        name,
        done: false,
    }
    listArray.push(newItem)
    saveList(listArray, owner)

    return newItem
}






// export function switchTodoItemDone({ todoItem }) { //v1
//     const listArray = getTodoList(todoItem.owner)

//     for (const listItem of listArray) {
//         if (listItem.id == todoItem.owner) listItem.done = !listItem.done; //меняем статус в М
//     }
//     todoItem.done = !todoItem.done
//     saveList(listArray, todoItem.owner) //делаем сохр в лс
// }


export function switchTodoItemDone({ todoItem }) { //v2
    const listArray = getTodoList(todoItem.owner);

    for (const listItem of listArray) {
        if (listItem.id === todoItem.id) { // Исправлено
            listItem.done = !listItem.done; // Меняем статус
        }
    }
    todoItem.done = !todoItem.done;
    saveList(listArray, todoItem.owner);
}





// export function deleteTodoItem({ element, todoItem }) {  //v1
//     const listArray = getTodoList(todoItem.owner)
//     if (confirm("вы уврены")) {
//         element.remove()
//         for (let i = 0; i < listArray.length; i++) {
//             if (listArray[i].id === todoItem.owner) {
//                 listArray.splice(i, 1)
//             }
//         }
//         saveList(listArray, todoItem.owner)
//     }
// }


export function deleteTodoItem({ element, todoItem }) { //v2
    const listArray = getTodoList(todoItem.owner);
    if (confirm("вы уверены?")) {
        element.remove();
        const newListArray = listArray.filter(item => item.id !== todoItem.id); // Исправлено
        saveList(newListArray, todoItem.owner);
    }
}


function getNewID(arr) { //#8
    let max = 0

    for (let item of arr) {
        if (item.id > max) max = item.id
    }
    return max + 1
}



function saveList(arr, owner) { //#10
    localStorage.setItem(owner, JSON.stringify(arr))
}

