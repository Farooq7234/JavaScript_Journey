// try catch in javascript

// why try catch ? 
/* Because when running code if any line makes error then below code to that will not run
and if we want to run the below codes then in that case we use try catch. OK!*/

setTimeout(() => {
    console.log("Hacking wifi.... please wait...")
}, 3000);

try {
    console.log(farooq)
} catch (error) {
    console.log(error)
}

// Try catch works synchronously...

// try {
//     setTimeout(() => {
//         console.log(farooq); //this error will not handle by try catch
//     }, 2000);
// } catch (error) {
//     console.log(error)
// }

setTimeout(() => {
    console.log("Fetching username and password... please wait....")

}, 4000);



setTimeout(() => {
    console.log("Hacking Rahul's facebook id... please wait")
}, 5000);

setTimeout(() => {
    console.log("Fetching username and password... please wait...")
}, 6000);

