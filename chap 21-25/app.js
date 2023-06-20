// ==================== QNO:1 =======================
// const userFirstName = prompt("Enter Your First Name");
// const userLastName = prompt("Enter Your Last Name");

// const fullName = userFirstName + " " + userLastName;
// const fullNameInCaps = fullName.toUpperCase();

// alert("HELLO " + fullNameInCaps);
// ==================== QNO:1 END=======================


// ==================== QNO:2 =======================
// const userFavPhone = prompt("What's Your Favourite Mobile Phone");

// document.write("Your fav phone is: " + userFavPhone + "<br>");
// document.write("Length of string: " + userFavPhone.length);
// ==================== QNO:2 END=======================


// ==================== QNO:3 =======================
// const myNationality = "Pakistani";
// const findIndex = myNationality.indexOf("n");

// document.write("String: " + myNationality + "<br>");
// document.write("Index of 'n' : " + findIndex);
// ==================== QNO:3 END=======================


// ==================== QNO:4 =======================
// const greet = "Hello World";
// const findLastIndex = greet.lastIndexOf("l");

// document.write("String: " + greet + "<br>");
// document.write("Last Index of 'l' : " + findLastIndex);
// ==================== QNO:4 END=======================


// ==================== QNO:5 =======================
// const myNationality = "Pakistani";
// const thirdIndex = myNationality[3];

// document.write("String: " + myNationality + "<br>");
// document.write("Character at index 3: " + thirdIndex);
// ==================== QNO:5 END=======================


// ==================== QNO:6 =======================
// const userFirstName = prompt("Enter Your First Name").toUpperCase();
// const userLastName = prompt("Enter Your Last Name").toUpperCase();

// const concatination = userFirstName.concat(" " + userLastName);

// alert("HELLO " + concatination);
// ==================== QNO:6 END=======================


// ==================== QNO:7 =======================
// const city = "Hyderabad";
// const afterReplacement = city.replace("Hyder", "Islam");

// document.write("City: " + city + "<br>");
// document.write("After Replacement: " + afterReplacement);
// ==================== QNO:7 END=======================


// ==================== QNO:8 =======================
// const message = "Ali and Sami are best friends. They play cricket and football together.";

// const replacementInMessage = message.replace(/and/g, "&");

// console.log(replacementInMessage);
// ==================== QNO:8 END=======================


// ==================== QNO:9 =======================
// const numInString = "472";
// document.write("Value: " + numInString + "<br>");
// document.write("Type: " + typeof(numInString) + "<br>");

// const convertNum = parseInt(numInString);
// document.write("Value: " + convertNum + "<br>");
// document.write("Type: " + typeof(convertNum));
// ==================== QNO:9 END=======================


// ==================== QNO:10 =======================
// const userInput = prompt("Enter Anything");
// const userInputInCaps = userInput.toUpperCase();

// document.write("User input: " + userInput + "<br>");
// document.write("Upper Case: " + userInputInCaps + "<br>");
// ==================== QNO:10 END=======================


// ==================== QNO:11 =======================
// const userInput = prompt("Enter Anything");

// let userFirstLetter = userInput[0];
// userFirstLetter = userFirstLetter.toUpperCase();

// let userOtherLetters = userInput.slice(1);
// userOtherLetters = userOtherLetters.toLowerCase();

// const titleCase = userFirstLetter + userOtherLetters;

// document.write("User input: " + userInput + "<br>");
// document.write("Title Case: " + titleCase + "<br>");
// ==================== QNO:11 END=======================


// ==================== QNO:12 =======================
// const number = 35.36;

// const numToString = number.toString();
// const result = numToString.replace(".", "");

// document.write("Number: " + number + "<br>");
// document.write("Result: " + result);
// ==================== QNO:12 END=======================


// ==================== QNO:13 =======================
// let userName = prompt("Enter Your Name");

// let codeOfExclamationMark = 33;
// let codeOfComma = 44;
// let codeOfDot = 46;
// let codeOfAtSign = 64;

// let codeCheck = true;

// for (let i = 0; i < userName.length; i++) {
//     let convertUserInp = userName.charCodeAt(i);

