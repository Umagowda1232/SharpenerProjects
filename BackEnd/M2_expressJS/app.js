const express = require('express');
//import express from "express";(if we use type: module in package.json then use this line orelse use the upper line)

const bodyParser = require('body-parser');

const app = express();

// app.use((req, res, next) => {
//     console.log('In the middleware!');
//     next();
// });

// app.use('/', (req, res, next) => {
//     console.log('The page aways runs!');
//     next();
// });

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
    //console.log('In Another middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello FRom Express!</h1>');
});

app.listen(3000);