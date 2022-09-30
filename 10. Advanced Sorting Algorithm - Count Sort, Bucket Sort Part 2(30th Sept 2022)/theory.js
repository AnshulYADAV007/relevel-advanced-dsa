/**
 * Radix Sort
 */

const radixSort = function(nums) { // O(d(n + b)) b = base, i.e., 10
    let maxElement = Math.max(...nums)
    for (let decimal = 1; Math.floor(maxElement/decimal) > 0 ; decimal *= 10){ // O(d), d= #digits
        console.log(nums, decimal)
        nums = countSort(nums, decimal) // O(n + 10)
    }
    return nums
}

const countSort = function(nums, decimal) {
    console.log(nums)
    let countArray = getCountArray(nums, decimal)
    console.log(countArray)
    prefixSum(countArray)
    console.log(countArray)
    return fillArray(nums, countArray, decimal)
}

const getCountArray = function(nums, decimal) {
    let countArray = new Array(10).fill(0)

    for (let num of nums) {
        let digit = Math.floor(num / decimal) % 10
        countArray[digit]++
     }
    return countArray
}

const prefixSum = function(countArray) {
    countArray[0]--
    for(let i = 1; i < countArray.length ; i++) {
        countArray[i] += countArray[i-1]
    }
}

const fillArray = function(nums, countArray, decimal) {
    let aux = new Array(nums.length).fill(0)
    for(let i = nums.length - 1; i >= 0; i--) {
        let digit = Math.floor(nums[i] / decimal) % 10
        aux[countArray[digit]] = nums[i]
        countArray[digit]--
    }
    return aux
}
let nums = [129, 431, 431, 653, 232, 824, 2, 921, 54]

// console.log(`The radix sort result for ${nums} is ${radixSort(nums)}`)

/** Lexicographical Sort */

const sortString = function(str) {
    const chars = Array.from(str)
    const countArray = getCountArrayChar(chars)
    const answer = fillArrayChar(countArray)
    return answer.join("")
}

/**
 * 
 * @param {*} chars 
 * @returns frequency count of the chars
 */
const getCountArrayChar = function(chars) {
    const counts = new Array(26).fill(0)
    for (let c of chars) {
        counts[charCode(c)]++
    }
    return counts
}

const charCode = function(c) {
    return c.charCodeAt(0) - "a".charCodeAt(0)
}

const fillArrayChar = function(countArray) {
    const alphabet = Array.from('abcdefghijklmnopqrstuvwxyz')
    const aux = []

    for(let i = 0; i < 26; i++) {
        for(let j = 0; j < countArray[i]; j++) {
            aux.push(alphabet[i])
        }
    }

    return aux;
}

let str = "unacademy"

console.log(`The sort of ${str} is ${sortString(str)}`)
