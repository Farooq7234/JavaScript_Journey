class Animal{
    constructor(name1){
        this.name = Animal.capitalize(name1)
    }
    
    walk(){
        console.log(`Animal ${this.name} is walking`);
        }
    static capitalize(name1){
        return name1.charAt(0).toUpperCase() + name1.substr(1,name1.length) // Don't Know what it is😕
    }
}

j = new Animal("jack")
j.walk()
// console.log(j.capitalize())  // this will not work


// Static method is not consider as original method but it will access with class name like in this case Animal