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

/**
 * Question 1: Insert Element at Bottom
 * @param {*} stack 
 * @param {*} element 
 */
const insertElementAtBottom = function(stack, element) {
    const temp = new Stack()
    while(!stack.isEmpty()) {
        let current = stack.pop()
        temp.push(current)
    }
    stack.push(element)
    while(!temp.isEmpty()) {
        let current = temp.pop()
        stack.push(current)
    }
} 

const insertElementAtBottomRecurrsion = function(stack, element) {
    // console.log(stack.data)
    if (stack.isEmpty()) stack.push(element)
    else {
        let current = stack.pop()
        insertElementAtBottomRecurrsion(stack, element)
        stack.push(current)
    }
    // console.log(stack.data)
}

/**
 * Question 2: Reverse
 * @param {*} stack 
 * @returns 
 */

const reverse = function(stack) {
    const reverseStack = new Stack()
    while(!stack.isEmpty()) {
        reverseStack.push(stack.pop())
    }
    return reverseStack
}

// let myStack = new Stack()
// myStack.push(1)
// myStack.push(2)
// myStack.push(3)
// myStack.push(4)
// myStack.push(5)
// myStack.push(6)
// console.log(myStack.data)
// myStack.pop()
// console.log(myStack.data)
// myStack.pop()
// console.log(myStack.data)
// insertElementAtBottom(myStack, 8)
// console.log(`The stack after insertElementAtBottom(myStack, 8)`)
// console.log(myStack.data)
// // insertElementAtBottomRecurrsion(myStack, 9)
// myStack = reverse(myStack)
// console.log(myStack.data)

module.exports = Stack