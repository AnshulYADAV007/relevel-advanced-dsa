/** https://leetcode.com/problems/single-number/description/
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // 010 ^ 111 -> 101
    return nums.reduce((a,b) => a^b)
};