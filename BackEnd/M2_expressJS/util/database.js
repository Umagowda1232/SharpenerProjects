const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Umavgowda@1232', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;