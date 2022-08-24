const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio'); // jQuery for Node

const sourceURL = 'https://www.madcoversite.com/dmd-alphabetical.html';

axios.get(sourceURL).then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);

    const entries = [];
    const $rows = $('table table tr:nth-child(n+2)'); // This took some time.

    $rows.each(function () { // need `this` so we can't use an arrow function
        const $cells = $('td', this);

        const entry = {
            sound: $cells.eq(0).text(),
            description: $cells.eq(1).text(),
            source: $cells.eq(2).text(),
            title: $cells.eq(3).text()
        };

        entries.push(entry);
    });

    fs.writeFile('./martin.json', JSON.stringify(entries, null, 2), () => {
        console.log(`martin.json saved: ${ entries.length } entries`);
    });
});
