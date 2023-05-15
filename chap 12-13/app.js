// ====================== QNO:1 =============================
var userInput = prompt("Enter Number Or Alphabets");
if(!isNaN(userInput)){
    console.log("Input is a number");
}
else if(userInput===userInput.toUpperCase()){
    console.log("Input is a uppercase letter")
}
else if(userInput===userInput.toLowerCase()){
    console.log("Input is a lowercase letter")
}
// ==================== END =========================


// ====================== QNO:2 =============================
var num1 = +prompt("Add your 1st number");
var num2 = +prompt("Add your 2nd number");
if(num1>num2){
    alert("Your 1st Number is greater than your 2nd Number");
}
else if(num1<num2){
    alert("Your 2nd Number is greater than your 1st Number");
}
else{
    alert("Both Numbers are equal");
}
// ==================== END =========================


// ====================== QNO:3 =============================
var num = +prompt("Add your number");
if(num>0){
    alert("Positive integer");
}
if(num===0){
    alert("Zero");
}
else{
    alert("Negative integer");
}
// ==================== END =========================


// ====================== QNO:4 =============================
var character = prompt("Enter your Favourite alphabet");
if(character==="a","e","i","o","u"){
    alert("true")
}
else{
    alert("false")
}
// ==================== END =========================


// ====================== QNO:5 =============================
var userPassword = prompt("Enter your Password");
var correctPassword = "alwayshappy";
var emptyPassword = "";
if(userPassword===correctPassword){
    alert("Correct!The password you entered matches the original password");
}
else if(userPassword===emptyPassword){
    alert("Please enter Password")
}
else{
    alert("Incorrect Password")
}
// ==================== END =========================


// ====================== QNO:6 =============================
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
  alert(greeting);
} else {
  greeting = "Good evening";
  alert(greeting);
}
// ==================== END =========================


// ====================== QNO:7 =============================
var userHours = prompt("Enter Your Today's Seconds");
if(userHours>=0000 && userHours<1200){
    alert("Good Morning")
}
else if(userHours>=1200 && userHours<1700){
    alert("Good Afternoon")
}
else if(userHours>=1700 && userHours<2100){
    alert("Good Evening")
}
else if(userHours>=2100 && userHours<=2359){
    alert("Good Night")
}
// ==================== END =========================