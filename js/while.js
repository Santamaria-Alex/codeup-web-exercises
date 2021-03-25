"use strict";

/*
Create a file named while.js in the js directory.

    Create a while loop that uses console.log() to create the output shown below.
2
4
8
16
32
64
128
256
512
1024
2048
4096
8192
16384
32768
65536*/



/*var number = 2;

while (number <= 65536) {
    console.log(number);
    number = number * 2;
}
 */

/*

var num = Math.floor(Math.random() * 6) + 1;
var guess;

do {
    guess = parseInt(prompt("Enter a number between 1 and 6:"));
} while (guess !== num);

alert("Your guess of " + guess + " matches the number " + num + "!");
*/


/*

var allCones = Math.floor(Math.random() * 50) + 50;
var conesPurchased;
console.log("I have to sell " + allCones + " cones so I can leave!");


do {
    conesPurchased = Math.floor(Math.random() * 5) +1;
    if (conesPurchased > allCones) {
        console.log("Sorry, I can't sell you " + conesPurchased + ", I only have " + allCones + " left.");
    } else {
        allCones = allCones - conesPurchased;
        console.log("Sold " + conesPurchased + ", I have " + allCones + " left!");
    }
} while (allCones > 0);
    if (allCones === 0) {
        console.log("I'm goin' home!");
    }
*/


/*

do {
    conesPurchased = Math.floor(Math.random() * 5) +1;
    allCones = allCones - conesPurchased;
    console.log("sold " + conesPurchased + " cones, "  + allCones + " left!");
} while (conesPurchased <= allCones);
if (allCones === 0) {
    console.log("Sold all cones.");
} else if (conesPurchased > 0) {
    console.log("Sorry, i can't sell you " + conesPurchased + " cones, I only have " + allCones + " left.");
}

*/



// FOR LOOPS

/*var count = 0;

while (count <= 100) {
    console.log(count);
    count = count +1;
}*/

// this is a simplified way to run while loops
/*for (count = 0; count <= 100; count = count+1) {
    console.log(count);
}*/

for (var i = 0; i<=100; i++){
    console.log(i);
}

