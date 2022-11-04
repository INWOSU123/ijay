//initaialize the alphabets
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let count = 0;
let maxTries = 8;
//get the random alphabets
let randomLetter = Math.floor(Math.random() * 25);
//console.log(randomLetter);
let guessLetterposition = letters[randomLetter].toLowerCase();
console.log(guessLetterposition);
//prompt user to guess an aphabets
const prompt =require('prompt-sync')()
let userGuess = prompt("guess an alphabet :" );
while (userGuess!=guessLetterposition){
    userGuess = prompt("guess an alphabet :" );
    count++;
    if (count==maxTries){
        process.exit();
    }
    //conditions to guess is correct
if(userGuess == guessLetterposition){
    console.log ("you have guessed right") ;
}
}
