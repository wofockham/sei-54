// # Collections!

// Log out the answers to all of the following questions!

// Here is some data that you can work with. 

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 },
];

const words = [
  "attoparsec", "batch", "Cinderalla Book", "Dr. Fred Mbogo", "eat flaming death", "fandango on core", "Foonly", "goat file", "Halloween Documents", "I see no X here", "Imminent Death Of The Net Predicted!", "jibble", "kilogoogle", "larval stage", "maximum Maytag mode", "nybble", "octal forty", "pico-", "quantum bogodynamics", "rubber-hose cryptanalysis", "sigmonster", "tail recursion", "unswizzle", "VAXen", "webmaster", "XEROX PARC", "yak shaving", "Zero-One-Infinity Rule"
]; // Random words from here... http://www.catb.org/jargon/html/go01.html

// ## Exercises

// - Sort the ` people ` by 'uid'
const sortedPeople = _(people).sortBy('uid');
console.table(sortedPeople);

// - Group the random words by the lower case version of their first letter
const firstLowerLetter = function (string) {
    return string[0].toLowerCase();
};

console.log( _(words).groupBy(firstLowerLetter) );

// - Check to see if all the words have more than 3 characters
const moreThan3 = function (string) {
    return string.length > 3;
};

const allMoreThan3 = _(words).every(moreThan3);
console.log( allMoreThan3, 'all are more than 3' );

// - Check if some words are over twenty characters long
const moreThan20 = function (string) {
    return string.length > 20;
};
const someMoreThan20 = _(words).some(moreThan20);
console.log( someMoreThan20, 'some more than 20' );

// - Get an array of all of the uids in ` people `
const uids = _(people).pluck('uid');
console.log(uids);

// - Find the person with the highest uid
const highestPerson = _(people).max('uid');
console.log(highestPerson);

// - Return an object that says how many even numbers and how many odd numbers there are in ` numbers `
const oddOrEven = function (n) {
    if (n % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
};

const oddEvenCounts = _(numbers).countBy(oddOrEven);
console.log( oddEvenCounts );

// - Get three random numbers out of ` numbers `
console.log( _(numbers).sample(3) );

// ## Remember!

// You have the [documentation!](https://underscorejs.org/)