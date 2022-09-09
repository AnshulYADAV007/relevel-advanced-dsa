function sumOfPositive(arr) {
    let total = 0
    for(let element of arr) {
        if (element > 0) {
            total += element
        }
    }
    return total
}


function sumOfPositiveFilter(arr) {
    arr = arr.filter(element => element > 0)
    sum = arr.reduce((a, b) => a + b)
    return sum
}


function sumOfPositiveReduce(arr) {
    return arr.reduce((a,b) => b > 0? a + b: a, 0)
}


function squareSum(arr) {
    let total = 0
    for(let element of arr) {
        total += element * element
    }
    return total
}

function squareSum2(arr) {
    return arr.reduce((a, b) => a + b*b, 0)
}


function convertToArray(num) {
    const arr = []

    if(num == 0) {
        return [0]
    }

    while(num > 0) {
        arr.push(num % 10)
        num = Math.floor(num/10)
    }
    
    return arr
}


function convertToArray2(num) {
    let arr = [...`${num}`]
    arr = arr.map(a => a === '.'? a: parseInt(a))
    return arr.reverse()
}


function bensProfit(arr) {
    let minimum = arr[0], maximum = arr[0]
    for(let element of arr) {
        if (element < minimum) {
            minimum = element
        }
        if (element > maximum) {
            maximum = element
        }
    }
    return [minimum, maximum]
}

function min(value1, value2, value3) {
    let minimum = value1
    if (value2 < minimum) {
        minimum = value2
    }
    if (value3 < minimum) {
        minimum = value3
    }
    return minimum
}

function bensProfit2(arr) {
    return [Math.min(...arr), Math.max(...arr)]
}

function middleIndex(arr) {
    for(let index = 0; index < arr.length; index++) {
        if(greaterCount(arr, arr[index]) == 1) {
            return index
        }
    }
    return -1
}


function greaterCount(arr, target) {
    let answer = 0
    for(let element of arr) {
        if (element > target) {
            answer += 1
        }
    }
    return answer
}


function middleElement(arr) {
    return arr.sort((a,b) => a - b)[1]
}


function middleIndex2(arr) {
    const indexOf = {}
    for(let i = 0; i < arr.length; i++) {
        indexOf[arr[i]] = i
    }
    return indexOf[middleElement(arr)]
}

console.log(middleIndex2([5, 10, 14]))
console.log(middleIndex2([2, 3, 1]))