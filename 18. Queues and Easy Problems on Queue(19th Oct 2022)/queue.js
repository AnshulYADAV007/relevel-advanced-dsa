class Queue {
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
            return null
        }
    }

    getLength() {
        return this.rear - this.front 
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

// const q = new Queue()
// for(let i = 5; i < 6; i++) {
//     q.enqueue(i)
// }
// q.enqueue(13) // Time 
// console.log(q.data, q.front, q.rear)
// q.dequeue()
// q.dequeue()
// q.print()

module.exports = Queue
