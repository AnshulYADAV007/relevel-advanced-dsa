const getPivot = function(nums, A) {
    if (A < 0) {
        let maximum = Math.max(...nums)
        return nums.indexOf(maximum)
    }else {
        let minimum = Math.min(...nums)
        return nums.indexOf(minimum)
    }
}

const reverseSort = function(list) {
    if(list.length < 2) return list
    if(list[0] > list[1]) list.reverse()
    return list
}

const merge = function(list1, list2) {
    list1 = reverseSort(list1)
    list2 = reverseSort(list2)
    let i = 0, j = 0
    let answer = []

    while (i < list1.length && j < list2.length) {
        if(list1[i] < list2[j]) answer.push(list1[i++])
        else answer.push(list2[j++])
    }

    while(i < list1.length) answer.push(list1[i++])
    while(j < list2.length) answer.push(list2[j++])

    return answer
}

const equationSort = function(nums, A, B, C) {
    nums = nums.map(x => A * x * x + B * x + C)
    let pivot = getPivot(nums, A)
    // console.log(nums.slice(0, pivot), nums.slice(pivot))
    return merge(nums.slice(0, pivot), nums.slice(pivot))
}

let nums = [-7, -4, -2, 1, 2, 3, 5, 6, 7], A = 1, B = -2, C = 3
nums = equationSort(nums, A, B, C)
console.log(nums)