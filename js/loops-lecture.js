/*
var slices = 8;

while (slices > 0) {
    console.log("I'll have a slice.");
    slices = slices -1;
    console.log("Now there's " + slices + " slices left.");
}
console.log("no more pizza.");

 */



// Pseudocode

//ask the user input
//get the user input
//declare the user input variable
//store user input in the variable
//declare a variable to store the total (accumulator)
//add the cost of the new item to the total
//keep storing the new totals in the accumulator variable
//tell the user how to end the program -- called sentinel value
//loop back around and do it all again, over and over, until the user tells us to stop

var priceOfItem = parseFloat(prompt("Enter the price of your first item:"));
alert("The price of your item was $" + priceOfItem);
var totalCost = priceOfItem;
var userInput = "";

// create a sentinel value
while (userInput !== "STOP") {
    userInput = prompt("Enter the price of your next item \r\n\ Enter STOP when you are done!");
    if (userInput === "STOP") {
        alert("Okay, your final total is " + totalCost);
    } else {
        priceOfItem = parseFloat(userInput);
        totalCost = totalCost + priceOfItem;
        alert("Your new total is now $" + totalCost.toFixed(2));
    }
}
