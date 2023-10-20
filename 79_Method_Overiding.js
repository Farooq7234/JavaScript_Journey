class employee{
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
    requestleaves(leaves){
        super.requestleaves(4)
        console.log(`${leaves}`)
    }

    login(){
        console.log("My name is farooq")
    }

}


let e = new programmer

e.login ()
e.requestleaves(3)

// Output

// My name is farooq
// Employee is requested 4 leaves - auto approved
// 3n  