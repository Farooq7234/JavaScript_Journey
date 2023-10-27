let a = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(456)
        }, 4000);
    })
}

// This is IIFE Immediately Invoked Function Expression

(async ()=>{
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)

})()


// Output

// 456 will be printed after every 4 seconds

// 456
// 456
// 456

// console.log(d)


// Other Examples with char aur code


// IIFE is used to avoid global pollution

(function chai() {
    // Named IIFE
    console.log(`DB CONNECTED`)
})(); // If you don't add semicolon here then error will occur

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})("Farooq")


