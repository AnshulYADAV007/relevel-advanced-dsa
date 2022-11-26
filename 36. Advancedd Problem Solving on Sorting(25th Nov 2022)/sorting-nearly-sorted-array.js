const Heap = require("../31. Advanced Problsms on Heaps(19th Nov 2022)/heap")

const sortNearlySorted = function(nums, k) {
    const heap = new Heap((parent, child) => parent < child)
    for(let i = 0; i <= k ; i++) {
        heap.insert(nums[i])
    }
    for(let i = 0; i < nums.length; i++) {
        console.log(nums.slice(0, i), heap.data)
        nums[i] = heap.pop()
        if(i + 1 + k< nums.length) heap.insert(nums[i + 1 + k])
    }
    console.log(nums, heap.data)
    return nums
}

let k = 3
let nums = [19, 18, 17, 14, 70, 60, 50]
sortNearlySorted(nums, k)
console.log(nums)