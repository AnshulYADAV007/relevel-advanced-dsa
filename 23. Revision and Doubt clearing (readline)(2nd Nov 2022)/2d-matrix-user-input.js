let [n, m] = readline().split(" ").map(item => parseInt(item))
let matrix = []
for(let i = 0; i < n; i++) {
    let row = readline().split(" ").map(item => parseInt(item))
    matrix.push(row)
}

console.log(matrix[0])
console.log(matrix[1])