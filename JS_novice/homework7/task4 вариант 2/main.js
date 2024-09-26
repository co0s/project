

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

    let container = document.createElement("div");

    function getOpenBtn() {
        let openBtn = document.createElement("button");
        openBtn.textContent = "Открыть меню";

        openBtn.onclick = function () {
            container.innerHTML = "";
            let list = getList(allStudents);
            container.append(list);
        }
        return openBtn;
    }

    document.body.append(getOpenBtn(), container);
});


