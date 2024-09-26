(function () {

    let listArray = []
    let listName = ''



    //создаем и возвращаем заголовок П
    function createAppTitle(title) {
        let appTitle = document.createElement('h2')
        appTitle.innerHTML = title
        return appTitle
    }

    //создаем и возвращаем форму для создания дела
    function createTodoItemForm() {
        let form = document.createElement('form')
        let input = document.createElement('input')
        let buttonWrapper = document.createElement('div')
        let button = document.createElement('button')

        form.classList.add('input-group', 'mb-3')  //style: 1-группа эл инпута(BS) 2-оставляет отступ после формы(BS)
        input.classList.add('form-control')  //style: BS отображает Э Формы
        input.placeholder = 'введите название нового дела'
        buttonWrapper.classList.add('input-group-append') //позиционирует эл справа от поля для ввода BS
        button.classList.add('btn', 'btn-primary')  // BS
        button.textContent = 'добавить дело'

        button.disabled = true    //#1  

        buttonWrapper.append(button)
        form.append(input)
        form.append(buttonWrapper)

        input.addEventListener('input', function () { //#2
            if (input.value !== "") {         // #2
                button.disabled = false;     // #2
            } else {        // #2
                button.disabled = true    //#2
            }
        })

        return { form, input, button, }
    }

    //создаем и возвращаем список Э
    function createTodoList() {
        let list = document.createElement('ul')
        list.classList.add('list-group')
        return list
    }


    //
    function createTodoItem(obj) {                        
        let item = document.createElement('li')
        let buttonGroup = document.createElement('div')
        let doneButton = document.createElement('button')
        let deleteButton = document.createElement('button')

        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')

        item.textContent = obj.name
       
        if (obj.done == true) item.classList.add('list-group-item-succes'); //  #6



        //добавляем ОС на кнопки
        doneButton.addEventListener('click', function () {
            item.classList.toggle('list-group-item-success')

            for (let listItem of listArray) {  //#7
                if (listItem.id == obj.id) listItem.done = !listItem.done
            }
            saveList(listArray, listName)
        })


        deleteButton.addEventListener('click', function () {
            if (confirm('Вы уверены?')) {
                item.remove()

                for (let i = 0; i < listArray.length; i++) {  //#7
                    if (listArray[i].id == obj.id) listArray.splice(i, 1)
                }
                saveList(listArray, listName)
            }
        })


        //кнопки помещаем в Э который покажет их в 1 группе

        buttonGroup.classList.add('btn-group', 'btn-group-sm')

        doneButton.classList.add('btn', 'btn-success')
        doneButton.textContent = 'Готово'

        deleteButton.classList.add('btn', 'btn-danger')
        deleteButton.textContent = 'Удалить'

        //вкладываем кнопки в отдельный Э чтобы они обьединились в 1 блок
        buttonGroup.append(doneButton)
        buttonGroup.append(deleteButton)
        item.append(buttonGroup)

        //приложению нужен доступ к самому Э и кнопкам чтобы обработать события нажатия
        return { item, doneButton, deleteButton }
    }


    function getNewID(arr) { //#8
        let max = 0
        for (let item of arr) {
            if (item.id > max) max = item.id
        }
        return max + 1
    }

    function saveList(arr, keyName) { //#10
        localStorage.setItem(keyName, JSON.stringify(arr))
    }

    function createTodoApp(container, title = 'Список дел', keyName, defArray = []) {  //#9
        

        /*     let container = document.getElementById('todo-app') */

        let todoAppTitle = createAppTitle(title)
        let todoItemForm = createTodoItemForm()
        let todoList = createTodoList()

       listName = keyName //#11 (делаем атрибут глобальным)
       listArray = defArray
        container.append(todoAppTitle)
        container.append(todoItemForm.form)
        container.append(todoList)

        let localData = localStorage.getItem(listName) //#12
        if(localData !== null && localData !== '') listArray = JSON.parse(localData)
        
        for(let itemList of listArray) { //#13
            let todoItem = createTodoItem(itemList)
            todoList.append(todoItem.item)
    }
        

        //браузер создаетсобытие submit на форме по нажатию на Enter или на кнопку создания дела
        todoItemForm.form.addEventListener('submit', function (e) {  //Регистрируем ОС(обработчик события) здесь submit это  запуск события по кнопке enter
            //ета строчка необходима чтобы предотвратить стандартное действие браузера
            //в данном случае мы не хотим чтобы страница перезагрузилась при отправке формы
            e.preventDefault()  //отменяет стандартное поведение браузера, те не дает перезагружать страницу

            //игнорируем создания Э если пользователь ничего не ввел в поле
            if (!todoItemForm.input.value) { //проверяем есть ли что то внутри
                return  // если нет то ничего не делаем
            }


            let newItem = {      //#4
                id: getNewID(listArray), //#9
                name: todoItemForm.input.value,
                done: false
            }


            let todoItem = createTodoItem(newItem)

            listArray.push(newItem)       //#5
            console.log(listArray)


            saveList(listArray, listName) //#11

            //создаем и добавляем в список новое дело с названием из поля для ввода
            todoList.append(todoItem.item)

            todoItemForm.button.disabled = true //#3 


            //обнуляем значение в поле чтобы не пришлось стирать его вручную
            todoItemForm.input.value = ''
        })
    }
    window.createTodoApp = createTodoApp
})()

