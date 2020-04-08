//create secretNumber 
var secretNumber = 6;

//ask user for guess 
var stringGuess = prompt("Guess a number"); 
var guess = Number(stringGuess);

//check if guess is right 
if(guess === secretNumber){
    alert("YOU GOT IT RIGHT!!!");
}

//check if guess is higher 
else if(guess > secretNumber){
    alert("Too High. Guess Again!");
}

else {
    alert("Too Low. Guess Again!!");
}
//otherwise, check if lower
