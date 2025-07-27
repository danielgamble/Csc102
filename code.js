// create a function to validate the form inputs
function validateForm(){

    // create a shortcut/nickname for the first name that the user entered
    let firstName = document.getElementById("txtFirstName").value;

    // create a shortcut/nickname for the last name that the user entered
    let lastName = document.getElementById("txtLastName").value;

    // create a shortcut/nickname for the last name that the user entered
    let zipCode = document.getElementById("txtZip").value;

    console.log("firstName=" + firstName);
    console.log("lastName=" + lastName);
    console.log("zipCode=" + zipCode);

    // create a new variable to hold both first and last name
    let fullName = firstName + " " + lastName;

    console.log("fullName=" + fullName);

    // create a shortcut to the message area (div) in the HTML
    let divMessage = document.getElementById("divMessage");

    // create an error message if the full name has either 1 charachter or more than 20
    if (fullName.length == 1 || fullName.length > 20){
        // the user gets notified of the error but does not get the secret message

        divMessage.innerHTML = "Bitch!!! Your name isn't that fucking long!!! Try the fuck again!!!";

    }

    // if the zip code is not exactly 5 digits long, give the user an error message
    else if (zipCode.length != 5){

        divMessage.innerHTML = "Get the fuck outta here with that fake ass zip code!!! Try the fuck again!!!";

    }

    // if we get to theis else statement, it means all of the inputs validated successfully!
    // give the user a secret message
    else{
        // the inputs validated successfully, so show the user a message
        divMessage.innerHTML = "Congratulations," + fullName + "! You know your fucking name and zip code!!!";
    }

    // this will prevent the form from trying to submit to server side code that we don't have in this class
    return false;
}