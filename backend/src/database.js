const Sequelize = require('sequelize');


const sequelize = new Sequelize('musicando', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        require: 30000,
        idle: 10000
    },
    // logging: true
});

module.exports = sequelize;