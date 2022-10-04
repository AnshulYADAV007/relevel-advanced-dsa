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
            this.head.previous = null
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
            current.next.previous = previous
            current = null
            this.length--
        }
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
dll.printElement(3)
dll.removeAtStart()
dll.print()
// 300 - 200 - 101 - 100 - 320 - 250
dll.removeAt(2)
dll.print()
// 