//     if (convertUserInp === codeOfExclamationMark || convertUserInp === codeOfComma
//         || convertUserInp === codeOfDot || convertUserInp === codeOfAtSign) {
//             codeCheck = false;
//         }
// }

// if (codeCheck === false) {
//     alert("Please enter a valid username")
// }

// else {
//     alert("Welcome")
// }
// ==================== QNO:13 END=======================


// ==================== QNO:14 =======================
// const items = ["cake", "apple pie", "cookie", "chips", "patties"];
// let check = false;

// const userItem = prompt("What do you want to oder?");
// const checkItem = userItem.toLowerCase();

// for (let  i = 0;  i < items.length;  i++) {
//     if (items[i] === checkItem) {
//         check = true;
//     }
// }

// if (check === true){
//     console.log(checkItem + " is available at index " + items.indexOf(checkItem) + " in our Bakery");
// }
// else {
//     console.log("We are Sorry! " + checkItem + " is not available in our Bakery");
// }
// ==================== QNO:14 END=======================


// ==================== QNO:15 =======================
// const userPass = prompt("Enter your password");

// let codeOfZero = 48;
// let codeOfSmallA = 97;
// let codeOfCapsA = 65;

// // password should contain alphabets and numbers
// let firstCon = false;
// for (let i = 0; i <userPass.length; i++) {
//     let convert = userPass.charCodeAt(i);

//     for (let j = codeOfZero; j <= 57; j++) {
//         if (convert === j) {
//             firstCon = true
//         }
//     } 
// }

// let secondCon = false;
// for (let i = 0; i <userPass.length; i++) {
//     let convert = userPass.charCodeAt(i);

//     for (let j = codeOfCapsA; j <= 90; j++) {
//         if (convert === j) {
//             secondCon = true
//         }
//     } 
// }

// let thirdCon = false;
// for (let i = 0; i <userPass.length; i++) {
//     let convert = userPass.charCodeAt(i);

//     for (let j = codeOfSmallA; j <= 122; j++) {
//         if (convert === j) {
//             thirdCon = true
//         }
//     } 
// }


// // password should not start with a number
// let passcheck = true;
// let passInString = userPass.charCodeAt(0);
// for(let i = codeOfZero; i <= 57; i++){
//     if(passInString === i){
//         passcheck = false ;
//     }
// }


// // password must at least 6 characters long
// let flag = false;
// if (userPass.length >= 6) {
//     flag = true
// }

// if (passcheck === false) {
//     prompt("Password cannot beggin with a number\n Enter new Password")
// }
// else if (flag === true && (firstCon === false && (secondCon === true || thirdCon === true))) {
//     prompt("Password should contain digits also\n Enter new password")
// }
// else if (flag === true && (firstCon === true && (secondCon === true || thirdCon === true))) {
//     alert("Valid Password")
// }
// else if (flag === false){
//     prompt("Password must at least 6 characters long\n Enter new password")
// }
// ==================== QNO:15 END=======================


// ==================== QNO:16 =======================
// const university = "University of Karachi";
// const arraySplit  = university.split("");

// for (var i = 0; i < arraySplit.length; i++){
//     document.write(arraySplit[i] + "<br>");
// }
// ==================== QNO:16 END=======================


// ==================== QNO:17 =======================
// const userInp = prompt("Enter anything");
// const inpLastChart = userInp[userInp.length - 1];

// document.write("User Input: " + userInp + "<br>");
// document.write("Last character of Input: " + inpLastChart);
// ==================== QNO:17 END=======================


// ==================== QNO:18 =======================
// let text = "The quick brown fox jumps over the lazy dog";
// let inLowerCase = text.toLowerCase();
// let splitForCheck = inLowerCase.split(" ");
// let count = 0;

// for (let i = 0; i < splitForCheck.length; i++) {
//     if (splitForCheck[i] ==="the"){
//         count++
//     }
// }
// document.write("Text: " + text + "<br>");
// document.write("There are " + count + " occurense of 'the'");
// ==================== QNO:18 END=======================