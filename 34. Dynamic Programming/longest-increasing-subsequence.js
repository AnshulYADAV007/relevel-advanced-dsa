/** https://leetcode.com/problems/longest-increasing-subsequence/description/
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
    let n = nums.length
    let dp = new Array(n).fill(1) 
    //dp[i] = the length of the longest increasing 
    // subsequence ending at i
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < i; j++) {
            if(nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return Math.max(...dp)
};

/*
[10,9,2,5,3,7,101,18]
[1, 1,1,2,2,3,4,  4] => Length of the longest increase subseq
*/






