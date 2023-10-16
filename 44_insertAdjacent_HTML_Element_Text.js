// Note to understant I have created a separate html file so you check that also 

let a = document.getElementById("first")
a.insertAdjacentHTML('beforebegin','<div class="test">beforebegin</div>') 
a.insertAdjacentHTML('beforeend','<div class="test">beforeend</div>')
a.insertAdjacentHTML('afterbegin','<div class="test">afterbegin</div>')
a.insertAdjacentHTML('afterend','<div class="test">afterend </div>')
// a.remove() // will remove first from the browser👇

/* <div id="first">I am first element</div> */ // this is removed❌


// syntax elem.insertAdjacentHTML('property_name','HTML code')

// for clear understanding view the browser element 

// Note: everything we add on html using javascript will only show in the browser but it is not rewrite in the html file 


// Like this you can with adding text instead HTML tag and that means to insertAdjacentHTML_Text_Element