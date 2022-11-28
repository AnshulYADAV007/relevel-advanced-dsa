/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    let result = []
    // i, j, k // i < j < k 
    // nums[i] <= nums[j] <= nums[k]
    // -1, -1, -1

    for(let i = 0; i< nums.length; i++) {
        if(i > 0 && nums[i] === nums[i-1]) continue;
        const target = 0 - nums[i]
        let left = i + 1, right = nums.length - 1
        while(left < right) {
            
        }
    }
};