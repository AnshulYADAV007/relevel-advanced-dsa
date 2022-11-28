/** https://leetcode.com/problems/course-schedule-ii/description/
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 var findOrder = function(numCourses, prerequisites) {
    let remainingPrerequisites = getInDegrees(prerequisites, numCourses)
    let adjList = getAdjList(prerequisites, numCourses)
    let count = 0
    let result = []
    while(count < numCourses) {
        let current = remainingPrerequisites.indexOf(0)
        if(current === -1) return []
        count++
        result.push(current)
        remainingPrerequisites[current] = -1
        for(let nextCourse of adjList[current]){
            remainingPrerequisites[nextCourse]--
        }
    }
    return result
};

const getInDegrees = function(prerequisites, numCourses) {
    let answer = new Array(numCourses).fill(0)
    for(let edge of prerequisites) {
        answer[edge[0]]++
    }
    return answer
}

const getAdjList = function(prerequisites, numCourses) {
    let adjList = new Array(numCourses).fill(0).map(x => new Array(0))
    for(let [course, prerequisite] of prerequisites) {
        adjList[prerequisite].push(course)
    }
    return adjList
}

