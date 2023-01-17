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

function playRound(playerSelection) {

  let computerSelection = computerChoice();
    
  let result = determineWinner(playerSelection, computerSelection);

  if(result === "win") {
    playerWins++;
  }else if (result === "lose") {
    computerWins++;
  }

  // Display the result in the results div
  // document.getElementById("result").addEventListener("click", () => innerHTML = 
  // `Player chose ${playerSelection}, Computer chose ${computerSelection}. Result: ${result}<br>` +
  // `Score: Player ${playerWins}, Computer ${computerWins}`);

   // Display the result in the results div
   document.getElementById("result").innerHTML = 
   `Player chose ${playerSelection}, Computer chose ${computerSelection}. Result: ${result}<br>` +
   `Score: Player ${playerWins}, Computer ${computerWins}`;

  // Check if a player has reached 5 points
  if (playerWins === 5) {
    document.getElementById("result").innerHTML = "Player wins the game!";
  } else if (computerWins === 5) {
    document.getElementById("result").innerHTML = "Computer wins the game!";
  }
}


// Define the determineWinner function
function determineWinner(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    return "draw";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "win";
  } else {
    return "lose";
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
  
  