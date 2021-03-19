"use strict"
// Immediately Invoked Function Expression (IFFE's).
(function() {

        console.log("Hello from external JS");

// Part 1
//alert("Welcome to my Website!");


// Part 2
//var favoriteColor = prompt("What's your favorite color?"));

//alert(favoriteColor + " is my favorite color too!");


// Part 3.1
//var lMRent = parseFloat(prompt("How many days do you plan on renting The Little Mermaid?"));

//var bearRent = parseFloat(prompt("Awesome, and Brother Bear?"));

//var hercRent = parseFloat(prompt("Great! What about Hercules?"));

//var rentRate = 3;

//var totalRent = ((lMRent * rentRate) + (bearRent * rentRate) + (hercRent * rentRate));

//alert("Perfect! We hope you enjoy your movies! Your total due is $" + totalRent.toFixed(2));


// Part 3.2
//var googleHours = parseFloat(prompt("It's the end of the week! How many hours did you clock in for Google?"));

//var amazonHours = parseFLoat(prompt("Wow! what about for Amazon?"));

//var facebookHours = parseFloat(prompt("Well done! And for Facebook?"));

//var googleRate = 400, amazonRate = 380, facebookRate = 350;

//var totalPayDue = ((googleHours * googleRate) + (amazonHours * amazonRate) + (facebookHours * facebookRate));

//alert("Okay big baller! You're owed $" + totalPayDue);


// Part 3.3
//var classHasRoom = confirm("Hey, is there room in this class?");

//var noScheduleConflict = confirm("Can you take a class at 8 AM?");

//alert("You can have class: " + (classHasRoom && noScheduleConflict));


// Part 3.4
//var isOfferValid = confirm("Are we still running the promo?");
//var isPremiumMember = confirm("Is customer a Premium Member?")
//var amountBought = parseFloat(prompt("How many products are they purchasing?"))

//alert("Customer qualifies for the promo: " + (((isPremiumMember || amountBought >= 2) && isOfferValid) && amountBought > 0) + ".");


//var whatIsThisWord = prompt("What is your favorite, safe for work, word?");

//console.log(whatIsTheWord);

//Let's define a function
        function doTheThing(input) {
            var output = input + " was pulled into the function. Now it is this concatenated string."
            return output;
        }

        console.log(doTheThing("hot dog"));

        function addStuff(x, y) {
            return x + y;
        }

        console.log(addStuff(17, 18));

// Let's make a "bad" function...
        function logToConsole(info) {
            return info + " is something important to keep in mind.";
        }

        var needThisForLater = logToConsole("Bengal tigers are endangered.");

        console.log(needThisForLater);

// In defense of console.logging during functions
        function addingToString(str) {
            var finalString = str + " is a string."
            //console.log(typeof finalString);
            finalString += " And if it wasn't orginanally a string it sure is now.";
            //console.log(finalString);
            return finalString;
        }

        alert(addingToString("Antelope"));

// Global vs Local Variables

        var global = "earth";

        console.log(global);

        function getGlobalAndLogIt() {
            var local = "neptune";
            console.log(global);
            console.log(local);
        }

        getGlobalAndLogIt();
        var local = "geoff";
        console.log(local);

// Another way to define functions
        var coolGuyFunction = function (string) {
            return string + ", but with sunglasses."
        }

        console.log(coolGuyFunction("skunk"));


})();

// IFFE
// (function () {
// code
// })();