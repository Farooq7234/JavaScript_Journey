// elem.getAttribute()

let first = document.getElementById("first")
let a = first.getAttribute("class")
console.log(a) // hey because the class name is hey

// Defination: Method used to get the value of an attribute

// elem.hasAttribute()

console.log(first.hasAttribute("class")) // first has class hence it return 'true'
console.log(first.hasAttribute("style")) // first does not have any style so it is 'false'

// Defination: Method to check for existence of an attribute


// elem.removeAttribure()

console.log(first.removeAttribute("class")) // the class hey is removed from the html code

// Defination: This method is used to remove the attribute from an element like class hey is removed

/* <div id="first" class="hey"❌⬅removed >Hello i am first class</div> */

// elem.setAttribute()

console.log(first.setAttribute("hidden",true))
console.log(first.setAttribute("class","class-first class-second"))

// So in line number 28 the div will have two classes of class-first and class-second

// Here hidden is an attribute which will come in a div

// NOTE: <div id="first" class="hey" >Hello i am first class</div> 👈 this is hidden


// elem.attribute()

// This method is used to get the collection of all attribute

console.log(first.attributes);

//Output {0: id, 1: hidden, 2: class, id: id, hidden: hidden, class: class, length: 3}


// Data - * attributes

/* We can always create custom attributes but the ones starting with 'data-' are reserved for programmers
 use they are available in a properly names dataset*/

// basically we can create our own attributes in javascript for to perform any action like blinking

console.log(first.dataset.game) // prints mario
console.log(first.dataset.player) // prints player



