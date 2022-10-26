/**
 * https://leetcode.com/problems/design-skiplist/description/
 */

 class Node{
    constructor(val, levels){
        this.val = val
        this.next = new Array(levels).fill(null)
    }
}

var Skiplist = function() {
    this.head = new Node(-1, 16)
};

Skiplist.prototype._iterate = function * (target) {
    let current = this.head
    for(let level = 15; level >= 0; level--) {
        while(true) {
            let future = current.next[level]
            if(future != null && future.val < target) {
                current = future
            } else {
                break
            }
        }
        yield [current, level]
    }
}

/** 
 * @param {number} target
 * @return {boolean}
 */
Skiplist.prototype.search = function(target) {
    let prev = this.head, level = 15
    let iterator = this._iterate(target)
    while(level > 0) {
        [prev, level] = iterator.next().value
    }
    let cur = prev.next[0]
    return cur != null && cur.val == target
};

/** 
 * @param {number} num
 * @return {void}
 */
Skiplist.prototype.add = function(num) {
    let nodeLevels = Math.floor(
                Math.min(16, 1 + Math.log2(1/Math.random())))

    let newNode = new Node(num, nodeLevels)

    for(let [cur, level] of this._iterate(num)) {
        if(level < nodeLevels ) {
            let next = cur.next[level]
            cur.next[level] = newNode 
            newNode.next[level] = next
        }
    }

};

/** 
 * @param {number} num
 * @return {boolean}
 */
Skiplist.prototype.erase = function(num) {
    let result = false
    for(let [cur, level] of this._iterate(num)) {
        let candidate = cur.next[level]
        if(candidate && candidate.val == num){
            result = true
            cur.next[level] = candidate.next[level]
        }
    }
    return result
};

/** 
 * Your Skiplist object will be instantiated and called as such:
 * var obj = new Skiplist()
 * var param_1 = obj.search(target)
 * obj.add(num)
 * var param_3 = obj.erase(num)
 */