const express = require('express');
const {
    getCanciones,
    getOneCanciones,
    createCanciones,
    updateCanciones,
    deleteCancion
} = require('../controllers/canciones.controller');
const router = express.Router();
router.get('/canciones', getCanciones);
router.get('/canciones/:id', getOneCanciones);
router.post('/canciones', createCanciones);
router.put('/canciones/:id', updateCanciones);
router.delete('/canciones/:id', deleteCancion);
module.exports = router;