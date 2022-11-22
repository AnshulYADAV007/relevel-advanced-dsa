const hasPrecendence = function(op1, op2) {
    if(op2 == '(' || op2 == ')') return false
    if((op1 == '*' || op1 == "/") && 
        (op2 == '+' || op2 == '-')) return false
    return true
}


const operate = function(op, num1, num2) {
    switch (op) 
    {
        case '+':
            return num1 + num2
        case '-':
            return num2 - num1
        case '*':
            return num1 * num2
        case '/':
            if(num1 == 0) 
                console.log("Cannot divide by zero")
            return num2 / num1    
    }
}

const computeOnce = function(sym_stk, num_stk) {
    let temp = operate(sym_stk.pop(), num_stk.pop(),
                        num_stk.pop())
    num_stk.push(temp)
}


const compute = function(expression) {
    let chars = expression.split('')
    let num_stk = []
    let sym_stk = []
    for(let i = 0; i < chars.length; i++) {
        console.log(sym_stk, num_stk, chars[i])
        if(chars[i] == ' ') continue
        if(chars[i] >= '0' && chars[i] <= '9') {
            let buffer = "";
            while(
                    i < chars.length && 
                    chars[i] >= '0' && 
                    chars[i] <= '9'
                ){
                buffer = buffer + chars[i]
                i++
            } 
            num_stk.push(parseInt(buffer))
            i--
        }else if (chars[i] == '(') {
            sym_stk.push(chars[i])
        }else if (chars[i] == ')') {
            while(sym_stk.at(-1) != '(') {
                computeOnce(sym_stk, num_stk)
            }
            sym_stk.pop()
        }else if (
            new Set(['+','-','*','/']).has(chars[i])
        ) {
            while(
                sym_stk.length > 0 &&
                hasPrecendence(chars[i] , sym_stk.at(-1))
            ){
                computeOnce(sym_stk, num_stk)
            }
            sym_stk.push(chars[i])
        }
    }
    console.log(sym_stk, num_stk)
    while (sym_stk.length > 0) {
        computeOnce(sym_stk, num_stk)
    }
    return num_stk.pop()
}

console.log(compute("25*4"))
console.log(compute("25(4)* + 4"))
console.log(compute("*25(4)"))