// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

function rps(p1, p2) {
  if (p1 === p2) {
    return "Draw!";
  }
  if (p1 === "scissors" && p2 === "paper") {
    return "Player 1 won!";
  }
  if (p1 === "scissors" && p2 === "rock") {
    return "Player 2 won!";
  }
  if (p2 === "scissors" && p1 === "paper") {
    return "Player 2 won!";
  }
  if (p2 === "scissors" && p1 === "rock") {
    return "Player 1 won!";
  }
  if (p1 === "paper" && p2 === "rock") {
    return "Player 1 won!";
  }
  if (p2 === "paper" && p1 === "rock") {
    return "Player 2 won!";
  }
}
