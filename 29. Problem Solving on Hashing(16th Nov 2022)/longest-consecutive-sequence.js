/**
 * https://leetcode.com/problems/longest-consecutive-sequence/description/
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    if(nums.length == 0) return 0
    nums.sort((a,b) => a - b) //O(n log n)
    let maxLength = 1
    let currentLength = 1
    for(let i = 1; i< nums.length; i++) {
        if(nums[i] == nums[i-1] + 1) {
            currentLength++
        }else if(nums[i] == nums[i-1]) {
            continue
        }else {
            currentLength = 1
        }
        maxLength = Math.max(currentLength, maxLength)
    }
    return maxLength
};


/** O(n) map approach
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    const canStart = new Map()
    for(let num of nums) {
        canStart.set(num, true)
    }
    for(let num of nums) {
        if(canStart.has(num + 1)) {
            canStart.set(num + 1, false)
        }
    }
    let maxLength = 0
    for(let num of nums) {
        if(canStart.get(num)){
            let current = getLength(num, canStart)
            maxLength = Math.max(maxLength, current)
        }
    }
    return maxLength
};

const getLength = function(num, map) {
    let answer = 0
    while(map.has(num)) {
        answer++
        num++
    }
    return answer
}