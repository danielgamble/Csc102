// function to add an audio element to the page and show the buttons for play and pause
function addSound(){

//shortcut to play button
let btnPlay = document.getElementById("btnPlay");
// shortcut to pause button
let btnPause = document.getElementById("btnPause");
// shortcut to add sound button
let btnAddSound = document.getElementById("btnAddSound");
// create an audio element
let audann = document.createElement("audio");

// give the audio element an id
audann.setAttribute("id", "audann");

// add the controls attribute so we can see the audio element on the page
// this attribrute is optional - feel free to remove or comment out
//audann.setAttribute("controls", "controls");

// set up the source for the audio file
audann.setAttribute("src", "Annihilate Short.m4a");

document.body.appendChild(audann);

// unhide btnPlay
btnPlay.hidden = false;

// unhide btnPause
btnPause.hidden = false;




// hide btnAddSound
btnAddSound.hidden = true;
}

// function to start playing the audio element
function playSound(){

    // shortcut to audio element that we created
    let audio = document.getElementById("audann");

    // play the audio
    audio.play();

}

// function to pause the audio element
function pauseSound(){

    // shortcut to audio element that we created
    let audio = document.getElementById("audann");

    // play the audio
    audio.pause();

}