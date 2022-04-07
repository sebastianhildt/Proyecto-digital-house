const Sequelize = require('sequelize');
const sequelize = require('../database');

const Genero = sequelize.define('generos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
});
module.exports = Genero;