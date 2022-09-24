/**
 * Minimum Moves to equal
 * https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var minMoves2 = function(nums) {
    nums.sort((a,b) => a - b)
    const median = nums[Math.floor(nums.length/2)]
    let answer = 0
    for (let num of nums) {
        answer += Math.abs(num - median)
    }
    return answer
};

/** 
[1, 3, 4, 5, 7]
 [  [  [] ]  ]
- [1, ... , 7] => 6
- [3, ... , 5] => 2
- [4] => 0


[1, 7, 9] -> 
- 2 => 1 + 5 + 7
- 3 => 2 + 4 + 6
- 7 => 6 + 0 + 2

[1, 10] -> 9
[1, 13, 12, 10]
-> [1, 10, 12, 13]
- [1, ..., 13] => 12
- [10, 12] => 2
*/


/**
 * Shortest Unsorted continuous subarray
 * https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findUnsortedSubarray = function(nums) {
    const sortedNums = [...nums].sort((a, b) => a - b)
    let left = 0, right = 0 
    
    for(let i = 1; i < nums.length; i++) {
        if (nums[i] != sortedNums[i]) {
            left = i
            break
        }
    }
    
    for(let i = nums.length -1 ; i >= 0; i--) {
        if (nums[i] != sortedNums[i]) {
            right = i
            break
        }
    }
    
    if(left == right) return 0

    return right - left + 1
};

/** Optimized Approach */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findUnsortedSubarray = function(nums) {
    let left = 0, right = 0 
    
    for(let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] < nums[i]) {
            left = i
            break
        }
    }
    
    for(let i = nums.length - 1 ; i > 0; i--) {
        if (nums[i - 1] > nums[i]) {
            right = i
            break
        }
    }
    
    if(left == right) return 0
    
    const minimum = Math.min(...nums.slice(left, right + 1))
    const maximum = Math.max(...nums.slice(left, right + 1))
    
    while (left - 1 >= 0 && nums[left - 1] > minimum) left--
    while (right + 1 < nums.length && nums[right + 1] < maximum) right++
    
    return right - left + 1
};


/**
 * Non-overlapping Intervals https://leetcode.com/problems/non-overlapping-intervals/
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var eraseOverlapIntervals = function(intervals) {
    /**
    * Find the maximum number of non-overlapping intervals
    * Substract that number from length of intervals.
    */
    if (intervals.length == 0) return 0
    
    intervals.sort((a,b) => a[1] - b[1])
    
    let end = -100000000, count = 0
    
    for(let current of intervals) {
        if( end <= current[0]) {
            count++
            end = current[1]
        }
    }
    
    return intervals.length - count
    
};

/**
 * Minimum number of arrows  https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
 var findMinArrowShots = function(points) {
    const START = 0, END = 1
    points.sort((a, b) => a[END] - b[END])
    
    let lastArrow = points[0][START] - 1, count = 0
    
    for(let current of points) {
        if(current[START] > lastArrow) {
            lastArrow = current[END]
            count++
        }
    }
    
    return count
};
