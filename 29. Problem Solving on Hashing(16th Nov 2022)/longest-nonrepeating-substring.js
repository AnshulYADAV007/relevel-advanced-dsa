// O(n^3)
const lengthOfLongestSubstringBruteForce = function(s){
    let chars = s.split("")
    let maxLength = 0
    for(let i = 0 ; i < s.length; i++) { // O(n)
        for(let j = i + 1; j <= s.length; j++) { // O(n)
            let unique = new Set(chars.slice(i, j)) // O(n)
            console.log(chars.slice(i, j), unique)
            if(unique.size == j - i) {
                maxLength = Math.max(maxLength, unique.size)
            }
        }
    }
    return maxLength
}

const removeString = function(charIndex, s) {
    for(ch of s) {
        charIndex.delete(ch)
    }
}

const lengthOfLongestSubstring = function (s) {
    let maxLength = 0
    const charIndex = new Map()
    let left = 0, right = 0
    console.log(s)
    while (right < s.length) {
        console.log(left, right, charIndex, maxLength, s.slice(left, right + 1))
        if(charIndex.has(s[right])) {
            let rightIndex = charIndex.get(s[right])
            left = Math.max(left, rightIndex + 1)
        }
        charIndex.set(s[right], right)
        maxLength = Math.max(maxLength, right - left + 1)
        console.log(left, right, charIndex, maxLength, s.slice(left, right+ 1))
        right++
    }
    return maxLength 
}
let s = "eabcabcbb"

console.log(s, lengthOfLongestSubstring(s))