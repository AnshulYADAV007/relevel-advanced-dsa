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

// let heap = new Heap((a,b) => a[1] > b[1])

// heap.insert([0,1])
// heap.insert([2,3])
// heap.insert([5,2])
// heap.insert([3,6])
// heap.insert([2,7])

// console.log(heap.data)
// heap.pop()
// console.log(heap.data)

module.exports = Heap