let callCount = 0
const fib = function(n, depth, dp) {
    let tabs = "----".repeat(depth)
    callCount++
    // console.log(tabs , n)
    if(dp[n] != -1) return dp[n]

    if(n === 0 || n === 1) dp[n] = n
    else dp[n] = fib(n-1, depth + 1, dp) + fib(n-2, depth + 1, dp)
    
    return dp[n]
}

for(let i = 0; i < 100000; i++) {
    let dp = new Array(i + 1).fill(-1)
    callCount = 0
    fib(i, 0, dp)
    console.log(i, callCount)
}
