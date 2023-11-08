const { log } = require('console');
const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const route = express.Router();

// /admin/add-product => GET
route.get('/add-product', (req, res, next) => {
    //console.log('In Another middleware');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    //res.redirect('/');
});

// /admin/add-product => POST
route.post('/add-product', (req, res, next) => {
    console.log('Form-Data:', req.body);
    res.send('<h1>Product Submitted</h1>');
});


module.exports = route;