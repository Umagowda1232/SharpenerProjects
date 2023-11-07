// const express = require('express');
// //import express from "express";(if we use type: module in package.json then use this line orelse use the upper line)

// const bodyParser = require('body-parser');

// const app = express();

// const adminRoutes = require('./routes/admin ');
// const shopRoutes = require('./routes/shop');

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(adminRoutes);
// app.use(shopRoutes);

// app.use((req, res, next) => {
//     res.status(404).send('<h1>Page Not Found</h1>');
// });

// app.listen(3000);


const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const loginRoutes = require("./routes/login");
const homeRoutes = require('./routes/home');

app.use(bodyParser.urlencoded());
app.use(loginRoutes);
app.use(homeRoutes);

app.listen(4000);
