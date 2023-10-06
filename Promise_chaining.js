// promise Chaining in javascript

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
            console.log("Resolved after 2 seconds")
            resolve(56) 
    }, 2000)
})

// Creating another promise inside .then 

p1.then((value) => {
    console.log(value)
    return new Promise((resolve, reject) => {
            setTimeout(() => { resolve("Promise 2") }, 2000) //
    }) 
}).then((value) => {
    console.log("We are done")
    return 2
}).then((value)=>{
    console.log("Now we are pakka done")
})


// Output working process

// step 1: First after 2 seconds it will print step 1 and step 2
// Step 2: Resolved after 2 seconds
// Step 3: 56 // This print because of .then because there we given value 
// Step 4: Prints "We are done" ===> After completing Step 3.
// Step 5: Immediately prints this with step 4 ==> "Now we are pakka done"

// Step by step they prints like after completing one task 1 another task 2 starts here the task 2 waits for task 1