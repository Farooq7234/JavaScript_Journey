// Using loops in array

let num = [3,4,5,6,7]

// Classical way of printing array elements 

for (let i = 0; i < num.length; i++) {
    console.log(num[i]) 
}

// Output

// 3
// 4
// 5
// 6
// 7

// ForEach loop 

num.forEach((element)=>{
    console.log(element*element)
})

// ForEach loop used to access each element in the array

//Output

// 9
// 16
// 25
// 36
// 49

// array.from

let My_name = "farooq"
let arr = Array.from(My_name)
console.log(arr) // ['f', 'a', 'r', 'o', 'o', 'q']

//Note: In the above program the string is converted into an array using array.from

/*Defination: Array.from is used to convert an object into array for example HTML collections are objects and this HTML collection is converted into array and then we will use forEach*/


// for..of

for(let i of num){
    console.log(i)
}

//Output

// 3
// 4
// 5
// 6
// 7

// for in loop


for(let j in num){
    console.log(j) // prints the index
    console.log(num[j]) // prints the element
}

//Output

// 0
// 1
// 2
// 3
// 4

// Note: for in loop prints the key in the array and the key will be index. Ok!




