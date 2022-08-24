// let id = 0; // global variable: bad
// const nextID = function () {
//     return id++;
// };

// Higher Order Function
// const helloMaker = function () {
//     const greeting = "Hello World"; // The greeting persists through a closure.

//     return function () {
//         console.log(greeting);
//     };
// };

// const hey = helloMaker();
// hey(); // greeting still exists for hey() because it lives on in a closure.

// nextIDMaker returns a nextID function
const nextIDMaker = function () {
    let id = 0;
    return function () {
        return id++;
    };
};

const nextID = nextIDMaker();
const adrianID = nextID(); // 0

/////////////////////////////////////////////////////////////////////
// HTML Helpers

// const p = function (content) {
//     return `<p>${ content }</p>`;
// };

// const h1 = function (content) {
//     return `<h1>${ content }</h1>`;
// };

// const h2 = function (content) {
//     return `<h2>${ content }</h2>`;
// };

// const div = function (content) {
//     return `<div>${ content }</div>`;
// };

const tagFunctionMaker = function (tagName) {
    return function (content) {
        return `<${ tagName }>${ content }</${ tagName }>`;
    };
};

const p = tagFunctionMaker('p');
const h1 = tagFunctionMaker('h1');
const h2 = tagFunctionMaker('h2');
const div = tagFunctionMaker('div');

console.log( p('hotdogs') ); // <p>hotdogs</p>
console.log( h1('THE HEADING') ); // <h1>THE HEADING</h1>