// Need Correct this!


// Create a javascript class to create a complex number create a constructor to set the real and the complex part

// class Complex{
//     constructor(real,complex){
//         this.real = real;
//         this.imaginary = complex;
//     }

//     Operation(){
//         return (this.real) + (this.imaginary)
//     }
// }


// let i = new Complex(2,"2z")
// i.Operation()


// 3. Create a class student from a class human. override a method and see the change


class Human{
    constructor(feature){
        this.ability = feature
    }

    walk(){
        console.log(`${this.ability} can walk`)
    }

    talk(){
        console.log(`${this.ability} can talk`)
    }

    sleep(){
        console.log(`${this.ability} can sleep`)
    }

    eat(){
        console.log(`${this.ability} can eat`)
    }
}


class Student extends Human{
    talk(){
        super.talk()
        console.log(`${this.ability} Don't talk much`)
    }
    
}

let a = new Human("Human")
let b = new Student("Student")

a.talk()
b.talk()


console.log(b instanceof Human
    
    )