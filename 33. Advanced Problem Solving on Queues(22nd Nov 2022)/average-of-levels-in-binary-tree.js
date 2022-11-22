//https://leetcode.com/problems/average-of-levels-in-binary-tree/description/

class MyQueue {
    constructor() {
        this.data = {}
        this.rear = 0
        this.front = 0
    }

    enqueue(element) {
        this.data[this.rear] = element
        this.rear++
    }

    dequeue() {
        if(this.isEmpty()) return null // Underflow Condition
        let temp = this.data[this.front]
        delete this.data[this.front]
        this.front++
        return temp
    }

    isEmpty() {
        return this.rear == this.front
    }

    getFront() {
        if(!this.isEmpty()) {
            return this.data[this.front]
        } else {
            return -1
        }
    }

    getLength() {
        return this.rear - this.front 
    }

    getData() {
        const result = []
        for (let i = this.front; i< this.rear; i++) result.push(this.data[i])
        return result
    }

    print() {
        console.log(`The data in the queue is`,
                    this.data,
                    `The front and rear are`
                    + ` ${this.front}, ${this.rear} `
                    + `The length of the queue is`
                    + ` ${this.getLength()}`)
    }
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let q = new MyQueue()
    q.enqueue(root)
    let answer = []
    while(!q.isEmpty()) {
        let levelLength = q.getLength()
        let sum = 0
        for(let i = 0; i < levelLength; i++) {
            let current = q.dequeue()
            sum += current.val
            current.left && q.enqueue(current.left)
            current.right && q.enqueue(current.right)
        }
        answer.push(sum/levelLength)
    }
    return answer
};