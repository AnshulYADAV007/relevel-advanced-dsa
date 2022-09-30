/**
 * Radix Sort
 */

const radixSort = function(nums) {
    let maxElement = Math.max(...nums)
    for (let decimal = 1; Math.floor(maxElement/decimal) > 0 ; decimal *= 10){
        console.log(nums, decimal)
        nums = countSort(nums, decimal)
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

console.log(`The radix sort result for ${nums} is ${radixSort(nums)}`)