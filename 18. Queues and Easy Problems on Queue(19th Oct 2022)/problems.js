const Queue = require("./queue")
const Stack = require("../17. Stacks - Next Greater Elements(17th Oct 2022)/stack")

/**
 * Question 1: Reverse a queue using only
 * dequeue and enqueue.
 * @param {} q 
 * @returns 
 */
let reverse = function(q) {
    let stk = new Stack()
    while(!q.isEmpty()) stk.push(q.dequeue())
    while(!stk.isEmpty()) q.enqueue(stk.pop())
    return q
}

let q = new Queue()

for(let i = 0; i<10; i++) {
    q.enqueue(i)
}

q.print()

q = reverse(q)

q.print()