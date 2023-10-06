// Parent and Sibling in Javascript

let a = document.body.firstChild
console.log(a) // the first child of the body is container

// parent in javascript

console.log(a.parentNode)  // the parent is body

// the parentNode returns the parent of any child

// Sibling in javascript

console.log(a.nextSibling) // the next sibling of container is first

// Previous Sibling in javascript

console.log(a.previousSibling)  // return null

// previous element

console.log(a.parentElement) // the previous element is body

// Difference betweeen nodes and element

// NOTE: Element: the element will be tags  
// NOTE: Nodes: are comment, text and element aswell 


// NOTE: Null is because the container is the first child and it does not have any previous sibling

