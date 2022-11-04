const Queue = require("../18. Queues and Easy Problems on Queue(19th Oct 2022)/queue")

let bfs = function(root){
    let q = new Queue()
    if(root == null) return
    q.enqueue(root)
    while(!q.isEmpty()) {
        let cur = q.dequeue()
        console.log(cur.data)
        if(cur.left != null) q.enqueue(cur.left)
        if(cur.right != null) q.enqueue(cur.right)
    }
}

module.exports = bfs