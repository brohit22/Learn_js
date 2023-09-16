let playGame = confirm(`🎮 Shall you play Rock, paper 📃 , scissors ✂ `);

if (playGame) {
  let playerChoice = prompt(`Please enter rock 🪨, paper 📃, or scissors ✂.`);
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3) + 1;
      let computer;

      switch (computerChoice) {
        case 1:
          computer = "rock 🪨";
          break;
        case 2:
          computer = "paper 📃";
          break;
        case 3:
          computer = "scissors ✂";
          break;
        default:
          computer = "unknown";
      }

      let result;

      if (playerOne === computer) {
        result = "It's a tie! 😐";
      } else if (
        (playerOne === "rock" && computer === "paper 📃") ||
        (playerOne === "paper 📃" && computer === "scissors ✂") ||
        (playerOne === "scissors ✂" && computer === "rock 🪨")
      ) {
        result = `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins! 🤖`;
      } else {
        result = `PlayerOne: ${playerOne}\nComputer: ${computer}\nPlayerOne wins! 🥳`;
      }

      alert(result);
      let playAgain = confirm("Play Again?");
      playAgain ? location.reload() : alert("Ok, thanks for playing. 👋");
    } else {
      alert("You didn't enter rock 🪨, paper 📃, or scissors ✂.");
    }
  } else {
    alert("I guess you changed your mind. Maybe next time. 😕");
  }
} else {
  alert("Ok, maybe next time. 😔");
}
