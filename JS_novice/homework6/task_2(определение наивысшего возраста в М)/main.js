let allUsers = [
  {name: 'Валя', age: 11},
  {name: 'Таня', age: 24},
  {name: 'Рома', age: 21},
  {name: 'Надя', age: 34},
  {name: 'Антон', age: 7},
]


function getOlderUser(newArr){
    let arr = []
    for(let i of newArr) {
      arr.push(i.age)
        }
        let obj = allUsers.filter(item => item.age >= Math.max(...arr))[0].name
        return obj
    }



console.log(getOlderUser(allUsers))       




