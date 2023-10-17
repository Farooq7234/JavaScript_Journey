// Loved it inheritance ♥

class Animal{

    constructor(AnimalName,AnimalColor){
        this.name = AnimalName
        this.color = AnimalColor
    }

    run(){
        console.log(`${this.name} is running which is ${this.color} color`)
    }

    shout(){
        console.log(`${this.name} is shouting which is ${this.color} color`)
    }
}

class Monkey extends Animal{
    eat(){
        console.log(`${this.name} is eating banana which is ${this.color} color`)
    }
}


let anivar = new Animal("bruno","white"); // parent class variable
let m = new Monkey("chimpu","black") // Inherit class variable


// parend class method
anivar.run()
anivar.shout()


// Inherit class method
m.eat()

// Inserting eat method in parent class will not work 
// anivar.eat() // this will throw an error
