const Node = require("../25. Introduction to Binary Tree(4th Nov 2022)/node")
const bfs = require("../25. Introduction to Binary Tree(4th Nov 2022)/bfs")
const Queue = require("../18. Queues and Easy Problems on Queue(19th Oct 2022)/queue")

class BST {
    constructor() {
        this.root = null
    }

    
    _searchHelper(node, target) {
        if(node == null) return false
        else if(node.data == target) return true
        else if(target < node.data){
            return this._searchHelper(node.left, target)
        }else return this._searchHelper(node.right, target)
    }

    search(target) {
        return this._searchHelper(this.root, target)
    }

    _insertHelper(node, value) {
        if(node == null) return new Node(value)
        else if (value < node.data) {
            node.left = this._insertHelper(node.left, value)
        } else {
            node.right = this._insertHelper(node.right, value)
        }
        return node
    }

    insert(value) {
        this.root = this._insertHelper(this.root, value)
    }

    levelOrder() {
        bfs(this.root)
    }

    findMinData(node) {
        if(node == null) return null
        if(node.left == null) return node.data
        return this.findMinData(node.left)
    }

    _deleteHelper(node, value) {
        if(node == null) return null
        if(value < node.data) node.left = this._deleteHelper(node.left, value)
        else if (value > node.data){
            node.right = this._deleteHelper(node.right, value)
        }else if (node.left && node.right) {
            let replacement = this.findMinData(node.right)
            node.data = replacement
            node.right = this._deleteHelper(node.right, replacement)
        }else{
            node = node.left || node.right
        }
        return node
    }

    delete(value) {
        this.root = this._deleteHelper(this.root, value)
    }

    rightView() {
        if(this.root == null) return []
        let q = new Queue()
        q.enqueue(this.root)
        let levelOrder = []
        while(!q.isEmpty()) {
            let levelLength = q.getLength()
            let level = []
            for(let i = 0 ; i < levelLength; i++) {
                let current = q.dequeue()
                level.push(current.data)
                if(current.left) q.enqueue(current.left)
                if(current.right) q.enqueue(current.right)
            }
            levelOrder.push(level.at(-1))
        }
        return levelOrder
    }
}

let bst = new BST()
bst.insert(10)
bst.insert(7)
bst.insert(6)
bst.insert(9)
bst.insert(5)
bst.insert(8)
bst.insert(12)
bst.insert(14)
bst.insert(13)
// console.log(bst.root)
// bst.levelOrder()
// bst.delete(10)
// console.log(bst.root)
// console.log(bst.rightView())

const isBST = function(root, leftlimit = Number.NEGATIVE_INFINITY, 
                       rightlimit = Number.POSITIVE_INFINITY) {
    if(root == null) return true
    if(!(leftlimit <= root.data && root.data < rightlimit)) return false
    return isBST(root.left, leftlimit, root.data) &&
           isBST(root.right, root.data, rightlimit)
}

// console.log(isBST(bst.root))
// bst.root.right.data = 9
// console.log(isBST(bst.root))