/** https://leetcode.com/problems/course-schedule/description/
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
    let remainingPrerequisites = getInDegrees(prerequisites, numCourses)
    console.log(remainingPrerequisites)
    let adjList = getAdjList(prerequisites, numCourses)
    let count = 0
    console.log(adjList)
    while(count < numCourses) {
        let current = remainingPrerequisites.indexOf(0)
        console.log(current, remainingPrerequisites)
        if(current === -1) return false
        count++
        remainingPrerequisites[current] = -1
        for(let nextCourse of adjList[current]){
            remainingPrerequisites[nextCourse]--
        }
    }
    console.log(remainingPrerequisites)
    return true
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






