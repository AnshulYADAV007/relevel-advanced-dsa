/**
 * The binary search list: https://leetcode.com/list/esurhpud
 */

/**
 * Square root
 * https://leetcode.com/problems/sqrtx/description/
 */

/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    let lo = 0, hi = Math.floor(x/2) + 1, answer = 1
    while (lo <= hi) {
        let mid = Math.floor(lo + (hi -lo)/2)
        let square = mid * mid // function whose inverse I want
        console.log(lo, mid, hi, square)
        if(square <= x) {
            answer = mid
            lo = mid + 1
        }else {
            hi = mid - 1
        }
    }
    return answer
};


/** 
 * Median of two sorted arrays
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    const m = nums1.length, n = nums2.length
    if(m == 0) return median(nums2)
    if(n == 0) return median(nums1)

    if((m + n) % 2 == 1) {
        return kthElement(nums1, nums2, Math.floor((m + n)/2 + 1))
    } else {
        const count1 = Math.floor((m + n)/2), count2 = Math.floor((m + n)/2 + 1)
        const mid1 = kthElement(nums1, nums2, Math.floor((m + n)/2))
        const mid2 = kthElement(nums1, nums2, Math.floor((m + n)/2 + 1))
        console.log(`The mid is ${mid1} for ${count1}`,`The mid is ${mid2} for ${count2}`)
        return (mid1 + mid2)/2
    }
};

const median = function(nums) {
    let n = nums.length
    if(n % 2 == 1) {
        return nums[Math.floor(n/2)]
    }else {
        return (nums[Math.floor(n/2)] + nums[Math.floor(n/2 - 1)])/2
    }
}

const kthElement = function(nums1, nums2, k) {
    // returns the kth element in the merged array
    let lo = Math.min(nums1[0], nums2[0]), hi = Math.max(nums1.at(-1), nums2.at(-1)),
    answer = hi
    while(lo <= hi) {
        let mid = Math.floor(lo + (hi - lo)/2)
        const less = lesserCount(nums1, nums2, mid)
        console.log("Less count is", less, " for ", mid)
        if(less == k - 1) {
            answer = mid
            lo = mid + 1
        } else if (less > k - 1) {
            hi = mid - 1
        } else if (less < k - 1){
            answer = mid
            lo = mid + 1
        }
    }
    console.log(`The ${k}th element in ${nums1} ${nums2} is ${answer}`)
    return answer
}

const lesserCount = function(nums1, nums2, target) {
    // returns number of elements less than target in nums1 and nums2. 
    return binarySearch(nums1, target) + binarySearch(nums2, target)
}

const binarySearch = function(nums, target) {
    // returns the index of target in nums
    let lo = 0, hi = nums.length - 1, answer = 0
    while(lo <= hi) {
        let mid = Math.floor(lo + (hi - lo)/2)
        if (nums[mid] === target) { // if found look for lower
            answer = mid
            hi = mid - 1
        } else if (nums[mid] < target) {
            answer = mid + 1
            lo = mid + 1
        } else {
            hi = mid - 1
        }
    }
    console.log("The index value is", answer, " for ", target, " in ", nums)
    return answer
}


/**
 * Arranging Coins
 * https://leetcode.com/problems/arranging-coins/description/
 */

/**
 * @param {number} n
 * @return {number}
 */
 var arrangeCoins = function(n) {
    let lo = 1, hi = n, answer = -1
    while(lo <= hi) {
        let mid = Math.floor(lo + (hi - lo)/2)
        if(coinCount(mid) <= n) {
            answer = mid
            lo = mid + 1
        } else {
            hi = mid - 1
        }
    }
    return answer
};

const coinCount = function(row) {
    return (row * (row + 1))/2
}