class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

const preorder = function(root) {
    if(root == null) return 
    process.stdout.write(root.data + " ")
    preorder(root.left)
    preorder(root.right)
}

const inorder = function(root) {
    if(root == null) return
    inorder(root.left)
    process.stdout.write(root.data + " ")
    inorder(root.right)
}

const postorder = function(root) {
    if(root == null) return
    postorder(root.left)
    postorder(root.right)
    process.stdout.write(root.data + " ")
}

/**
 * Symmetric Tree
 * @param {*} tree1 
 * @param {*} tree2 
 * @returns 
 */
const isMirror = function(tree1, tree2) {
    if(tree1 == null && tree2 == null) return true
    else if(tree1 == null || tree2 == null) return false
    else return tree1.data == tree2.data &&
        isMirror(tree1.left, tree2.right) &&
        isMirror(tree1.right, tree2.left)
}

const isSymmetric = function(root) {
    return isMirror(root, root)
}

let root = new Node(1)
root.left = new Node(2)
root.right = new Node(2)
root.left.left = new Node(3)
root.right.right = new Node(3)
// preorder(root)
// console.log()
// inorder(root)
// console.log()
// postorder(root)

// const bfs = require("./bfs")

// bfs(root)

// console.log(isSymmetric(root))
// root.left.data = 7
// console.log(isSymmetric(root))

module.exports = Node