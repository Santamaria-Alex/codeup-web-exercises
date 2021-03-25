"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

/*function analyzeColor(color) {
    if (color === "blue") {
        return color + " is the color of the sky.";
    } else if (color === "red") {
        return color + " strawberries are red.";
    } else {
        return "I don't know anything about " + color + ".";
    }

}

console.log(analyzeColor("blue"));
console.log(analyzeColor("red"));
console.log(analyzeColor("green"));*/


/*function analyzeColor(input) {
    if (input === "black") {
        return "Black is the color of Heavy Metal.";
    } else if (input === "red") {
        return "Red is the color of blood.";
    } else {
        return "I dont know anything about " + input;
    }

}

console.log(analyzeColor("black"));
console.log(analyzeColor("red"));
console.log(analyzeColor("orange"));*/


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));


/*function analyzeRandomColor(randomColor) {
    if (randomColor === "indigo") {
        return "Indigo is the color of Heavy Metal.";
    } else if (randomColor === "red") {
        return "Red is the color of blood.";
    } else {
        return "I dont know anything about " + randomColor;
    }

}

console.log(analyzeRandomColor(randomColor));*/

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColor(color) {
    switch (color) {
        case "blue":
            return color + " is the color of the sky.";
            break;
        case "red":
            return color + " , strawberries are red.";
            break;
        default:
            return "I don't know anything about " + color;
    }
}

console.log(analyzeColor(randomColor));


/*switch (randomColor) {
    case "indigo":
        console.log("Indigo's a weird color.");
        break;
    case "red":
        console.log("Red's a dominant color.");
        break;
    default:
        console.log("I don't like " + randomColor);
        break;
}*/

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userInput = prompt("What's your favorite color?").toLowerCase();

alert(analyzeColor(userInput));


//var userColor = prompt("What's your fav color?");

//function analyzeUserColor(userColor) {
//    if (userColor === "black") {
//        return "Black is the color of Heavy Metal.";
//    } else if (userColor === "red") {
//        return "Red is the color of blood.";
//    } else {
 //       return "I dont know anything about " + userColor;
//    }
//}

//alert(analyzeUserColor(userColor));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNum, totalAmount) {
    if (luckyNum === 0) {
        return "Your total is $" + totalAmount;
    } else  if (luckyNum === 1) {
        return "Nice! Your total is $" + (totalAmount - (totalAmount * .1)).toFixed(2);
    } else if (luckyNum === 2) {
        return "Nice! Your total is $" + (totalAmount - (totalAmount * .25)).toFixed(2);
    } else  if (luckyNum === 3) {
        return "Nice! Your total is $" + (totalAmount - (totalAmount * .35)).toFixed(2);
    } else  if (luckyNum === 4) {
        return "Nice! Your total is $" + (totalAmount - (totalAmount * .5)).toFixed(2);
    } else  if (luckyNum === 5) {
        return "Nice! Your total is $" + (totalAmount - (totalAmount * 1)).toFixed(2);
    } else {
        return "That's not lucky Number, jack!";
    }
}

console.log(calculateTotal(0, 10));
console.log(calculateTotal(1, 10));
console.log(calculateTotal(2, 10));
console.log(calculateTotal(3, 10));
console.log(calculateTotal(4, 10));
console.log(calculateTotal(5, 10));
console.log(calculateTotal(6, 10));


/*var totalAmount = 100;

function calculateTotal(number, totalAmount) {
    if (number === 0) {
        return totalAmount - (totalAmount * 0);
    } else if (number === 1) {
        return totalAmount - (totalAmount * .1);
    } else if (number === 2) {
        return totalAmount - (totalAmount * .25);
    } else if (number === 3) {
        return totalAmount - (totalAmount * .35);
    } else if (number === 4) {
        return totalAmount - (totalAmount * .5);
    } else if (number === 5) {
        return totalAmount - (totalAmount * 1);
    }
}*/

/*
console.log(calculateTotal(5, totalAmount));
*/


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
/*
Generate a random number between 0 and 6
*/
/*var luckyNumber = Math.floor(Math.random() * 6);

var userTotal = parseFloat(prompt("What is your total amount?");)

alert("Your lucky number is " + luckyNumber + "!");
alert(calculateTotal(luckyNumber, userTotal));*/





/*var billTotal = parseFloat(prompt("What was your bill total?"));

function calculateTotal(luckyNumber, billTotal) {
    if (luckyNumber === 0) {
        return billTotal - (billTotal * 0);
    } else if (luckyNumber === 1) {
        return billTotal - (billTotal * .1);
    } else if (luckyNumber === 2) {
        return billTotal - (billTotal * .25);
    } else if (luckyNumber === 3) {
        return billTotal - (billTotal * .35);
    } else if (luckyNumber === 4) {
        return billTotal - (billTotal * .5);
    } else if (luckyNumber === 5) {
        return billTotal - (billTotal * 1);
    }
}

alert("You're lucky number was " + luckyNumber + "!");
alert("You're bill before the discount is $" + billTotal.toFixed(2) + "...");
alert("You're bill after the discount is $" + calculateTotal(luckyNumber, billTotal).toFixed(2) + "!");*/


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var participate = confirm("Would you like to enter a number?");

if (participate) {
    var userNumber = parseFloat(prompt("Please enter a number:"));
    if (isNaN(userNumber)) {
        alert("That's not a number, jack!");
    } else {
        if (userNumber % 2 === 0) {
            alert("That's an even number!");
        } else {
            alert("That's an odd number!");
        }
        if (userNumber > 0) {
            alert("That's a positive number!");
        } else {
            alert("That's a negative number!");
        }
        alert(userNumber + 100 + " -- this is your number plus 100!");
    }
} else {
    alert("Get outta here then, jack!");
}

/*
var numberEntry;

function isOddOrEven (numberEntry) {
    return (numberEntry % 2 === 0) ? "This number is even." : "That's an odd number.";
}

function isNegativeOrPositive (numberEntry) {
    return (numberEntry > 0) ? "That's a positive number." : "That's a negative number.";
}

function plus100 (numberEntry) {
    return "Your number is " + (parseFloat((numberEntry) + 100)) + " if we added 100."
}

if (participate) {
    numberEntry = prompt("Enter number:");
    if (isNaN(numberEntry)) {
        alert("That ain't no number.");
    } else {
        alert(isOddOrEven(numberEntry));
        alert(isNegativeOrPositive(numberEntry));
        alert(plus100(numberEntry));
    }
} else {
    alert("Jerk.");
}
*/
