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