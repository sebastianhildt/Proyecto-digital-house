const Sequelize = require('sequelize');
const sequelize = require('../database');
const Album = require('./Album');
const Artista = require('./Artista');
const Genero = require('./Genero');
const Cancion = sequelize.define('canciones', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    titulo: {
        type: Sequelize.STRING
    },
    duracion: {
        type: Sequelize.STRING
    },
    created_at: {
        type: Sequelize.DATE
    },
    updated_at: {
        type: Sequelize.DATE
    },
    genero_id: {
        type: Sequelize.INTEGER
    },
    album_id: {
        type: Sequelize.INTEGER
    },
    artista_id: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

// Album
// Album.hasMany(Cancion, { foreingKey: 'album_id', sourceKey: 'id', otherKey: 'album_id' });
// Cancion.belongsTo(Album, { foreingKey: 'album_id' })

// Artista
// Cancion.hasMany(Artista, { foreingKey: 'artista_id', sourceKey: 'id' });
// Cancion.belongsTo(Artista, { foreingKey: 'artista_id', sourceKey: 'id' })

// Genero
// Cancion.hasMany(Genero, { foreingKey: 'genero_id', sourceKey: 'id' });
// Cancion.belongsTo(Genero, { foreingKey: 'genero_id', sourceKey: 'id' })

module.exports = Cancion;