// setTimeout in javaScript

const sum =(a,b)=>{
    console.log("this will print after",a+b, "seconds")
}

let a = setTimeout(sum,3000,1,2) 
console.log(a) // setTimeout delays the excution of code
clearTimeout(a) // 1

// This kill the setTimeout 

const msg=()=>{
    console.log("I will print in every 5 seconds")
}

// setInterval in javascript 

let b = setInterval(msg,5000) // This will print in every 5 seconds 
console.log(b)
clearInterval(b) // 2

// kills the setInterval 