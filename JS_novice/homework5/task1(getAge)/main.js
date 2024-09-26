function getAge(age) {
let currentDate = new Date(2022,0,1)
let currentYear = currentDate.getFullYear()
let year = currentYear - age
return year
}

console.log(getAge(1998))
console.log(getAge(1991))
console.log(getAge(2007))