// Class and Objects

// Defining a class to create a template for a railway form
class RailwayForm {
    // Method to submit the form and log the information
    submit() {
        console.log(this.name + ": Your Form is submitted on train Number " + this.trainno);
    }

    // Method to cancel the form and log the information
    cancel() {
        console.log(this.name + " :Your form is cancelled of train number " + this.trainno);
    }

    // Method to fill the form with given name and train number
    fill(givenname, trainno) {
        this.name = givenname;
        this.trainno = trainno;
    }
}

// Creating instances of the RailwayForm class for different users
let harryForm = new RailwayForm();
harryForm.fill("Harry", 122234);

let farooqForm = new RailwayForm();
farooqForm.fill("Farooq", 123765);

// Performing actions on the created forms
harryForm.submit(); // Submitting Harry's form
farooqForm.submit(); // Submitting Farooq's form
farooqForm.cancel(); // Cancelling Farooq's form

// Future developers can use this code as a template for creating and managing railway forms in JavaScript.


