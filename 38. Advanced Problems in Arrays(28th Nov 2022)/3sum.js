/** https://leetcode.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    let result = []
    // i, j, k // i < j < k 
    // nums[i] <= nums[j] <= nums[k]
    // -1, -1, -1

    for(let i = 0; i< nums.length; i++) { // O(n)
        if(i > 0 && nums[i] === nums[i-1]) continue;
        const target = 0 - nums[i]
        let left = i + 1, right = nums.length - 1
        // nums[left] + nums[right] == target
        while(left < right) { // O(n)
            let sum = nums[left] + nums[right]
            if(sum == target) {
                result.push([nums[i], nums[left], nums[right]])
                left++
                while(nums[left] === nums[left - 1]) left++
            } else if (sum < target) left++
            else right--
        }
    }
    return result
};