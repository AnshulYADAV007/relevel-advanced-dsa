// https://leetcode.com/problems/longest-palindromic-substring/

const helper = function(s, start, end, dp) {
    console.log(s.slice(start, end + 1))
    if(end - start <= 0){
        dp[start][end] = end - start + 1
    } 
    if(dp[start][end] != -1) return dp[start][end]
    if (
        s[start] === s[end] && 
        (helper(s, start + 1, end - 1, dp) == end - start - 1)
        )
    {
        dp[start][end] = end - start + 1
    } else {
        dp[start][end] = Math.max(helper(s, start+1, end, dp),
                                helper(s, start, end-1, dp))
    }
    return dp[start][end]
}

const getString = function(dp, s) {
    let start = 0, end = s.length - 1
    while(dp[start][end] < end - start + 1) {
        if(dp[start + 1][end] > dp[start][end-1]){
            start++
        }else{
            end--
        }
    }
    return s.slice(start, end + 1)
}
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let dp = new Array(s.length)
    for(let i = 0; i < s.length; i++) dp[i] = new Array(s.length).fill(-1)
    helper(s, 0, s.length - 1, dp)
    console.log(dp)
    return getString(dp, s)
};
