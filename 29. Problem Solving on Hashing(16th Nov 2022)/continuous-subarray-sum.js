let getSubarrayCount = function (nums, k) {
    console.log(nums)
    let count = 0
    let prefixSum = 0
    const sumCount = new Map()
    sumCount.set(0, 1)
    for(let num of nums) {
        prefixSum += num
        let prevSum = prefixSum - k
        console.log(prefixSum, prevSum, sumCount, count)
        if(sumCount.has(prevSum)) {
            count += sumCount.get(prevSum)
            /*
            // sumCount[target] is the count of j's 
            // s.t. sum[j+1,i] == k and j < i
            // Example:
            // [1,-1,1,2,3] k = 3 , prefixSum = 3, prevSum = 0
            //j    j   i
            //0,1,0,1,3,6
            // {0: 2, 1:2, 3: 1, 6:1}
            // sumCount[0] == 2
            // 2, 5
            */
        }
        if(sumCount.has(prefixSum)) {
            sumCount.set(prefixSum, sumCount.get(prefixSum) + 1)
        }else {
            sumCount.set(prefixSum,1)
        }
        console.log(prefixSum, prevSum, sumCount, count)
    }
    return count;
}
// Time complexity = O(n)
const nums = [1,2,3,1,1,2,3], k = 3
console.log(`The count of continuous subarrays with sum` +
            ` ${k} in array ${nums} is` +
            ` ${getSubarrayCount(nums,k)}`)
