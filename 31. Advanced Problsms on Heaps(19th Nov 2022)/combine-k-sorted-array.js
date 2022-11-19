const Heap = require("./heap")

const merge = function(lists) {
    const VALUE = 0, INDEX_OF_LIST = 1, INDEX_IN_LIST = 2
    
    const heap = new Heap((parent, child) => parent[0] < child[0])

    for(let i = 0; i < lists.length; i++) {
        heap.insert([lists[i][0], i, 0])
    }
    
    const answer = []
    
    while(!heap.isEmpty()) {
        console.log(heap.data, answer)
        let current = heap.pop()
        answer.push(current[VALUE])
        let index = current[INDEX_IN_LIST] + 1
        let listIndex = current[INDEX_OF_LIST]
        if(index < lists[listIndex].length) {
            heap.insert(
                [
                    lists[listIndex][index], 
                    listIndex,
                    index
                ]
            )
        }
        console.log(heap.data, answer)
    }
    return answer
}

let lists = [[1,3,5,7], [2,4,6,8], [0,9,10,11]]
console.log(lists)
console.log(merge(lists))