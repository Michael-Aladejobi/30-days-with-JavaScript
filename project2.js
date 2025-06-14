const prompt = require("prompt-sync")();


function getNumber(numberString) {
  while (true) {
    const number = parseFloat(prompt("Enter number " + numberString + ": "));

    if (isNaN(number)) {
      console.log("Invalid Input");
    } else {
      return number
    }
  }
}

const number1 = getNumber("One")
const number2 = getNumber("Two")

// while (true) {
//   number1 = parseFloat(prompt("Enter Number 1: "));

//   if (isNaN(number1)) {
//     console.log("Invalid Input!");
//   } else {
//     break;
//   }
// }

// while(true){
//     number2 = parseFloat(prompt("Enter Number 2: "));
//     if(isNaN(number2)){
//         console.log("Invald Input!")
//     }else{
//         break
//     }

// }
// const operator = prompt("Enter Sign: ");

// let result;
// switch (operator) {
//   case "+":
//     result = number1 + number2;
//     break;
//   case "-":
//     result = number1 - number2;
//     break;
//   case "/":
//     result = number1 / number2;
//     break;
//   case "*":
//     result = number1 * number2;
//     break;
//   default:
//     console.log("Invalid Input");
//     break;
// }

// console.log(number1, operator, number2, "=", result);

// // let i = 0;
// // while (i < 10) {
// //   i++;
// //   if (i === 5) continue;
// //   console.log(i);
// // }
