/* The code is creating two objects, `a` and `p`, and setting up a prototype chain between them. */


/* The code is creating an object `a` with three properties: `name2` with a value of "Harry",
`language` with a value of "JavaScript", and `run` which is a function that displays an alert
message saying "self run". The `console.log(a)` statement is logging the object `a` to the console. */
let a = {
    name2: "Harry",
    language: "JavaScript",
    run: () => {
      alert("self run")
    }
  }
  console.log(a)
  
  
 /* The code is creating an object `p` with a single property `run`, which is a function that displays
 an alert message saying "run". */
 
  let p = {
    run: () => {
      alert("run")
    }
  }
  
  p.__proto__ = {
    name: "Jackie"
  }
  
  a.__proto__ = p
  a.run()
  console.log(a.name2)