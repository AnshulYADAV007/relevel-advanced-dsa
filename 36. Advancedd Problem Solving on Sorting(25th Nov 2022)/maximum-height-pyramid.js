// Levels of the pyramid are 1, 2, 3, 4, 5,..., height
// Thus the size would be (height * (height + 1))/2
const getPyramidSize = function(height) {
    return (height * (height + 1))/2
}

const maxHeightPyramid = function(blocks) {
    let n = blocks.length
    let lo = 0, hi = n, answer = 1
    let arr = [0, 1, 2, 3, 4, 5, 6]
    // Binary search
    // Searching for a height for which count of
    // elements in the pyramid is less than or equal 
    // to n. I would like to have the height as large
    // as possible.
    console.log("array, lo, hi, mi, size, n")
    while(lo <= hi) {
        let mid = lo + Math.floor((hi-lo)/2)
        let size = getPyramidSize(mid)
        console.log(arr.slice(lo, hi + 1), `lo : ${lo}, hi : ${hi}, mid: ${mid}, size: ${size}`)
        if(size <= n) {
            answer = mid
            lo = mid + 1
        } else {
            hi = mid - 1
        }
    }
    return answer
}

let blocks = [2, 1, 3, 5, 7, 6]
console.log(maxHeightPyramid(blocks))