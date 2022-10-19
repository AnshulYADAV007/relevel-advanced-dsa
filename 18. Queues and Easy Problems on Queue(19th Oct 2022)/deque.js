class Deque{
    constructor() {
        this.data = {}
        this.rear = 0
        this.front = 0
    }

    addFront(element) {
        this.front--
        this.data[this.front] = element
    }

    addBack(element) {
        this.data[this.rear]= element
        this.rear++
    }

    isEmpty(){
        return this.rear == this.front
    }

    removeFront() {
        if(this.isEmpty()) return null
        let temp = this.data[this.front]
        delete this.data[this.front]
        this.front++
        return temp
    }

    removeBack() {
        if(this.isEmpty()) return null
        this.rear--
        let temp = this.data[this.rear]
        delete this.data[this.rear]
        return temp
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

let dq = new Deque()
dq.addBack(4)
dq.addBack(6)
dq.addBack(8)
dq.print()
dq.removeFront()
dq.print()
dq.addFront(8)
dq.addFront(10)
dq.removeBack()
dq.print()

module.exports = Deque