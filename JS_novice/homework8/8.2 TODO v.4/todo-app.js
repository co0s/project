(function () {

    let todoArr = []
    let todoName = ""




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
        button.disabled = true  //disabled //// #2

        buttonWrapper.append(button)
        form.append(input)
        form.append(buttonWrapper)


        // Проверка при загрузке страницы//////////// #2
        if (input.value === "") {
            button.disabled = true;
        }

        input.addEventListener('input', function () { //disabled  ///////////////////#2
            if (input.value !== "") {                         ///////////////////// #2
                button.disabled = false;     ///////////////////// #2
            } else {                 ///////////////////// #2
                button.disabled = true               ///////////////////// #2
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





   
    //////////////#5
    // Функция для сохранения данных в LocalStorage
    function saveList(arr, keyName) {
        localStorage.setItem(keyName, JSON.stringify(arr));
    }

    ///////////////№5
    // Функция для чтения данных из LocalStorage
/*     function loadData(key) {
        let data = localStorage.getItem(key);
        return data ? JSON.parse(data) : [];
    } */
/* 
    function loadData(key) {
        if (localStorage.getItem(key)){
            return JSON.parse(localStorage.getItem(key))
        } else {
            return []
        }
    } */






    // Создаем и возвращаем элемент списка
    function createTodoItem(obj) {    ////////// object #1
        let item = document.createElement('li')
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')

        item.textContent = obj.name   /////// #1
        if (obj.done = true) {         /////  #1
            item.classList.add('list-group-item-succes')
        } else {
            item.classList.remove('list-group-item-succes')
        }

        //кнопки помещаем в Э который покажет их в 1 группе
        let buttonGroup = document.createElement('div')
        buttonGroup.classList.add('btn-group', 'btn-group-sm')

        let doneButton = document.createElement('button')
        doneButton.classList.add('btn', 'btn-success')
        doneButton.textContent = 'Готово'

        let deleteButton = document.createElement('button')
        deleteButton.classList.add('btn', 'btn-danger')
        deleteButton.textContent = 'Удалить'

        //ОС кнопки добавления 
        doneButton.addEventListener('click', function () {
            item.classList.toggle('list-group-item-success');
        })

        /////////////////#4
        for (let todoItem of todoArr) {
            if (todoItem.id == obj.id) todoItem.done = !todoItem.done;
            saveList(todoArr, todoName); //////#5
            };

        //ОС кнопки удаления
        deleteButton.addEventListener('click', function () {
            if (confirm('Вы уверены?')) {
                item.remove();
                for(let i = 0; i < todoArr.length; i++) {
                    if (todoArr.id == obj.id) todoArr.slice(i, 1) //#4
                };
                saveList(todoArr, todoName); //////#5
            };
        });
         

        //вкладываем кнопки в отдельный Э чтобы они обьединились в 1 блок
        buttonGroup.append(doneButton)
        buttonGroup.append(deleteButton)
        item.append(buttonGroup)

        //приложению нужен доступ к самому Э и кнопкам чтобы обработать события нажатия
        return { item, doneButton, deleteButton }
    }








        // Функция для создания уникального id ///////////#3
        function getNewId(arr) {
            let max = 0;
            for (let item of arr) {
                if (item.id > max) max = item.id;
            } 
            return max + 1;
        }






    document.addEventListener('DOMContentLoaded', function createTodoApp (container, keyName) { //#5
       
        let container = document.getElementById('todo-app')

        let todoAppTitle = createAppTitle('Список дел')
        let todoItemForm = createTodoItemForm()
        let todoList = createTodoList()

        let todoName = keyName

        container.append(todoAppTitle)
        container.append(todoItemForm.form)
        container.append(todoList)



        ///////#5
        let localData = localStorage.getItem(todoName);

        if (localData !== null && localData !== '') todoArr = JSON.parse(localData);
        for (let itemList of todoArr) {
            let todoItem = createTodoItem(itemList);
            todoList.append(todoItem.item)
        }

        //браузер создаетсобытие submit на форме по нажатию на Enter или на кнопку создания дела
        todoItemForm.form.addEventListener('submit', function (e) {  //Регистрируем ОС(обработчик события) здесь submit это  запуск события по кнопке enter
            //Эта строчка необходима чтобы предотвратить стандартное действие браузера
            //в данном случае мы не хотим чтобы страница перезагрузилась при отправке формы
            e.preventDefault()  //отменяет стандартное поведение браузера, те не дает перезагружать страницу

            //игнорируем создания Э если пользователь ничего не ввел в поле
            if (!todoItemForm.input.value) { //проверяем есть ли что то внутри
                return  // если нет то ничего не делаем
            }


            let newItem = {   //////////////// object ////#3
                id : getNewId(todoArr),
                name: todoItemForm.input.value,  /////////#3
                done: false     /////////////////#3               
            }

            /* let todoItem = createTodoItem(newItem)  //доб О в М //#3
            todoArr.push(todoItem)   /////////////#3 */

            todoArr.push(newItem)
            saveList(todoArr, todoName);


/*             //добавляем ОС на кнопки
            todoItem.doneButton.addEventListener('click', function () {
                todoItem.item.classList.toggle('list-group-item-success')
            })
            todoItem.deleteButton.addEventListener('click', function () {
                if (confirm('Вы уверены?')) {
                    todoItem.item.remove()
                }
            }) */

            //создаем и добавляем в список новое дело с названием из поля для ввода
            todoList.append(todoItem.item)

            
            todoItemForm.button.disabled = true;

            //обнуляем значение в поле чтобы не пришлось стирать его вручную
            todoItemForm.input.value = ''
        })
        window.createTodoApp = createTodoApp;
    })
})()

