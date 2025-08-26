const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

function runGame() {
  const word = "HANGMAN";
  const maxAttempts = 7;
  let attemptsLeft = maxAttempts;
  let progress = "_".repeat(word.length).split("");

  console.log("Welcome to Hangman!");
  console.log(progress.join(" "));

  function askGuess() {
    if (attemptsLeft <= 0) {
      console.log(`Game over! The correct word was: ${word}`);
      readline.close();
      return;
    }

    readline.question(`Guess a letter or the whole word (${attemptsLeft} attempts left): `, (input) => {
      const guess = input.toUpperCase();

      if (guess === word) {
        console.log(`Congratulations! You guessed the word: ${word}`);
        readline.close();
        return;
      }

      if (guess.length === 1 && word.includes(guess)) {
        for (let i = 0; i < word.length; i++) {
          if (word[i] === guess) progress[i] = guess;
        }
        console.log(progress.join(" "));
        if (!progress.includes("_")) {
          console.log(`Well done! The word was: ${word}`);
          readline.close();
          return;
        }
      } else if (guess.length !== 1) {
        console.log("Invalid guess. Enter only one letter or the full word.");
      } else {
        attemptsLeft--;
        console.log(`Wrong guess! Progress: ${"HANGMAN".slice(0, maxAttempts - attemptsLeft)}`);
        if (attemptsLeft === 1) {
          console.log("Hint: It's a classic word guessing game!");
        }
      }

      askGuess();
    });
  }

  askGuess();
}

runGame();