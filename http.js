const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to Home');
        return;
    }

    if (req.url === '/about') {
        res.end('Hello World');
        return;
    }
    res.end(`<h1>No page found</h1> <a href="/">Back</a>`);
})

server.listen(5000)