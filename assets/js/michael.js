userPlays = true;
let computerWins = 0,
    humanWins = 0,
    computerHumanTies =0;
while(userPlays) {
    let inputCriteria = false;
    let computerRoll = 0
    while(!inputCriteria) {
      userInput = prompt('Please pick: rock, paper, or scissors');
      userInput = userInput.replace(/[^a-zA-Z ]/g, '');
      userInput = userInput.toLowerCase();
      if (userInput == 'rock'){
        userInput = 0;
        inputCriteria = true;
      } else if (userInput == 'paper') {
        userInput = 1;
        inputCriteria = true;
      } else if (userInput == 'scissors'){
        userInput = 2;
        inputCriteria = true;
      } else {
        alert('Inavilid input please try again! :)');
      }
    }
    computerRoll = Math.floor(Math.random() * 3);
    switch (computerRoll) {
        case 0:
            if (userInput == 0){
                computerHumanTies++;
            } else if (userInput == 1) {
                humanWins++
            } else {
                computerWins++;
            }
            break;
        case 1:
            if (userInput == 1){
                computerHumanTies++;
            } else if (userInput == 2) {
                humanWins++
            } else {
                computerWins++;
            }
            break;
        case 2:
            if (userInput == 2){
                computerHumanTies++;
            } else if (userInput == 0) {
                humanWins++
            } else {
                computerWins++;
            }
            break;
        default:
            break;
    }
    userPlays = confirm ('Do you want to play again?')
}