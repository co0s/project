

document.addEventListener('DOMContentLoaded', function () { // Запуск 


    let allStudents = [    //М с О
        { name: "Валя", age: 11 },
        { name: "Таня", age: 24 },
        { name: "Рома", age: 21 },
        { name: "Надя", age: 34 },
        { name: "Антон", age: 7 },
    ]

    function getName(text) {
        let title = document.createElement("h2")
        title.textContent = text
        return title
    }

    function getAge(age) {
        let text = document.createElement("span")
        text.textContent = `Возраст:${Number(age)} лет`
        return text
    }

    function getItem(student) {
        let item = document.createElement("li")
        item.append(getName(student.name), getAge(student.age))
        return item
    }

    function getList(students) {
        let list = document.createElement("ul")
        list.classList.add("menu")

        for (let student of students) {
            let item = getItem(student)
            list.append(item)
        }
        return list
    }


    function render(container, array) {
        container.innerHTML = ""
        container.append(getList(array))
    }

    let button = document.getElementById('btn')


    button.addEventListener('click', function () {
        render(document.getElementById("app"), allStudents)
    })



})



   /* function getOpenBtn(container, array) {
        let openBtn = document.createElement("button")
        openBtn.classList.add("btn")
        openBtn.textContent = "Открыть меню"

        //  openBtn.onclick = function() {
        ///    render(container, allStudents)
        // }
        openBtn.addEventListener("click", function () {
            render(container, array)
        })
        return openBtn
    }



   // let someList = getList(allStudents)
    //let openBtn = getOpenBtn(container,allStudents)
    //let container = document.createElement("div")
   // let container = document.getElementById("container");
    //container.append(openBtn, someList)

    let container = document.getElementById("container");
    let openBtn = getOpenBtn(container, allStudents);
    container.appendChild(openBtn);

    document.body.append(container)*/



