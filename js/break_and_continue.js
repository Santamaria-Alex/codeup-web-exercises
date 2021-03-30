"use strict";

/*
var numberToStopAt = 5;

for (var i = 1; i < 100; i++) {

    console.log('Loop counter is: ' + i);

    if (i === numberToStopAt) {
        console.log('We have reached the stopping point: break!');
        // use the break keyword to exit from the while loop
        break;
        // nothing after the break will get processed
        console.log('You will never see this line.');
    }
}
*/
/*

var stop = stop % 2 ===0 || stop > 50 || stop <= 50;

for (var i = 1; i <= 50; i++); {
    var oddNumber = parseFloat(prompt("Enter an odd number between 1 and 50:"));
    if (stop) {
        parseFloat(prompt("Hey that number doesn't meet requirements, try again:"));
    }
}
*/


// Break and Continue exercise
/*

var oddNumber = 0;

 while (oddNumber % 2 !== 1 || !(oddNumber > 0 && oddNumber < 50)) {
     oddNumber = parseFloat(prompt("Please enter an odd number between 1 and 50."));
     if (oddNumber % 2 === 1 && (oddNumber > 0 && oddNumber < 50)){break;}
 }

for (var i = 1; i < 50; i+=2) {
    if (i === oddNumber) {
        console.log("Yikes! Skipping number: " + oddNumber);
        continue;
    }
    console.log(i);
}
*/
