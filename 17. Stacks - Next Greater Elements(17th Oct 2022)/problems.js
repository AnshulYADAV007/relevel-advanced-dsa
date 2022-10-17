const Stack = require("./stack")

const getNextGreater = function(nums) {
    const INDEX = 0, NUMBER = 1
    let stk = new Stack()
    let result = new Array(nums.length)
    
    for(let i = 0; i < nums.length; i++) { // O(n)
        console.log(stk.data)
        while( !stk.isEmpty() &&
                stk.peek()[NUMBER] < nums[i]) {
            result[stk.pop()[INDEX]] = nums[i] // O(n)
        }
        stk.push([i, nums[i]])
    }

    console.log(stk.data)
    
    while(!stk.isEmpty()) {
        result[stk.pop()[INDEX]] = -1
    }

    return result
}

let nums = [71, 55, 82, 55]
// console.log(`The next greater elements for 
// ${nums} are 
// ${getNextGreater(nums)}`)

/**
 * Remove Adjacent Duplicates in String
 */

const removeDuplicates = function(s) {
    console.log(s)
    for(let i = 0; i < s.length - 1; i++) {
        if(s[i] == s[i + 1]){
            s = removeDuplicates(s.slice(0, i) + s.slice(i+2))
            break
        }
    }
    return s
}


const removeDuplicatesIterative = function(s) {
    const stk = new Stack()

    for(let ch of s) {
        console.log(stk.data, ch)
        if (stk.isEmpty() || stk.peek() != ch) {
            stk.push(ch)
        } else {
            stk.pop()
        }
    }

    const result = new Array(stk.size)
    for(let i = result.length - 1; i>= 0; i--) {
        result[i] = stk.pop()
    }

    return result.join("")
}

let s = "pbbcggttciiippooaais"
// console.log(`After removing duplicates ${s} will become ${removeDuplicatesIterative(s)}`)

// nums.slice(start, end) will give you the nums array from [start, end-1]

/**
 * Sum of Subarray Minimums
 */

const getSubarrayMinimums = function(nums) { // O(n^2)
    let sum = 0
    for (let i =0 ; i < nums.length; i++) { // O(n) times
        let minimum = nums[i]
        for (let j = i; j < nums.length; j++) { // O(n) times
            minimum = Math.min(minimum, nums[j])
            console.log(nums.slice(i, j + 1) , 
                        minimum)
            sum += minimum 
        }
    }
    return sum
}

const getNSE = function(nums) {
    const NUMBER = 1, INDEX = 0
    let stk = new Stack()
    result = new Array(nums.length)
    for(let i = 0; i < nums.length; i++) {
        while(!stk.isEmpty() && stk.peek()[NUMBER] > nums[i]) {
            result[stk.pop()[INDEX]] = [i, nums[i]]
        }
        stk.push([i, nums[i]])
    }
    while(!stk.isEmpty()) {
        result[stk.pop()[INDEX]] = [nums.length, -1]
    }
    return result
}


const getPSE = function(nums) {
    const NUMBER = 1, INDEX = 0
    let stk = new Stack()
    result = new Array(nums.length)
    for(let i = nums.length - 1; i >= 0 ; i--) {
        while(!stk.isEmpty() && stk.peek()[NUMBER] >= nums[i]) {
            result[stk.pop()[INDEX]] = [i, nums[i]]
        }
        stk.push([i, nums[i]])
    }
    while(!stk.isEmpty()) {
        result[stk.pop()[INDEX]] = [-1, -1]
    }
    return result
}

const getSum = function(nums, nse, pse) {
    const MOD = 1000000007
    let sum = 0, INDEX = 0
    for(let i =0 ; i< nums.length; i++) {
        sum += (nums[i] * (nse[i][INDEX] - i) * (i - pse[i][INDEX])) % MOD
        sum %= MOD
    }
    return sum
}

let getSubarrayMinimums2 = function(nums) {
    let nse = getNSE(nums)
    // console.log(nse, nums)
    let pse = getPSE(nums)
    // console.log(pse, nums)
    return getSum(nums, nse, pse)
}

console.log(`The sum of subarray minimums for ${nums} is ${getSubarrayMinimums2(nums)}`)

const getMax = function(hist, nse, pse) {
    let maximum = 0, INDEX = 0
    for(let i = 0; i< hist.length; i++) {
        let currentArea = hist[i] * (nse[i][INDEX] - pse[i][INDEX] - 1)
        maximum = Math.max(maximum, currentArea)
    }
    return maximum
}

const getLargestArea = function(hist) {
    const nse = getNSE(hist)
    const pse = getPSE(hist)
    return getMax(hist, nse, pse)
}
const hist = [6, 2, 5, 4, 5, 1, 6]
console.log(`The area of the largest rectangle for histogram ${hist} is ${getLargestArea(hist)}`)