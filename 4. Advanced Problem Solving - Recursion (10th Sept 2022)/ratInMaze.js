function findPath(maze, source, destination, path) {
    // Base Case
    if (source[0] === destination[0] && source[1] === destination[1]) {
        return true
    }

    // Recursive Assumption
    const downCell = [source[0] + 1, source[1]]
    const rightCell = [source[0], source[1] + 1]
    const cells = [downCell, rightCell]
    
    for(let cell of cells) {
        if(canMove(cell, destination, maze)) {
            path[cell[0]][cell[1]] = 1
            if(findPath(maze, cell, destination, path)) {
                return true
            }
            path[cell[0]][cell[1]] = 0
        }
    }

    // Self work
    return false
}

function canMove(cell, destination, maze) {
    return destination[0] >= cell[0] && 
        destination[1] >= cell[1] && 
        maze[cell[0]][cell[1]] == 1
}


const maze = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 0, 0],
    [1, 1, 1, 1]
]

const source = [0,0]
const destination = [3, 3]
const path= [
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]

const isPath = findPath(maze, source, destination, path)

console.log(`There is a path for the given maze`, maze,`${isPath}`)

if(isPath) {
    console.log(`The path is`, path)
}