const N = 8

function getBoard(N) {
    const board = new Array(N)
    for(let i = 0; i < N; i++) {
        board[i] = new Array(N)
        board[i].fill(0)
    }
    return board
}

function solve(N) {
    const board = getBoard(N)
    const result = solveHelper(board, 0)
    if(result) {
        console.log(`The final board is `, board)
    }
    return result
}


function solveHelper(board, col) {
    // Base case
    if(col === board.length) {
        return true
    }

    // Recursive Assumption
    for(let row = 0; row < board.length; row++) {
        if(canPlace(board, row, col)){
            board[row][col] = 1
            if(solveHelper(board, col + 1)) {
                return true
            }
            board[row][col] = 0
        }
    }

    // Self-work
    return false
}

function canPlace(board, row, col) {
    /**
     * No queen in same
     *  1. Row
     *  2. Col - Already true
     *  3. Digonal 1
     *  4. Digonal 2
     */
    const N = board.length
    for(let j = 0; j < col; j++) {
        if(board[row][j] === 1) return false
    }

    for(let i = row, j = col; i < N && j >= 0; i++, j--) {
        if (board[i][j] == 1) return false
    }

    for(let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] == 1) return false
    }

    return true
}
console.log(`It is possible to solve n-queens for N = ${N}: ${solve(N)}`)