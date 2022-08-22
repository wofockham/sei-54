// A simple HTTP web server in Node with just the standard library.

const http = require('http'); // from the Node standard library

http.createServer((req, res) => {
    console.log(`Serving request: ${ req.method } ${ req.url }`); // Budget logging
    if (req.url === '/hello') {
        res.end('Hello');
    } else if (req.url === '/goodbye') {
        res.end('Goodbye');
    } else if (req.url === '/groucho') {
        res.end('This is the groucho page');
    } else {
        res.end('Hello world from some random page');
    }
}).listen(1337); // Port to listen on

console.log('Server started on http://localhost:1337/');
