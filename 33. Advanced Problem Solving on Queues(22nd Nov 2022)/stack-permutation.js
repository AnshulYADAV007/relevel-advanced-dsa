// Check is queue2 is a stack permutation of queue1
const isStackPermutation = function(input, output) {
    let indexIn = 0, indexOut = 0
    let stk = []
    while (indexIn < input.length) {
        console.log("stack: ", stk, "input queue: ", input.slice(indexIn), "processed: ", output.slice(0, indexOut), "remaining: ", output.slice(indexOut))
        if(input[indexIn] == output[indexOut]) {
            indexIn++
            indexOut++
            while(stk.length > 0 && stk.at(-1) == output[indexOut]) {
                console.log("stack: ", stk, "input queue: ", input.slice(indexIn), "processed: ", output.slice(0, indexOut), "remaining: ", output.slice(indexOut))
                stk.pop()
                indexOut++
            }
        } else {
            stk.push(input[indexIn])
            indexIn++
        }
    }
    return stk.length == 0
}
/*
        _______                           ______
OutputQ _______ []  <- stk <- [4,5,6,7,8] ______ InputQ 

*/
let inputQ = [4,5,6,7,8], outputQ = [5,4,8,7,6]
console.log(isStackPermutation(inputQ, outputQ))