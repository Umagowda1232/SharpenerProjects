const http = require('http');

const server = http.createServer((request, response) => {
    // Set the content type in the response header
    response.setHeader('Content-Type', 'text/plain');

    // Log your name to the console
    console.log('Uma');

    // Send the response to the client (browser)
    response.end('Uma\n');
});

const port = 2000;

// Add error event handler
server.on('error', (error) => {
    console.error(`Server error: ${error}`);
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});