// Promise in JavaScript

let promise = new Promise(function (resolve,reject) {
    resolve(56) // if job is finished successfully then it will return resolve value
})

// Output for above code 👆

// Promise {<fulfilled>: 56}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: 56

// Defination of resolve and reject 👇

// resolve(value) --> If the job is finised successfully
// reject(error) --> If the job fails

console.log("Hello One")

setTimeout(function () {
    console.log("Hello Two in 2 seconds")
},2000)

// Will print above function after 2 seconds

console.log("Hello Three")

// printing promise named     variable 
console.log(promise)


// Overall Output

// Hello One
// Hello Three
// Promise{<fulfilled>: 56}
// Hello Two in 2 seconds