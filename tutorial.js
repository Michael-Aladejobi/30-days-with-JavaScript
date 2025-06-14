const prompt = require("prompt-sync")();
const name = prompt("What is your name? ");
console.log("Hello", name, "Welcome to our game!");

const shouldWePlay = prompt("Do you want to play? ");

if (shouldWePlay.toLowerCase() === "yes") {
  //Game Logic
  const leftOrRight = prompt(
    "You enter a maze, do you want to go left or right? "
  );
  if (leftOrRight.toLowerCase === "left") {
    console.log("You go left and see a bridge ...");

    const cross = prompt("Do you want to cross the bridge? ");
    if (cross === "yes") {
      console.log(
        "You crossed but the bridge was weak, got broken and you fell. Ypo lost..."
      );
    } else {
      console.log("Good choice... You win!");
    }
  } else {
    console.log("You go right and fall off the cliff...");
  }
} else if (shouldWePlay.toLowerCase() === "no") {
  console.log(" Okay :(");
} else {
  console.log("Invalid input...");
}
