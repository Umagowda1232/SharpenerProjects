



// const http = require('http');

// const server = http.createServer((req, res) => {
//     // Log the request method and URL
//     console.log('Request Method:', req.method);
//     console.log('Request URL:', req.url);

//     // Set the Content-Type header to text/html
//     res.setHeader('Content-Type', 'text/html');

//     // Implement simple routing based on the URL path
//     if (req.url === '/home') {
//         res.write('<html><body><h1>Welcome home</h1></body></html>');
//     } else if (req.url === '/about') {
//         res.write('<html><body><h1>Welcome to About Us page</h1></body></html>');
//     } else if (req.url === '/node') {
//         res.write('<html><body><h1>Welcome to my Node Js project</h1></body></html>');
//     } else {
//         res.write('<html><body><h1>404 Not Found</h1></body></html>');
//     }

//     // End the response
//     res.end();
// });

// server.on('error', (error) => {
//     console.error('Server error:', error);
// });

// server.listen(5000);



const http = require('http');


const server = http.createServer((req, res) => {
    const url = req.url;

    if (url == '/') {
        res.write('<html><title>Create server</title><body><h2>Uma Welcome Create server Buddy  !</h2></body></html');
    }

    if (url === '/home') {
        res.write('<html><title>Create server</title><body><h2>Welcome home</h2></body></html');
    }


    if (url === '/about') {
        res.write('<html><title>Create server</title><body><h2> Welcome to About Us page</h2></body></html');
    }


    if (url === '/node') {
        res.write('<html><title>Create server</title><body><h2> Welcome to My Node.js Project</h2></body></html');
    }




});

server.on('error', (error) => {
    console.error('Server error:', error);
});

server.listen(7000);