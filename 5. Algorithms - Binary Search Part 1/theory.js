const nums = [4, 5, 3, 2, 6, 9, 3] // Given an array
const target = 3 // and a target, 
let index = linearSearch(nums, target)//you need to find the index of the target in the array?
let indices = globalLinearSearch(nums, target)


/**
 * @param {Array} nums 
 * @param {Number} target 
 * @returns The index of target in nums if found, -1 otherwise
 */
function linearSearch(nums, target) {
    for(let index = 0; index < nums.length; index++) { // O(n)
        if(nums[index] === target) return index // O(n)
    }
    return null
}


/**
 * 
 * @param {Array} nums 
 * @param {Number} target 
 * @returns Array of indices of target in nums
 */
function globalLinearSearch(nums, target) {
    const indices = []  // O(1)
    for(let index = 0; index < nums.length; index++) { // O(n)
        if(nums[index] === target) indices.push(index) // O(n)
    }
    return indices //O(1)
} //


console.log(`The first index of ${target} in ${nums} is ${index}`)

console.log(`The indices of ${target} in ${nums} are ${indices}`)

// Time Complexity of Linear Search is O(n)


/** Oxford English Dictionary -> Sorted -> Can apply binary search. -> Very fast
 *  My Notebook -> Not sorted -> Have to do linear search. -> Slow
 */
function compare(a, b) {
    return a - b
}
nums.sort(compare)
console.log(`The sorted array looks like ${nums}`)
// [2,3,3,4,5,6,9], target = 3
/** Given a sorted array, and a target, find any index of target in the array. */

function binarySearch(nums, target) {
    let lo = 0, hi = nums.length - 1// Define the range of the indices for the target
    let mid = Math.floor(lo + (hi - lo) / 2)
    // hi should be the last index of the array. Which is nums.length - 1.
    while (lo <= hi) { // While there is atleast one element in the range
        let mid = Math.floor((lo + hi) / 2)
        if (nums[mid] === target) { // Found the target 
            return mid // return it
        } else if(nums[mid] < target) { // Target is on the right side
            lo = mid + 1 // move lo to the right of mid
        } else if(nums[mid] > target) { // Target is on the left
            hi = mid - 1 // move hi to left of mid
        }
    }
    return -1
}
console.log(`The binary search result for ${target} in ${nums} is ${binarySearch(nums, target)}`)
