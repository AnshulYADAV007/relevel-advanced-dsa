/** Problem statement: 
 *      Return the lower bound and the upper bound of a target in a sorted array.
 *      Lower Bound represents the index of first element greater than or equal to the target.
 *      Upper Bound represents the index of first element greater than the target.
 */

const nums = [2,3,3,4,5,6,9]
const target = 3
/**
 * Index of lower bound and upper bound
 * lower bound = 1 i.e. the index of first 3
 * upper bound = 3 i.e. the index of 4
 */

/**
 * Lets say the target is 7.
 * lower bound = 6
 * upper bound = 6 
 */

function lowerBound(nums, target) {
    let lo = 0, hi = nums.length - 1, answer = nums.length

    while(lo <= hi) {
        let mid = Math.floor(lo + (hi - lo) / 2)
        if (nums[mid] >= target) {
            answer = mid
            hi = mid - 1
        } else {
            lo = mid + 1
        }
    }

    return answer
}


function upperBound(nums, target) {
    let lo = 0, hi = nums.length - 1, answer = nums.length

    while(lo <= hi) {
        let mid = Math.floor(lo + (hi - lo) / 2)
        if (nums[mid] > target) {
            answer = mid
            hi = mid - 1
        } else {
            lo = mid + 1
        }
    }

    return answer
}

console.log(`The upper bound and lower bound indices for ${target} in ${nums} are
            ${upperBound(nums, target)}  and ${lowerBound(nums, target)}`)

/**
 * Problem : https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * 
 */

 var searchRange = function(nums, target) {
    return [getFirst(nums, target), getLast(nums, target)]
};

function getFirst(nums, target) {
    let lo = 0, hi = nums.length - 1, answer = -1
    while(lo <= hi){
        let mid = Math.floor(lo + (hi - lo) / 2)
        if(nums[mid] === target) {
            answer = mid
            hi = mid - 1
        } else if (nums[mid] > target) {
            hi = mid - 1
        } else {
            lo = mid + 1
        }
    }
    return answer
}

function getLast(nums, target) {
    let lo = 0, hi = nums.length - 1, answer = -1
    while(lo <= hi){
        let mid = Math.floor(lo + (hi - lo) / 2)
        if(nums[mid] === target) {
            answer = mid
            lo = mid + 1
        } else if (nums[mid] > target) {
            hi = mid - 1
        } else {
            lo = mid + 1
        }
    }
    return answer
}

console.log(`The range of ${target} in ${nums} is ${searchRange(nums, target)}`)