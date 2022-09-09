// function repeat() {
//     console.log("Hello World")
//     repeat()
// }

// // repeat()

// function one() {
//     console.log("Function one started")
//     two()
//     console.log("Function one ended")
// }


// function two() {
//     console.log("Function two started")
//     three()
//     console.log("Function two ended")
// }

// function three(){
//     console.trace()
// }

// one()

// console.trace()

// console.table([["Rohit", "Sure"], ["Karan", "Gupta"]])

function fibonacci(n) {
    // Base Condition
    console.log(`Fibonacci(${n}) started`)
    if (n === 0 || n === 1) {
        return n
    }
    
    // Recurrsive Assumption
    const last = fibonacci(n - 1) 
    const secondlast = fibonacci(n - 2)

    // Self Work
    console.log(`Fibonacci(${n}) ended`)
    return last + secondlast 
}

// console.log(fibonacci(7))

// Print first N natural numbers: 
/* 
N = 5
Decreaseing Output:
1
2
3
4
5

Increasing Output:
5
4
3
2
1
*/

function printNaturalIncreasing(n) {
    if (n === 1) {
        console.log(n)
        return
    }

    // // Option 1
    // console.log(n)
    // printNaturalIncreasing(n - 1)

    // Option 2
    printNaturalIncreasing(n - 1)
    console.log(n)
}

// printNaturalIncreasing(5)

function isArraySorted(nums, index) {
    if (index === nums.length - 1) {
        return true
    }
    
    if (nums[index] > nums[index + 1]) {
        return false
    }

    return isArraySorted(nums, index + 1)
}

// Karan Gupta

function isSorted(arr){
    for(let i = 0; i < arr.length-2; i++)
    {
        if(arr[i] > arr[i+1]) return false;

    }
    return true;
}

console.log(isSorted([1,5,3,4,5]));


// Rohit Sure
function isSorted2(array){
    for(let i = 0; i < array.length-1; i++){
        if(array[i] > array[i+1]){
            return false
        }
    }
    return true;
}
console.log(isSorted2([1,2,3,4,5]))



console.log(isArraySorted([1,4,3,6,9], 0))

// Aparna


function isSorted3(arr){
    for(let i = 0 ; i < arr.length-1; i++){
        if(arr[i] > arr[i+1]){
            return false;
        }
    }
    return true;
}
    
console.log(isSorted3([1,2,3,4,5]));


// Aparna
function sort(nums){
    for(let i = 0 ; i < nums.length ; i++){
        for (let j = i; j < nums.length ; j++){
            if(nums[i] > nums[j]){
                temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
    return nums; 
}

// Vivek

var Arr = [1,4,3,5,2];

for (var i = 1; i < Arr.length; i++)
    for (var j = 0; j < i; j++)
        if (Arr[i] < Arr[j]) {
          var x = Arr[i];
          Arr[i] = Arr[j];
          Arr[j] = x;
        }
console.log(Arr)

console.log(sort([2,3,4,9,6,7]));
//tried this one for sorting 


// Friends Pairing Problem
/**
 * Problem Statement: There are n, friends who want to go to a party. Every person can either
 * go alone to the party or they can go with some friend. Calculate the total number of ways 
 * in which these n friends can go to party.
 */
function waysToParty(n) {
    if (n === 1 || n === 2) return n

    // Recursive Assumption
    /*-----------------------*/
    // Raju can go alone
    waysOfSingle = waysToParty(n - 1)

    // Raju can go with some friend.
    // How many choice of partners does Raju have? n-1
    // How many ways are there to arrange the rest of n-2 friends? waysToParty(n-2)
    waysOfDouble = (n - 1) * waysToParty(n - 2)

    // Self work
    return waysOfSingle + waysOfDouble
}

console.log(`Ways to party for 3 people is ${waysToParty(3)}`)


/**
 * Given a number n, count the toal number of binary strings of length n, without any consecutive ones.
 * 
 * Eg: n = 2
 * 00, 10, 01
 * Output = 3
 * 
 * Eg: n = 3
 * 000, 001, 010, 100, 101
 * Output = 5
 */

/**
 * Solution: 
 * 1. Note down stringCount(0) = 1, stringCount(1) = 2
 * 2. Assume you have stringCount(i) for i in [1, n-1]
 * 3. Combine : stringCount(n) = stringCount(n-1) + stringCount(n-2)
 */

// Karan's Code
function stringcount(n){
    if(n == 0) return 1;
    if(n == 1) return 2;
    return stringcount(n - 1) + stringcount(n - 2);
}

let n = 4
console.log(`The number of binary strings with non consecutive ones of size ${n} is ${stringcount(n)}`);


// Er Niteshs' Code

function binary(n){
    if(n==0) return 1;
    if(n==1) return 2;

    let last = binary(n-1);
    let secondlast = binary(n-2);
    return last + secondlast;
}
console.log(`The number of binary strings with non consecutive one of size ${n} is ${binary(n)}`);


/**
 * 2. Given a number n, count the total number of binary strings of length n.
 * 1 - 2
 * 2 - 4
 * 3 - 8
 * 4 - 16
 * 5 - 32
 * n - 2^n
 */

/**
 * Solution: 
 * 1. Note down stringCount(0) = 1, stringCount(1) = 2
 * 2. Assume you have stringCount(i) for i in [1, n-1]
 * 3. Combine : stringCount(n) = stringCount(n-1) + stringCount(n-1)
 */