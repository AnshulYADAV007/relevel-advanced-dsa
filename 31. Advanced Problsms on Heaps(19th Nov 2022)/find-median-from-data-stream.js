// https://leetcode.com/problems/find-median-from-data-stream/description/

const Heap = require("./heap")

var MedianFinder = function() {
    this.minHeap = new Heap((parent, child) =>
                            parent < child)
    this.maxHeap = new Heap((parent, child) => 
                            parent > child)
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    console.log(this.maxHeap.data, this.minHeap.data, num)
    if(this.maxHeap.isEmpty() || num < this.maxHeap.peek()) {
        this.maxHeap.insert(num)
    } else {
        this.minHeap.insert(num)
    }
    console.log(this.maxHeap.data, this.minHeap.data, num)
    if(this.maxHeap.size() - this.minHeap.size() > 1) {
        this.minHeap.insert(this.maxHeap.pop())
    } else if (this.minHeap.size() - this.maxHeap.size() > 1) {
        this.maxHeap.insert(this.minHeap.pop())
    }
    console.log(this.maxHeap.data, this.minHeap.data, num)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.maxHeap.size() > this.minHeap.size()) {
        return this.maxHeap.peek()
    } else if (this.minHeap.size()  > this.maxHeap.size()) {
        return this.minHeap.peek()
    } else {
        return (this.minHeap.peek()  + this.maxHeap.peek())/2
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */