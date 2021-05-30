//// DRY CODE DONT REPEAT YOUR CODE /////

/*
EXAMPLE INCLUDE

WRTING CONSOLE.(LOG) FOR A SINGLE PROCESS MULTIPLE TIMES
E.H
console.log(1)
 console.log(2)
 console.log(3)
 console.log(4)
 console.log(5)
 console.log(10)

*/

// if (bobby > onyeka) {
//     alert("FUCK YOU");
// }

// else if (onyeka < bobby) {
//     alert("fuck your mama");

// }

// else {
//     alert("Onyeka is Awsome");
// }

///  WHILE LOOPS /////

/*

WHILE LOOPS KEEPS REPEATING THE CODE AS LONG AS THE CONDITION ITS SET TO REMAINS TRUE

*/

// USING WHILE LOOPS TO LOOP THROUGH NUMBERS

var count = 1;

while (count < 6) {
  console.log("count is:" + count);
  count++;
}

// COUNTS FROM 1-6 AND STOPS ///

var count = 5;

while (count <= 20) {
  console.log("count is:" + count);
  count += 2;
}

// COUNTS FROM  COUNTS FROM 5 BUT ADDS 2 TO 5//

/*
 USING WHILE LOOPS TO LOOP THROUGH CHARACTERS MAKING USE OF WHILE LOOPS TO LOOP THROUGH 
 CHARACTERS INSTEAD OF NUMBERS 





*/

var str = "hello";

var count = 0;

while (count < str.length) {
  console.log(str[count]);
  count++;
}

// INFINITE LOOP //

// WHEN THE COUNT PROVIDE IS NEVER FALSE //

// ALWAYS INCREMENT COUNT ///

var count = 19;

while (count < 10) {
  console.log("count is:" - count);
  count--;
}

////FOR LOOPS////

var str = "hello";

for (var i = 0; i < str.length; i++) {
  console.log(str[i]);
}

/// for loops for number ///

for (var i = 0; i < 16; i += 8) {
  console.log(i);
}

/// FOR LOOPS FOR STR.LEGNTH ///

var str = "hsxcbhudcuidci";
for (var i = 1; i < str.length; i += 2) {
  console.log(str[i]);
}

///PRINT ALL NUMBERS BETWEEN -10 AND 19/////
for (var i = -10; i < 20; i++) {
  console.log(i);
}

/// PRINTING ALL EVEN NUMBER SBETWEEN 10 AND 40////

for (var i = 10; i <= 40; i += 2) {
  console.log(i);
}

/// REFACTORING THE CODE MEANS CHANGING THE CODE IN ANOTHER WAY////

for (var i = 10; i < 40; i += 2) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

/// PRINT ALL ODD NUMBER S FROM 300 AND 333////

for (var i = 300; i <= 333; i++) {
  if (i % 2 !== 0) console.log(i);
}

// Loops essentially help us to loop over data //

// FOR LOOPS ESSENTIALLY HAS THREE PARTS //

/*

COUNTER 

CONDITION

ITERATION-EXPRESSION


*/
for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 10; i > 0; i--) {
  console.log(i);
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
  if (numbers % 3 === 0) {
    console.log(numbers);
  }
}
// Password Checking using While Loops
var secretCode = "Joker2020";

const guess = prompt("Type Password....");
while (secretCode === guess) {
  guess = prompt("Thank You Sign In");
}
