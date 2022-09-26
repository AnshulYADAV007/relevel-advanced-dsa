/** Aggressive Cows */

/**
 * 
 * @param {*} stalls 
 * @param {*} minimumDistance 
 * @retruns the maximum number of cows you can accomodate
 */
let maximumCowCount = function(stalls, minimumDistance) {
    let answer = 1, curr = stalls[0]
    for (let next of stalls.slice(1)) {
        if (next - curr >= minimumDistance) {
            curr = next
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
        console.log(`lo : ${lo}, mid : ${mid}, hi : ${hi},` +
                    `maximumCowCount : ${maximumCowCount(stalls, mid)}`)
        if (maximumCowCount(stalls, mid) >= cowCount) {
            answer = mid
            lo = mid + 1
        } else {
            hi = mid - 1
        }
    }
    return answer
}

// console.log(largestMinimumDistance([1,2,4,8,9], 3))

/** 
 * Painter Partition 1 
 * Book Allocation
 * 
 * In both these questions you are given an array. You need to partition the array 
 * into p partitions. Such that the maixum partition sum is minimized.
 */

let minPartitionCount = function(nums, maxSum) {
    let answer = 1, currentSum = 0
    for(let num of nums) {
        if (currentSum + num <= maxSum) {
            currentSum += num
        } else {
            currentSum = num
            answer += 1
        }
    }
    return answer
}



let minimumMaximumSum = function(nums, partitionCount) {
    let lo = Math.min(...nums), hi = nums.reduce((a,b) => a+b) , answer = -1
    while (lo <= hi) {
        let maximumPartitionSumCandidate = Math.floor(lo + (hi - lo)/2)
        if(minPartitionCount(nums, maximumPartitionSumCandidate) <= partitionCount) {
            answer = maximumPartitionSumCandidate
            hi = maximumPartitionSumCandidate - 1
        } else {
            lo = maximumPartitionSumCandidate + 1
        }
    }
    return answer
}

console.log(`For book allocation minimumMaximumSum is ${minimumMaximumSum([12, 34, 67, 90], 2)}`)
console.log(`For painter partition minimumMaximumSum is ${minimumMaximumSum([10,20,30,40], 2)}`)

