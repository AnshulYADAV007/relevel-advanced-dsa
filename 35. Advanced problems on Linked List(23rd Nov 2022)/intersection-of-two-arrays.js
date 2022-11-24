/** https://leetcode.com/problems/intersection-of-two-arrays/description/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1)
    let answer = []
    for(let num of new Set(nums2)) {
        if(set1.has(num)) answer.push(num)
    }
    return answer
};