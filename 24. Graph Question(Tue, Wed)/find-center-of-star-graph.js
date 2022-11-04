// 

// SpiderMonkey code

let edgeCount = parseInt(readline())
let edges = []

for(let i = 0; i < edgeCount; i++) {
    let edge = readline().split(" ").map(item => parseInt(item))
    edges.push(edge)
}

let n = edges.length + 1
let nodesDegree = new Array(n+1).fill(0)
for(let [u,v] of edges) {
    console.log("[", u, v, "]")
    nodesDegree[u]++;
    nodesDegree[v]++;
}
for(let i = 1; i <= n; i++) {
    if(nodesDegree[i] == n - 1) {
        console.log(`The center of the star graph`, edges, `is ${i}`)
    }
}

/**
 * https://leetcode.com/problems/find-center-of-star-graph/
 * Leetcode code
 */

/**
 * @param {number[][]} edges
 * @return {number}
 */
 var findCenter = function(edges) {
    let n = edges.length + 1
    let nodesDegree = new Array(n+1).fill(0)
    for(let [u,v] of edges) {
        nodesDegree[u]++;
        nodesDegree[v]++;
    }
    for(let i = 1; i <= n; i++) {
        if(nodesDegree[i] == n - 1) {
            return i
        }
    }
    return -1
};