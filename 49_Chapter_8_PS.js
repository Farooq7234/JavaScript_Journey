/*Question 1: Write a program to show different
console when different buttons are clicked
*/

//Solution

let a = document.getElementById("btn1");
a.addEventListener('click',function() {
    alert("This is an Alert")
})

let b = document.getElementById("btn2");
b.addEventListener('click',function() {
    console.log(warn())
})

let c = document.getElementById("btn3");
c.addEventListener('click',function() {
    confirm("This is a confirm")
})

let d = document.getElementById("btn4");
d.addEventListener('click',function() {
    error("This is an error")
}) 

// Question 5: Create a glowing bulb effect using classlist toggle method in javascript

// Solution

setInterval(function() {
    let a = document.getElementById("bulb")
    a.classList.toggle('toggle')
},300)




