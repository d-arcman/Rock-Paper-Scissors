
function computerPlay () {
    var answers = [
    'rock',
    'paper',
    'scissors'
    ]

    let myAnswer = answers[Math.floor(Math.random()* answers.length)]
    return(myAnswer);
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return("You win! Rock beats Scissors");
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return("You lose! Paper beats Rock");
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return("You win! Scissors beats Paper");
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return("You lose! Rock beats Scissors");
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return("You Win! Paper beats Rock");
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return("You lose! Scissors beats Paper");
    } else if (playerSelection == 'rock' && computerSelection == 'rock') {
        return("It's a Tie!");
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return("It's a Tie!");
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
            return("It's a Tie!");
    } else return("No result");
}

function playerSelection() {
        var playerAnswer;
    
      while (playerAnswer != "rock" || playerAnswer != 'scissors' || playerAnswer != 'paper') {
        playerAnswer = prompt("Rock, Paper, or Scissors?");
        playerAnswer = playerAnswer.toLowerCase(); 
        if (playerAnswer === 'rock' || playerAnswer === 'scissors' || playerAnswer === 'paper') {
            return (playerAnswer);
        }
    }
}

const playerPick = playerSelection();
const computerSelection = computerPlay ();
console.log(playRound(playerPick, computerSelection)); 



