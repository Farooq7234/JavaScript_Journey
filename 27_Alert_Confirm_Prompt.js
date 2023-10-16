// All this methods are used to interact with users to tell them what happened for their action

// alert 

alert("Enter the value of a")

// Prompt in javascript
let a = prompt("Enter a here","578") // NOTE:❗ the comma separated value is known as default value

document.write(a) // writes the value of a in the document (web page)
a = Number.parseInt(a) // Used to convert anydata type into integers

// Confirm in javascript
let write = confirm("Do you want to write it to the page")

// Writing condition to execute write 

if (write) {
    document.write(a) //prints a value in the web page if we click ok 
}

else{
    document.write("Please allow me to write") //prints the message value in the web page if we cancel ok
}

