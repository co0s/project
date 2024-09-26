document.addEventListener('DOMContentLoaded', function() { 

function createStudentCard(name,age) {

    let block = document.createElement("div")
    block.classList.add("block")
    
    let title = document.createElement("h2")
    title.classList.add("title")
    title.textContent = name

    let text = document.createElement("span")
    text.classList.add("text")
    text.textContent = `Возраст:${Number(age)} лет`

    block.append(title,text)
    return block
}

document.body.append(createStudentCard("Игорь", 17))
})