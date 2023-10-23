 class user{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }  

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value
    }
 }

const customer = new user("farooq@gmail.com","abc");
console.log(customer.email)

// output

// FAROOQ@GMAIL.COM