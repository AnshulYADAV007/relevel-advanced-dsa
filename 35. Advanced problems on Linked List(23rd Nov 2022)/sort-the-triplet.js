class Node{
    constructor(data) {
        this.data = data
        this.next = null
    }
}

const insertAtHead = function(head, node) {
    node.next = head
    return node
}

const print = function(head) {
    let answer = []
    while(head != null) {
        answer.push(head.data)
        head = head.next
    }
    console.log(answer)
}

const getArray = function(head) {
    let answer = []
    while(head != null) {
        answer.push(head.data)
        head = head.next
    }
    return answer
}

const append = function(list1, list2) {
    if(list1 == null) return list2

    let tail = list1
    while(tail.next != null) {
        tail = tail.next
    }
    tail.next = list2
    return list1
}

const sortTriplets = function(input) {
    const lists = {0 : null, 1 : null, 2 : null}
    
    while(input != null) {
        console.log(getArray(input), getArray(lists[0]), 
                    getArray(lists[1]), getArray(lists[2]))
        
        let temp = input.next
        lists[input.data] = insertAtHead(lists[input.data], input)
        input = temp

    }
    console.log(getArray(input), getArray(lists[0]), 
    getArray(lists[1]), getArray(lists[2]))

    console.log(getArray(lists[0]), 
    getArray(lists[1]), getArray(lists[2]))

    lists[1] = append(lists[1], lists[2])

    console.log(getArray(lists[0]), 
    getArray(lists[1]), getArray(lists[2]))

    lists[0] = append(lists[0], lists[1])

    console.log(getArray(lists[0]), 
    getArray(lists[1]), getArray(lists[2]))

    return lists[0]
}

let input = new Node(1)
input = insertAtHead(input, new Node(0))
input = insertAtHead(input, new Node(2))
input = insertAtHead(input, new Node(1))
input = insertAtHead(input, new Node(0))
input = insertAtHead(input, new Node(0))
input = insertAtHead(input, new Node(2))
input = insertAtHead(input, new Node(1))
print(input)

console.log(getArray(sortTriplets(input)))