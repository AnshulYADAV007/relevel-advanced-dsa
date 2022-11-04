var simplifyPath = function(A) {
    const stack =[];
    let pathArr = A.split("/").filter(el => el !== ".").filter(el => el !== "");
    
    for(let name of pathArr){
        if(name === ".."){
            stack.pop()
        }else{
            stack.push(name)
        }
    }
    return '/' + stack.join('/')
}
console.log(simplifyPath(readline()))