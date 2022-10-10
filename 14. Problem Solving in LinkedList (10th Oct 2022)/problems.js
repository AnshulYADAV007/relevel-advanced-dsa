const SinglyLinkedList = require("./singlyLinkedList.js")
const Node = require("./node.js")

let nums = new SinglyLinkedList()

for(let i = 1; i <= 5; i++) {
    nums.insertAtEnd(new Node(i))
}

/**
 * Question 1 : Reverse a linked list
 * @param {*} nums 
 * @returns 
 */
const reverse = function(nums) {
    // nums.print()
    const reverseNums = new SinglyLinkedList()

    while(!nums.isEmpty()) {
        let curr = nums.gethead()
        nums.removeAtStart()
        reverseNums.insertAtStart(curr)
    }
    return reverseNums
}

// console.log(`The original list is`)
// nums.print()
// console.log(`The reversed list is`)
let reverseNums = reverse(nums)
// reverseNums.print()

for (let i = 1; i <= 5; i++) {
    nums.insertAtEnd(new Node(i))
}
// nums.print()

/**
 * Problem 2: Reorder List
 * @param {*} nums 
 * @returns 
 */
const reorder = function(nums) {
// Partition nums at middle into left and right
    let [left, right] = partition(nums)
    console.log("Left is")
    left.print()
    console.log("Right is")
    right.print()
// Reverse right part
    let reverseRight = reverse(right)
    console.log("Reverse of right is")
    reverseRight.print()
// Merge left and right


    const final = new SinglyLinkedList()
    final.head = merge(left.head, reverseRight.head)
    final.length = left.getLength() + reverseRight.getLength()

    left.head = null
    left.length = 0
    reverseRight.head = null
    reverseRight.length = 0
    console.log("The Merge of two list is")
    final.print()
    return final
}

const merge = function(head1, head2) {
    if (head1 == null) return head2
    if (head2 == null) return head1

    temp1 = head1.next
    temp2 = head2.next

    head1.next = head2
    head2.next = merge(temp1, temp2)

    return head1
}

const partition = function(nums) {
    let left = new SinglyLinkedList()
    left.head = nums.gethead()
    let mid = Math.floor(nums.getLength()/2)
    left.length = mid
    let curr = nums.gethead()
    let prev = null
    while(mid--) {
        prev = curr
        curr = curr.next        
    }
    let right = new SinglyLinkedList()
    right.head = curr
    right.length = nums.getLength() - Math.floor(nums.getLength() / 2)
    prev.next = null

    nums.head = null
    nums.length = 0
    
    return [left, right]
}

// const reorderNums = reorder(nums)

/**
 * Problem 3: Check Loop
 */

const isCircular = function(nums) {
    let fast = nums.gethead(), slow = nums.gethead()
    while(fast != null && fast.next != null) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) {
            return true
        }
    }
    return false
}

nums = new SinglyLinkedList()
for (let i = 0; i <= 5; i++) {
    nums.insertAtEnd(new Node(i))
}
tail = nums.gethead()

while(tail.next != null) {
    tail = tail.next
}

tail.next = nums.gethead().next.next

// 0 -> 1 ->2 -> 3 -> 4 -> 5
//          ^--------------|

const getLoopStart = function(nums) {
    let slow = nums.gethead(), fast = nums.gethead()
    while(fast != null && fast.next != null) {
        fast = fast.next.next
        slow = slow.next
        if(fast == slow) {
            break
        }
    }
    fast = nums.gethead()

    while(fast != null) {
        fast = fast.next
        slow = slow.next
        if (fast == slow) {
            return fast
        }
    }
    return null
}

// console.log(`There is a loop inside this linked list: ${isCircular(nums)}`)
// nums.print()
// console.log(`The loop is at the node: ${getLoopStart(nums).data}`)

/**
 * Problem 5: Intersection of two lists
 * @param {*} nums1 
 * @param {*} nums2 
 * @returns 
 */
const getIntersection = function(nums1, nums2) {
    let n1 = nums1.length
    let n2 = nums2.length

    if (n1 < n2) return getIntersection(nums2, nums1)

    let cur1 = nums1.gethead(), cur2 = nums2.gethead()

    while(n1 > n2) {
        cur1 = cur1.next
        n1--
    }

    while(cur1 != null && cur2 != null && cur1 != cur2) {
        cur1 = cur1.next
        cur2 = cur2.next
    }

    return cur1
}

let nums1 = new SinglyLinkedList()

for(let i = 0; i <= 5; i++) {
    nums1.insertAtEnd(new Node(i))
}

let nums2 = new SinglyLinkedList()
nums2.insertAtStart(new Node(8))
nums2.insertAtStart(new Node(7))
nums2.head.next.next = nums1.gethead().next.next
nums2.insertAtStart(new Node(9))
nums2.updateLength()
nums1.print()
nums2.print()

console.log(`The Common point is ${getIntersection(nums1, nums2).data}`)

