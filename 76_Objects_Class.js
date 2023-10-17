// Class and Objects

// We are creating a template form for railway using class and inside that we make methods

class RailwayForm{
    submit(){
        console.log(this.name +": Your Form is submitted on train Number "+ this.trainno );
    }

    cancel(){
        console.log(this.name +" :Your form is cancelled of train number "+ this.trainno);
    }
    fill(givenname,trainno){
        this.name = givenname;
        this.trainno = trainno;
    }

}

// The Variable which want to use above class should have value new RailwayForm() like below

let harryForm = new RailwayForm();
harryForm.fill("Harry",122234);
let farooqForm = new RailwayForm();
farooqForm.fill("Farooq",123765);

harryForm.submit();
farooqForm.submit();
farooqForm.cancel();





