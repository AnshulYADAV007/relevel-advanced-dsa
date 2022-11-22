const canSell = function(notes) {
    let count5 = 0, count10 = 0
    console.log(notes)
    for(let note of notes) {
        console.log(`count of 5 : ${count5}, count of 10 : ${count10}, note : ${note}`)
        if(note === 5) {
            count5++
        }else if(note === 10) {
            if(count5 === 0) return false
            count5--
            count10++
        }else if(note === 20) {
            if(count10 > 0 && count5 > 0){
                count5--
                count10--
            } else if(count5 >= 3) {
                count5 -= 3
            } else {
                return false
            }
        }
    }
    return true
}

let notes = [5,5,20,5,5,10]
console.log(canSell(notes))