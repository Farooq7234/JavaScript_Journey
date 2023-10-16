// Chapter-5 Arrays

// Arrays are variable which can hold more than one value

//Creating a constant Array

const fruits = ["banana","apple","grapes"]


// Printing array elements

console.log(fruits)

// Different data types array 

let diff_data = [1,"string",true,null,undefined]
console.log(diff_data)

// Accesing Array Elements

let numbers = [1,2,3,4]
console.log(numbers[0]) // 1
console.log(numbers[1]) // 2
console.log(numbers[2]) // 3
console.log(numbers.length) // --> 4


// Changing the values

let numbers2 = [1,3,3,4]
numbers2[1] = 2;
console.log(numbers2)

// Note: numbers2 now become [1,2,3,4] So arrays are mutable arrays can be changed

console.log(typeof(numbers2)) // --> Object