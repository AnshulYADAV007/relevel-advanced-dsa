const SinglyLinkedList = require("./singlyLinkedList.js")
const Node = require("./node.js")

const nums = new SinglyLinkedList()

for(let i = 1; i <= 5; i++) {
    nums.insertAtEnd(i)
}

/**
 * Question 1 : Reverse a linked list
 * @param {*} nums 
 * @returns 
 */
const reverse = function(nums) {
    const reverseNums = new SinglyLinkedList()

    while(!nums.isEmpty()) {
        let curr = nums.gethead()
        nums.removeAtStart()
        reverseNums.insertAtStart(curr)
    }

    return reverseNums
}

console.log(`The original list is`)
nums.print()
console.log(`The reversed list is`)
reverse(nums).print()