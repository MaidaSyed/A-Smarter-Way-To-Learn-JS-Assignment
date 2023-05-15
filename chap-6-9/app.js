// ==================== QNO:1 ==========================
var num = 7;
document.write("RESULTS:" + "<br>" + "The value of a is " + num + "<br>");
document.write("********************************************************" + "<br>")

var preIncreement = ++num;
document.write("The value of ++a is " + preIncreement + "<br>");
document.write("Now value of a is " + num + "<br>" + "<br>");

var postIncreement = num++;
document.write("The value of a++ is " + postIncreement + "<br>");
document.write("Now value of a is " + num + "<br>" + "<br>");
var preDecreement = --num;
document.write("The value of --a is " + preDecreement + "<br>");
document.write("Now value of a is " + num + "<br>" + "<br>");
var postDecreement = num--;
document.write("The value of a-- is " + postDecreement + "<br>");
document.write("Now value of a is " + num + "<br>");
// ===================== END =========================


// ==================== QNO:2 ==========================
var a = 2;
var b = 1;
document.write("a is: " + a + "<br>");
document.write("b is: " + b + "<br>");
var result = --a - --b + ++b + b--;
document.write("result is: " + result);
// --a = 1;
// --a - --b = 1 - 0 = 1;
// --a - --b + ++b = 1 - 0 + 1 = 2;
// --a - --b + ++b + b-- = 1 - 0 + 1 + 1 = 3 ;
// ===================== END =========================


// ==================== QNO:3 ==========================
var userName = prompt("Enter Your Name");
document.write("Assalam-o-Alaikum " + userName);
// ===================== END =========================


// ==================== QNO:4 ==========================
// NOT GIVEN


// ==================== QNO:5 ==========================
var userNum = prompt("Write Your Number");
var empty = "";
if(userNum===empty){
document.write( "5 X 1 = " + 5*1 + "<br>");
document.write( "5 X 2 = " + 5*2 + "<br>");
document.write( "5 X 3 = " + 5*3 + "<br>");
document.write( "5 X 4 = " + 5*4 + "<br>");
document.write( "5 X 5 = " + 5*5 + "<br>");
document.write( "5 X 6 = " + 5*6 + "<br>");
document.write( "5 X 7 = " + 5*7 + "<br>");
document.write( "5 X 8 = " + 5*8 + "<br>");
document.write( "5 X 9 = " + 5*9 + "<br>");
document.write( "5 X 10 = " + 5*10 + "<br>");
}
else{
    document.write(userNum + " X 1 = " + userNum*1 + "<br>");
document.write(userNum + " X 2 = " + userNum*2 + "<br>");
document.write(userNum + " X 3 = " + userNum*3 + "<br>");
document.write(userNum + " X 4 = " + userNum*4 + "<br>");
document.write(userNum + " X 5 = " + userNum*5 + "<br>");
document.write(userNum + " X 6 = " + userNum*6 + "<br>");
document.write(userNum + " X 7 = " + userNum*7 + "<br>");
document.write(userNum + " X 8 = " + userNum*8 + "<br>");
document.write(userNum + " X 9 = " + userNum*9 + "<br>");
document.write(userNum + " X 10 = " + userNum*10 + "<br>");
}
// ===================== END =========================


// ==================== QNO:6 ==========================
var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");

var totalMarks = 100;

var obtainedMarks1 = +(prompt("Enter obtained marks for " + subject1 + ":"));
var obtainedMarks2 = +(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarks3 = +(prompt("Enter obtained marks for " + subject3 + ":"));

// Calculating total marks and percentage
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// Displaying the result in the browser using a table
document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("<tr><th>Total</th><th>" + (totalMarks * 3) + "</th><th>" + totalObtainedMarks + "</th></tr>");
document.write("</table>");

document.write("<p>Percentage: " + percentage + "%</p>");
// ===================== END =========================
