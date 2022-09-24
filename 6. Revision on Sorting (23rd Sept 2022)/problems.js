/** Merge two sorted Arrays https://leetcode.com/problems/merge-sorted-array/ */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */


 var merge = function(nums1, m, nums2, n) {
    const answer = []
    let index1 = 0, index2 = 0
    
    while(index1 < m && index2 < n) {
        if (nums1[index1] < nums2[index2]) {
            answer.push(nums1[index1])
            index1++
        } else {
            answer.push(nums2[index2])
            index2++
        }
    }
    
    while(index1 < m) {
        answer.push(nums1[index1])
        index1++
    }
    
    while(index2 < n) {
        answer.push(nums2[index2])
        index2++
    }
    
    for(let i = 0; i < nums1.length; i++) {
        nums1[i] = answer[i]
    }
};


/** Solving with merge sort */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let answer = [...nums1.slice(0,m), ...nums2]
    answer = mergeSort(answer)
    for(let i = 0; i < nums1.length; i++) {
        nums1[i] = answer[i]
    }
}


const mergeSort = function(nums) {
    if(nums.length <= 1) {
        return nums
    }
    
    const n = nums.length
    const mid = Math.floor(n / 2)

    const left = mergeSort([...nums.slice(0, mid)])
    const right = mergeSort([...nums.slice(mid)])
    
    return merge_routine(left, right)
}

var merge_routine = function(nums1, nums2) {
    const answer = []
    let index1 = 0, index2 = 0
    const m = nums1.length, n = nums2.length
    while(index1 < m && index2 < n) {
        if (nums1[index1] < nums2[index2]) {
            answer.push(nums1[index1])
            index1++
        } else {
            answer.push(nums2[index2])
            index2++
        }
    }
    
    while(index1 < m) {
        answer.push(nums1[index1])
        index1++
    }
    
    while(index2 < n) {
        answer.push(nums2[index2])
        index2++
    }
    
    return answer
};

/** Merge Intervals https://leetcode.com/problems/merge-intervals/ 
 * 
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    
    const answer = []
    for(let interval of intervals) {
        if (answer.length != 0 && answer[answer.length - 1][1] >= interval[0]) {
            answer[answer.length-1][1] = Math.max(answer[answer.length-1][1],
                                                 interval[1])
        } else {
            answer.push(interval)
        }
    }
    return answer
};

/** Find K closest elments https://leetcode.com/problems/find-k-closest-elements/ */

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
 var findClosestElements = function(arr, k, x) {
    let right = getUpperLimit(arr, x)
    let left = right - 1
    while (right - left - 1 < k) {
        if (right >= arr.length) {
            left--
        } else if (left < 0) {
            right++
        } else if (Math.abs(arr[right] - x) < Math.abs(arr[left] - x)) {
            right++
        } else {
            left--
        }
    } 
    return [...arr.slice(left + 1, right)]
};


const getUpperLimit = function(arr, target) {
    let lo = 0, hi = arr.length - 1, answer = arr.length
    while (lo <= hi) {
        let mid = Math.floor(lo + (hi - lo)/2)
        if (arr[mid] >= target) {
            answer = mid
            hi = mid - 1
        } else {
            lo = mid + 1
        }
    }
    return answer
}

/**
 * Wiggle Sort II - https://leetcode.com/problems/wiggle-sort-ii/
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var wiggleSort = function(nums) {
    nums.sort((a, b) => a - b) // O(nlog(n))
    const answer = []
    let mid = Math.floor((nums.length-1)/2)
    let left = mid, right = nums.length - 1
    while (left >= 0) {
        answer.push(nums[left])
        left--
        if(right > mid){
            answer.push(nums[right])
            right--
        }
    }
    for(let i = 0; i < nums.length; i++) {
        nums[i] = answer[i]
    }
};