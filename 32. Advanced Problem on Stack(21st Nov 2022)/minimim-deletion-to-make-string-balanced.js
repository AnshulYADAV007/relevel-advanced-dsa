/** https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/description/
 * @param {string} s
 * @return {number}
 */

 var minimumDeletions = function(s) {
    let countB = 0
    let answer = 0
    for(let ch of s) {
        if (ch == 'b') countB++
        if (ch == 'a' && countB > 0) {
            answer++
            countB--
        }
    }
    return answer
};