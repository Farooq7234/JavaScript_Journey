// Console objects in javascript

console.log(console)

// the console.log(console) gives all the methods of console.something

// console error

console.error("This is an error")

//It is used to create an error in javascript. useful while creating big applications

// console warn
console.warn("This is an warning")

//It is used to create an warning in javascript. useful while creating big applications


// console.assert()

console.assert(5>10) // Assertion failed: console.assert 

// The above code works on the basis of statement if something true it returns "undefined" else "assertion failed"

// Console clear 

console.clear() // will clear the console

// console.table()

console.table() // Use view anything in the form of table

// console info

console.info("I am a info") // it prints and it stores in the info section


// Console time and time end

console.time("forloop")
for (let i = 0; i < 100; i++) {
    console.log(i)
}
console.timeEnd("forloop")

// forloop: 71.469970703125 ms


console.time("while")
let i = 0; 
while (i < 100) {
    console.log(i)
    i++
}
console.timeEnd("while")

// while: 317.219970703125 ms