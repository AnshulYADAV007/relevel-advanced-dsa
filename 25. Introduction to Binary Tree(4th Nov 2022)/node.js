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

let root = new Node(1)
root.left = new Node(2)
root.right = new Node(2)
root.left.left = new Node(3)
root.left.right = new Node(3)
// preorder(root)
// console.log()
// inorder(root)
// console.log()
// postorder(root)

const bfs = require("./bfs")

bfs(root)