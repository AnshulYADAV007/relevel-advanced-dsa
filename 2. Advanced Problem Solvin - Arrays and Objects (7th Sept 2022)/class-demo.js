
// /* Array Declaration and Creation */

// const stringArray = ["one", "two", "three"]
// console.log(stringArray)
// const numericArray = new Array(3)
// numericArray[1] = 5
// console.log(`The numericArray is `, numericArray)
// let pets = new Array("cat", "dog")
// console.log("The pets array is", pets)
// pets.push('cow')
// console.log("The new pets array is", pets)

// /* Multi Dimensional Array */
// const items = [
//     [2, 31],
//     [5, 6],
//     [7, 8]
// ]

// console.log("The second item in the second row is", items[1][1])
// console.log(`The second row contains ${items[1]}`)
// console.log(`The first item in the second row is ${items[1][0]}`)

// /* Common Operations on Arrays */
// console.log(`The length of items array is ${items.length}`)
// console.log(`The items array after fill is ${items.fill(0)}`)

// const cities = ['Mumbai', 'Delhi', 'Kolkata', 'Lucknow', 'Chennai']

// for(let i = 0; i < cities.length; i++) {
//     console.log(`At index ${i} we have the city of ${cities[i]}`)
// }

// console.log("We have the following cities: ")
// for(let city of cities) {
//     console.log(city)
// }

// /* Objects */
// /** If it looks like a duck, swims like a duck, 
//  * and quacks like a duck, then it probably is a duck. 
//  * There are two things about an object 
//  *      1. Properties - Eg: Looks of a duck
//  *      2. Functionalities - Method Eg: Swimming*/


// // Object literal way to create an object
// const laptop = {
//     maker: "Dell",
//     model: "Inspiron",
//     memory: {
//         type: "SSD",
//         size: 256
//     },
//     cores: 8,
//     getModel: function() {
//         return this.model
//     },
//     start: function(){
//         console.log(`The laptop is starting`)
//     }
// }

// /** Deep Copy */
// const laptopDeepCopy = {...laptop} // Object.assign({}, laptop)
// laptopDeepCopy.maker = "Asus"
// console.log('Here are the laptop and laptop deep copy objects',
//             laptop, laptopDeepCopy)

// const laptopShallowCopy = Object.assign(laptop)
// laptopShallowCopy.maker = "HP"
// console.log("Here are the laptop and laptop shallow copy objects",
//             laptop, laptopShallowCopy)
// // /** Creating object using create method */
// // const laptopCopy = Object.assign({}, laptop)
// // laptopCopy.maker = "Asus"

// // const laptopSecondCopy = {...laptop, maker: "Asus"}
// // console.log(laptop, laptopCopy, laptopSecondCopy)

// // console.log(`The maker of the original laptop is ${laptop.maker}`)

// console.log(`The model of the original laptop is ${laptop.getModel()}`)
// laptop.start()

// /** Using a for...in loop for objects*/
// console.log(`Here are the key value pairs of the laptop object`)
// for(let key in laptop) {
//     console.log(`${key}: ${laptop[key]}`)
// }

// const keys = Object.keys(laptop)
// for(let key of keys) {
//     console.log(`${key}: ${laptop[key]}`)
// }

// const entries = Object.entries(laptop)
// console.log("The entries of laptop object are", entries)

// const values = Object.values(laptop)
// console.log("The values of laptop object are", values)

// /** JSON */
// let [a, ...nums] = [40, 50, 60, 70] 

// console.log(nums)

// const {maker, model} = laptop
// console.log("I have destructed the following values", maker, model)

// // Values in JSON can only be strings, numbers, objects, arrays, boolean, null

// // const data = {
// //     "car" : "Audi",
// //     "models": ["Q7", "Q5"],
// //     "launchYear": 2021,
// //     "price": [5000000,3500000],
// //     "function": function(){
// //         console.log("Hello")
// //     }
// // }

// let data = require("./data.json")
// console.log(data.car)
// let fun = new Function(data.add.arg, data.add.body)
// data = {...data, add : fun}

// console.log("I am happy to use add function in json", data.add(2, 3))


/** Remove the duplicate elements in the array */
const arr = ["a", 'b', 'c', 'a', 'c', 'd', 'a']

const removeDuplicates = (arr) => { // O(n)
    const result = {}
    for(let element of arr) { // O(n)
        if(!(element in result)) { // O (1)
            result[element] = 1
        }
    }
    return Object.keys(result)
    }  

const removeDuplicatesInplace = (arr) => {
    let unique = -1
    const result = {}
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] in result) {
            continue
        } else {
            result[arr[i]] = 0
            unique += 1
            arr[unique] = arr[i]
        }
    }
    arr.splice(unique + 1)
    return arr
}

console.log("Here is the array after removing the duplicates", 
            removeDuplicates(arr))

/** Write a program to print values for two different objects */

const cars = [{
    color: 'Black',
    speed: '120Kmph',
    brand: 'Audi',
    start: function () {
        console.log('Car started');
    },
    stop: function () {
        console.log('Car stopped');
    },
},

{
    color: 'Red',
    speed: '100Kmph',
    brand: 'BMW',
    start: function () {
        console.log('Car started');
    },
    stop: function () {
        console.log('Car stopped');
    },
},]

for (let car of cars) {
    console.log(`My car is ${car.brand} and its color is ${car.color}`)
}