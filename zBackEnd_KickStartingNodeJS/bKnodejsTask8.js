//BELOW CODE IS THE FIRST CODE THE BASIC ONE
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;
//     if (url === '/') {
//         res.write('<html>');
//         res.write('<head><title>Read and Write File</title></head>');
//         res.write('<body><form action="/message" method="POST"><input type="text" name="message" ><button type="submit"> SEND</button></form></body>');
//         res.write('</html>');
//         return res.end();

//     }
//     if (url === '/message' && method === 'POST') {
//         const body = [];
//         req.on('data', (chunk) => {
//             console.log(chunk);
//             body.push(chunk);
//         });
//         req.on('end', () => {
//             const parsedBody = Buffer.concat(body).toString();
//             const message = parsedBody.split('=')[1];
//             fs.writeFileSync('message.txt', message);
//         });
//         res.statusCode = 302;
//         res.setHeader('Location', '/');
//         return res.end();
//     }
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page</title></head>');
//     res.write('<body><h1>Hello From Server!</h1></body>');
//     res.write('</html>');
//     res.end();
// });

// server.on('error', (error) => {
//     console.error('Server error:', error);
// });

// server.listen(8000);

//////// //THE ABOVE CODE IS FOR TAKING THE DATA AS CHUNK AND STORING IN ARRAY USING BUFFER METHOD// // /////////


// THE BELOW CODE IS YASH SIR METHOD TAUGHT IN VIDEO BUT DIDNT GET OUTPUT

// const fs = require('fs');
// const path = require('path');

// const requestHandler = (req, res) => {
//     const url = req.url;
//     const method = req.method;
//     const body = [];

//     if (url === "/") {
//         fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
//             if (err) {
//                 console.log(err);
//             }
//             console.log(`data from file` + data);
//             res.write("<html>");
//             res.write("<head><title>Enter Message</title></head>");
//             res.write(`<body>${data}</body>`);
//             res.write(`<body><form action="/message" method="POST"><input type="text" name="message" ><button type="submit"> Send </button></form></body>`);
//             res.write("</html>");
//             return res.end();
//         });

//     } else if (url === "/message" && method === "POST") {
//         req.on("data", (chunk) => {
//             body.push(chunk);//array

//         });
//         return req.on("end", () => {
//             const parsedBody = Buffer.concat(body).toString();
//             console.log('parsedbody>>>>>', parsedBody)
//             const message = parsedBody.split('=')[1];//['message', 'my name is Uma'];
//             fs.writeFile("message.txt", message, (err) => {
//                 if (err) {
//                     console.log(err)
//                 }
//                 console.log(`indise fs.writefile`);
//                 res.statusCode = 302;
//                 res.setHeader("Location", "/");
//                 return res.end();
//             });
//         });
//     }
//     else {
//         res.setHeader("Content-Type", "text/html");
//         res.write('<html>');
//         res.write('<head><title>My First Page</title></head>');
//         res.write('<body><h1>Hello From Server!</h1></body>');
//         res.write('</html>');
//         res.end();
//     }
// };
// module.exports = requestHandler;


// BELOW CODE IS THE CORRECT ONE WHICH GET OUTPUT

//BELOW CODE IS THE FIRST CODE THE BASIC ONE


const http = require('http')
const fs = require('fs')

let value;

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url == '/') {

        res.write('<html>');
        res.write('<title>Read and write file</title>');
        res.write(`<body><h2>${value}</h2><form action="/message" method="POST"><input type="text" name="message"></input><button type="submit">SEND</button></form></body>`);
        res.write('</html>');
        res.end();

    }




    if (url == '/message' && method == 'POST') {



        const body = [];

        req.on('data', (chunk) => {

            body.push(chunk);

        });

        req.on('close', () => {
            const parsedbody = Buffer.concat(body).toString();
            console.log(parsedbody);
            const message = parsedbody.split('=');
            value = message[1];
            fs.writeFileSync('Messagetext.txt', message[1]);
        })

        res.setHeader('Location', '/')
        res.statusCode = 302;
        return res.end()
    }


});

server.on('error', (error) => {
    console.error('Server error:', error);
});
server.listen(3000);


