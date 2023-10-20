// Syntax for add and remove eventListener
// element.addEventListener(event name, handler)
// element.removeEventListener(event name, handler)

let a = document.getElementById("btn")

let x = function (event) {
    console.log(event)
    console.log("You Clicked me")
}
let y = function (event) {
    console.log(event)  // the function parameter (event) will all the data of event listener(print it if you don't understand)
    console.log("You clicked again")
}

a.addEventListener('click',x) // "You Clicked me"
a.addEventListener('click',y) // "You clicked again"

let b = prompt("What is your favourite number")

if (b == "2") {
    a.removeEventListener('click',x) // this will remove event listener of x
}



// The if condition's function will not execute below. but why? (view the if block carefully)

// if (b=="2") {
//     a.removeEventListener('click',function(event){
//         console.log("This will not work because, this will treat as new function") // to remove event listener then give reference like this a.removeEventListener('click',x) 
//     })
// }
// both addEventListener will execute and both will print