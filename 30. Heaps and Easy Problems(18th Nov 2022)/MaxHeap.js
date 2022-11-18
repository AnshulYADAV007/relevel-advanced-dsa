class MaxHeap {
    constructor() {
        this.heap = []
    }

    swap(index1, index2) {
        let temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }

    perculateUp(index) {
        if(index <= 0) return
        
        let parent = Math.floor((index - 1) / 2)

        if(this.heap[parent] < this.heap[index]) {
            this.swap(parent, index)
            this.perculateUp(parent)
        }
    }

    insert(value) {
        this.heap.push(value)
        let current = this.heap.length - 1
        this.perculateUp(current)
    }

    getMax() {
        return this.heap[0]
    }

    search(value) {
        for(let i = 0; i < this.heap.length; i++) {
            if(this.heap[i] === value) return true
        }
        return false
    }

    isEmpty() {
        return this.heap.length == 0
    }

    getGreaterIndex(leftChild, rightChild) {
        let answer = leftChild
        if( rightChild < this.heap.length && 
            this.heap[leftChild] < this.heap[rightChild] ) {
                answer = rightChild
            }
        return answer
    }

    heapifyDown(index) {
        let leftChild = 2 * index  + 1
        let rightChild = 2 * index + 2
        if(leftChild >= this.heap.length) return 
        
        const greaterChildIndex = this.getGreaterIndex(leftChild, rightChild)
        
        if(this.heap[greaterChildIndex] > this.heap[index]) {
            this.swap(greaterChildIndex, index)
            this.heapifyDown(greaterChildIndex)
        }
    }

    popMax() {
        if(this.isEmpty()) return undefined
        const maxValue = this.heap[0]
        const lastValue = this.heap.pop()
        if(this.isEmpty()) return maxValue
        this.heap[0] = lastValue
        this.heapifyDown(0)
        return maxValue
    }

    heapify(arr) { // O(n)
        this.heap = arr
        let last = this.heap.length - 1
        let lastParent = Math.floor((last-1)/2)
        let current = lastParent
        while(current >= 0) {
            this.heapifyDown(current)
            current--
        }
    }
}


let heap = new MaxHeap()
heap.heapify([1,2,6,7,3,4,5])
console.log(heap.heap)
