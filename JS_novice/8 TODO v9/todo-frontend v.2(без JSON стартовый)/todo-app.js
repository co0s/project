(function () {
    
    let todoArr = []
  


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
        // button.disabled = true                       //disabled  ///////////////// #2

        buttonWrapper.append(button)
        form.append(input)
        form.append(buttonWrapper)

        // input.addEventListener('input', function() { //disabled  ///////////////////#2
        //     if (input.value !== "") {                         ///////////////////// #2
        //         button.disabled = false;                      ///////////////////// #2
        //     } else {                                          ///////////////////// #2
        //         button.disabled = true                        ///////////////////// #2
        //     }      
        // })

        return { form, input, button, }
    }

    //создаем и возвращаем список Э
    function createTodoList() {
        let list = document.createElement('ul')
        list.classList.add('list-group')
        return list
    }


    //
    function createTodoItem(name) {                          ////////// object #1
        let item = document.createElement('li')
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
       
        item.textContent = name                                   ///////////// #1
        // if (obj.done == true) item.classList.add('list-group-item-succes'); //////  #1

        //кнопки помещаем в Э который покажет их в 1 группе
        let buttonGroup = document.createElement('div')
        buttonGroup.classList.add('btn-group', 'btn-group-sm')

        let doneButton = document.createElement('button')
        doneButton.classList.add('btn', 'btn-success')
        doneButton.textContent = 'Готово'

        let deleteButton = document.createElement('button')
        deleteButton.classList.add('btn', 'btn-danger')
        deleteButton.textContent = 'Удалить'

        //вкладываем кнопки в отдельный Э чтобы они обьединились в 1 блок
        buttonGroup.append(doneButton)
        buttonGroup.append(deleteButton)
        item.append(buttonGroup)

        //приложению нужен доступ к самому Э и кнопкам чтобы обработать события нажатия
        return { item, doneButton, deleteButton }
    }

 
function createTodoApp(container, title = 'Список дел'){
 
    let todoAppTitle = createAppTitle('Список дел')
    let todoItemForm = createTodoItemForm()
    let todoList = createTodoList()

    container.append(todoAppTitle)
    container.append(todoItemForm.form)
    container.append(todoList)

    todoItemForm.form.addEventListener('submit', function (e) {
        e.preventDefault()

        if (!todoItemForm.input.value) { //проверяем есть ли что то внутри
            return  // если нет то ничего не делаем
        }

        const todoItem = createTodoItem(todoItemForm.input.value)

        todoItem.doneButton.addEventListener('click', function () {
            todoItem.item.classList.toggle('list-group-item-success')
        })
        todoItem.deleteButton.addEventListener('click', function () {
            if (confirm('Вы уверены?')) {
                todoItem.item.remove()
            }
        })
        todoList.append(todoItem.item)

        //обнуляем значение в поле чтобы не пришлось стирать его в ручную
        todoItemForm.input.value = ''

})
}
window.createTodoApp = createTodoApp

}) ()

      


