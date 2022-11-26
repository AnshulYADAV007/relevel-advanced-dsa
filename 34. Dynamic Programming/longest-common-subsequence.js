// https://leetcode.com/problems/longest-common-subsequence/description/
const helper = function(text1, text2, i, j, dp){
    if(i >= text1.length || j >= text2.length) return 0
    if(dp[i][j] != -1) return dp[i][j]
    if(text1[i] == text2[j]){
        dp[i][j] = 1 + helper(text1, text2, i+1, j+1, dp)
    }else {
        dp[i][j] = Math.max(
                    helper(text1, text2, i+1, j, dp),
                    helper(text1, text2, i, j+1, dp)
                )
    }
    return dp[i][j]
}

var longestCommonSubsequence = function(text1, text2) {
    let dp = new Array(text1.length)
                .fill(-1)
                .map(
                    x => new Array(text2.length)
                            .fill(-1)
                    )
    console.log(dp)
    return helper(text1, text2, 0, 0, dp)
}

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 *
var longestCommonSubsequence = function(text1, text2) {
    if(text1.length == 0 || text2.length == 0) return 0
    if(text1[0] == text2[0]) return 1 + longestCommonSubsequence(text1.slice(1), text2.slice(1))    
    else return Math.max(longestCommonSubsequence(text1.slice(1), text2), longestCommonSubsequence(text1, text2.slice(1)))
};
*/