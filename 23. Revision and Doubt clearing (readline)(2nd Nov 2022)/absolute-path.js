let directories = readline.split('/')
let absolute = []
for(let directory of directories) {
    if(directory == '..') {
        absolute.pop()
    } else if (directory == '' || directory == '.') {
        continue;
    } else {
        absolute.push(directory)
    }
}
return '/' + absolute.join('/')