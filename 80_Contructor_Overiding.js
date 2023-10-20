class employee{
    constructor(name){
        console.log("Employee has created")
        this.name = name
    }

    login(){
        console.log("Employee has logged in")
    }

    logout(){
        console.log("Employee has logged out")
    }
    requestleaves(leaves){
        console.log(`Employee is requested ${leaves} leaves - auto approved`)
    }
}

class programmer extends employee{
    constructor(name){
        super(name)
        console.log(`the username is ${this.name}`)
        this.name = name
    }

    requestleaves(leaves){
        super.requestleaves(4)
        console.log(`${leaves}`)
    }

    login(){
        console.log("My name is farooq")
    }

}


let e = new programmer("Umar")

e.login ()
e.requestleaves(3)

// Output

// My name is farooq
// Employee is requested 4 leaves - auto approved
// 3