/*An Browser events is a signal that something has happened. All the DOM nodes generate such signal*/

let a = document.getElementById("event-ops")

a.onclick = ()=>{
    let b = document.getElementById("event-ops")
    b.innerHTML = "Hello world"
}

// Event can be handled in html attributes like this below

 /*1. <input type="text" value="hey" onclick = "alert('hey')"> */

//Note: if you click in the input alert msg will show 

/* 2. <input type="text" value="hey" onmouseenter = "alert('hey')"> */

//Note: if you enter your mouse in to the input alert msg will show 


/* Important: If you write event in the html attribute and also in javascript then the javascript event will be excuted which means the javascript overwrites the html attribute events*/