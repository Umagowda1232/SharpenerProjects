//import http from "http";
//const http = require('http');
import express from "express";
//const express = require('express');
const app = express();
//const port = 3000;
// app.use(port, () => {
//     console.log(`Server has started on port: ${port}`)
// });

app.use((req, res, next) => {
    console.log('In the Middleware');
    next();
});

app.use((req, res, next) => {
    console.log('In Another Middleware');
});

//const server = http.createServer(app);
app.listen(3000);