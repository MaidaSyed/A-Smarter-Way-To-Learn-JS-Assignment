// ========================= QNO:1 ==============================
let myArray = [["Maida", "Kiran"], [4, 7], [true, false]];
// ========================= QNO:1 END ==============================


// ========================= QNO:2 ==============================
let matrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
// ========================= QNO:2 END ==============================


// ========================= QNO:3 ==============================
for (var i=1; i<=10; i++){
    document.write(i + "<br>")
}
// ========================= QNO:3 END ==============================


// ========================= QNO:4 ==============================
let userNum = +prompt("Enter a number to show it's multiplication table");
let userTableLength = +prompt("Enter length of multi[lication table");

for (var i=1; i<=userTableLength; i++){
    document.write(userNum + " x " + i + " = " + i*userNum + "<br>");
}
// ========================= QNO:4 END ==============================


// ========================= QNO:5 ==============================
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i=0; i<fruits.length; i++){
    document.write(fruits[i] + "<br>");
}

document.write("<br><br>")

for(var i=0; i<fruits.length; i++){
    document.write("Element at index " + i + " is " + fruits[i] + "<br>")
}
// ========================= QNO:5 END ==============================


// ========================= QNO:6 ==============================
document.write("<h1>Counting:</h1>" + "<br>");
for (var i=1; i<=15; i++) {
    document.write( i + ", ");
}

document.write("<h1>Reverse Counting:</h1>" + "<br>");
for (var i=10; i>=1; i--) {
    document.write( i + ", ");
}

document.write("<h1>Even:</h1>" + "<br>");
for (var i=0; i<=20; i++){
    if(i%2 === 0){
        document.write( i + ", "); 
    }
}

document.write("<h1>Odd:</h1>" + "<br>");
for (var i=0; i<=20; i++){
    if(i%2 !== 0){
        document.write( i + ", "); 
    }
}

document.write("<h1>Series:</h1>" + "<br>");
for (var i=1; i<=20; i++){
    if(i%2 === 0){
        document.write( i + "k, "); 
    }
}
// ========================= QNO:6 END ==============================


// ========================= QNO:7 ==============================
let items = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("What do you want to oder?");
let userItems = userInput.toLowerCase();
let flag = false

for (var i=0; i<items.length; i++){
    if(userItems === items[i]){
        flag = true
    }

}
if(flag === true){
    alert(userItems + " is available at index " + items.indexOf(userItems) + " in our Bakery")
}
else{
    alert("Sorry!" + userItems + " is not available in our Bakery")
}
// ========================= QNO:7 END ==============================


// ========================= QNO:8 ==============================
var numArr = [24, 53, 78, 91, 12];
var largestNum = numArr[0];

for (var i = 1; i < numArr.length; i++) {
  if (numArr[i] > largestNum) {
    largestNum = numArr[i]; 
  }
}
console.log("The largest number is: " + largestNum);
// ========================= QNO:8 END ==============================


// ========================= QNO:9 ==============================
var numArr = [24, 53, 78, 91, 12];
var smallestNumber = numArr[0];

for (var i = 1; i < numArr.length; i++) {
  if (numArr[i] < smallestNumber) {
    smallestNumber = numArr[i]; 
  }
}
console.log("The smallest number is: " + smallestNumber);
// ========================= QNO:9 END ==============================


// ========================= QNO:10 ==============================
for (var i = 1; i<=100; i++){
    if (i % 5 === 0){
        console.log(i)
    }
}
// ========================= QNO:10 END ==============================