const Node = require("./node.js")

let node = new Node(10)
let node2 = new Node(12)
node.next = node2

// LinkedList Class

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    getLength() {
        return this.length
    }

    gethead() {
        return this.head
    }

    isEmpty() {
        return this.length == 0
    }

    insertAtStart(newNode) {
        newNode.next = this.head
        this.head = newNode
        this.length++
    }

    insertAtEnd(newNode) {

        if (this.head == null) {
            this.head = newNode
            this.length++
        } else {
            let current = this.head

            while(current.next != null) {
                current = current.next
            }

            current.next = newNode
            this.length++
        }
    }

    insertAtIndex(newNode, index) {
        if (index == 0) this.insertAtStart(newNode)
        else if (index < 0 || index >= this.length) {
            console.log("LinkedList index out of bounds!")
        } else {

            // 2. Traverse till index - 1
            let current, previous
            current = this.head
            let count = 0
            while (count < index) {
                previous = current 
                current = current.next
                count++
            }

            // 3. Add the new node
            newNode.next = current
            previous.next = newNode
            this.length++
        }
    }

    print() {
        let current = this.head
        let result = ""
        while (current != null) {
            result += `${current.data} -> `
            current = current.next
        }
        console.log(result)
        console.log(`The length of the linked list is ${this.length}`)
    }

    printElement(index) {
        if (index < 0 || index >= this.length) {
            console.log(`LinkedList index out of bound`)
        } else {
            let current = this.head
            let count = 0
            while (current) {
                if (count == index) {
                    console.log(`The linked list has ${current.data} at index ${index}`)
                }
                count++
                current = current.next
            }
        }
    }

    removeAtStart() {
        if (this.head == null) {
            console.log("Linked List already empty!")
        } else {
            let temp = this.head
            this.head = this.head.next
            temp = null
            this.length--
        }
    }

    removeAt(index) {
        if (index == 0) this.removeAtStart()
        else if (index < 0 || index >= this.length) {
            console.log(`Index for delete out of bound`)
        } else {
            let current, previous
            current = this.head

            // LinkedList Traversal
            let count = 0
            while(count < index) {
                count++
                previous = current
                current = current.next
            }
            console.log(`The count after loop is ${count}`)
            // delete current
            console.log(`Deleting ${current.data}`)
            previous.next = current.next
            current = null
            this.length--
        }
    }
}

module.exports = SinglyLinkedList