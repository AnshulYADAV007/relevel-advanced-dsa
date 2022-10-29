/**
 * https://leetcode.com/problems/lru-cache/description/
 */
class Node{
    constructor(key, value) {
        this.key = key
        this.value = value
        this.prev = null
        this.next = null
    }
}
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.head = new Node(-1, -1)
    this.tail = new Node(-1, -1)
    this.head.next = this.tail
    this.tail.prev = this.head
    this.capacity = capacity
    this.size = 0
    this.nodeDict = {}
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (key in this.nodeDict) {
        let node = this.nodeDict[key]
        this.delete(node)
        this.addToTail(node)
        return node.value
    }
    return -1
};

LRUCache.prototype.delete = function(node) {
    delete this.nodeDict[node.key]
    let prev = node.prev
    let next = node.next
    prev.next = next
    next.prev = prev 
    this.size -= 1
}

LRUCache.prototype.addToTail = function(node) {
    node.prev = this.tail.prev
    node.next = this.tail
    this.tail.prev.next = node
    this.tail.prev = node
    this.nodeDict[node.key] = node
    this.size++
}

LRUCache.prototype.deleteAtFront = function() {
    let node = this.head.next
    this.delete(node)
    delete node
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (key in this.nodeDict) {
        let node = this.nodeDict[key]
        this.delete(node)
        node.value = value
        this.addToTail(node)
        return
    }
    let node = new Node(key, value)
    this.addToTail(node)
    if(this.size > this.capacity) {
        this.deleteAtFront()
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


/**
 * Generate Binary Numbers - BFS
 */

const Queue = require("../18. Queues and Easy Problems on Queue(19th Oct 2022)/queue")
const binaryNumberGenerator = function(n) {
    let q = new Queue()
    q.enqueue('1')
    while (n--) {
        let cur = q.dequeue()
        console.log(cur)
        q.enqueue(cur + '0')
        q.enqueue(cur + '1')
    }
}

// binaryNumberGenerator(10)

/**
 * Reverse First K Element from Queue
 */
const Stack = require("../16. Stacks and Easy Problems on Stacks(14th Oct 2022)/stack")
const reverseFirstK = function(q, k) {
    let n = q.getLength()

    if(k > n || k <= 0) return

    let stk = new Stack()

    for(let i = 0; i < k; i++) {
        stk.push(q.dequeue())
    }

    for(let i = 0; i < k; i++) {
        q.enqueue(stk.pop())
    }

    for(let i = 0; i < n - k; i++) {
        q.enqueue(q.dequeue())
    }
}

// const q = new Queue()
// for(let i = 0; i < 10; i++) q.enqueue(i)
// console.log(q.getData())
// reverseFirstK(q, 5)
// console.log(q.getData())

/**
 * Circular Tour
 */
const AVAILABLE = 0, NEEDED = 1
const getStart = function(tour) {
    const n = tour.length
    tour = [...tour, ...tour]
    let start = 0, end = 0, petrol = 0

    while(end < tour.length) {
        // end = 4, start = 1, petrol = 6
        petrol += tour[end][AVAILABLE] - tour[end][NEEDED] 
        end = end + 1
        // end = 5, start = 1, petrol = 6 + (4 - 6) = 4

        while(petrol < 0) {
            petrol -= tour[start][AVAILABLE] - tour[start][NEEDED]
            start = start + 1
        }
        // end = 5, start = 1, petrol = 6 + (4 - 6) = 4
        if(end - start == n) return tour[start] // tour[1] = [6, 5]
    }
    
    return -1
}

let tour = [[4,6], [6,5], [7,3], [4,5]] // end = 0, start = 0, petrol = 0
console.log(`The first successful start point for the tour`, tour, `is`,
            getStart(tour))
