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