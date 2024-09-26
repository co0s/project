// массив с почтовыми адресами
let whiteList = ['my-email@gmail.ru', 'jsfunc@mail.ru', 'annavkmail.ru@vk.ru', 'fullname@skill.ru', 'goodday@day.ru']

//масив с ппочтовыми адресами в черном списке
let blackList = ['jsfunc@mail.ru', 'goodday@day.ru']


function filter(whiteList,blackList) {
    let newArr = []
    for (let i = 0; i < whiteList.length; i++) {
        if (!blackList.includes(whiteList[i]))
            newArr.push(whiteList[i])
    }
    return newArr
}

let result = filter(whiteList,blackList)

console.log(result)