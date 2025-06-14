const prompt = require("prompt-sync")();
const name = prompt("What is your name? ");
console.log("Hello", name, "Welcome to our game!");

const shouldWePlay = prompt("Do you want to play? ");

if (shouldWePlay.toLowerCase() === "yes") {
  console.log("We will play!");
} else if (shouldWePlay.toLowerCase() === "no") {
  console.log(" Okay :(");
} else {
  console.log("Invalid input...");
}
