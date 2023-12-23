/* The code is making a GET request to the "https://goweather.herokuapp.com/weather/Ny" endpoint using
the `fetch` function. */
let p1 = fetch("https://goweather.herokuapp.com/weather/Ny")
p1.then((response) => {
        console.log(response.status)
        console.log(response.ok)
        console.log(response.headers)
        return response.json()
}).then((value2) => {
        console.log(value2)
})
/* The code is making another GET request to the "https://goweather.herokuapp.com/weather/Ny" endpoint
using the `fetch` function. It then uses the `then` method to handle the response. Inside the first
`then` block, it calls the `json` method on the response object to parse the response body as JSON.
The parsed JSON data is then logged to the console in the second `then` block. */


let p2 = fetch("https://goweather.herokuapp.com/weather/Ny")
p2.then((response) => { 
        return response.json()
}).then((response) => {
        console.log(response)
})