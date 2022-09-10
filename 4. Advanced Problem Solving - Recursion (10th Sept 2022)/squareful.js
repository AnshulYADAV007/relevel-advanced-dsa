const nums = [1, 17, 8]

function solve(nums) {
    const visited = new Array(nums.length)
    visited.fill(false)
    const result = []
    return permutationCount(nums, result, visited)
}

function permutationCount(nums, result, visited) {
    if (result.length == nums.length) {
        return 1
    }
    let count = 0
    for(let i = 0; i < nums.length ; i++) {
        if(canAppend(nums, result, i, visited)) {
            visited[i] = true
            result.push(nums[i])
            count += permutationCount(nums, result, visited)
            result.pop()
            visited[i] = false
        }
    }
    return count
}

function canAppend(nums, result, i, visited) {
    if(visited[i]) return false
    if(result.length == 0) return true
    if(isSquare(nums[i] + result[result.length - 1])) return true
    return false
}

function isSquare(num) {
    return Math.sqrt(num) ** 2 === num
}

console.log(`Total number of squareful permutations are ${solve(nums)}`)