// getElementById in javascript 🔥

// Change the card title to red
let ctitle = document.getElementById("firstcardtitle")
ctitle.style.color = "blue"

// The id with firstcardtitle will change the colour to blue

// querySelectorAll in Javascript 🔥

let ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color = "blue"
ctitles[1].style.color = "red"
ctitles[2].style.color = "green"
console.log(ctitles)

// NOTE: the the class with name card title will change their corresponding to their indexing!

// querySelector in Javascript 🔥

document.querySelector(".this").style.color = "black"
document.querySelector(".this").style.background = "red"


// Nesting to the element using different DOM Searching

console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))
console.log(document.getElementsByName("search"))