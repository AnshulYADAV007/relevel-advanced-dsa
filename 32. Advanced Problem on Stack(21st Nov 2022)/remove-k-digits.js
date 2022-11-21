/** https://leetcode.com/problems/remove-k-digits/description/
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
 var removeKdigits = function(num, k) {
    const stk = []
    const digits = num.split("")
    for (let digit of digits) {
        console.log(stk, `digit : ${digit} k : ${k}`)
        while(
                stk.length > 0 && 
                k > 0 &&
                parseInt(stk.at(-1)) > parseInt(digit)
        ) {
            stk.pop()
            k--
        }
        if (stk.length > 0  || digit != '0') {
            stk.push(digit)
        }
        console.log(stk, `digit : ${digit} k : ${k}`)
    }

    while (stk.length > 0 && k--) {
        stk.pop()
    }

    console.log(stk, `k : ${k}`)
    
    if(stk.length == 0) return "0"
    
    return stk.join('')
};