
// function to handle the user input of the word
function checkPalindrome(event){
// prevent the form from submitting
event.preventDefault();

// create a shortcut to the txtWord user input
let userInput = document.getElementById("txtWord").value;

// create a shortcut to the txtWord user input
let divPalinResults = document.getElementById("divPalinResults");

// set up a variable to hold if the word is a palindrome or not
let isPalin = isPalindrome(userInput);

// this is equivalent to isPalin == true
if (isPalin == true){
    divPalinResults.textContent = userInput + " is a palindrome! ";
}

// this is not a palindrome
else{
    divPalinResults.textContent = userInput + " is not a palindrome! ";
}

//console.log("userInput=" + userInput);

}

// function to see if the string is a palindrome
function isPalindrome(stringToTest){
// stringToTest is what the user entered

// convert the string to test to lowercase for a better user experience
    stringToTest = stringToTest.toLowerCase();

    // set up a variable to reverse the contents of and set it to the original string
    let stringToReverse = stringToTest.toLowerCase();
    // convert the string, so take "Rae" convert to an array where each letter is in it's own slot
    // reverse the contents of our new array, so now we have "e" "a" "r"
    // then join the array so it becomes a string again - "eaR"
    stringToReverse = stringToReverse.split("").reverse().join("");


    // compare the original string to the backwards string
    // you can use either == or === and achieve the same result in this case
    if (stringToTest == stringToReverse){
        // return true to the calling code
        return true;
    }

    // as a default, return false
    return false; 
}

//console.log("radar=" + isPalindrome("radar"));
//console.log("test=" + isPalindrome("test"));
//console.log("Mom=" + isPalindrome("Mom"));

// this is testing Mom == moM - JavaScript is case sensitive, so these values do not match