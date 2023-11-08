const path = require('path');
const express = require('express');
//import express from "express";(if we use type: module in package.json then use this line orelse use the upper line)

//const rootDir = require('../util/path');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact')

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);


// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser')

// const loginRoutes = require("./routes/login");
// const homeRoutes = require('./routes/home');

// app.use(bodyParser.urlencoded());
// app.use(loginRoutes);
// app.use(homeRoutes);

// app.listen(4000);
