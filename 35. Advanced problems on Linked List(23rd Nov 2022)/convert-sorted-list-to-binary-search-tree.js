/**
 * https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 const getLength = function(head) {
    if(head == null) return 0
    else return 1 + getLength(head.next)
}

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const getArray = function(head, length) {
    const answer = []
    while(length-->0){
        answer.push(head.val)
        head = head.next
    }
    return answer
}

var sortedListToBST = function(head) {
    let n = getLength(head)
    const helper = function(n) {
        if (n <= 0) return null;
        let left = helper(Math.floor(n/2))
        let root = new TreeNode(head.val, left)
        head = head.next
        root.right = helper(n - Math.floor(n/2) - 1)
        return root
    }
    return helper(n)    
};