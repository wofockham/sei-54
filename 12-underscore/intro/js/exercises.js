console.log( _.VERSION );

// collections
const nums = _.range(1, 13);

// .each() //////////////////////////////////////////////////////////
_(nums).each(function (n, index, entireArray) {
    console.log(n, index, entireArray);
});

// .each() with an object ///////////////////////////////////////////
const sales = {
    January: 15,
    February: 11,
    March: 3
};

// Note: value comes before key
_(sales).each(function (amount, month) {
    console.log(`In ${ month } the sales were ${ amount }.`);
});

// .map() ///////////////////////////////////////////////////////////
const multiplyBy19 = function (a) {
    return a * 19;
};

const multiplesOf19 = _(nums).map(multiplyBy19);
console.log(multiplesOf19);

// .map() for objects ///////////////////////////////////////////////
const salesInfo = _(sales).map(function (total, month) {
    return `${ total } sales in ${ month }.`
});
console.log(salesInfo);

// .reduce() ////////////////////////////////////////////////////////
// const total = _(nums).reduce(function (a, b) {
//     return a + b;
// });
// console.log(total);

const total = _(nums).reduce(function (runningTotal, n) {
    console.log(`runningTotal: ${ runningTotal }, return: ${ runningTotal + n }`);
    return runningTotal + n;
});
console.log(total);

// .reduce() also works for objects /////////////////////////////////

/////////////////////////////////////////////////////////////////////

// .find() //////////////////////////////////////////////////////////
const divisibleBy5 = function (n) {
    return n % 5 === 0;
};

const fivey = _(nums).find(divisibleBy5);
console.log(fivey);

// .filter() ////////////////////////////////////////////////////////
const allFives = _(nums).filter(divisibleBy5);
console.log(allFives);

// .reject() ////////////////////////////////////////////////////////
const notFives = _(nums).reject(divisibleBy5);
console.log(notFives);

// .pluck() /////////////////////////////////////////////////////////
const bros = [
    {name: 'Groucho', instrument: 'guitar', disposition: 'surly'},
    {name: 'Harpo', instrument: 'harp', disposition: 'angelic'},
    {name: 'Chico', instrument: 'piano', disposition: 'lecherous'},
];

const instruments = [];
for (let i = 0; i < bros.length; i++) {
    instruments.push( bros[i].instrument );
}
console.log(instruments);