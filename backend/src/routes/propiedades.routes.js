const express = require('express');
const {
    getGeneros,
    getAlbum,
    getArtista,
    getOneGeneros,
    getOneAlbum,
    getOneArtista
} = require('../controllers/propiedades.controller');
const router = express.Router();
router.get('/generos', getGeneros);
router.get('/albumes', getAlbum);
router.get('/artistas', getArtista);
// getOne
router.get('/generos/:id', getOneGeneros);
router.get('/albumes/:id', getOneAlbum);
router.get('/artistas/:id', getOneArtista);
module.exports = router;