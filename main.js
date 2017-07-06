// Rock Paper Scissors Function
function rps (player1, player2) {
  // write code here
  if (player1 === player2) {
    return "Tie!!!";
  } else if (player1 === "rock") {
    if (player2 === "scissors"){
      return"rock Wins!";
    } else {
      return "paper Wins!";
    }
  } else if (player1 === "paper") {
    if (player2 === "rock") {
      return "paper Wins!";
    } else {
      return "scissors Wins!";
    }
  } else if (player1 === "scissors") {
    if (player2 === "rock") {
      return "rock Wins!";
    } else {
      return "scissors Wins!";
    }
  }
}


// Don't edit below these lines
console.log(rps('rock', 'paper'));
console.log(rps('scissors', 'paper'));
console.log(rps('scissors', 'rock'));
console.log(rps('rock', 'rock'));
