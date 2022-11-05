const Queue = require("../18. Queues and Easy Problems on Queue(19th Oct 2022)/queue")

let bfs = function(root){
    let q = new Queue()
    if(root == null) return
    q.enqueue(root)
    while(!q.isEmpty()) {
        let cur = q.dequeue()
        process.stdout.write(cur.data + " ")
        if(cur.left != null) q.enqueue(cur.left)
        if(cur.right != null) q.enqueue(cur.right)
    }
    console.log()
}

module.exports = bfs