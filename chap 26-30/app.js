// =============================== QNO: 1 =====================================
const userNum = +prompt("Enter any Number");

document.write("Number: " + userNum + "<br>");
document.write("Round off value: " + Math.round(userNum) + "<br>");
document.write("Floor value: " + Math.floor(userNum) + "<br>");
document.write("Ceil value: " + Math.ceil(userNum) + "<br>");
// ============================ QNO: 1 END ====================================


// =============================== QNO: 2 =====================================
const userNegativeNum = +prompt("Enter any negative Number");

document.write("Number: " + userNegativeNum + "<br>");
document.write("Round off value: " + Math.round(userNegativeNum) + "<br>");
document.write("Floor value: " + Math.floor(userNegativeNum) + "<br>");
document.write("Ceil value: " + Math.ceil(userNegativeNum) + "<br>");
// ============================ QNO: 2 END ====================================


// =============================== QNO: 3 =====================================
let userNumber = +prompt("Enter any Number");

if (userNumber < 0) {
    let numAbsoluteValue = -userNumber;
    document.write("The absolute value of " + userNumber + " is " + numAbsoluteValue);
}
else {
document.write("The absolute value of " + userNumber + " is " + userNumber);
}
// ============================ QNO: 3 END ====================================


// =============================== QNO: 4 =====================================
const dice = Math.floor(Math.random() * 6) + 1;
document.write("Random Dice Value: " + dice);
// ============================ QNO: 4 END ====================================


// =============================== QNO: 5 =====================================
const coin = Math.floor(Math.random() * 2) + 1;

if (coin === 1) {
    document.write(coin + "<br>" +"Random Coin Value: Tails");
}
else {
    document.write(coin + "<br>" +"Random Coin Value: Heads");
}
// ============================ QNO: 5 END ====================================


// =============================== QNO: 6 =====================================
const randomNum = Math.floor(Math.random() * 100) + 1;

document.write("Random number between 1 and 100: " + randomNum);
// ============================ QNO: 6 END ====================================


// =============================== QNO: 7 =====================================
var weightInput = prompt("Enter your weight:");

var weight = parseFloat(weightInput);

if (!isNaN(weight)) {
  document.write("Your weight is: " + weight + " kgs");
} 
else {
  document.write("Invalid weight input");
}
// ============================ QNO: 7 END ====================================


// =============================== QNO: 8 =====================================
const userGuessNum = +prompt("Guess the num between 1 to 10");

const secretNum = Math.floor(Math.random() * 10) + 1;

if (userGuessNum === secretNum) {
    alert("Congratulations! It's the Secret Number");
}
else {
    alert("Oops! that's not the Secret Number \n Try again");
}
// ============================ QNO: 8 END ====================================