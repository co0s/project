let user1 = {
  name: 'Igor',
  age: 17
}

let user2 = {
  name: 'Olya',
  age: 21
}


let usersArr = []
usersArr.push(user1, user2)

//1 вариант

function getOlderUser(newArr) {
  let arr = []
  for (let i of newArr) {
    arr.push(i.age)
  }
  let obj = usersArr.filter(item => item.age >= Math.max(...arr))[0].name
  return obj
}


//2 вариант----------------------------------------------

let ages = {
  'Igor': 17,
  'Olya': 21
}


function getOlderUser1(ages) {
  let max = 0
  let maxName = null

  for (const [name, age] of Object.entries(ages)) {
    if (max < age) {
      max = age;
      maxName = name;
    }
  }

  return maxName;
}

//3 вариант----------------------------------------------------

function getOlderUser2(user1, user2) {
  if (user1.age > user2.age) {
    return user1.name
  } else (user1.age < user2.age)
  return user2.name
}




// 4 вариант--------------------------------------------------------

function getOlderUser5(users){
  let maxAge = 0
  let oldestUser = ''
  for (let key in users){
    if(users[key].age > maxAge) {
      maxAge = users[key].age
      oldestUser = users[key].name
    }
  }
  return oldestUser
}



console.log(getOlderUser(usersArr))
console.log(getOlderUser1(ages))
console.log(getOlderUser2(user1, user2))
console.log(getOlderUser5(usersArr))



