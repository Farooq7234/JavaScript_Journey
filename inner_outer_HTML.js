// console.log vs console.dir difference?

let x = document.getElementsByTagName("span")
console.log(x) // returns html collection
let y = document.getElementsByTagName("span")
console.dir(y) // returns object 

console.log(document.body.firstChild.nodeName) // #text
console.log(document.body.firstElementChild.nodeName) // DIV

// in line 8 the body's first child is #text in terms of 'firstChild'
// in line 9 the body's first child element is DIV in terms of 'firstElementChild'

// Inner HTML in JavaScript

let a = document.getElementById("second")
console.log(a.innerHTML = "<i>I am inner html text<i/>")

/* If you check this in the element of chrome then you will see i tag inside the id=second
and I notices one thing that the innerHTML works only with id but not with class*/


// text content

console.log(document.body.textContent)

// It displays all the text content in the website(very simple😎)
// Note: the hidden text also displayed which is cool!


// hidden 

// hidden is an 'attribute' which used to hide the element

// Like this👉 <div class="hidden" hidden></div>

