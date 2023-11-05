const express = require('express');
//import express from "express";(if we use type: module in package.json then use this line orelse use the upper line)

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware!');
    next();
});


app.use((req, res, next) => {
    console.log('In Another middleware');
    res.send('<h1>Hello FRom Express!</h1>');
});

app.listen(3000);