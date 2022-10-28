const Stack = require("../17. Stacks - Next Greater Elements(17th Oct 2022)/stack")

/**
 * Asteroid Collision
 */

const onCollision = function(asteroids) {
    const stk = new Stack()
    for (let asteroid of asteroids) {
        if(asteroid > 0) stk.push(asteroid)
        else {
            while(  !stk.isEmpty() &&
                    stk.peek() > 0 &&
                    stk.peek() < Math.abs(asteroid))
                stk.pop()
            if (stk.isEmpty()) stk.push(asteroid)
            else if (stk.peek() < 0) stk.push(asteroid) 
        }
    }
    return stk.data
}


const asteroids = [11, 16, -20]

console.log(`The asteroids after collision`,
            `of ${asteroids} will be`,
            `${onCollision(asteroids)}`)


const deletionsCount = function(s) {
    let stk = new Stack()
    let count = 0
    for(let ch of s) {
        if(stk.isEmpty()) stk.push(ch)
        else if (stk.peek() == 'b' && ch == 'a'){
            count++
            stk.pop()
        }
        else stk.push(ch)
    }
    return count
}

const s = 'baaabbba'
console.log(`The minimum number of deletions on ${s}`,
            `will be ${deletionsCount(s)}`)

/**
 * Solving Sliding Window Maximum Using SortedList
 * 
from sortedcontainers import SortedList
class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        answer = []
        left, right = 0, k - 1
        window = SortedList(nums[left : right])

        while right < len(nums):
            window.add(nums[right])
            right += 1

            # Window is complete
            answer.append(window[-1])
            
            window.remove(nums[left])
            left += 1
        
        return answer

 */