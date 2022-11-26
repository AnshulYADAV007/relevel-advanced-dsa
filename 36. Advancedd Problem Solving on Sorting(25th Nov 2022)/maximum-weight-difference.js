
const maxDifference = function(nums, k) {
    let n = nums.length
    nums.sort((a,b) => a - b)

    let total = nums.reduce((a,b) => a + b)
    let firstKSum = nums.slice(0, k).reduce((a,b) => a + b)
    let lastKSum = nums.slice(n-k).reduce((a,b) => a + b)

    let choice1 = Math.abs(firstKSum - (total - firstKSum))
    let choice2 = Math.abs(lastKSum - (total - lastKSum))

    return Math.max(choice1, choice2)
}   

let k = 2
let nums = [18, 4, 15, 12, 10]
console.log(maxDifference(nums, k))