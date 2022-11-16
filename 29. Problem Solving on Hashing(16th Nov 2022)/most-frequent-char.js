
const getCharCounts = function(s) {
    const freq = new Map()
    for(let ch of s) {
        if(freq.has(ch)) freq.set(ch, freq.get(ch) + 1)
        else freq.set(ch, 1)
    }
    return freq
}

const getMostFrequent = function(freq) {
    let maxFreq = 0, answer
    // console.log(freq.entries())
    for(let [ch, count] of freq.entries()) {
        if (count > maxFreq) {
            maxFreq = count
            answer = ch
        }
    }
    return answer
}

const maxFreqChar = function(s) {
    let charCounts = getCharCounts(s)
    return getMostFrequent(charCounts)
}

let s = 'abbfbedfgdhhddd'
console.log(`The most frequent character` +
            ` in ${s} is ${maxFreqChar(s)}`)