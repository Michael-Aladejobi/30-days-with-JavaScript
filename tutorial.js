const prompt = require("prompt-sync")();
const name = prompt("What is your name? ");
console.log("Hello", name, "Welcome to our game!");

const shouldWePlay = prompt("Do you want to play? ")

const condition  = shouldWePlay.toLowerCase() === "yes"
console.log(condition)

if(condition){
    console.log("We will play!")
}else{
    console.log(" Okay :(")
}
