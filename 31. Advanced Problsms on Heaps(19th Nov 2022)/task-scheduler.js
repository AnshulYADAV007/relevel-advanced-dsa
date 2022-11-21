// https://leetcode.com/problems/task-scheduler/description/
class Heap {
    constructor(comparator) {
        this.data = []
        this.comparator = comparator // Greater then or less then function
    }

    swap(index1, index2) {
        const temp = this.data[index1]
        this.data[index1] = this.data[index2]
        this.data[index2] = temp
    }

    perculateUp(index) {
        if(index == 0) return;

        const parentIndex = Math.floor((index - 1) / 2)

        if(!this.comparator(this.data[parentIndex], this.data[index])) {
            this.swap(parentIndex, index)
            this.perculateUp(parentIndex)
        }
    }

    insert(value) {
        this.data.push(value)
        this.perculateUp(this.data.length - 1)
    }

    getNextIndex(leftChild, rightChild) {
        let answer = leftChild
        if(rightChild < this.data.length &&
            (!this.comparator(this.data[answer], this.data[rightChild]))){
            answer = rightChild
        }
        return answer
    }

    heapifyDown(index) {
        let leftChild = 2 * index  + 1
        let rightChild = 2 * index + 2
        if(leftChild >= this.data.length) return 
        
        const nextIndex = this.getNextIndex(leftChild, rightChild)
        
        if(!this.comparator(this.data[index], this.data[nextIndex])) {
            this.swap(nextIndex, index)
            this.heapifyDown(nextIndex)
        }
    }

    isEmpty() {
        return this.data.length == 0
    }

    pop() {
        if(this.isEmpty()) return undefined
        if(this.data.length == 1) {
            return this.data.pop()
        }

        let root = this.data[0]
        this.data[0] = this.data[this.data.length - 1]
        this.data.pop()
        this.heapifyDown(0)
        return root
    }

    peek() {
        return this.data[0]
    }

    size() {
        return this.data.length
    }
}
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

const getFreqMap = function(tasks) {
    const answer = new Map()
    for(let task of tasks) {
        if(answer.has(task)) {
            answer.set(task, answer.get(task) + 1)
        }else {
            answer.set(task, 1)
        }
    }
    return answer
}


var leastInterval = function(tasks, n) {
    const heap = new Heap(
                    (parent, child) => 
                    parent[0] > child[0]
                    )
    const counts = getFreqMap(tasks)
    for(let [task, count] of counts) {
        heap.insert([count, task])
    }
    
    let idleCount = 0
    while(!heap.isEmpty()) {
        console.log("heap -> ", heap.data)
        const standby = []
        for(let i = 0; i <= n; i++) {
            console.log("heap -> ", heap.data, "Standby ->", standby)
            if(heap.isEmpty() && standby.length == 0){
                break;
            }
            if(heap.isEmpty()) {
                console.log("Idle Increased!")
                idleCount++
            } else {
                let current = heap.pop()
                if(current[0] > 1) {
                    standby.push(
                    [current[1], current[0] - 1]
                    )
                }
            }
            console.log("heap -> ", heap.data, "Standby ->", standby)
        }
        for(let [task, count] of standby){
            heap.insert([count, task])
        }
        console.log("heap -> ", heap.data)
    }
    return tasks.length + idleCount
};