const groupAnagrams = function(strs) {
    let anagram = {}
    for(let str of strs) {
        let sorted = str.split("").sort().join("")
        console.log(str, sorted, anagram[sorted])
        if(anagram[sorted]) anagram[sorted].push(str)
        else anagram[sorted] = [str]
        console.log(str, sorted, anagram[sorted])
    }
    return Object.values(anagram)
}

const strs = [
                'are', 
                'bat', 
                'ear', 
                'code',
                'tab',
                'era'
            ]

console.log(strs, groupAnagrams(strs))