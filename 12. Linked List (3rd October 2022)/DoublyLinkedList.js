// Node class
class Node{
    constructor(data) {
        this.previous = null
        this.data = data
        this.next = null
    }
}

// Doubly linked list class
class DoublyLinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    insertAtStart(data) {
        let newNode = new Node(data)
        newNode.next = this.head
        newNode.previous = null
        if (this.head != null) this.head.previous = newNode
        this.head = newNode 
        this.length++
    }

    insertAtEnd(data) {
        let newNode = new Node(data)

        if (this.head == null) {
            this.head = newNode
            this.length++
        } else {
            let current = this.head

            while(current.next != null) {
                current = current.next
            }
            newNode.previous = current
            current.next = newNode
            this.length++
        }
    }

    insertAtIndex(data, index) {
        if (index == 0) this.insertAtStart(data)
        else if (index < 0 || index >= this.length) {
            console.log("LinkedList index out of bounds for insertion!")
        } else {
            // 1. Define a new node
            let newNode = new Node(data)

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
            current.previous = newNode
            newNode.previous = previous
            this.length++
        }
    }

    print() {
        let current = this.head
        let result = "null "
        while (current != null) {
            result += `<- ${current.data} -> `
            current = current.next
        }
        console.log(result + " null")
        console.log(`The length of the doubly linked list is ${this.length}`)
    }
}

const dll = new DoublyLinkedList()
dll.insertAtStart(100)
dll.insertAtStart(200)
dll.insertAtStart(300)
dll.insertAtStart(450)
dll.insertAtEnd(320)
dll.insertAtEnd(250)
// 450 - 300 - 200 - 100 - 320 - 250
dll.insertAtIndex(101, 3)
// 450 - 300 - 200 - 101 - 100 - 320 - 250
dll.print()