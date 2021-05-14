// ARRAY ITERATION METHODS

// .forEach()
let output = '';
// let prices = [32.99, 21.99, 6.99, 12.99, 8.98, 5.99];
// let pricesAfterTax = [];
//
// prices.forEach(function (item, index){
//     output = output + '<p>' + item + ' is at index of: ' + index + '</p>';
//     $('#output').html(output);
// });
//
// pricesAfterTax = prices.map(function (price){
//     let tax = (price * 0.0825).toFixed(2);
//     let total = (parseFloat(price) + parseFloat(tax).toFixed(2));
//     return parseFloat(total).toFixed(2);
// });
//
// pricesAfterTax.forEach(function (item){
//     output = output + "<p>" + item + "</p>";
//     $('#output').html(output);
// });


// let things = ['book', 'pencil', 'marker', 'eraser'];
// let pluralThings = things.map(function (thing, index){
//     thing = thing + 's';
//     if (index === 0) {
//         output = '<p>You must bring the following items:</p>';
//         output = output + '<p>' + thing + '</p>';
//     }
//     output = output + '<p>' + thing + '</p>';
//     $('#output').html(output);
// });

// ===== ES6 ===== //
// let things = ["book", "pencil", "marker", "eraser"];
// let pluralThings = things.map((thing, index) => {
//     if (index === 0) {
//         output = "<p>You must bring the following items:</p>";
//     }
//     output += `<p>${thing}s</p>`;
//     $("#output").html(output);
// });


const cars = [
    {
        make: 'Dodge',
        model: 'Ram',
        mileage: 1000
    },
    {
        make: 'Ford',
        model: 'F-150',
        mileage: 2000
    },
    {
        make: 'Chevrolet',
        model: '1500',
        mileage: 3000
    },
    {
        make: 'GMC',
        model: 'Sierra',
        mileage: 4000
    },
];


// ES5 //
// const mileages = cars.map(function (car){
//     return car.mileage;
// });
//
// mileages.forEach(function (mileage){
//     output = output + '<p>' + mileage + '</p>';
//     $('#output').html(output);
// });

// ES6 //
// const mileages = cars.map((car) => car.mileage);
//
// mileages.forEach(function (mileage){
//     output = output + '<p>' + mileage + '</p>';
//     $('#output').html(output);
// });

const under3k = cars.filter(function (car){
    return car.mileage < 3000;
})

under3k.forEach(function (car){
    output = output + '<p>' + under3k + '</p>'
    $('#output').html(output);
})








const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// let emails = users.map((emails) => emails.email);
//
// emails.forEach(function (email){
//     output = output + '<p>' + email + '</p>';
//     $('#output').html(output);
// })


// EXERCISE 3 Use .map to create an array of strings where each element is a user's email address//
let emails = users.map(function (user){
    user = user.email;
    return user;
})

// ES6 //
let es6emails = users.map(user => user.email);


// EXERCISE 2 Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array. //
let trilinguals = users.filter(function (user) {
    return user.languages.length >= 3;
});





















