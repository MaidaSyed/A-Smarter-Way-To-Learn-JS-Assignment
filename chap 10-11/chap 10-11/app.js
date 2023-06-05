// ======================= QNO:1 =======================
var city = prompt("ENTER YOUR CITY NAME");
if (city === "karachi") {
    alert("WELCOME TO THE CITY OF LIGHTS");
}
// ======================= END ========================

// ======================= QNO:2 =======================
var gender = prompt("ENTER YOUR GENDER");
if (gender === "female") {
    alert("GOOD MORNING Ma'am");
}
else {
    alert("GOOD MORNING SIR");
}
// ======================= END ========================


// ======================= QNO:3 =======================
var color = prompt("WE ARE HERE TO HELP IN INDICATING TRAFFIC SIGNALS COLOR; ENTER YOUR COLOR");
if (color === "red") {
    alert("Must Stop");
}
else if (color === "yellow") {
    alert("Ready To Move");
}
else {
    alert("Move On")
}
// ======================= END ========================


// ======================= QNO:4 =======================
var quantity = prompt("HOW MUCH LITRE FUEL REMAIN IN YOUR VEHICLE?");
if (quantity < 0.25) {
    alert("Please refill the fuel");
}
else {
    alert("Enjoy your ride");
}
// ======================= END ========================


// ======================= QNO:5 =======================
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true")
} //this condition is ture because there is pre increment  on a that's why the new value is 5

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true")
} //this condition is false because there is post increment on b that's why the new value is still remain 82

var c = 12;
if (c++ === 13) {
    alert("given condition for variable a is true")
} //this condition is false because there is post increment on c that's why the new value is still remain 12
if (c === 13) {
    alert("given condition for variable a is true")
} //this condition is ture because the variable c is called again so the increment will apply now
if (++c < 14) {
    alert("given condition for variable a is true")
} //this condition is false because there is pre increment so the value is now become 14 which is equal to 14 but not less than 14
if (c === 14) {
    alert("given condition for variable a is true")
} //this condition is ture because there was pre increment  on c that's why the new value is 14

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
} //this conditon is ture because the total cost is equal to the sum of materialCoast and laborCost

if (true) {
    alert("True");
}
if (false) {
    alert("False");
} //as 1 conditon is true so the 2 second conditon will not display

if ("car" < "cat") {
    alert("car is smaller than cat");
} //this conditon is ture because in the unicode oder r comes before t so the car is smaller than cat
// ======================= END ========================


// ======================= QNO:6 =======================
var obtainedMarks = prompt("Enter yyou obtained marks in 3 subject");
var totalMarks = 300;
var percentage = obtainedMarks / totalMarks * 100

if (percentage >= 80) {
    document.write("Total Marks : " + totalMarks + "<br>");
    document.write("Obtained Marks : " + obtainedMarks + "<br>");
    document.write("Percentsaage : " + percentage + "<br>");
    document.write("Grade : Aone" + "<br>");
    document.write("Excellent Work");
}
else if (percentage >= 70) {
    document.write("Total Marks : " + totalMarks + "<br>");
    document.write("Obtained Marks : " + obtainedMarks + "<br>");
    document.write("Percentsaage : " + percentage + "<br>");
    document.write("Grade : A" + "<br>");
    document.write("Good Work");
}
else if (percentage >= 60) {
    document.write("Total Marks : " + totalMarks + "<br>");
    document.write("Obtained Marks : " + obtainedMarks + "<br>");
    document.write("Percentsaage : " + percentage + "<br>");
    document.write("Grade : B" + "<br>");
    document.write("You need to improve");
}
else {
    document.write("Total Marks : " + totalMarks + "<br>");
    document.write("Obtained Marks : " + obtainedMarks + "<br>");
    document.write("Percentsaage : " + percentage + "<br>");
    document.write("Grade : Fail" + "<br>");
    document.write("Sorry")
}
// ======================= END ========================


// ======================= QNO:7 =======================
var secretNum = 4;
var userGuess = +prompt("Guess a secret Number");
if (secretNum === userGuess) {
    alert("Bingo! Correct answer");
}
else if (userGuess + 1 === secretNum) {
    alert("CLose enough to the correct answer");
}
else {
    alert("Sorry its not the secret number");
}
// ======================= END ========================


// ======================= QNO:8 =======================
var num = +prompt("ENTER YOUR NUMBER");
var divide = num % 3
if (divide === 0) {
    alert("Your number is divisible by 3")
}
else {
    alert("Your reminder is" + divide)
}
// ======================= END ========================


// ======================= QNO:9 =======================
var num = +prompt("ENTER YOUR NUMBER");
if (num % 2 === 0) {
    alert("Even Integer");
}
else {
    alert("Odd integer")
}
// ======================= END ========================


// ======================= QNO:10 =======================
var temperature = prompt("How much temperature in your area?");
if (temperature > 40) {
    alert("It is too hot outside");
}
else if (temperature > 30) {
    alert("The weather is normal");
}
else if (temperature > 20) {
    alert("Today's weather is cool");
}
else {
    alert("OMG!Today's weather is soo Cool")
}
// ======================= END ========================


// ======================= QNO:11 =======================
var a = +prompt("First NUmber");
var b = +prompt("Second NUmber");
var operation = prompt("Which operation you want to perform?");
if (operation === "+") {
    alert(a + b);
}
else if (operation === "-") {
    alert(a - b);
}
else if (operation === "*") {
    alert(a * b);
}
else if (operation === "/") {
    alert(a / b);
}
else if (operation === "%") {
    alert(a % b);
}
// ======================= END ========================