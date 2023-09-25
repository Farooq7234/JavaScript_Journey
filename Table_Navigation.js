// the below class name like intro does not exist in the html file.

// Finding HTML elements by Id

/*The easiest way to find an HTML element in the DOM, is by using the element id.*/

const element1 = document.getElementById("intro");

//NOTE: This example finds the element with id="intro": 

// Finding HTML Elements by Tag Name

const element2 = document.getElementsByTagName("p");

//NOTE: This example finds all <p> elements:

/*This example finds the element with id="main",and 
then finds all <p> elements inside "main":👇*/

const x = document.getElementById("main");
const y = x.getElementsByTagName("p");

// Finding HTML Elements by Class Name

/*if you want to find all HTML elements with the same class name, use getElementsByClassName().*/


const x1 = document.getElementsByClassName("intro");

// NOTE:This example returns a list of all elements with class="intro".


// Finding HTML Elements by CSS Selectors

/*If you want to find all HTML elements that match a specified CSS selector (id, class names, types, attributes, values of attributes, etc), use the querySelectorAll() method.*/


const x3 = document.querySelectorAll("p.intro");

//NOTE:This example returns a list of all <p> elements with class="intro".

// Finding HTML 'ELement' By  CSS selector Using querySelector

const x4 = document.querySelector(".intro")  // Here we only want that class only 

