class Graph{
    constructor(n) {
        this.size = n
        this.AdjList = new Array(n)
        for(let i = 0 ; i < n; i++) this.AdjList[i] = new Set()
    }

    addEdge(u, v) {
        this.AdjList[u].add(v)
        this.AdjList[v].add(u)
    }

    getNeighbors(u) {
        return this.AdjList[u]
    }
}

module.exports = Graph