// Synchronous Action

//Defination : The code will execute line by line (one by one)

let a = prompt("What is your name");
console.log("Your name is ", a);


// Asynchoronous Action

// Set Timeout

console.log("start")
setTimeout(function () {
    console.log("I had printed after 3 second")
},3000) // three second delay
console.log("End")


// Call Back 

// function ko function pass karna he call back khete hai

// In below example we will create a script tag using below function

function loadScript(source,callback) {
    var script = document.createElement('script')
    // .src is used to add src in the element
    script.src = source;

    // .onload will execute after loaded
    script.onload = function () {
        console.log("Loaded script with SRC:", source);
        callback();
    }

    // Whenever a error occurs this function will execute
    script.onerror = function () {
        console.log("Error loading script with source",source)
    }

    // Will append script element at the end of the body
    document.body.appendChild(script)
}

function hello(source) {
    console.log("Hello World",source)
}

// hello function is passed in the loadscript function as a callback function

loadScript("index.js",hello()) // Add javascript src here

// Output

// Error loading script with source index.js
  