const fib = function(n) {
    let dp = new Array(n + 1).fill(-1)
    dp[0] = 0, dp[1] = 1
    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
}
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
console.log(fib(1000))