// Closure in javascript

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    // name = "Umar"; // Prints umar instead Mozilla
    displayName();
  }
  
init();
  

if (Math.random() > 0.5) {
    var x = 1;
  } else {
    var x = 2;
  }
  console.log(x);
  

// If if 'true' then 1 will print and if else is true then 2 will print

