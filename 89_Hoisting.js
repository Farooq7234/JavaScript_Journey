// Hoisting

console.log(a); // Prints Undefined

greet();
function greet() {
    console.log("Good Morning");
}


var a; 
var a = 9; // the 9 also not print by the above console
// let a; // This will not work
// const a; // This will also not work

// function expression will not be intialized

// let example

hello();
let hello = function() {
    console.log("Hello");
}

// function expression will not be intialized
// because let and const never be  Cannot access before initialization

// const example

welcome();
const welcome = function(){
    console.log("Welcome"); // produces error as cannot access welcome before initialization
}
// because let and const never be  Cannot access before initialization


// Same goes to class expression


//Conclusion var and function without variable(let and const) expression can be hoisted in javascript


// Char aur code hoisting explaination

console.log(addOne(5)); // This will work and prints 6 without error

function addOne(num) {
    return num + 1;
}

//addTwo(5); // Error will produce as cannot access addTwo before initialization

const addTwo = function(){
    return num + 2;
}
