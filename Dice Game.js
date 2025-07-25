// single line comment
        /* multiline comment */

        // this function will allow us to play our game
        function playDiceGame(){

            //you can display helpful messages to the console to track what's going on in the program
            console.log("playDiceGame function called");

            //In my game, there will be 3 dice with 8 sides each.
            let die1 = rollDie();
            let die2 = rollDie();
            let die3 = rollDie();

            console.log("die1=" + die1);
            console.log("die2=" + die2);
            console.log("die3=" + die3);

            //add the dice together
            let sum = die1 + die2 + die3;

            console.log("sum=" + sum);

            // create a variable that holds a shortcut / nickname for the first die roll
            let divDie1 = document.getElementById("divDie1");
              // create a variable that holds a shortcut / nickname for the second die roll
            let divDie2 = document.getElementById("divDie2");
              // create a variable that holds a shortcut / nickname for the third die roll
            let divDie3 = document.getElementById("divDie3");
              // create a variable that holds a shortcut / nickname for the sum
            let divSum = document.getElementById("divSum");
              // create a variable that holds a shortcut / nickname for the result
            let divResult = document.getElementById("divResult");

            // change the text in the HTML elements
            divDie1.textContent = "Die 1: " + die1;
            // or you can use divDie1.innerHTML = die1;

            
            // change the text in the HTML elements
            divDie2.textContent = "Die 2: " + die2;

            
            // change the text in the HTML elements
            divDie3.textContent = "Die 3: " + die3;

            divSum.textContent = "Sum is: " + sum;


            // if the sum is 5 or 15, you lose
            if (sum == 5 ||sum == 15){
                // display message that you lost
                console.log("game over");

                divResult.textContent = "you lose";

            }

            // if the sum is 13 or 21, you win
            else if (sum == 13 || sum== 21){
                // display message that user won
                console.log("you won :)");

                divResult.textContent = "you won";

            }

            // if the sum is not 5, 13, 15, or 21; you tied
            else{
                console.log("try again");

                divResult.textContent = "try again";
                
            }
        }

        // function to simulate the rolling of an 8-sided die
        function rollDie(){

            // multiply random number between 0 and 1 by 8 so I get my random dice roll
            let randomNumber = Math.random() * 8;

            // round the number up to the next whole number
            randomNumber = Math.ceil(randomNumber);

            // return the random number that was generated
            return randomNumber;
        }