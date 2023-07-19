// ======================= QNO: 1 ============================
// var a = +prompt("Enter your first number");
// var b = +prompt("Enter your first number");

// function power(a,b) {
//     return a**b
// }
// document.write(a + "<sup>" + b + "</sup> = " + power(a,b));
// ======================= END ============================


// ======================= QNO: 2 ============================
// var userYear = +prompt("Enter a year");
// function leapYear() {
//     if (userYear % 4 === 0) {
//         alert(userYear + " is a leap year");
//     }
//     else {
//         alert(userYear + " is not a leap year");
//     }
// }
// leapYear();
// ======================= END ============================


// ======================= QNO: 3 ============================
// var a = +prompt("Enter first side of a triangle");
// var b = +prompt("Enter first side of a triangle");
// var c = +prompt("Enter first side of a triangle");

// function calc_S(a,b,c) {
//     return (a+b+c)/2;
// }
// var S = calc_S(a,b,c)
// function area(S) {
//     return (S*(S - a)*(S - b)*(S - c));
// }

// document.write(area(S) + "m<sup>2</sup>");
// ======================= END ============================


// ======================= QNO: 4 ============================
// var tMarks = +prompt("Enter total marks");
// var subMarks_1 = +prompt("Enter you first subject marks");
// var subMarks_2 = +prompt("Enter you second subject marks");
// var subMarks_3 = +prompt("Enter you third subject marks");

// var average;
// var percentage;

// function main() {
//     function avg() {
//         average = ((subMarks_1+subMarks_2+subMarks_3)/3)
//         return average
//     }
//     function per() {
//         percentage = ((avg()/tMarks)*100);
//         return percentage
//     }
//     document.write("Percentage: " + per())
// }
// main();
// ======================= END ============================


// ======================= QNO: 5 ============================
// var sentence = prompt("Enter Sentence");
// var word = prompt("Enter word you want to find the index");

// function findIndex() {
// for (var i = 0; i < sentence.length; i++) {
//     if (word === sentence[i]) {
//         document.write("index of " + sentence[i] + " is " + i);
//         break;
//     }
// }}
// findIndex();
// ======================= END ============================


// ======================= QNO: 6 ============================
// function removeVowels() {
//     var sentence = "There is nothing impossible to they who will try.".toLowerCase()
//     document.write("<b>Sentence Before removing vowels:</b> " + sentence + "<br>")

//     for (var i = 0; i < sentence.length; i++) {
//         if (sentence[i] === "a" ||
//         sentence[i] === "e" ||
//         sentence[i] === "i" ||
//         sentence[i] === "o" ||
//         sentence[i] === "u") {
//             sentence = sentence.replace(sentence[i], "")
//         }
//     }
//     document.write("<b>Sentence After removing vowels:</b> " + sentence)
// }
// removeVowels();
// ======================= END ============================


// ======================= QNO: 7 ============================
// function occurence() {
//     var sentence = "Pleases read this application and give me gratuity";
//     document.write("Sentence: " + sentence + "<br>")
//     var count_1 = 0;
//     var count_2 = 0;

//     for (var i = 0; i < sentence.length; i++) {
//         switch (sentence.slice(i, i + 2)) {
//             case "ea":
//                 count_1++
//                 break;
//             case "ui":
//                 count_2++
//                 break
//         }
//     }
//     document.write("Occurence of 'ea' = " + count_1 + "<br>");
//     document.write("Occurence of 'ui' = " + count_2);
// }
// occurence();
// ======================= END ============================


// ======================= QNO: 8 ============================
// var distance = +prompt("Enter distance in Km");

// function meters() {
//     var kmTOm = distance*1000;
//     document.write(distance + "km in meter: " + kmTOm + "m" + "<br>");
// }
// function inches() {
//     var kmTOinch = distance* 39370.0787;
//     document.write(distance + "km in inches: " + kmTOinch + "inches" + "<br>");
// }
// function feet() {
//     var kmTOfeet = distance* 3280.84;
//     document.write(distance + "km in feet: " + kmTOfeet + "feet" + "<br>");
// }
// function centiMeters() {
//     var kmTOcm = distance*100000;
//     document.write(distance + "km in centi meter: " + kmTOcm + "cm");
// }
// meters();
// inches();
// feet();
// centiMeters();
// ======================= END ============================


// ======================= QNO: 9 ============================
// function calcOvertime(hoursWorked) {
//     var hours = 40;
//     var overtimeRate = 12.00;

//     if (hoursWorked < hours) {
//         return 0;
//     } else {
//         var overtimeHours = hoursWorked - hours;
//         var overtimePay = overtimeHours * overtimeRate;
//         return overtimePay;
//     }
// }
// var hoursWorked = 45;
// var overtimePay = calcOvertime(hoursWorked);
// document.write("Overtime Pay: Rs. " + overtimePay);
// ======================= END ============================


// ======================= QNO: 10 ============================
// var userInput = prompt("Enter amount to withdraw!!")

// while (userInput.length >= 4 || userInput.length <= 2){
//     alert("enter amount to withdraw in hundreds only");
//     userInput = prompt("Enter amount to withdraw!!");
// }

// let hundreds = userInput.slice(0, 1);

// let fifties = userInput.slice(1,3);
// let coins = userInput.slice(2, 3);
// let tens;
// if (fifties >= 50) {
//         tens = fifties - 50;
//         tens = tens.toString();
//         tens = tens.slice(0,1)
        
//         coins = userInput.slice(2,3)
//         fifties = 1;
//     }
//     else if(fifties < 50){
//             tens = fifties.slice(0, 1);
//             coins = userInput.slice(2,3)
//             fifties = 0;
//         }
        
    
// document.write("you entered :<b> " + userInput + " </b> <br>")
// document.write("you have  <b>" + hundreds + "</b>  hundred note ,<b>" + fifties + "</b> fifty notes ,<b> " + tens + "</b>  ten notes and <b>" + coins + "</b> coins")
// ======================= END ============================