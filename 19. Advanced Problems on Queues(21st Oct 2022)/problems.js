/**
 * Question 1: First Non-repeating Character
 */

const Queue = require("../18. Queues and Easy Problems on Queue(19th Oct 2022)/queue")
const Deque = require("../18. Queues and Easy Problems on Queue(19th Oct 2022)/deque")

const insert = function(element, freqMap) {
    if(element in freqMap) freqMap[element]++
    else freqMap[element] = 1
}

const getFirstNonRepeating = function(s) {
    const freq = {}
    const q = new Queue()
    let result = ""
    for(let ch of s) {
        insert(ch, freq)
        while(!q.isEmpty() && freq[q.getFront()] > 1) q.dequeue()
        if(freq[ch] == 1) q.enqueue(ch)
        console.log(q.getFront())
        result += `${q.getFront()}, `
    }
    return result
}

const s = "abaabca" 

// console.log(`The first non-repeating of the` 
//             +`stream ${s} are ` +
//             `${getFirstNonRepeating(s)}`)

/**
 * Problem 2: Sliding Window Maximum
 */

const getWindowMax = function(arr, k) {
    const INDEX = 0, VALUE = 1
    let q = new Deque()
    let result = []
    for(let i = 0; i < arr.length; i++) {
        console.log(`INDEX : ${i}, Window:`, arr.slice(i - k + 1, i + 1), ` and Begin:`)
        q.print()
        console.log(result)

        while (!q.isEmpty() && 
               q.getRear()[VALUE] < arr[i]) q.removeBack();
        
        q.addBack([i, arr[i]])
        
        if (q.getFront()[INDEX] <= i - k) q.removeFront()
        
        if (i >= k-1) result.push(q.getFront()[VALUE])
        
        console.log(`INDEX : ${i} and End:`)
        q.print()
        console.log(result)
    }
    return result
}

const nums = [7, 2, 4], k = 2

// console.log(`The sliding window maximums for `+
//                 ` ${nums} with window size ${k} ` +
//                 ` are ${getWindowMax(nums, k)}`)

/**
 * Problem 3: Implement Stack Using Queues
 */

class StackUsingQueue{
    constructor() {
        this.q1 = new Queue()
        this.q2 = new Queue()
    }

    push(value) {
        this.q1.enqueue(value)
    }

    pop(){
        console.log(this.q1.getData(), this.q2.getData())
        while(this.q1.getLength() > 1) this.q2.enqueue(this.q1.dequeue())
        console.log(this.q1.getData(), this.q2.getData())
        let result = this.q1.dequeue();
        console.log(this.q1.getData(), this.q2.getData())
        while(!this.q2.isEmpty()) this.q1.enqueue(this.q2.dequeue())
        console.log(this.q1.getData(), this.q2.getData())
        return result
    }

    isEmpty() {
        return this.q1.isEmpty()
    }

    top() {
        if(this.isEmpty()) return null;
        while(this.q1.getLength() > 1) this.q2.enqueue(this.q1.dequeue())
        let result = this.q1.dequeue();
        while(!this.q2.isEmpty()) this.q1.enqueue(this.q2.dequeue())
        this.q1.enqueue(result)
        return result
    }

    print() {
        console.log(this.q1.getData())
    }
}

// const stk = new StackUsingQueue()
// stk.push(1)
// stk.push(3)
// stk.print()
// stk.push(7)
// stk.push(18)
// stk.print()
// stk.pop()
// stk.print()

const Stack = require("../16. Stacks and Easy Problems on Stacks(14th Oct 2022)/stack")

class QueueUsingStack{
    constructor() {
        this.stk1 = new Stack()
        this.stk2 = new Stack()
    }

    enqueue(value) {
        this.stk1.push(value)
    }

    dequeue() {
        console.log(this.stk1.data, this.stk2.data)
        if(this.isEmpty()) return null
        if(this.stk2.isEmpty()) {
            while(!this.stk1.isEmpty()) this.stk2.push(this.stk1.pop())
        }
        return this.stk2.pop()
    }

    getFront() {
        if(this.isEmpty()) return null
        if(this.stk2.isEmpty()) {
            while(!this.stk1.isEmpty()) this.stk2.push(this.stk1.pop())
        }
        return this.stk2.peek()
    }

    isEmpty() {
        return this.stk1.isEmpty() && this.stk2.isEmpty()
    }
}

const q = new QueueUsingStack()
for(let i = 10; i < 17; i++) {
    q.enqueue(i)
}
console.log(q.getFront()) // ?

while(!q.isEmpty()) console.log(q.dequeue())