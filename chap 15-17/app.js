// ==================== QNO:1 ========================
let studentNamesLiteralNotation = [];
// ==================== END =========================


// ==================== QNO:2 ========================
let studentNamesObjectNotation = new Array();
// ==================== END =========================


// ==================== QNO:3 ========================
let stings = ["Maida" , "Kiran" , "Ayesha" , "Fatima"];
console.log(stings);
// ==================== END =========================


// ==================== QNO:4 ========================
let numbers = [1 , 2 , 3 , 4 , 5 , 6];
console.log(numbers);
// ==================== END =========================


// ==================== QNO:5 ========================
let boolean = [true , false];
console.log(boolean);
// ==================== END =========================


// ==================== QNO:6 ========================
let mixed = [true , "Maida" , 7 , "Kiran" , 4 , false];
console.log(mixed);
// ==================== END =========================


// ==================== QNO:7 ========================
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h1>" + "QUALIFICATIONS" + "</h1>");
document.write("<ol>");
document.write("<li>" + qualifications[0] + "</li>");
document.write("<li>" + qualifications[1] + "</li>");
document.write("<li>" + qualifications[2] + "</li>");
document.write("<li>" + qualifications[3] + "</li>");
document.write("<li>" + qualifications[4] + "</li>");
document.write("<li>" + qualifications[5] + "</li>");
document.write("<li>" + qualifications[6] + "</li>");
document.write("<li>" + qualifications[7] + "</li>");
document.write("</ol>");
// ==================== END =========================


// ==================== QNO:8 ========================
let studentNames = ["Gurya" , "Pappo" , "Shabana"];
let studentMarks = [300 , 250 , 450];
let totalMarks = 500;
document.write("Score of "+studentNames[0]+" is "+studentMarks[0]+".Percentage:"+studentMarks[0]/totalMarks*100+"%"+"<br>");
document.write("Score of "+studentNames[1]+" is "+studentMarks[1]+".Percentage:"+studentMarks[1]/totalMarks*100+"%"+"<br>");
document.write("Score of "+studentNames[2]+" is "+studentMarks[2]+".Percentage:"+studentMarks[2]/totalMarks*100+"%"+"<br>");
// ==================== END =========================


// ==================== QNO:9 ========================
let colors = ["Blue" , "Green" , "Yellow" , "Pink" , "Black"];
document.write("<b>Original Array:</b> " + colors + "<br>");

let userFirstColor = prompt("What color you want to add in the beginning");
let updatedArrOne = colors.unshift(userFirstColor);
document.write("<b>Added your color at the Beginning:</b> " + colors.join() + "<br>");

let userSecondColor = prompt("What color you want to add in the End");
let updatedArrTwo = colors.push(userSecondColor);
document.write("<b>Added your color at the End:</b> " + colors.join() + "<br>");

let updatedArrThree = colors.unshift("Lemon" , "Neon");
document.write("<b>Added two color at the Beginning:</b> " + colors.join() + "<br>");

let updatedArrFour = colors.shift();
document.write("<b>Deleted First color from the Beginning:</b> " + colors.join() + "<br>");

let updatedArrFifth = colors.pop();
document.write("<b>Deleted one color from the End:</b> " + colors.join() + "<br>");

let userThirdColor = prompt("What color you want to add");
let userFirstIndex = +prompt("At which index?");
let updatedArrSixth = colors.splice(userFirstIndex,1,userThirdColor);
document.write("<b>Added your color on your desired position:</b> " + colors.join() + "<br>");

let userSecondIndex = +prompt("From Which index you want to remove?");
let userQuantity = +prompt("How much index you want to remove");
let updatedSeven = colors.splice(userSecondIndex,userQuantity);
document.write("<b>Remove color from your desired position:</b> " + colors.join() + "<br>");
// ==================== END =========================


// ==================== QNO:10 ========================
let studentScores = [85, 92, 78, 90, 88];
document.write("Scores of Students : " + studentScores + "<br>");

let sortedScores = studentScores.sort();
document.write("Ordered scores of student : " + sortedScores);
// ==================== END =========================


// ==================== QNO:11 ========================
let cityNames = ["Islamabad" , "Ankara" , "Tokyo" , "Karachi" , "Istanbul"];
let selectedCityNames = cityNames.slice(2 , 4);
document.write("City List:" + "<br>" + cityNames + "<br><br>");
document.write("Selected City List:" + "<br>" + selectedCityNames);
// ==================== END =========================


// ==================== QNO:12 ========================
var arr = ["This", "is", "my", "cat"];
var joinString = arr.join(" ");
console.log("Array: " + arr)
console.log("String: " + joinString);
// ==================== END =========================


// ==================== QNO:13 ========================
var fifoArray = [];

fifoArray.push("Keyboard");
fifoArray.push("Mouse");
fifoArray.push("Printer");
fifoArray.push("Monitor");

var firstValue = fifoArray.shift();
var secondValue = fifoArray.shift();
var thirdValue = fifoArray.shift();
var fourthValue = fifoArray.shift();

console.log(firstValue);
console.log(secondValue);
console.log(thirdValue);
console.log(fourthValue);
// ==================== END =========================


// ==================== QNO:14 ========================
var reverseArray = [];

reverseArray.push("Keyboard");
reverseArray.push("Mouse");
reverseArray.push("Printer");
reverseArray.push("Monitor");

var lastValue = reverseArray.pop();
var secondLastValue = reverseArray.pop();
var thirdLastValue = reverseArray.pop();
var fourthLastValue = reverseArray.pop();

console.log(lastValue);
console.log(secondLastValue);
console.log(thirdLastValue);
console.log(fourthLastValue);
// ==================== END =========================


// ==================== QNO:15 ========================
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write('<select>');
document.write("<option>" + manufacturers[0] + "</option>");
document.write("<option>" + manufacturers[1] + "</option>");
document.write("<option>" + manufacturers[2] + "</option>");
document.write("<option>" + manufacturers[3] + "</option>");
document.write("<option>" + manufacturers[4] + "</option>");
document.write("<option>" + manufacturers[5] + "</option>");
document.write('</select>');
// ==================== END =========================