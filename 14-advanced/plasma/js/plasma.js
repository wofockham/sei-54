const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = 600;  // TODO: get these dynamically from CSS
const height = 600;

const imgData = ctx.createImageData(width, height);

// Precalculate sine values between 0 and 255
const sineTable = [];
for (let i = 0; i <= 255; i++) {
    sineTable[i] = Math.round(((Math.sin(i * 2 * Math.PI / 255) * 255) + 255) / 2);
}

const sine = (n) => sineTable[ Math.abs(Math.floor(n)) % 256 ];
const plane = (x, y, vx, vy, phase, length) => sine(Math.floor((vx * x + vy * y) * length + phase));
const randN = (n) => Math.floor(n * Math.random());

const paletteFactory = (colors) => {
    const palette = [];
    const red = [];
    const green = [];
    const blue = [];
    const extent = Math.floor(255 / colors.length);

    for (let i = 0; i < colors.length; i++) {
        const j = (i+1) % colors.length;
        red[i] = (colors[i].r - colors[j].r) / extent;
        green[i] = (colors[i].g - colors[j].g) / extent;
        blue[i] = (colors[i].b - colors[j].b) / extent;
    }

    for (let i = 0; i <= extent; i++) {
        for (let j = 0; j < colors.length; j++) {
            palette[j * (extent + 1) + i] = {
                r: Math.floor(colors[j].r - red[j] * i),
                g: Math.floor(colors[j].g - green[j] * i),
                b: Math.floor(colors[j].b - blue[j] * i),
            };
        }
    }

    return palette;
};

// Define your own palettes as below:
// It's smoothest to start and end with the same color so you can cycle.
// const palette = paletteFactory([
//     {r: 247, g: 168, b: 168},
//     {r: 211, g: 102, b: 102},
//     {r: 127 + randN(127), g: 0, b: randN(255)},
//     {r: 153, g: 28, b: 9},
//     {r: 119, g: 13, b: 13},
//     {r: 99, g: 0, b: 0},
// ].reverse());

const palette = paletteFactory([
    {r: 0, g: 0, b: 0},
    {r: randN(255), g: randN(255), b: randN(255)},
    {r: randN(255), g: randN(255), b: randN(255)},
    {r: randN(255), g: randN(255), b: randN(255)},
    {r: randN(255), g: randN(255), b: randN(255)},
    {r: randN(255), g: randN(255), b: randN(255)},
    {r: randN(255), g: randN(255), b: randN(255)},
    {r: 0, g: 0, b: 0},
]);

const fill = (phase) => {
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            const pixel = (x + y * width) * 4;

            // You can mix more waves by adding them below:
            const shade1 = plane(x, y, 1.1, 0.9, phase, 1) / 3;
            const shade2 = plane(x, y, 2.3, 0.2, phase, 1) / 3;
            const shade3 = plane(x, y, -0.5, -0.8, phase / 3, -1.5) / 3;

            const shade = Math.floor(shade1 + shade2 + shade3) % 255;

            imgData.data[pixel] = palette[shade].r;
            imgData.data[pixel + 1] = palette[shade].g;
            imgData.data[pixel + 2] = palette[shade].b;
            imgData.data[pixel + 3] = 255;
        }
    }

    ctx.putImageData(imgData, 0, 0);
    requestAnimationFrame(() => fill(phase + 1));
};

fill(0);