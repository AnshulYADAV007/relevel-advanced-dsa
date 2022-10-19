class Stack{
    constructor() {
        this.data = []
        this.size = 0 // length of the stack
    }

    push(element) {
        this.data[this.size] = element
        this.size = this.size + 1
    }

    isEmpty() {
        return this.size == 0
    }

    pop() {
        if(!this.isEmpty()) {
            this.size--;
            return this.data.pop()
        } else {
            throw Error("Stack Underflow")
        }
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.data.at(-1)
    }

    print() {
        console.log(`The data in the stack is`,
                    this.data)
    }
}


module.exports = Stack