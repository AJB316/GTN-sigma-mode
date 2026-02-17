const winsText = document.getElementById("wins");
const lossesText = document.getElementById("losses");
const streakText = document.getElementById("streak");
const highestDiffText = document.getElementById("highestDiff");
var wins = 0;
var losses = 0;
var streak = 0;
var highestDiff = 0;

function game(){
var diff = Math.abs(prompt("Difficulty (Integer):"));
var min = Math.floor(Math.random()*diff);
var max = Math.floor(diff+(Math.floor(Math.random()*diff+1)));
var guesses = 10 + Math.ceil(diff/25);
var guessMe = Math.floor(min + (Math.random()*max-min));
var lastGuess;
var win;
for(let i = guesses; i > 0; i--){
if(lastGuess){
var gtlt = (lastGuess < guessMe && "greater") || (lastGuess > guessMe && "less");
guess = prompt(`\(${guesses-i+1}\/${guesses}\) Try again! The number is ${gtlt} than ${lastGuess}\, and is between ${min} and ${max}\.`);
} else {
guess = prompt(`\(1\/${guesses}\) Guess the number! The number is between ${min} and ${max}\. You have ${guesses} tries.`);
}

if(guess===null){
alert(`You forfeited. The number was ${guessMe}\.`);
lastGuess = null;
break;
} else if(guess==guessMe){
alert(`Congratulations, you won! The number was ${guessMe}\. It took you ${guesses-i+1} tries.`);
win = true;
break;
}
lastGuess = guess;
}


if(!win && lastGuess != null){
alert(`You lost\.\.\. The number was ${guessMe}\.`);
} else if(win){
wins++;
streak++;
if(diff > highestDiff){
highestDiff = diff;
}
} else {
losses++;
streak=0;
}

lastGuess = null;

//ok this last part is for the html if you want the TRUE experience of playing this game with nothing but the alerts then go ahead and delete this part

winsText.innerHTML = `Wins: ${wins}`;
lossesText.innerHTML = `Losses: ${losses}`;
streakText.innerHTML = `Win streak: ${streak}`;
highestDiffText.innerHTML = `Highest difficulty won: ${highestDiff}`
}
