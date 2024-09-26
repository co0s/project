/*document.addEventListener('DOMContentLoaded', function () { //запуск скрипта

   let allStudents = [    //М с О
        { name: "Валя", age: 11 },
        { name: "Таня", age: 24 },
        { name: "Рома", age: 21 },
        { name: "Надя", age: 34 },
        { name: "Антон", age: 7 },
    ]

   


    function createStudentCard(arr) {  // С Э студента

        let studentList = document.createElement("ul")

        //for (let i = 0; i < allStudents.length; i++) {

            let studentLi = document.createElement("li")

            let title = document.createElement("h2")
            title.textContent = name

            let text = document.createElement("span")
          text.textContent = `Возраст:${Number(age)} лет`
            
            
            studentLi.append(title,text)
            studentList.append(studentLi)
      //  }


        return studentList
   }
    
   


    document.body.append(createStudentCard(allStudents))
})*/




//--------------------------------------------------------------------------




document.addEventListener('DOMContentLoaded', function () { // Запуск 

    let allStudents = [    //М с О
    { name: "Валя", age: 11 },
    { name: "Таня", age: 24 },
    { name: "Рома", age: 21 },
    { name: "Надя", age: 34 },
    { name: "Антон", age: 7 },
]

function getName (text) { 
   let title = document.createElement("h2")
   title.textContent = text
   return title
}

function getAge (age) {
    let text = document.createElement("span")
    text.textContent = `Возраст:${Number(age)} лет`
    return text
}

function getItem (student) {
   let item = document.createElement("li")
   item.append(getName(student.name), getAge(student.age))
   return item
}

function getList (students) {
   let list = document.createElement("ul")
   for (let student of students) {
    let item = getItem(student)
    list.append(item)
   }
   return list
}

let someList = getList(allStudents)
document.body.append(someList)

})


//----------------------------------------------------------
/*function getStudents (newArr){
    
    for (let i of newArr) {
        getName(arr.name)

    }
}
/*for (let i = 0; i< arr.length; i++){
someItem.append(getName(`${arr[i]}`))
someList.append(someItem)
}


let someList = getList(getStudents(allStudents))
let someItem = getItem()

someItem.append(getName(text),getAge(age))
someList.append(someItem)

document.body.append(someList)
*/


