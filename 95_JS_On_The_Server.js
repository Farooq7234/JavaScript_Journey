// This below code belongs to the topic closure in javascript 
function init() {
    var name1 = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name1); // use variable declared in the parent function
    }
  }
  //console.log(name1) // can't access name outside the function
init();

{
 var hello = "umar"
}
 console.log(hello)

function func() {
    var hello = "farooq"
}

console.log(hello)

// umar will print two times