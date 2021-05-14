"use strict";

// with es6, we can now use calculate exponents with a double asterisk operator instead of having to rely on the Math object

// var oldWay = Math.pow(4, 2);
// console.log(oldWay);
//
// var newWay = 2 ** 3;
// console.log(newWay);

// ===== var vs let vs const =====
// variables declared with var are function-scoped. this means that if a variable is declared anywhere else besides a function using var, it will always exist in the global scope

//Ex
// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }
//
// i = 'hello';
//
// console.log(i);
//
// if (i === 'hello') {
//     var bubbles = 'bububububbles';
// }
//
// // bubbles is redefined, and only "pop" is logged
// bubbles = 'pop';
// console.log(bubbles);
//
// function test(){
//     var logMe = 'Hello';
//     bubbles = '*floating*';
//     return logMe;
// }
//
// console.log(test());
//
// // var cannot be called outside of the function. referenceError
// console.log(logMe);

// CONST
// CONST is block-scoped. this means that the variable declared with const cannot be redeclared or reassigned.
// const num = 4;
// console.log(num);

// cannot reassign. uncaught TypeError
// num = 5;

// cannot use the same const, or redeclare. SyntaxError
// const name = "Alex";
// const name ="Shogun";
// console.log(name)

// in this case, 'shogun' is logged because var name is reassigned
// var name = 'alex';
// var name = 'shogun';
// console.log(name)

// Block-scope
// var number = 5;
//
// if (number === 5) {
//     const cardNumber = 123412341234;
//     console.log(cardNumber);
// }

// will not be logged bc const is block-scoped, which means only works within the function originally called
//console.log(cardNumber);

// LET
// the let keyword lets you define variables that are block-scoped. As with variables declared with const, the variables with let cannot be redeclared.

// cannot redeclare using the same variable declaration like you could with var.
// let name = "alex";
// let name = 'shogun';

//reassignment. this will work. will log 'shogun'
// let name = 'alex';
// name = 'shogun';
// console.log(name);



// function foo(n){
//     if (n == 6) {
//         let num = 2;
//     }
//     console.log(num);
// }

// foo(6); // throws a ReferenceError bc our let variable is within our if statement scope.


// for (var i = 0; i < 3; i++){
//     console.log(i);
// }
// console.log('i outside of the loop', i);

// for (let i = 0; i < 3; i++){
//     console.log(i); // this will log bc it is within the scope
// }
// console.log('i outside of the loop', i); // referenceError bc let is inside for loop scope.


// ===== TEMPLATE STRINGS =====

// template strings allow for interpolation in strings. Variables and expressions can be read in template strings. Template strings use back ticks to recognize variables and expressions.

// let name = 'Alex';
// console.log(`My name is ${name}`);
//
// console.log(`My name is ${name.toUpperCase() + ' Santamaria'} in all caps`);
//
//
let nationalParks = ['Park 1', 'Park 2', 'Park 3'];
let parksList = `<ul>
<li>${nationalParks[0]}</li>
<li>${nationalParks[1]}</li>
<li>${nationalParks[2]}</li>
</ul>`

document.write(parksList);


// ===== FOR ...OF LOOP =====
// works with node lists!

//original for loop
// for (let i = 0; i < nationalParks.length; i++){
//     console.log(nationalParks[i]);
// }


// // forEach loop
// nationalParks.forEach(function (park, index){
//     console.log(index)
//     console.log(park)
//     console.log(park[index]);
// });

// NEW ES6 FOR... OF LOOP
// ===== structure =====
// for (variable of iterable/collection){
//     statement;
// }

for (let park of nationalParks){
    console.log(park);
}

let listItems = document.getElementsByTagName('li');
console.log(listItems);

for (let listItem of listItems){
    listItem.innerHTML += ' is a cool park.';
}

// ===== ARROW FUNCTIONS =====

// basic function
function test(){
    return 'hello from here';
}

console.log(test());

var test2 = function (){
    return 'Hello from there'
}
console.log(test2());

// ES6
const test3 = () => 'Hello from yonder';
console.log(test3())

const add = (num1 = 2, num2 = 4) => {
    return num1 + num2;
}

console.log(add());
console.log(add(5));
console.log(add(5,5));

//===== Object Property Variable Assignment (shorthand) =====

//ES6 syntax

let name = 'loopy trail';
let distance = 4.6;
let difficulty = 'moderate';
let isPaved = true;

let trail = {
    name,
    distance,
    difficulty,
    isPaved
};
console.log(trail);

// OBJECT DESTRUCTURING
let describeTrail = trailObj => {
    let {name, distance} = trailObj;
    return name + " " + "is " + distance + " miles long";
}
console.log(describeTrail(trail));


let myObject = {
    movieName: 'The Incredibles',
    length: '1 hr 45min'
}

let {movieName, length} = myObject;

console.log(movieName, length);


// LOOP THROUGH MOVIES //
let movies = [
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        description: 'A group of travelers venture to a volcano to destroy a powerful object.'
    },
    {
        title: 'The Bee Movie',
        description: 'A movie about bees'
    },
    {
        title: 'Harry Potter',
        description: 'A young kid is a wizard'
    }
]

function getMovieInfo(listOfMovies){
    for (let movie of listOfMovies) {
        let {title, description} = movie;
        console.log(`The movie you selected is ${title}. A short description would be: ${description}`);
    }
}

getMovieInfo(movies);



// ===== ARRAY DESTRUCTURING ===== //

// OLD WAY //
var lotr = movies[0];
var beeMovie = movies[1];
var hP = movies [2];

console.log(lotr, beeMovie, hP);

// NEW ES6 WAY //
let [x, y, z] = movies;

console.log(x, y, z);

























