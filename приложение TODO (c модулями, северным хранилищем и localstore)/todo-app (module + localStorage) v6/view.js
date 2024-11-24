


// function createSwitchBtn() {
//     let switchBtn = document.createElement('button')
//     switchBtn.classList.add('switch-btn')
//     switchBtn.textContent = ('хранилище')
//     return switchBtn
// }

//создаем и возвращаем заголовок П
function createAppTitle(title) {
    let appTitle = document.createElement('h2')
    appTitle.innerHTML = title
    return appTitle
}

//создаем и возвращаем форму для создания дела
function createTodoItemForm() {
    let form = document.createElement('form')
    form.classList.add('input-group', 'mb-3')  //style: 1-группа эл инпута(BS) 2-оставляет отступ после формы(BS)

    let input = document.createElement('input')
    input.classList.add('form-control')  //style: BS отображает Э Формы
    input.placeholder = 'введите название нового дела'

    let buttonWrapper = document.createElement('div')
    buttonWrapper.classList.add('input-group-append') //позиционирует эл справа от поля для ввода BS

    let button = document.createElement('button')
    button.classList.add('btn', 'btn-primary')  // BS
    button.textContent = 'добавить дело'


    buttonWrapper.append(button)
    form.append(input)
    form.append(buttonWrapper)




    return { form, input, button, }
}

//создаем и возвращаем список Э
function createTodoList() {
    let list = document.createElement('ul')
    list.classList.add('list-group')
    return list
}


//
function createTodoItemElement(todoItem, { onDone, onDelete }) { //добавляем параметры
    const doneClass = 'list-group-item-success'

    let item = document.createElement('li')
    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    if (todoItem.done) {
        item.classList.add(doneClass)
    }
    item.textContent = todoItem.name


    //кнопки помещаем в Э который покажет их в 1 группе
    let buttonGroup = document.createElement('div')
    buttonGroup.classList.add('btn-group', 'btn-group-sm')

    let doneButton = document.createElement('button')
    doneButton.classList.add('btn', 'btn-success')
    doneButton.textContent = 'Готово'

    let deleteButton = document.createElement('button')
    deleteButton.classList.add('btn', 'btn-danger')
    deleteButton.textContent = 'Удалить'

    //добавляем обработчики на кнопки
    doneButton.addEventListener('click', () => {
        onDone({ todoItem, element: item })                      //
        item.classList.toggle(doneClass, todoItem.done) // второй параметр булевый (переключает класс в зависимости от того что передано в параметр)
    })
    deleteButton.addEventListener('click', () => {
        onDelete({ todoItem, element: item })                  //
    })

    //вкладываем кнопки в отдельный Э чтобы они обьединились в 1 блок
    buttonGroup.append(doneButton)
    buttonGroup.append(deleteButton)
    item.append(buttonGroup)


    return item
}


async function createTodoApp(container, {
    title,
    owner,
    todoItemList = [],
    onCreateFormSubmit,
    onDoneClick,
    onDeleteClick,
}) {

    // let switchBtn = createSwitchBtn()
    let todoAppTitle = createAppTitle(title)
    let todoItemForm = createTodoItemForm()
    let todoList = createTodoList()

    const handlers = { onDone: onDoneClick, onDelete: onDeleteClick }


    // container.append(switchBtn)
    container.append(todoAppTitle)
    container.append(todoItemForm.form)
    container.append(todoList)


    //#6 пребразуем список Э в ДОМ дерево
    //#7 проходимся по каждом Э из полученного списка циклом и с Ф создаем каждый Э
    todoItemList.forEach(todoItem => {
        const todoItemElement = createTodoItemElement(todoItem, handlers)
        todoList.append(todoItemElement)
    })


    todoItemForm.form.addEventListener('submit', async e => {  //#2 задаем async для Ф
        e.preventDefault()

        if (!todoItemForm.input.value) { //проверяем есть ли что то внутри
            return  // если нет то ничего не делаем
        }

        const todoItem = await onCreateFormSubmit({
            owner, //любое дело создается с каким то владельцем из 3х
            name: todoItemForm.input.value.trim(),
        })

        const todoItemElelment = createTodoItemElement(todoItem, handlers)  //#4 берем значение из О который к нам вернулся с сервера , не из формы

        //создаем и добавляем в списсок новое дело с названием из поля для ввода
        todoList.append(todoItemElelment)

        //обнуляем значение в поле чтобы не пришлось стирать его в ручную
        todoItemForm.input.value = ''

    })
}

export { createTodoApp };






