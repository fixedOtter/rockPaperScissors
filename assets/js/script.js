/* declaring variables */
userPlays = true;
let computerWins = 0,
    humanWins = 0,
    computerHumanTies = 0;

while (userPlays) {
  /* declaring variables */
  let inputCriteria = false;
  let computerRoll = 0;

  while (!inputCriteria) {
    /* prompt user for input */
    userInput = prompt(`Please pick: rock, paper, or scissors:`);
    inputCriteria = true;

    /* make user input only string */
    userInput = userInput.replace(/[^a-zA-Z ]/g, '');
    userInput = userInput.toLowerCase();

    /* checks userInput and sets to int for comparison */
    if (userInput == `rock`) {
      userInput = 0;
    } else if (userInput == `paper`) {
      userInput = 1;
    } else if (userInput == `scissors`) {
      userInput = 2;
    } else {
      alert(`Invalid input please try again! :)`);
      inputCriteria = false;
    }
  }

  /* generating the computer roll */
  computerRoll = Math.floor(Math.random() * 3);
  /* console.log(computerRoll); */

  switch (computerRoll) {
    case 0:
      if (userInput == 0) {
        computerHumanTies++;
      } else if (userInput == 1) {
        humanWins++;
      } else {
        computerWins++;
      }
      break;
    case 1:
      if (userInput == 1) {
        computerHumanTies++;
      } else if (userInput == 2) {
        humanWins++;
      } else {
        computerWins++;
      }
      break;
    case 2:
      if (userInput == 2) {
        computerHumanTies++;
      } else if (userInput == 0) {
        humanWins++;
      } else {
        computerWins++;
      }
      break;
  }

  alert(`Scoreboard:\n  Human wins: ${humanWins}\n  Computer wins: ${computerWins}\n  Ties: ${computerHumanTies}`); 

  userPlays = confirm(`Do you want to play again? ;)`);
}





