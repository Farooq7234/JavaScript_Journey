// Harry said this className and classList are very useful in javascript

//ClassName is used to class to an element 

let a = document.getElementById("third")
a.className = "fourth" // if you inspect then you will see class="fourth"


// classList contains properties


a.classList.remove("fourth") // removes class name fourth from the element
a.classList.add("red") // adds red class to the element
a.classList.toggle("red") // if red class available then it will remove else it will add red class
a.classList.contains("red") // returns true if class red is available else false