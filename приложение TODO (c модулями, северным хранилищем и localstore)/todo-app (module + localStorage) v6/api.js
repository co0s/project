export async function getTodoList(owner) {
    //#4 отправляем запрос на сервер на список всвех дел
    const response = await fetch(`http://localhost:3000/api/todos?owner=${owner}`)
    //#5 получаем список Э из тела ответа
    return await response.json()
}


export async function createTodoItem({ owner, name }) {
    ////#1 создаем запрос на сервер из поля для ввода инпута(добавляет элеиент из инп на сервер и хранит его там)
    const response = await fetch('http://localhost:3000/api/todos', {
        method: 'POST',
        body: JSON.stringify({
            name,
            owner,
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    //#2 создаем тело ответа
    return await response.json()//в todoItem будет находиться информация о только что созданном деле
}


export function switchTodoItemDone({todoItem}) {
    todoItem.done = !todoItem.done
    fetch(`http://localhost:3000/api/todos/${todoItem.id}`, {
        method: 'PATCH',
        body: JSON.stringify({ done: todoItem.done }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


export function deleteTodoItem ({element, todoItem}) {
    if (!confirm('Вы уверены?')) {
        return
    }
    element.remove()
    fetch(`http://localhost:3000/api/todos/${todoItem.id}`, {
        method: 'DELETE',
    })
}