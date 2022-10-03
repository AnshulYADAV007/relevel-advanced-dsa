// Node class

class Node{
    constructor(data) {
        this.data = data
        this.next = null
    }
}

let node = new Node(10)
let node2 = new Node(12)
node.next = node2

// LinkedList Class

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    insertAtStart(data) {
        let newNode = new Node(data)
        newNode.next = this.head
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

            current.next = newNode
            this.length++
        }
    }

    insertAtIndex(data, index) {
        if (index == 0) this.insertAtStart(data)
        else if (index < 0 || index >= this.length) {
            console.log("LinkedList index out of bounds!")
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
            this.length++
        }
    }


    print() {
        let current = this.head
        while (current != null) {
            console.log(current.data, " -> ")
            current = current.next
        }
        console.log(`The length of the linked list is ${this.length}`)
    }
}

const ll = new SinglyLinkedList()
ll.insertAtStart(100)
ll.insertAtStart(500)
ll.insertAtEnd(150)
ll.insertAtEnd(300)
// 500 -> 100 -> 150 -> 300 -> null
ll.insertAtIndex(450, 2)
ll.print()