/* 1.tostring(): Converts an array to a string of comma separated values */

let convert_to_string = [1,2,3,4]
console.log(convert_to_string.toString())


/* 2.join(): Joins all the array elements using a separator */

let join_method = [1,2,3,4]
let n = join_method.join("_")
console.log(n) //1_2_3_4


/* 3.pop(): Removes last element from the array */

let last_remove = [1,24,56,7]
console.log(last_remove.pop()) // 7
console.log(last_remove) // [1, 24, 56]

//Note: Updates the original array returns the popped value

/* 4.push(): Adds a new element at the end of the array */

let add_last = [7,1,8,9]
add_last.push(10)
console.log(add_last) // [7, 1, 8, 9, 10]

//Note: Modifies the original array and return the new array "length"


/* 5.shift(): Removes first element and returns it */

let remove_at_first = [3,1,4,5,6]
remove_at_first.shift()
console.log(remove_at_first)  // [1, 4, 5, 6]


/* 6.unshift(): Adds element to the beginning returns new array length */

let add_at_first = [1,2,3,4]
add_at_first.unshift(0)
console.log(add_at_first)// [0, 1, 2, 3, 4]


/* 7.delete(): Array elements can be deleted using delete operator */


let del_array = [1,45,66,90,28]
delete del_array[2]
console.log(del_array) //[1, 45, empty, 90, 28]

// Note: Delte is an operator

/* 8.concat(): Used to join arrays to the given array and more than two arrays can be joined */

let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8]
let arr3 = [9,10,11,12]

let arr_concate = arr1.concat(arr2,arr3)

console.log(arr_concate) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(arr1) // [1, 2, 3, 4]

// Note : It will not modify the original array in this case arr1 will be the same if printed



/* 9.sort(): Sort() method is used to sort an array "alphabatically❗" and not in terms of high value */


let a_sort = [1,2,7,8,9,113,229]
a_sort.sort()
console.log(a_sort) //[1, 113, 2, 229, 7, 8, 9]


/* 10.splice(): Splice can be used to add new 'items❗' to an array */

let add_items = [1,2,3,4,5]
add_items.splice(2,1,67,86)
//Refer Notes NOW! for Best Understanding😸
console.log(add_items) // [1, 2, 67, 86, 4, 5]


/* 11.slice(): slices out a piece from an array it creates a new array */

let arr_slice = [1,2,3,4,5,6,7,8]
let test1 = arr_slice.slice(2) 
let test2 = arr_slice.slice(1,3)
console.log(test1) // [3, 4, 5, 6, 7, 8]
console.log(test2) //  [2, 3]

// Note: Here the last slice element it taken as n-1


/* 12.reverse(): Reverse the elements in the source array */

let reverse_arr = [1,2,3,4,5]
reverse_arr.reverse()
console.log(reverse_arr) // [5, 4, 3, 2, 1]







