// alert 

alert("Enter the value of a!")

// Prompt in javascript
let a = prompt("Enter a here","578") // the comma separated value is known as default value
a = Number.parseInt(a)

// Confirm in javascript
let write = confirm("Do you want to write it to the page")

// Writing condition to execute write 

if (write) {
    document.write(a)
}

else{
    document.write("Please allow me to write")
}

