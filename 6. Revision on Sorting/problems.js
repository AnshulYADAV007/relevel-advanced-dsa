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