const N = 7

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

    board[0][0] = 1
    rowMoves = [2, 2, -2, -2, 1, -1, 1, -1]
    colMoves = [1, -1, 1, -1, 2, 2, -2, -2]

    isTourPossible = takeTour(board, 0, 0, 1, rowMoves, colMoves)

    if(isTourPossible) {
        console.log("The final tour is ", board)
    }

    return isTourPossible
}

function takeTour(board, row, col, count, rowMoves, colMoves) {
    if(count === board.length ** 2) {
        return true
    }

    for(let i = 0; i < 8 ; i++) {
        const nextRow = row + rowMoves[i]
        const nextCol = col + colMoves[i]
        if(canMove(board, nextRow, nextCol)){
            board[nextRow][nextCol] = count + 1
            if(takeTour(board, nextRow, nextCol, count + 1, rowMoves, colMoves)) {
                return true
            }
            board[nextRow][nextCol] = 0
        }
    }

    return false
}

function canMove(board, row, col) {
    const N = board.length
    return  row >= 0 && col >= 0 &&
            row < N && col < N &&
            board[row][col] === 0
}

console.log(`We can do a Knight's Tour for N = ${N}: ${solve(N)}`)