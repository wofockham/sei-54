// Callbacks Review

// A callback function is a function passed to another function.
// The callback function GETS CALLED FOR YOU, later, at some point in time.

// Javascript is asynchronous.

// Timers: A C B
console.log('A');
setTimeout(function () {
    console.log('B: Time has passed');
}, 5000);
console.log('C');

// jQuery's document ready: I III II
console.log('I');
$(document).ready(function () {
    console.log('II: the document is ready');
});
console.log('III');

// Event handlers: Groucho Chico AND THEN MAYBE Harpo (and maybe repeatedly)
console.log('Groucho');
$(document).on('click', function () {
    console.log('Harpo');
});
console.log('Chico');

///////////////////////////////////////////////////////////////////////////////
// You are not expected to understand this ////////////////////////////////////

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// How do we console.log() these colours individually;

// Traditional JS technique:
// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

// Ruby:
// colors.each do |c|
//    puts c
// end

// ES5:
colors.forEach(function (c) {
    console.log('called with', c);
});

// DIY:
// const each = function (array, callback) {
//     for (let i = 0; i < array.length; i++) {
//         callback(array[i]);
//     }
// };

// each(colors, function (c) {
//     console.log('here is a color', c);
// });
