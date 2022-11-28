/** https://leetcode.com/problems/maximum-subarray/description/
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let babuRao = 0, raju = -1000000
    for(let creditor of nums) {
        babuRao = babuRao + creditor
        raju = Math.max(raju, babuRao)
        babuRao = Math.max(0, babuRao)
    }
    return raju
};