document.addEventListener('DOMContentLoaded', function() { 

let studentObj = {
    name: "Игорь",
    age: 17
}


function createStudentCard(object) {

    let block = document.createElement("div")
    block.classList.add("block")
    
    let title = document.createElement("h2")
    title.classList.add("title")
    title.textContent = object.name

    let text = document.createElement("span")
    text.classList.add("text")
    text.textContent = `Возраст:${Number(object.age)} лет`

    block.append(title,text)
    return block
}

document.body.append(createStudentCard(studentObj))
})