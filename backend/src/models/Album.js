const Sequelize = require('sequelize');
const sequelize = require('../database');

const Album = sequelize.define('albumes', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },

    nombre: {
        type: Sequelize.STRING
    },

    duracion: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

module.exports = Album;