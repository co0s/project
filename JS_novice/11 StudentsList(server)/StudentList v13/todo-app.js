const SERVER_URL = 'http://localhost:3000';

async function serverAddStudent(obj) {
    let response = await fetch(SERVER_URL + '/api/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj),
    })
    let data = await response.json();
    return data;
}


async function serverGetStudents() {
    let response = await fetch(SERVER_URL + '/api/students', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    let data = await response.json();
    return data;
}
 

async function serverDeleteStudent(id) {
    let response = await fetch(SERVER_URL + '/api/students/' + id, {
        method: 'DELETE'
    })
    let data = await response.json();
    return data;
}


let serverData = await serverGetStudents()


//Объект
let studentsArr = []
let copyArr = []


if (serverData) {
    studentsArr = serverData
}

//Получаем элементы
let studentsBtn = document.getElementById('studentsBtn')
let inpName = document.getElementById('studentsName')
let inpSurName = document.getElementById('studentsSurname')
let inpSecondName = document.getElementById('studentsSecondname')
let inpDate = document.getElementById('studentsDate')
let inpStart = document.getElementById('studentsStart')
let inpFaculty = document.getElementById('studentsFaculty')
let table = document.getElementById('studentsTable')
let tbody = document.getElementById('tbody')
let sortCellname = document.getElementById('studentsCellHead__name')
let sortCellSurName = document.getElementById('studentsCell__surName')
let sortCellSecondName = document.getElementById('studentsCell__secondName')
let sortCellBirthDate = document.getElementById('studentsCell__birthDate')
let sortCellEntryDate = document.getElementById('studentsCell__entryDate')
let sortCellFaculty = document.getElementById('studentsCell__faculty')

//Добавляем обработчик события на кнопку
studentsBtn.onclick = async function (e) {
    e.preventDefault()
    // Вариант №1
    let newObj = {
        name: inpName.value,
        surname: inpSurName.value,
        lastname: inpSecondName.value,
        birthday: new Date(inpDate.value),
        studyStart: inpStart.value,
        faculty: inpFaculty.value
    }


    let hasError = false

    //Проверка на пустоту
    if (inpName.value === "") {
        document.getElementById('studentsFormLabel__name').classList.add("studentsFormError__active");
        hasError = true
    } else {
        document.getElementById('studentsFormLabel__name').classList.remove("studentsFormError__active");
    }


    if (inpSurName.value === "") {
        document.getElementById('studentsFormLabel__surname').classList.add("studentsFormError__active")
        hasError = true
    } else {
        document.getElementById('studentsFormLabel__surname').classList.remove("studentsFormError__active");
    }


    if (inpSecondName.value === "") {
        document.getElementById('studentsFormLabel__secondname').classList.add("studentsFormError__active")
        hasError = true
    } else {
        document.getElementById('studentsFormLabel__secondname').classList.remove("studentsFormError__active");
    }

    let val = document.getElementById('studentsFormLabel__date')
    //проверка на пустое поле
    if (inpDate.value === "") {
        val.textContent = "Некорректная дата"
        val.classList.add("studentsFormError__active")
        hasError = true
    } else {
        //проверяем корректность даты рождения
        let birthday = new Date(inpDate.value)
        //валидация даты
        if (!checkBirthDate(birthday, val)) {
            hasError = true //если валидация не прошла устанавливаем флаг ошибки
        } else {
            val.classList.remove("studentsFormError__active");
            //убираем ошибку если валидация прошла
        }

    }

    if (inpStart.value === "") {
        document.getElementById('studentsFormLabel__start').classList.add("studentsFormError__active")
        hasError = true
    } else {
        document.getElementById('studentsFormLabel__start').classList.remove("studentsFormError__active");
    }


    if (inpFaculty.value === "") {
        document.getElementById('studentsFormLabel__faculty').classList.add("studentsFormError__active")
        hasError = true
    } else {
        document.getElementById('studentsFormLabel__faculty').classList.remove("studentsFormError__active");
    }


    //пройдено ли уловие !!!!
    if (hasError === true) {
        return
    }


    if (!hasError) {

       
        //#вариант №1        
        const serverObject = await serverAddStudent(newObj)
        console.log(serverObject);
        studentsArr.push(serverObject);
        createTableStudents(serverObject);


    }


    //Очистка полей
    inpName.value = ""
    inpSurName.value = ""
    inpSecondName.value = ""
    inpDate.value = ""
    inpStart.value = ""
    inpFaculty.value = ""
}



//Счетчик
let counter = 1

//Функция создания строки с ячейками
function createTableStudents(studentsArr) {
    let stringItem = document.createElement('tr')
    stringItem.classList.add('studentsCell')

    let itemNumber = document.createElement('td')
    itemNumber.classList.add('itemNumber')
    itemNumber.textContent = studentsArr.id

    let itemName = document.createElement('td')
    itemName.classList.add('studentsCellNumber')
    itemName.textContent = studentsArr.name.trim()

    let itemSurName = document.createElement('td')
    itemSurName.classList.add('studentsCellNumber')
    itemSurName.textContent = studentsArr.surname

    let itemSecondName = document.createElement('td')
    itemSecondName.classList.add('studentsCellNumber')
    itemSecondName.textContent = studentsArr.lastname

    let itemDate = document.createElement('td')
    itemDate.classList.add('studentsCellNumber')
    itemDate.textContent = createDateString(studentsArr.birthday)


    let itemStart = document.createElement('td')
    itemStart.classList.add('studentsCellNumber')
    itemStart.textContent = getLearnPeriod(studentsArr.studyStart)

    let itemFaculty = document.createElement('td')
    itemFaculty.classList.add('studentsCellNumber')
    itemFaculty.textContent = studentsArr.faculty

    let itemDelete = document.createElement('td')
    itemDelete.classList.add('studentsCellNumber')

    let deleteBtn = document.createElement('button')
    deleteBtn.classList.add('deleteBtn')
    deleteBtn.textContent = 'Удалить'
   
deleteBtn.addEventListener('click', async function(){
    await serverDeleteStudent(studentsArr.id)
    stringItem.remove()
})


    itemDelete.append(deleteBtn)
    stringItem.append(itemNumber, itemName, itemSurName, itemSecondName, itemDate, itemStart, itemFaculty,itemDelete)
    tbody.append(stringItem)
    return tbody
}

//Отрисовываем начальные данные
getArrStudents(studentsArr)

//Функция отрисовки массива студентов
function getArrStudents(arr) {
    // copyArr = [...studentsArr]
    tbody.innerHTML = ""
    for (let student of arr) {
        createTableStudents(student)
    }
}



//////////////////////////////////////СОРТИРОВКА/////////////////////////////

let sortedName = false
let sortedSurname = false
let sortedSecondName = false
let sortedBirthDate = false
let sortedEntryDate = false
let sortedFaculty = false

//Функция сортировки
function sortUsers(arr, prop, dir = true) {

    return arr.sort((a, b) => {
        if (b[prop] < a[prop]) {
            return dir ? 1 : -1
        }

        if (b[prop] > a[prop]) {
            return dir ? -1 : 1
        }
        return 0
    })
}


//Сортировка Имени (клик)
sortCellname.onclick = function () {
    tbody.innerHTML = ''
    counter = 1
    sortedName = !sortedName
    sortUsers(copyArr, 'name', sortedName)
    getArrStudents(copyArr)
}

//Сортировка Фамилии
sortCellSurName.onclick = function () {
    tbody.innerHTML = ''
    counter = 1
    sortedSurname = !sortedSurname
    sortUsers(copyArr, 'surname', sortedSurname)
    getArrStudents(copyArr)
}

//Сортировка Отчества
sortCellSecondName.onclick = function () {
    tbody.innerHTML = ''
    counter = 1
    sortedSecondName = !sortedSecondName
    sortUsers(copyArr, 'lastname', sortedSecondName)
    getArrStudents(copyArr)
}

//Сортировка Даты
sortCellBirthDate.onclick = function () {
    tbody.innerHTML = ''
    counter = 1
    sortedBirthDate = !sortedBirthDate
    sortUsers(copyArr, 'birthday', sortedBirthDate)
    getArrStudents(copyArr)
}

//Сортировка Начало
sortCellEntryDate.onclick = function () {
    tbody.innerHTML = ''
    counter = 1
    sortedEntryDate = !sortedEntryDate
    sortUsers(copyArr, 'studyStart', sortedEntryDate)
    getArrStudents(copyArr)
}

//Сортировка Факультет
sortCellFaculty.onclick = function () {
    tbody.innerHTML = ''
    counter = 1
    sortedFaculty = !sortedFaculty
    sortUsers(copyArr, 'faculty', sortedFaculty)
    getArrStudents(copyArr)
}


//создает id
function getId(arr) {
    return arr.length ? arr[arr.length - 1].id + 1 : 1;
}
getId(studentsArr)



/////////////////////////////////////////////////ДАТА///////////////////////

//функция добавления курса студента
function getLearnPeriod(startLearn) {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    let currentDate = now.getDate();
    const learnYears = 4;
    const monthStartLearn = 9; // сентябрь

    // Здесь добавляем 1 к текущему курсу
    let course = currentYear - startLearn - (0 > (currentMonth - monthStartLearn || currentDate - 1)); // 1 октября
    course += 2; // Добавляем 1, чтобы первый курс начинался с 1

    course = course > learnYears ? 'закончил' : `${course} курс`;
    let period = `${startLearn} - ${+startLearn + learnYears} (${course})`;

    return period;
}



//формат даты с точками
function getDate(date) {

    let result = date.getDate() < 10 ? '0' + date.getDate() + '.' : date.getDate() + '.'

    result = result + (date.getMonth() < 9 ? '0' + (date.getMonth() + 1) + '.' : (date.getMonth() + 1) + '.')

    result = result + date.getFullYear()

    return result
}



//Функция даты целиком
function createDateString(dd) {
    const date = new Date(dd)
    let age = calculateDate(date);
    return `${normalizeDateorMonth(date.getDate())}.${normalizeDateorMonth(date.getMonth() + 1)}.${date.getFullYear()} (${age} ${yearName(age)})`
}
function normalizeDateorMonth(num) {
    return num <= 9 ? `0${num}` : `${num}`;
}

//количество полных лет
function calculateDate(date) {
    let dateNow = new Date();
    let yearNow = dateNow.getFullYear();
    return yearNow - date.getFullYear();
}


//проверка возраста
function checkBirthDate(year, mistake) {
    let yearNow = new Date().getFullYear();

    if (new Date(year).getFullYear() >= 1900 && new Date(year).getFullYear() <= yearNow) {
        mistake.classList.add('studentsFormError')
        return true;
    } else {
        mistake.classList.add('studentsFormError__active')
        mistake.textContent = `Ваша дата должна быть больше 1900 года и меньше ${yearNow}`;
        return false;
    }
}


//добавление текста к дате
function yearName(age) {
    if (age >= 10 && age <= 20) {
        return "лет";
    } else {
        if (age % 10 === 1) {
            return "год";
        } else if (age % 10 > 1 && age % 10 < 5) {
            return "года";
        } else {
            return "лет";
        }
    }
}





//проверка на валидацию
function validationDate(value, mistake) {
    if (isNaN(value)) {
        mistake.textContent = "Вы не корректно заполнили дату";
        return false;
    } else {
        return checkBirthDate(value.getFullYear(), mistake);
    }
}







////////////////////////////////////ФИЛЬТРАЦИЯ/////////////////////////////












//Получаем эл для фильтрации
let filterName = document.getElementById('filterName')
let filterSurname = document.getElementById('filterSurname')
let filterSecondname = document.getElementById('filterSecondname')
let filterDate = document.getElementById('filterDate')
let filterStart = document.getElementById('filterStart')
let filterFaculty = document.getElementById('filterFaculty')
let filterBtn = document.getElementById('filterBtn')





// Функция фильтрации(возвращаем отфильтрованный М)
function filter(arr, prop, value) {
    let result = []
    for (const item of arr) {
        if (String(item[prop]).includes(value) == true) result.push(item)
    }
    return result
}

function render(arr) {

    tbody.innerHTML = ""; // Очистка предыдущих данных
    let filterName = document.getElementById('filterName').value,
        filterSurname = document.getElementById('filterSurname').value,
        filterSecondname = document.getElementById('filterSecondname').value,
        filterDate = document.getElementById('filterDate').value,
        filterStart = document.getElementById('filterStart').value,
        filterFaculty = document.getElementById('filterFaculty').value
  
    if (filterName !== '') copyArr = filter(copyArr, 'name', filterName)
    if (filterSurname !== '') copyArr = filter(copyArr, 'surname', filterSurname)
    if (filterSecondname !== '') copyArr = filter(copyArr, 'SecondName', filterSecondname)
    if (filterDate !== '') copyArr = filter(copyArr, 'BirthDate', filterDate)
    if (filterStart !== '') copyArr = filter(copyArr, 'studyStart', filterStart)
    if (filterFaculty !== '') copyArr = filter(copyArr, 'faculty', filterFaculty)

    for (const user of copyArr) {
        createTableStudents(user); // Выводим каждого студента
    }
}


filterBtn.onclick = function () {
    copyArr = [...studentsArr]
    render(studentsArr);
};




