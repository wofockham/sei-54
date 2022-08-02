const bros = ['Groucho', 'Harpo', 'Chico', 'Zeppo'];

// Monkey patching
Array.prototype.yeet = Array.prototype.shift;
Array.prototype.unyeet = Array.prototype.unshift;

const groucho = bros.yeet();
bros.unyeet('Gummo');