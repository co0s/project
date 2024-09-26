let newArr = [2, 5, 1, 3, 4]

function arrSort(arr) {
    let result = [...arr] 
    for (let j = 0; j < result.length; j++) {
        for (let i = 0; i < result.length - 1; i++)
            if (result[i] > result[i + 1]) {
                let temp = result[i]
                result[i] = result[i + 1]
                result[i + 1] = temp
            }
    }
    return result
}

console.log(arrSort(newArr))