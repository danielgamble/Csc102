// create a function to generate some random numbers and check if they are even or odd
function generateNums(){

    // generate 5 random numbers
    for(let i = 0; i < 5; i++){
        // generate a random number
        let randomNum = Math.ceil(Math.random() * 100)

        console.log("random num=" + randomNum);

        // variable to hold result even or odd
        let result = "";

        // if this statement is true, it means we have divided our random number by 2 and the remainder was 0 so this is an even number
        if (randomNum % 2 == 0){
            result = "even";
        }

        else{
            result = "odd";
        }

        document.getElementById("divOutput").innerHTML = document.getElementById("divOutput").innerHTML + "<br> Random Number: " + randomNum + " is " + result;
            

    }

}