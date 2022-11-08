
/** https://leetcode.com/problems/island-perimeter/description/
 * @param {number[][]} grid
 * @return {number}
 */

 let getFalseArray = function(grid) {
    let n = grid.length, m = grid[0].length
    let answer = new Array(n)
    for(let i = 0; i < n; i++) answer[i] = new Array(m).fill(false)
    return answer
}

let getNeighbors = function(node) {
    let [i,j] = node
    return [[i+1, j], [i-1, j], [i, j+ 1], [i, j-1]]
}

let isBounded = function(i,j, grid) {
    let n = grid.length, m = grid[0].length
    if(i < 0 || i >= n) return false
    if(j < 0 || j >= m) return false
    return true
}

let bfs = function(grid, si, sj) {
    let q = new Queue() 
    let visited = getFalseArray(grid)
    visited[si][sj] = true
    q.enqueue([si,sj])
    let perimeter = 0
    while(!q.isEmpty()) {
        let current = q.dequeue()
        for(let [i,j] of getNeighbors(current)) {
            if(isBounded(i,j, grid) && (!visited[i][j]) &&(grid[i][j] == 1)) {
                q.enqueue([i,j])
                visited[i][j] = true
            } else if((!isBounded(i,j,grid)) || (grid[i][j] == 0)){
                perimeter++
            }
        }
    }
    return perimeter
}

var islandPerimeter = function(grid) {
    let n = grid.length, m = grid[0].length
    for(let i = 0; i< n; i++) {
        for(let j = 0; j < m; j++) {
            if(grid[i][j] == 1) {
                return bfs(grid, i, j)
            }
        }
    }
    return 0
};