// ============================== QNO: 1 ================================
// function date() {
//     var date = new Date();
//     document.write(date);
// }
// date()
// ============================== E N D ================================


// ============================== QNO: 2 ================================
// var fName = prompt("Enter Your First Name");
// var LName = prompt("Enter Your Last Name");

// function greet() {
//     alert("Hello" + " " + fName + " " + LName);
// }
// greet()
// ============================== E N D ================================


// ============================== QNO: 3 ================================
// var fNum = +prompt("Enter Your First Number");
// var LNum = +prompt("Enter Your Last Number");
// function sum() {
//     alert("Addition of " + fNum + " and " + LNum + " is " + (fNum + LNum));
// }
// sum()
// ============================== E N D ================================


// ============================== QNO: 4 ================================
//     var fstNum = +prompt("Enter Your First Number");
//     var LstNum = +prompt("Enter Your Last Number");
//     var opt = prompt("Enter operator");
//     var result;

// function calc() {

//     if (opt === "/") {
//         result = fstNum / LstNum;
//     }
//     else if (opt === "*") {
//         result = fstNum * LstNum;
//     }
//     else if (opt === "+") {
//         result = fstNum + LstNum;
//     }
//     else if (opt === "-") {
//         result = fstNum - LstNum;
//     }
//     else if (opt === "%") {
//         result = fstNum % LstNum;
//     }
//     else {
//         alert("Write correct operator");
//     }
//     document.write('The result of ' + fstNum + ' ' + opt + ' ' + LstNum + ' is: ' + result);

// }
// calc()
// ============================== E N D ================================


// ============================== QNO: 5 ================================
// var userNum = +prompt("Enter Your Number");
// function sqNum() {
//     var num = userNum**2;
//     document.write(userNum + "<sup>2</sup> is " + num);
// }
// sqNum()
// ============================== E N D ================================


// ============================== QNO: 6 ================================
// var number = +prompt("Enter a Number");
// var factorialNum = number;

// function factorial(){
//     if(factorialNum > 1 ){
//        factorialNum--;
//        number = number * factorialNum;
//        factorial();
//        return number;
//     } 
//     else{
//         return 1;
//     }
// }

// var output = factorial();
// document.write("factorial of number is : "  + output);
// ============================== E N D ================================


// ============================== QNO: 7 ================================
// var srtNum = +prompt("Enter Starting Integer");
// var endNum = +prompt("Enter Ending Integer");

// function counting() {
//     for (var i = srtNum; i <= endNum; i++) {
//         document.write(i + "<br>");
//     }
// }
// counting()
// ============================== E N D ================================


// ============================== QNO: 8 ================================
// var base = +prompt("Enter base of triangle");
// var perp = +prompt("Enter perpendicular of triangle");

// function hyp() {
//     var hyp = (base**2) + (perp**2);
//     function rootOfHyp() {
//         var rootOfHyp = Math.sqrt(hyp);
//         document.write("Formule: " + "Hypotenuse<sup>2</sup> = " + "Base<sup>2</sup> + Perpendicular<sup>2</sup> " + "<br>")
//         document.write("Base<sup>2</sup> = " + base + "<sup>2</sup> = " + base**2 + "<br>")
//         document.write("Perpendicular<sup>2</sup> = " + perp + "<sup>2</sup> = " + perp**2 + "<br>")
//         document.write("Hypotenuse<sup>2</sup> = " + base**2 + " + " + perp**2 + " = " + hyp + "<br>")
//         document.write("Hypotenuse = " + "root of(" + hyp + ") = " + rootOfHyp + "<br>")
//     }
//     rootOfHyp() 
// }
// hyp()
// ============================== E N D ================================


// ============================== QNO: 9 ================================
// var width = 40;
// var height =70;
// function area( height , width){
//     var A = height*width;
//     document.write("area is : " + A)

// }
// area(height,width);
// ============================== E N D ================================


// ============================== QNO: 10 ================================
// let word = prompt("enter a word").toLowerCase();
// let string = word;
// let check = 0;

// function palindromeCheck() {
//     for (let i = word.length - 1; i >= 0; i--) {
//         string = string.replace(string[check], string[i])
//         check++;
//     }

//     if (string === word) {
//         alert("Yes It's a Palindrome word");
//     }

//     else {
//         alert("No It's not a Palindrome word");
//     }
// }

// palindromeCheck();
// ============================== E N D ================================


// ============================== QNO: 11 ================================
// var string = "the quick brown fox";

// function upperCaseFun(string) {
//     var sentence = string.split(" ")
//     for (var i = 0; i < sentence.length; i++) {
//         var word = sentence[i];

//         var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);

//         sentence[i] = capitalizedWord;
//     }
//     var capitalizedString = sentence.join(' ');

//     return capitalizedString;
// }
// var capitalizedString = upperCaseFun(string);
// document.write(capitalizedString);
// ============================== E N D ================================


// ============================== QNO: 12 ================================
// var string = "Web Development Tutorial";

// function findLargestWord() {
//     var sentence = string.split(" ");
//     var largest = "";
//     for (var i = 0; i < sentence.length; i++) {
//         var current = sentence[i]

//         if (current.length > largest.length) {
//             largest = current
//         }
//     }
//     document.write("Largest word in <b>" + string + "</b> is = " + largest)
// }
// findLargestWord()
// ============================== E N D ================================


// ============================== QNO: 13 ================================
// var userString = prompt("Enter Sentence");
// var string = userString.toLowerCase();
// var userLetter = prompt("Enter Letter To Count").toLowerCase();
// var letter = userLetter.toLowerCase();
// var count = 0;

// function counter(string,letter) {
//     for (var i = 0; i < string.length; i++) {
//         if (string[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }
// document.write("word '" + userLetter + "' occurs " + counter(string,letter) + " times in " + userString);
// ============================== E N D ================================


// ============================== QNO: 14 ================================
// var radius = +prompt("Enter Circle Radius");

// function calcCircumference(radius) {
//     return 2*3.14*radius;
// }

// function calcArea(radius) {
//     return 3.14*(radius**2);
// }
// document.write("Circumference of circle: " + calcCircumference(radius) + "<br>");
// document.write("Area of circle: " + calcArea(radius));
// ============================== E N D ================================