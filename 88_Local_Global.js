// Block scope

{
    let a = 8;

}
// console.log(a); ERROR: this will show a is undefined
// let and const are block scope

// var is global scope

{
    var b = 8;

}

console.log(b);// 8 will print because of var

// function scope

let p = 10;
function ax() {
    console.log(p);
}

ax() // 10 will be print