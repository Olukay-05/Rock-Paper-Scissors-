const rockButton = document.getElementById("rock")
                  .addEventListener("click", function(){
                    playRound("rock")
                  });

const paperButton = document.getElementById("paper")
                  .addEventListener("click", function(){
                    playRound("paper")
                  });

const scissorsButton = document.getElementById("scissors")
                  .addEventListener("click", function(){
                    playRound("scissors")
                  });


     
                  
let playerWins = 0;
let computerWins = 0;

function computerChoice() {   
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    }
    if (playerSelection === "rock") {
      if (computerSelection === "scissors") {
        return "You win! Rock beats scissors.";
      } else {
        return "You lose! Paper beats rock.";
      }
    }
    if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        return "You win! Paper beats rock.";
      } else {
        return "You lose! Scissors beats paper.";
      }
    }
    if (playerSelection === "scissors") {
      if (computerSelection === "paper") {
        return "You win! Scissors beats paper.";
      } else {
        return "You lose! Rock beats scissors.";
      }
    }
}
  

  
// function playGame() {
//     console.log("Let's play Rock, Paper, Scissors!");
  
//     let playerWins = 0;
//     let computerWins = 0;
  
//     for (let i = 0; i < 5; i++) {
//       let playerSelection = prompt("Enter your choice (rock, paper, or scissors):");
//       let computerSelection = computerChoice();
//       console.log(playRound(playerSelection, computerSelection));
//       if (playRound(playerSelection, computerSelection).startsWith("You win")) {
//         playerWins++;
//       } else if (playRound(playerSelection, computerSelection).startsWith("You lose")) {
//         computerWins++;
//       }
//     }
  
//     console.log(`Player: ${playerWins} Computer: ${computerWins}`);
//     if (playerWins > computerWins) {
//       console.log("Congratulations, you are the winner!");
//     } else if (playerWins < computerWins) {
//       console.log("Sorry, the computer is the winner.");
//     } else {
//       console.log("It's a tie!");
//     }
// }
  
  