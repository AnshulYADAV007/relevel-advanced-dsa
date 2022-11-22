const Queue = require("../18. Queues and Easy Problems on Queue(19th Oct 2022)/queue")

const firstNegatives = function(nums, k) {
    let q = new Queue()
    let answer = []
    for(let i = 0; i < nums.length; i++) {
        console.log(`nums: `, nums, "current", nums[i], "window:", nums.slice(Math.max(0,i-k+1), i + 1), " queue: ", q.getData(), "answer : ", answer)
        if(nums[i] < 0) q.enqueue([i, nums[i]])
        if(q.getFront()[0] < i - k + 1) q.dequeue()
        if(q.isEmpty()) answer.push(0)
        else answer.push(q.getFront()[1]) 
        console.log(`nums: `, nums, "current", nums[i], "window:", nums.slice(Math.max(0,i-k+1), i + 1), " queue: ", q.getData(), "answer : ", answer)
    }
    return nums
}

let nums = [-2, 0, -3, -4, 6, -8], k = 3
console.log(firstNegatives(nums, k))
