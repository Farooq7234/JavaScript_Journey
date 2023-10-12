// Error objects in javascript

// Remember try will not work for asynchoronous javascript codes

try {
    let age = prompt("Enter your age");
    age = Number.parseInt(age)
    if (age > 200) {
        throw new ReferenceError("This is probaly not true");
        // We can throw custom errors using throw keyword
        // We can throw ReferenceError SyntaxError and more
    }
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    // And more like this (mdn reference for error objects in js)
}

console.log("The script is still loading")