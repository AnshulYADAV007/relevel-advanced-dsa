/**
 * Given a binary tree, find a path from root to any given node x.
 *

Tree=
   1
 2   3
4 5 6 7

x = 5
path = [1,2,5]
*/

const Node = require("../25. Introduction to Binary Tree(4th Nov 2022)/node")


let getPath = function(root, target, path) {
    if(root == null) return false
    // Add root in the path.
    path.push(root.data)
    // Check if target is present in the current subtree.
    if (
        root.data == target ||
        getPath(root.left, target, path) ||
        getPath(root.right,target,path)
        ) return true
    // If non of the above conditions are true, 
    // root is not an ancestor of target.
    // We need to backtrack.
    path.pop()
    return false
}

let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.left = new Node(6)
root.right.right = new Node(7)

let x = 6
// let path = []
// getPath(root, x, path)
// console.log(`The path of x = ${x} in tree`, root,  
//             `is ${path}`)

const getLastMatching = function(nums1, nums2) {
    let i = 0
    while(i < nums1.length && i < nums2.length) {
        if(nums1[i] != nums2[i]) break
        i++
    }
    if(i > 0) return nums1[i-1]
    else return null
}

const getLCA = function(root, p, q) {
    let pathP = [], pathQ = []
    getPath(root, p, pathP)
    getPath(root, q, pathQ)
    console.log(pathP)
    console.log(pathQ)
    return getLastMatching(pathP, pathQ)
}

let p = 6, q = 5

// console.log(`The LCA of ${p} , ${q} in`, root, `is ${getLCA(root, p, q)}`)

const getUncommonDistance = function(nums1, nums2) {
    let i = 0
    while(i < nums1.length && i < nums2.length) {
        if(nums1[i] != nums2[i]) {
            break
        }
        i++
    }
    if(i > 0) return nums1.length - i + nums2.length - i
    else return null 
}

const getDistance = function(root, p, q) {
    let pathP = [], pathQ = []
    getPath(root, p, pathP)
    getPath(root, q, pathQ)
    return getUncommonDistance(pathP, pathQ)
}

// console.log(`The distance between ${p} and ${q} is` +
            // ` ${getDistance(root, p, q)}`)


// Add all nodes at distance `distance` from the node to answer
const subtreeAdd = function(node, distance, answer) {
    if(node == null) return
    if(distance == 0) answer.push(node.data)
    else {
        subtreeAdd(node.left, distance - 1, answer)
        subtreeAdd(node.right, distance - 1, answer)
    }
}
            

/**
 * This function returns the distance of target form the root.
 * It all also adds all the elements at distance k from the target into
 * answer.
 * @param {Node} root 
 * @param {Number} target 
 * @param {Array} answer 
 * @param {Number} k 
 */
const dfs = function(root, target, answer, k) {
    const NOTFOUND = -1
    if(root == null) return NOTFOUND
    else if(root.data == target) {
        subtreeAdd(root, k, answer)
        return 1
    }else { // When the root is not the target, check on both children
        let leftDistance = dfs(root.left, target, answer, k)
        let rightDistance = dfs(root.right, target, answer, k)
        if(leftDistance != NOTFOUND) {
            if(leftDistance == k) answer.push(root.data)
            let kForRight = k - leftDistance - 1
            subtreeAdd(root.right, kForRight, answer)
            return leftDistance + 1
        }else if(rightDistance != NOTFOUND) {
            if(rightDistance == k) answer.push(root.data)
            let kForLeft = k - rightDistance - 1
            subtreeAdd(root.left, kForLeft, answer)
            return rightDistance + 1
        }else{
            return NOTFOUND
        }
    }
}

const nodesAtDistanceK = function(root, target, k) {
    let ans = []
    dfs(root, target, ans, k)
    return ans
}
let k = 3
x = 2

console.log(`The nodes at distance ${k} from ${x} in tree`, root, 
            `are ${nodesAtDistanceK(root, x, k)}`)