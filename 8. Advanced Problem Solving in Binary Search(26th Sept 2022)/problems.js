/** Aggressive Cows */

/**
 * 
 * @param {*} stalls 
 * @param {*} minimumDistance 
 * @retruns the maximum number of cows you can accomodate
 */
let maximumCowCount = function(stalls, minimumDistance) {
    let answer = 1, prev = stalls[0]
    for (let next of stalls.slice(1)) {
        if (next - prev >= minimumDistance) {
            prev = next
            answer++
        }
    }
    return answer
}


let largestMinimumDistance = function(stalls, cowCount) {
    stalls.sort((a, b) => a - b)
    let lo = 1, hi = stalls[stalls.length - 1] - stalls[0], answer = -1
    while(lo <= hi) {
        let mid = Math.floor(lo + (hi - lo) / 2)
        if (maximumCowCount(stalls, mid) >= cowCount) {
            answer = mid
            lo = mid + 1
        } else {
            hi = mid - 1
        }
    }
    return answer
}

console.log(largestMinimumDistance([1,2,4,8,9], 3))