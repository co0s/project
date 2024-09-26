(function () {


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
    function createTodoItemElement({ name, done }) {
        const doneClass = 'list-group-item-success'

        let item = document.createElement('li')
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
        if (done) {
            item.classList.add(doneClass)
        }
        item.textContent = name


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
        doneButton.addEventListener('click', function () {
            item.classList.toggle(doneClass)
        })
        deleteButton.addEventListener('click', function () {
            if (confirm('Вы уверены?')) {
                item.remove()
            }
        })

        //вкладываем кнопки в отдельный Э чтобы они обьединились в 1 блок
        buttonGroup.append(doneButton)
        buttonGroup.append(deleteButton)
        item.append(buttonGroup)


        return item
    }


   async function createTodoApp(container, title = 'Список дел') {

        let todoAppTitle = createAppTitle('Список дел')
        let todoItemForm = createTodoItemForm()
        let todoList = createTodoList()

        container.append(todoAppTitle)
        container.append(todoItemForm.form)
        container.append(todoList)

        //#4 отправляем запрос на сервер на список всвех дел
        const response = await fetch('http://localhost:3000/api/todos')
        //#5 получаем список Э из тела ответа
        const todoItemList = await response.json()
        //#6 пребразуем список Э в ДОМ дерево
        //#7 проходимся по каждом Э из полученного списка циклом и с Ф создаем каждый Э
        todoItemList.forEach(todoItem => {
            const todoItemElement = createTodoItemElement(todoItem)
            todoList.append(todoItemElement)
        })


        todoItemForm.form.addEventListener('submit', async e => {  //#2 задаем async для Ф
            e.preventDefault()

            if (!todoItemForm.input.value) { //проверяем есть ли что то внутри
                return  // если нет то ничего не делаем
            }


            ////#1 создаем запрос на сервер из поля для ввода инпута(добавляет элеиент из инп на сервер и хранит его там)
            const response = await fetch('http://localhost:3000/api/todos', {
                method: 'POST',
                body: JSON.stringify({
                    name: todoItemForm.input.value.trim(),
                    owner: 'Anton',
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            //#2 создаем тело ответа
            const todoItem = await response.json()//в todoItem будет находиться информация о только что созданном деле


            const todoItemElelment = createTodoItemElement(todoItem)  //#4 берем значение из О который к нам вернулся с сервера , не из формы

            //создаем и добавляем в списсок новое дело с названием из поля для ввода
            todoList.append(todoItemElelment)

            //обнуляем значение в поле чтобы не пришлось стирать его в ручную
            todoItemForm.input.value = ''

        })
    }
    window.createTodoApp = createTodoApp

})()




