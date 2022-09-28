/**
 * Count Sort
 */
const countSort = function(nums) {
    const minElement = Math.min(...nums)
    const maxElement = Math.max(...nums)

    const freq = getFreqMap(nums)
    return getArray(freq, minElement, maxElement)
}

const getFreqMap = function(nums) {
    const freq = new Map()    
    for (let num of nums) {
        increment(freq, num)
    }
    return freq
}

const increment = function(freq, num) {
    if (freq.has(num)) {
        freq.set(num, freq.get(num) + 1)
    } else {
        freq.set(num, 1)
    }
}

const getArray = function(freq, minElement, maxElement) {
    const result = []

    for(let i = minElement; i<= maxElement; i++){   // O(range + n) 
                                                    // where range = maxElement - minEle + 1
        if (!freq.has(i)) continue // O(1)
        for(let j = 0; j < freq.get(i); j++) result.push(i)
    }

    return result
}

const nestedLoop = function(n) {
    count = 0
    for (let i = 0 ;i < n ; i++) { // log(0) + log(1) + log(2) + log(3) + ... + log(n)
        // log(n!) ~ log(n^n) ~ nlogn
        for (let j = 1; j < i; j = j * 2) { // O(log(i))
            count += 1
        }
    }
    return count
}

let nums = [1,4,2,3,1,3,1] 
let sortedNums = countSort(nums)
// console.log(`The sorted version of ${nums} is ${sortedNums}`)

// for(let i = 0 ; i < 500; i += 10) {
//     console.log(i, nestedLoop(i))
// }


/** Bucket Sort */

const bucketSort = function(nums, k) {
    const buckets = getEmptyBuckets(k) // O(k)
    console.log(buckets)
    fillBuckets(nums, buckets) // O(n)
    console.log(buckets)
    sortBuckets(buckets) // O(k * c log c) c = count of elements in a bucket
    console.log(buckets)
    return concatenate(buckets) // (n + k)
}

const getEmptyBuckets = function(k) {
    const answer = []
    for(let i = 0; i < k ; i++) {
        answer.push([])
    }
    return answer
}

const fillBuckets = function(nums, buckets){
    const maxElement = Math.max(...nums) + 0.1
    const k = buckets.length
    for (let num of nums) {
        buckets[Math.floor((k * num)/maxElement)].push(num)
    }
}

const sortBuckets = function(buckets) {
    for(let bucket of buckets) {
        bucket.sort((a, b) => a-b)
    }
}

const concatenate = function(buckets) {
    let answer = []
    for(let bucket of buckets) { // O(n + k)
        for(let element of bucket) {
            answer.push(element)
        }
    }
    return answer
}

nums = [0.24, 0.19, 0.39, 0.34, 0.21, 0.41, 0.82, 0.51, 0.95]
sortedNums = bucketSort(nums, 10)

console.log(`The bucket sort for ${nums} is ${sortedNums}`)
