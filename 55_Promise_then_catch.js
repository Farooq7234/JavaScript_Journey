// Learning promise.then and promise.catch

let p = new Promise((resolve,reject)=>{
    console.log("Promise is Pending")
    setTimeout(() => {
        console.log("I am a promise and I am rejected")
        resolve(true) // Returns true 
        // reject(new Error("I am an error")) // throughing custom error
    }, 5000);
})

// Another P1 as promise

let p1 = new Promise((resolve,reject)=>{
    console.log("Promise is Pending")
    setTimeout(() => {
        reject(new Error("I am an error")) // throwing custom error
    }, 5000);
})

// console.log(p)

// Output

// Promise is Pending
// I am a promise and I am rejected


// To get the value using then 

p.then((value )=>{
    console.log(value) // prints the value which is "true"
})

// To catch the error using catch

p1.catch((error)=>{
    console.log("Some Error Occured in the p1")
})

// Some Error Occured in the p1 

/*NOTE: If we write two promise with setTimout in each function 
as 5 second then both promises will take overal 5 seconds not 10 seconds*/

