// ================================= QNO: 1 ======================================
var date = new Date();
document.write(date);
// =============================== QNO: 1 END ====================================


// ================================= QNO: 2 ======================================
var monthNames = ["January", "Febuary", "March", "April", "May", "June", "Jule", "August", "September", "October", "November", "December"];
var newDate = new Date();
var month = newDate.getMonth();
var currentMonth = monthNames[month]; 

alert("Current Month: " + currentMonth);
// =============================== QNO: 2 END ====================================


// ================================= QNO: 3 ======================================
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay]; 

alert("Today is " + nameOfToday);
// =============================== QNO: 3 END ====================================


// ================================= QNO: 4 ======================================
var getDate = new Date();
var getDay = getDate.getDay();

if (getDay === 0 || getDay === 6) {
    alert("It's Fun Day");
}
else {
    alert("It's working Day")
}
// =============================== QNO: 4 END ====================================


// ================================= QNO: 5 ======================================
var date  = new Date();
var getDays = date.getDate

if (getDays < 16) {
    alert("First fifteen days of the month" )
}
else {
    alert("Last days of the month")
}
// =============================== QNO: 5 END ====================================


// ================================= QNO: 6 ======================================
var date = new Date();
var milliSec = date.getTime();
var min = milliSec/60000;

document.write("<b>Current Date:</b> " + date + "<br>" + "<br>");
document.write("<b>Elapsed milliseconds since January 1, 1970:</b>  " + milliSec + "<br>" + "<br>");
document.write("<b>Elapsed minutes since January 1, 1970:</b> " + min);
// =============================== QNO: 6 END ====================================


// ================================= QNO: 7 ======================================
var date = new Date();
var hours = date.getHours();

if (hours < 12) {
    alert("it's AM")
}
else {
    alert("it's PM")
}
// =============================== QNO: 7 END ====================================


// ================================= QNO: 8 ======================================
var date = new Date("December 31, 2020");
document.write(date);
// =============================== QNO: 8 END ====================================


// ================================= QNO: 9 ======================================
var ramadanStart = new Date("March 23, 2023");
var date = new Date();

var milliSecondsPassed = date - ramadanStart;
var daysPassed = Math.floor(milliSecondsPassed / (1000 * 60 * 60 * 24));

document.write( daysPassed + " Days have passed since 1st Ramadan");
// =============================== QNO: 9 END ====================================


// ================================= QNO: 10 ======================================
var date = new Date("december 5 2015");
var newDate = new Date();

var referenceMilliSec = newDate - date;
var referenceSeconds = referenceMilliSec / 1000;

document.write("On reference date " + date + "<br>");
document.write(referenceSeconds + " seconds had passed since beginning of 2015");
// =============================== QNO: 10 END ====================================


// ================================= QNO: 11 ======================================
var currentDate = new Date();

currentDate.setHours(currentDate.getHours() - 1);

document.write(new Date() + "<br>" + currentDate);
// =============================== QNO: 11 END ====================================


// ================================= QNO: 12 ======================================
const currentDate = new Date();

currentDate.setFullYear(currentDate.getFullYear() - 100);

alert(new Date() + "\n100 years back it was " + currentDate);
// =============================== QNO: 12 END ====================================


// ================================= QNO: 13 ======================================
const userAge = parseInt(prompt("Please enter your age:"));

const currentYear = new Date().getFullYear();

const birthYear = currentYear - userAge;

document.write("Your age is: " + userAge + "<br>");
document.write("Your birth year is: " + birthYear);
// =============================== QNO: 13 END ====================================


// ================================= QNO: 14 ======================================
const name = prompt("Enter customer name:");
const month = prompt("Enter current month:");
const numberOfUnits = parseFloat(prompt("Enter number of units:"));
const chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
const latePaymentSurchargeRate = 0.1;

const netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
const latePaymentSurcharge = (netAmountPayable * latePaymentSurchargeRate).toFixed(2);
const grossAmountPayable = (parseFloat(netAmountPayable) + parseFloat(latePaymentSurcharge)).toFixed(2);

document.write("<h2>K-Electric Bill</h2>");
document.write("Customer Name: " + name + "<br>");
document.write("Current Month: " + month + "<br>");
document.write("Number of Units: " + numberOfUnits.toFixed(2) + "<br>");
document.write("Charges per Unit: " + chargesPerUnit.toFixed(2) + "<br><br>" );
document.write("Net Amount Payable (within Due Date): " + netAmountPayable + "<br>");
document.write("Late Payment Surcharge: " + latePaymentSurcharge + "<br>");
document.write("Gross Amount Payable (after Due Date): " + grossAmountPayable + "<br>");

// =============================== QNO: 14 END ====================================