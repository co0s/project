

////////////////////////////СОРТИРОВКА///////////////////////////////////



students = [
    {
        name: "Петр",
        surname: 'Иванов',
        lastname: "Эдуардович",
        birthday: '04-02-1985',
        studyStart: '2023',
        faculty: 'Psychology'
    },
    {
        name: "Иван",
        surname: 'Пахомов',
        lastname: "Иванович",
        birthday: '01-01-1990',
        studyStart: '2022',
        faculty: 'IT'
    }
]


///по рождению

students = students.sort(function (a, b) {  //
    if (a.birthday < b.birthday) return -1 // меняется направление по > 
})


//сортировка по имени 

let result = arr.sort(function (a, b) {
    if (a['name'] < b['name']) return -1
})


//по возрасту 

let result = arr.sort(function (a, b) {
    if (a['age'] < b['age']) return -1
})



////////// это сортировка по возрастанию по возрасту

function sortUsers(arr, prop, dir = false) { //(массив, свойство О(имя.возраст итд), направление сортировки)
    let result = arr.sort(function (a, b) {
        if (a[prop] < b[prop]) return -1
    })
    return result
}


//или 

function sortUsers(arr, prop, dir = false) {

    let result = arr.sort(function (a, b) {
        let dirIf = a[prop] < b[prop]
        if (dirIf == true) return -1
    })
    return result
}


//или

function sortUsers(arr, prop, dir = false) {

    return arr.sort((a, b) => !dir ? a[prop] < b[prop] : a[prop] > b[prop] ? -1 : 1)
}




console.log(sortUsers(arr, 'age'));




/////////////////////////////////////ДАТА////////////////////////////////



students = students.filter(function (user) {

    return false // (true) (если false то не будет добавлен true добавлен)
})


///////////////////////////////////////////////////////////////////////////



students = students.filter(function (user) {
    if (student.birthday.getFullYear() == 2011) return true// покажет пользователей больше 2011г
})

/////////////////////////////////////////////////////////////////////////

let search = '2011.07.11'  //ищет заданную дату
let searchDate = new Date(search)


//////////////////////////////////////////////////////////////////////////

let now = new Date() //создаем дату







////////////////////////////////////////////////////////////////////








/////////////////////////////////
tdBirthday.textContent = `${getFormatYear(studentObj.birthday)} (${getAge(year)} лет)` //выдает дату и возраст

