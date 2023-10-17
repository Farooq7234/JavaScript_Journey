// Constructor in Javascript

// why constructor and what it is

// in previous lecture we used fill method but when don't use fill the inputs and we call it then it will take undefined value and if we use constructor we don't really have explicitly write an fill method. that's it 

class RailwayForm{
    constructor(givenname,trainno,address){
        this.name = givenname;
        this.trainno = trainno;
        this.address = address;
    }

    submit(){
        console.log(this.name +": Your form is submitted for train no " + this.trainno +" and address "+ this.address)
    }

    cancel(){
        console.log(this.name +": Your form is cancelled for train no " + this.trainno +" and address "+ this.address)
        
    }

}

let farooqForm = new RailwayForm("farooq",38743,"1629, new street, new city")
farooqForm.submit()
farooqForm.cancel()