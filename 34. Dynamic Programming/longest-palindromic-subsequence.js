/** https://leetcode.com/problems/longest-palindromic-subsequence/description/
 * @param {string} s
 * @return {number}
 */

 const helper = function(s, start, end, dp) {
    if(end - start <= 0) return end - start + 1
    if(dp[start][end] != -1) return dp[start][end]
    if(s[start] === s[end]) {
        dp[start][end] = 2 + helper(s, start + 1, end - 1, dp)
    }else {
        dp[start][end] = Math.max(helper(s, start+1, end, dp),
                                helper(s, start, end-1, dp))
    }
    return dp[start][end]
}
var longestPalindromeSubseq = function(s) {
    let dp = new Array(s.length)
    for(let i = 0; i < s.length; i++) dp[i] = new Array(s.length).fill(-1)
    return helper(s, 0, s.length - 1, dp)
}


    // if(s.length <= 1) return s.length
    // let start = 0, end = s.length - 1
    // if(s[start] == s[end]) return 2 + longestPalindromeSubseq(s.slice(start + 1, end))
    // else return Math.max(longestPalindromeSubseq(s.slice(start+ 1)), longestPalindromeSubseq(s.slice(start, end)))
// };