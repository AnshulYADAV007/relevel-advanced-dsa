/**
 * You have a bunch of items that you want to carry in a knapsack.
 * You are given the weights and profits of the items and the 
 * capacity of the knapsack. What is the maximum profit you 
 * can get by carrying the items?
 */

const subsets = function(weights, capacity, current) {
    if(capacity <= 0) {
        console.log(current)
        return
    }
    if(weights.length == 0){
        console.log(current)
        return
    }

    if(weights[0] <= capacity) {
        current.push(weights[0])
        subsets(weights, capacity - weights[0], current)
        current.pop()

    }
    subsets(weights.slice(1), capacity, current)
}

let weights = [1, 2, 3]
let profits = [15, 20, 30]
let capacity = 5

subsets(weights, capacity, [])
/**
 * 1, 1, 1, 1, 1 -> 15 * 5 = 75
 * 1, 1, 1, 2 -> 15 + 15 + 15 + 20 = 65
 * 1, 1, 3 -> 15 + 15 + 30 = 60 
 * 1, 2, 2 = 15 + 20 + 20 = 55
 * 2, 3 -> 50
 */