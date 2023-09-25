// 1. Write a program using prompt function to take input of age as a value from the user and use alert to tell hime if he can drive

let runagain = true;

const canDrive = ((age)=>{
    return age>=18?true:false
})


while (runagain) {
    let age = prompt("Enter your age!")
    age = Number.parseInt(age)

        
    if (canDrive(age)){
        alert("You can drive")
    }

    else if(age<0){
        console.error("Age cannot be in Negative")
        break;
    }

    else{
        alert("You cannot drive")
    }
    runagain = confirm("Do you want to play again?")
    
}




/*5*/


let color = prompt("Enter the color of the page")
document.body.style.background = color