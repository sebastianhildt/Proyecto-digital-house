const Genero = require('../models/Genero');
const Album = require('../models/Album');
const Artista = require('../models/Artista');

async function getGeneros(req, res) {
    const generos = await Genero.findAll();
    res.json(generos);
}
async function getAlbum(req, res) {
    const albums = await Album.findAll();
    res.json(albums);
}
async function getArtista(req, res) {
    const artistas = await Artista.findAll();
    res.json(artistas);
}

// GetOne

async function getOneGeneros(req, res) {
    const { id } = req.params;
    const generos = await Genero.findOne({
        where: {
            id
        }
    });
    res.json(generos);
}
async function getOneAlbum(req, res) {
    const { id } = req.params;
    const albums = await Album.findOne({
        where: {
            id
        }
    });
    res.json({
        data: albums
    });
}
async function getOneArtista(req, res) {
    const { id } = req.params;
    const artistas = await Artista.findOne({
        where: {
            id
        }
    });
    res.json({
        data: artistas
    });
}
module.exports = {
    getGeneros,
    getAlbum,
    getArtista,
    getOneGeneros,
    getOneAlbum,
    getOneArtista,
};