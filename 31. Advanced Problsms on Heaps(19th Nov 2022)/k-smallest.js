const Heap = require("./heap")

const getKsmallest = function(nums, k) {
    const heap = new Heap((parent, child) => parent > child)
    for(let num of nums) {
        heap.insert(num)
        if(heap.size() > k) {
            heap.pop()
        }
    }
    return heap.peek()
}

const nums = [2,3,45,6,79,1,15]
console.log(getKsmallest(nums, 2))