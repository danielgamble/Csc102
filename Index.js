/*<img id="memeImage" src="Spaghetti Meme.jpg" alt="Meme Image">*/

// this variable will keep track of the current interval id - we are storing this id so that we can stop the image from moving
let intervalID = 0;

// create a function to generate a random number
function getRandomNumber(){
    // get a random number between 0 & 1, multiply it by 1000, round down the number, and return it
    return Math.floor(Math.random() * 1000);
}

function getRandomNumber2(){
    return Math.floor(Math.random() * 500);
}

// this function will start the meme image moving around the page
function startMove(){

    // create a shortcut to the meme image
    let imgMeme = document.getElementById("memeImage");

    intervalID = setInterval(function(){
        // create variables to give a new location for the image
        let newTop = getRandomNumber2();
        let newLeft = getRandomNumber();

        // we are changing the CSS properties for the image - changing from left & top 25%
        imgMeme.style.left = newLeft + "px";
        imgMeme.style.top = newTop + "px";

        console.log("left=" + newLeft + "px");
        console.log("top=" + newTop + "px");
    }, 500); // 1000 is in miliseconds - 1000 miliseconds is 1 second

    // set it up so that we cannot click on the start button.
    document.getElementById("btnStart").disabled = true; 

    // set it up so that we can click on the stop button.
    document.getElementById("btnStop").disabled = false; 
}

// function to stop the image from moving
function stopMove(){
// call the built in JavaScript function to stop running the code that we started running in setInterval
    clearInterval(intervalID);

     // set it up so that we can click on the start button.
    document.getElementById("btnStart").disabled = false; 

    // set it up so that we cannot click on the stop button.
    document.getElementById("btnStop").disabled = true; 

    

}
