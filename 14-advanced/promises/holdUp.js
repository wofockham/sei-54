// setTimeout expects a callback -- it does not use Promises
// task: wrap setTimeout in a Promise (so it works with .then)

const holdUp = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

// Alternatives:

// No curlies: implicit return
// const holdUp = (duration) => new Promise((resolve) => {
//     setTimeout(resolve, duration);
// });

// No curlies, no return: implicit return all the way done:
// const holdUp = (duration) => new Promise((resolve) => setTimeout(resolve, duration));

// Make this code work:
holdUp(3000).then(() => {
    console.log('3 seconds have elapsed');
}).then(() => {
    console.log('This also appears');
});
