/* The code is performing the following tasks: */
let marks = {
  harry: 90,
  shubham: 9,
  lovish: 56,
  Monika: 4
}
// Problem No 1

/* The code is using a for loop to iterate over the properties of the `marks` object. It uses
`Object.keys(marks)` to get an array of all the keys (names) in the `marks` object. The loop then
iterates from 0 to the length of the array of keys. */

for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

// Problem No 2

/* The code is using a for...in loop to iterate over the properties of the `marks` object. For each
property, it is printing a message that includes the name of the person and their corresponding
marks. */

for (let key in marks) {
  console.log("The marks of " + key + " are " + marks[key])
}

// Problem No 3

/* The code is creating a loop that prompts the user to enter a number until they enter the number 43. */

let cn = 43
let i
while (i != cn) {
  console.log("Try again")
  i = prompt("Enter a number")
}
console.log("You have entered a correct number")

// Problem No 4
/**
 * The mean function calculates the average of four numbers.
 * @param a - The parameter "a" represents the first number in the calculation of the mean.
 * @param b - The above parameters are:
 * @param c - The above parameters are a, b, c, and d.
 * @param d - The parameter "d" represents the fourth number in the calculation of the mean.
 * @returns The mean value of the four input numbers.
 */
const mean = (a, b, c, d) => {
  return (a + b + c + d) / 4
}

console.log(mean(4, 5, 6, 7))