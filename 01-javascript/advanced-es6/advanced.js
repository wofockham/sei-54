// ES6 added classes to Javascript

class Human {
    hasBlood() {
        console.log("I am filled with blood");
    }
}

class Actor extends Human {
    awardSpeech() {
        console.log("Thanks for this award");
    }
}

class MarxBrother extends Actor {
    constructor(firstName) { // like initialize in Ruby
        super(); // this runs the constructor from Actor() if any.
        this.firstName = firstName;
        this.surname = "Marx";
    }

    play() {
        console.log("I am playing a guitar");
    }
};

const groucho = new MarxBrother('Groucho');
const chico = new MarxBrother();

console.log(groucho);
console.log(chico);

groucho.play();
groucho.awardSpeech();
groucho.hasBlood();

// Arrow functions //////////////////////////////////////////////////

// you have typed function () {} enough times
// THESE FUNCTIONS BEHAVE DIFFERENTLY WITH `this`

// const add = function (a, b) {
//     return a + b;
// };

// fat arrow
const add = (a, b) => {
    return a + b;
};

// arrow functions have implicit return IF you don't use curlies
const quickAdd = (a, b) => a + b;

// Destructuring ////////////////////////////////////////////////////
// A quick way of creating shortcuts to things inside objects.

const gummo = {
    name: 'Gummo Marx',
    instrument: 'voice',
    vice: "being obscure"
};

// This doesn't save a lot of time:
// const name = gummo.name;
// const instrument = gummo.instrument;
// const vice = gummo.vice;

const {name, instrument, vice} = gummo; // Object destructuring

console.log(`My name is ${ name }`);
console.log(`${ name } plays the ${ instrument }`);
console.log(`My vice is ${ vice}`);