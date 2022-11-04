console.log( "Enter number 1 for easy Level");
console.log( "Enter number 2 for intermediate Level");
console.log( "Enter number 3 for hard Level");
const prompt = require('prompt-sync')();  //initiate the prompt command

let difficultyLevel = prompt("Select a difficulty level: ");

//difficulty level can be 1, 2 or 3
//If user enters 1
if( difficultyLevel != 1 || difficultyLevel != 2 || difficultyLevel != 3){
    console.log("You've entered wrong value.");
    }
if(difficultyLevel == 1){
    //User will guess numbers btw 1 and 5
    //Generate random number to be guessed
    let count = 0;
    let maxGuess = 3;
    const randomNumberToBeGuessed = Math.floor(Math.random()*5) + 1;
    console.log(randomNumberToBeGuessed);
    let guessedRight = false;
    
    while(guessedRight == false){
        //Prompt user for guess
        let userGuess = prompt("Enter a number between 1 and 5: ");
        count ++; 
        if(count > maxGuess){
               console.log("you've exceeded the maximum tries");
               process.exit();
            }
        //Check if user is correct
        if(userGuess == randomNumberToBeGuessed){
            guessedRight = true;
            console.log("You got it right");
            
              

        
        
            }
            
        }
        }
    


if(difficultyLevel == 2){
    //User will guess numbers btw 1 and 10
    //Generate random number to be guessed
    let count = 0;
    let maxGuess = 5;
        const randomNumberToBeGuessed = Math.floor(Math.random()*10) + 1;
    console.log(randomNumberToBeGuessed);
    let guessedRight = false;
    
    while(guessedRight == false){
        //Prompt user for guess
        let userGuess = prompt("Enter a number between 1 and 10: ");
        count ++;
        if(count > maxGuess){
            console.log("you've exceded the maximum tries");
        process.exit();
        }
        //Check if user is correct
        if(userGuess == randomNumberToBeGuessed){
            guessedRight = true;
            console.log("You got it right");
        }
    }
}

if(difficultyLevel == 3){
    //User will guess numbers btw 1 and 15
    //Generate random number to be guessed
    let count = 0;
    let maxGuess = 7;
    const randomNumberToBeGuessed = Math.floor(Math.random()*15) + 1;
    console.log(randomNumberToBeGuessed);
    let guessedRight = false;
    
    while(guessedRight == false){
        //Prompt user for guess
        let userGuess = prompt("Enter a number between 1 and 15: ");
        count ++;
        if(count>maxGuess){
            console.log("you've exceeded the max tries")
            process.exit();
        }
        //Check if user is correct
        if(userGuess == randomNumberToBeGuessed){
            guessedRight = true;
            console.log("You got it right");
            process.exit();
        }
    }
}

