/** https://leetcode.com/problems/contains-duplicate/description/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return new Set(nums).size < nums.length
};