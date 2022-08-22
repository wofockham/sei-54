// recreate `cat` in JS

const fs = require('fs'); // fs is from the built-in Node.JS Standard Library

// Synchronous: wrong! Not enough callbacks!
// const fileData = fs.readFileSync('simpsons.txt', 'utf-8');
// console.log(fileData);

// Asynchronous: right!
// Many asynchronous Node.JS functions implement The Error First Pattern
fs.readFile('simpsons.txt', 'utf-8', function (error, data) {
    if (error) {
        return console.error(error); // A bit wanky
    }
    console.log(data);
});

console.log('this appears first');
