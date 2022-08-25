// Promises are an evolution of callbacks.
// a way to handle or process data from an asynchronous process whenever that finishes (or an event occurs)

const fs = require('fs');

// recreate cat
// fs.readFile('flintstones.txt', 'utf-8', (err, content) => { // error first pattern
//     if (err) {
//         throw err; // dramatic return
//     }

//     console.log(content);
// });


// A Promise wrapper around the above fs.readFile
const readFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf-8', (err, content) => {
            if (err) {
                return reject(err); // invoke all the .catch callbacks
            }
            resolve(content); // invoke all the .then callbacks
        });
    });
};

// Promises let us handle errors or success seperately (in .catch and .then, respectively)
// readFile('flintstones.txxxt').then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.error('something bad happen', err);
// });

/// You can attach multiple callbacks .then().then().then().catch().catch().catch()

// You can attach your .then callbacks later (and they'll run later)

const flintstonesPromise = readFile('flintstones.txt');

flintstonesPromise.then((c) => {
    console.log(c);
});


setTimeout(() => {
    // You can attach .then later in your code AND later in time:
    flintstonesPromise.then((content) => {
        console.log('this has happened 11 seconds after the file closed but we can still see the data');
        console.log(content);
    });
}, 11000);
