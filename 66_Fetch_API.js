let p1 = fetch("https://goweather.herokuapp.com/weather/Ny")
p1.then((response) => {
        console.log(response.status)
        console.log(response.ok)
        console.log(response.headers)
        return response.json()
}).then((value2) => {
        console.log(value2)
})


let p2 = fetch("https://goweather.herokuapp.com/weather/Ny")
p2.then((response) => { 
        return response.json()
}).then((response) => {
        console.log(response)
})