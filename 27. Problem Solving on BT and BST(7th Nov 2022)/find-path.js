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

console.log(`The distance between ${p} and ${q} is` +
            ` ${getDistance(root, p, q)}`)