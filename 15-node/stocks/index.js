const express = require('express');
const ejs = require('ejs');
const stockfinder = require('stockfinder');

const server = express();
server.set('view-engine', ejs);

const PORT = 8888;
const API_KEY = 'pk_16a849fd637243a79fff90fa4d42bc5d';

server.get('/', (req, res) => {
    res.render('home.ejs');
});

server.get('/info', (req, res) => {
    stockfinder.getStock({ticker: req.query.symbol, apiKey: API_KEY}).then((result) => {
        res.render('info.ejs', { symbol: req.query.symbol, price: result.previousClose });
    });
});

server.listen(PORT, () => console.log(`Server running at http://localhost:${ PORT }/`));