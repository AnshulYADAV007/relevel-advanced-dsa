const Stack = require("./stack")

const isOpening = function(value) {
    const opens = ['(', '[', '{']
    return opens.indexOf(value) > -1
}


const isClosing = function(value) {
    const closes = [')', ']', '}']
    return closes.indexOf(value) > -1
}

const isMatching = function(open, close) {
    const matchTable = {
        "[": "]",
        "(": ")",
        "{": "}"
    }
    return close === matchTable[open]
}

const checkParenthesis = function(str) {
    const stack = new Stack()
    for(const char of str) {
        console.log(char, stack.data)
        if(isOpening(char)) stack.push(char)
        else if (isClosing(char)) {
            if(stack.isEmpty()) return false
            const open = stack.pop()
            const close = char
            if(!isMatching(open, close)) return false
        } else return false
        console.log(char, stack.data)
    }
    return stack.isEmpty()
}

const strs = ['{{[()()]}}', '{{[}}', '}()']

for(let str of strs) {
    console.log(`The string ${str} is a valid parenthesis: ${checkParenthesis(str)}`)
}