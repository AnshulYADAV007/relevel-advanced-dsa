const Graph = require("./graph")
const Queue = require("../18. Queues and Easy Problems on Queue(19th Oct 2022)/queue")

const processLevel = function(q, visited, graph) {
    let answer = []
    let levelLength = q.getLength()
    console.log(q.getData())
    for(let i = 0; i < levelLength; i++) {
        let current = q.dequeue()
        answer.push(current)
        for(let neighbour of [...graph.AdjList[current]]){
            if(!visited[neighbour]){
                q.enqueue(neighbour)
                visited[neighbour] = true
            }
        }
        console.log(current, q.getData())
    }
    return answer
}

const bfs = function(graph, source) {
    const q = new Queue()
    const visited = new Array(graph.size).fill(false)
    q.enqueue(source)
    visited[source] = true
    while(!q.isEmpty()) {
        let level = processLevel(q, visited, graph)
        // console.log(level)
    }
}

let g = new Graph(5)
let edges =[
            [0, 1],
            [1, 2],
            [1, 3],
            [2, 4],
            [2, 3]
        ]

/*
        0
       /
      1
     / \
4 - 2 - 3
*/
for(let edge of edges) g.addEdge(...edge)

console.log(g.AdjList)
bfs(g, 0)