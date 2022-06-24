// Factory (unofficial standard)

const catFactory = function (n, a, f) {
    return {
        name: n,
        age: a,
        furColor: f,
        species: 'feline',
        meow: function () {
            console.log('Meow, my name is ', this.name);
        }
    };
};

const cuteCats = [
    catFactory('Angel', 18, 'grey'),
    catFactory('Evil', 14, 'red'),
    catFactory('Meh', 12, 'white')
];

console.table(cuteCats);

for (let i = 0; i < cuteCats.length; i++) {
    const cat = cuteCats[i];
    console.log(`${ cat.name } has ${ cat.furColor } fur color`);
}

///////////////////////////////////////////////////////////////////////////////
// Prototypes
// Historically interesting but not essential
// Especially now that we have classes
// Probably don't use these.

// Constructor (similar to a factory but with more magic)
const Cat = function (n, a, f) {
    // No need to create an object: an object is already there for, and it's called `this`.
    this.name = n;
    this.age = a;
    this.furColor = f;
    // No need to return `this`: `this` gets returned automagically.
};

const cooper = new Cat('Cooper', 7, 'grey');
const audrey = new Cat('Audrey', 7, 'grey');

// The main "advantage"
// You can extend the prototype AFTER you create instances.

console.log(audrey.species); // undefined
Cat.prototype.species = 'feline';
console.log(audrey.species); // 'feline'