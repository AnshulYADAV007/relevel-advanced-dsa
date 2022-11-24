/** https://leetcode.com/problems/reverse-nodes-in-k-group/description/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

let getByIndex = function(head, index) {
    while(head != null && index--> 0){
        head = head.next
    }
    return head
}

let insertAtHead = function(list, node) {
    node.next = list
    return node
}

let reverse = function(head) {
    let result = null
    while(head != null) {
        let temp = head.next
        result = insertAtHead(result, head)
        head = temp
    }
    return result
}

let getArray = function(head) {
    let answer = []
    while(head != null) {
        answer.push(head.val)
        head = head.next
    }
    return answer
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    console.log("Reverse k -> ", getArray(head))
    let frontTail = getByIndex(head, k - 1)
    if(frontTail == null) return head

    let rest = frontTail.next
    frontTail.next = null
    console.log(getArray(head), getArray(rest))
    head = reverse(head)
    console.log(getArray(head), getArray(rest))
    frontTail = getByIndex(head, k-1)
    frontTail.next = reverseKGroup(rest, k)
    console.log(getArray(head))
    return head
};