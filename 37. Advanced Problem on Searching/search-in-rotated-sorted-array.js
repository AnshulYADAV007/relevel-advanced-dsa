// https://leetcode.com/problems/search-in-rotated-sorted-array/
const getPivot = function(nums) {
    let lo = 0, hi = nums.length - 1, answer = 0
    while(lo <= hi) {
        let mid = lo + Math.floor((hi - lo)/2)
        if(nums[mid] <= nums.at(-1)){
            answer = mid
            hi = mid - 1
        } else {
            lo = mid + 1
        }
    }
    return answer
}

const binarySearch = function(nums, target) {
    let lo = 0, hi = nums.length - 1
    while(lo <= hi) {
        let mid = lo + Math.floor((hi - lo)/2)
        if(nums[mid] === target) return mid
        else if(nums[mid] < target) lo = mid + 1
        else hi = mid - 1
    }
    return -1
}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let pivot = getPivot(nums)
    let index = binarySearch(nums.slice(0, pivot), target)
    if(index == -1) {
        index = binarySearch(nums.slice(pivot), target)
        if(index != -1) index += pivot
    }
    return index
};