
let objects = [
    { name: 'Vasiliy', surname: 'Vasilyev' },
    { name: 'Ivan', surname: 'Ivanov' },
    { name: 'Petr', surname: 'Petrov' }
]

//let searchItem = 'Ivan'

function filter(objects, key, value){
    let obj = objects.filter(i => i[key] === value)
    //let obj = objects.find(i => i.name === searchItem)
    return obj
}

let result = filter(objects, 'name', 'Ivan')

console.log(result)

