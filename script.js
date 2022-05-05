let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
let randomInteger = Math.floor(Math.random() * 10);
return randomInteger;
};

const getAbsoluteDistance = (guess, secretTargetNumber) => Math.abs(guess - secretTargetNumber);

const compareGuesses = (userGuess, computerGuess, secretTargetNumber) => {
  if (userGuess < 0 || userGuess > 9){
    alert('Error: Your number must be within the range of 0 to 9');
  }
else if (getAbsoluteDistance(userGuess , secretTargetNumber) <= getAbsoluteDistance(computerGuess , secretTargetNumber)){
   return true;
 }
 else {
   return false;
 }
};

const updateScore = winner => {
  winner = winner.toLowerCase();
  if (winner === 'human'){
    humanScore += 1;
  }
  else if (winner=== 'computer'){
    computerScore += 1;
  }
};

const advanceRound = () => currentRoundNumber += 1;



