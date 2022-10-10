/**
 * Add two numbers
 * https://leetcode.com/problems/add-two-numbers/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    const carry = 0
    return addHelper(l1, l2, carry)
};

const addHelper = function(l1, l2, carry) {
    console.log(l1, l2, carry)
 
    if(l1 == null && l2 == null && carry == 0) return null

    let total = l1 == null ? 0 : l1.val
    total += l2 == null ? 0: l2.val
    total += carry
    let newCarry = Math.floor(total / 10)
    let digit = total % 10

    let result = new ListNode(digit)

    if(l1) l1 = l1.next
    if(l2) l2 = l2.next
    result.next = addHelper(l1 , l2, newCarry)
    
    return result
}

/**
 * Merge Two Sorted Lists
 * https://leetcode.com/problems/merge-two-sorted-lists/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    if(list1 == null) return list2
    if(list2 == null) return list1

    if(list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    } else {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
    }
};

/** 
 * Merge K sorted lists
 * https://leetcode.com/problems/merge-k-sorted-lists/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) { // (n*logn)
    if(lists.length == 0) return null
    if(lists.length == 1) return lists[0]

    let mid = Math.floor(lists.length/2)
    let list1 = mergeKLists(lists.slice(0, mid))
    let list2 = mergeKLists(lists.slice(mid))
    
    return mergeTwoLists(list1, list2)
};

var mergeTwoLists = function(list1, list2) {
    if(list1 == null) return list2
    if(list2 == null) return list1

    if(list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    } else {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
    }
};


/**
 * Sort List
 * https://leetcode.com/probl
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var sortList = function(head) {
    if(head == null || head.next == null) return head

    let prev = getPrevToMid(head)
    let right = prev.next
    prev.next = null

    let list1 = sortList(head)
    let list2 = sortList(right)

    return mergeTwoLists(list1, list2)
};

const getPrevToMid = function(head) {
    let slow = head, fast = head, prevous = null
    while(fast != null) {
        if(fast.next != null) fast = fast.next.next
        else fast = null
        previous = slow
        slow = slow.next
    }
    return previous
}

const mergeTwoLists = function(list1, list2) {
    if(list1 == null) return list2
    if(list2 == null) return list1

    if(list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    } else {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
    }
};