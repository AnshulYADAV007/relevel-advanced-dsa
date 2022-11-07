const Node = require("../25. Introduction to Binary Tree(4th Nov 2022)/node")

const getIndex = function(target, nums) {
    for(let i = 0; i< nums.length; i++) {
        if(nums[i] == target) return i;
    }
    return -1
}

const getBT = function(preorder, inorder) {
    if (preorder.length == 0 && inorder.length == 0) return null
    let root = new Node(preorder[0])
    
    let lengthOfLST = getIndex(preorder[0], inorder)

    let inorderOfLST = inorder.slice(0, lengthOfLST)
    let inorderOfRST = inorder.slice(lengthOfLST + 1)

    let preorderOfLST = preorder.slice(1, lengthOfLST + 1)
    let preorderOfRST = preorder.slice(lengthOfLST + 1)

    root.left = getBT(preorderOfLST, inorderOfLST)
    root.right = getBT(preorderOfRST, inorderOfRST)
    
    return root
}

const preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
            //    |( )                         | 
console.log(`The Binary tree from preorder ${preorder} and inorder`
            + ` ${inorder} is`, getBT(preorder, inorder))

// To understand recursion, you should understand recursion.