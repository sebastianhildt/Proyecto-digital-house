const Sequelize = require('sequelize');
const sequelize = require('../database');

const Artista = sequelize.define('artistas', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },

    nombre: {
        type: Sequelize.STRING
    },

    apellido: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
});

module.exports = Artista;