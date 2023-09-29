// Classical  way to insert element in the element

let a = document.getElementsByTagName("div")[0]
// a.innerHTML = a.innerHTML + "<h1>Hello world<h1/>"

// Modern way to insert element in the element

let div = document.createElement('div') // creating div element
div.innerHTML =  "<h1>Hello world</h1>"
// a.append(div) // append means adds at end of the element container and it become last child

/* using append method you insert an element in another element 
like in this case we added <div><h1>Hello World!</h1></div> inside div container*/

// perpend ()

// If we want to add in the beginning then we can use prepend()

a.prepend(div) 

// before()

// adds the element outside the container but top outside the container

a.before()

//after ()

// adds the element outside the container but below outside the container


// replaceWith()

// this replace the container div in the html  with newly created div element

a.replaceWith(div)


