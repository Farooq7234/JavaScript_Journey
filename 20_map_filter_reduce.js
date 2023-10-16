// Array map filter

/* Here map also print each element in the array like 
forEach but there is difference between them.Let's understand that*/

// Printing each element using forEach loop

let arr = [45,23,48]

// let a = arr.forEach((value,index,array)=>{
//     console.log(value,index,array)
//     return value + index // index will be 0 1 2
// })
// console.log(a)  // undefined 
// console.log(arr) // [45, 23, 48]

//NOTE: forEach Modifies the original array

// Note: But you can see a is undefined which means we cannot create a new array with forEach loop

// Output 
// value   index    array
// 45       0    [45, 23, 48]
// 23       1    [45, 23, 48]
// 48       2    [45, 23, 48]

// Printing each element using MAP

let a1 = arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value + index // index will be 0 1 2
})
console.log(a1)  // [45, 24, 50]
console.log(arr)  // [45, 23, 48] 

// NOTE: Map cannot modify an original array 

// Output 
// value   index    array
// 45       0    [45, 23, 48]
// 23       1    [45, 23, 48]
// 48       2    [45, 23, 48]

// Note: Here a1 is a new array



// Array filter method

let arr2  = [3,4,67,90,23,5,43]
let a2 = arr2.filter((a)=>{
    return a<10
})

console.log(a2,arr2) // [3, 4, 5] , [3, 4, 67, 90, 23, 5, 43]

// NOTE: filter method also do not modify the original array

// Array reduce method

/* Reduce: Reduce the array and return a value like in the below case the array is reduced and the value is returned as 24 */

let arr3 = [1,3,5,7,8]

let a3 = arr3.reduce((h1,h2)=>{
    return h1 + h2
})
console.log(a3) // 24

