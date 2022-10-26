/**
 * https://leetcode.com/problems/design-skiplist/description/
 */

class Node{
    constructor(val, levels){
        this.val = val
        this.levels = new Array(levels).fill(null)
    }
}

var Skiplist = function() {
    this.head = new Node(-1, 16)
};

Skiplist.prototype._iterate = function * (target) {
    let current = this.head
    for(let level = 15; level >= 0; level--) {
        while(true) {
            let future = current.levels[level]
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
    
};

/** 
 * @param {number} num
 * @return {void}
 */
Skiplist.prototype.add = function(num) {
    let nodeLevels = Math.floor(
                Math.min(16, 1/(1- Math.random())))

    let node = new Node(num, nodeLevels)

    for(let [cur, level] of this._iterate(num)) {
        if(level < nodeLevels ) {
            let next = cur.levels[level]
            cur.levels[level] = node 
            node.levels[level] = next
        }
    }

};

/** 
 * @param {number} num
 * @return {boolean}
 */
Skiplist.prototype.erase = function(num) {
    
};

/** 
 * Your Skiplist object will be instantiated and called as such:
 * var obj = new Skiplist()
 * var param_1 = obj.search(target)
 * obj.add(num)
 * var param_3 = obj.erase(num)
 */