/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Remove Nth from the End
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let length = getSize(head)
    let index = length - n
    return removeNthHelper(head, index)
};


const removeNthHelper= function(head, index) {
    if(index == 0) return head.next
    else {
        head.next = removeNthHelper(head.next, index - 1)
        return head
    }
}

const getSize = function(head) {
    if(head == null) return 0
    return 1 + getSize(head.next)
}