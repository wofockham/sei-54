const express = require('express');
const ejs = require('ejs'); // mustache / handlebars
const _ = require('underscore');
const axios = require('axios');

// Basic setup
const server = express();
server.set('view-engine', ejs);
const PORT = 1337;

// Views and passing data to views
server.get('/', (req, res) => {
    const bros = 'Groucho Harpo Chico Zeppo'.split(' ');
    const randomBrother = _(bros).sample();
    res.render('home.ejs', {brother: randomBrother, lucky: _.random(100)}); // "Instance variables"
});

server.get('/hello', (req, res) => {
    res.send('Hello cruel world');
});

server.get('/goodbye', (req, res) => {
    res.send('Goodbye');
});

// Dyamic URLs
server.get('/fanclub/:name', (req, res) => {
    res.send(req.params.name + ' is a fan club member');
});

// Crappy calculator
server.get('/calc/:x/:y/:operator', (req, res) => {
    let answer;
    if (req.params.operator === '+') {
        answer = Number(req.params.x) + Number(req.params.y);
    } else if (req.params.operator === '-') {
        answer = Number(req.params.x) - Number(req.params.y);
    } // todo: handle multiplication, division, etc
    res.render('calc.ejs', { answer: answer });
});

// Render JSON
server.get('/info.json', (req, res) => {
    // Pretend this data comes from a database or something:
    res.json({
        name: 'Groucho',
        instrument: 'guitar',
        vice: 'cigars',
        luckyNumber: _.random(40)
    });
});

// Talk to an API
server.get('/trivia', (req, res) => {
    axios.get('http://numbersapi.com/random/trivia').then((response) => {
        res.send(response.data); // todo: res.render('trivia.ejs')
    });
});

// Form input
server.get('/ask', (req, res) => {
    res.render('ask.ejs');
});

server.get('/answer', (req, res) => {
    console.log(req.query.question); // req.query has form data
    res.render('answer.ejs', {question: req.query.question, answer: 'No comment'});
});

server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }`));