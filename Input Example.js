 // function to validate our form inputs
        function validateForm(){
            // get the user's name so we can validate it
            let fullName = document.getElementById("txtFullName").value;

            // get the user's favorite color so we can validate it
            let favColor = document.getElementById("txtFavColor").value;

            // shortcut to the message div
            let divMessage =document.getElementById("divMessage");

            // Pulls up the input into the console
            console.log("fullName=" + fullName);
            console.log("favColor=" + favColor);

            // assignment is single equal sign - = - changing value on the left to match the value on the right
            // equality uses double equal sign - = - checks to see if value on the left hand side equals value on right hand
            // === is strict equality - the values and the data type have to match
            // in our if / else if statements we always are checking equality
            if(fullName.trim() = ""){
                divMessage.textContent = "Name cannot be blank";
            }

            // prevent the form from submitting 
            return false;
        }