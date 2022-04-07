const Cancion = require('../models/Cancion');

async function getCanciones(req, res) {
    const canciones = await Cancion.findAll();
    res.json({
        data: canciones
    });
}
async function getOneCanciones(req, res) {
    const { id } = req.params;
    const cancion = await Cancion.findOne({
        where: {
            id
        }
    });
    res.json(cancion);
}
async function createCanciones(req, res) {
    const { titulo, duracion, artista_id, album_id, genero_id, created_at, updated_at } = req.body;

    try {
        const newCancion = await Cancion.create({
            titulo,
            duracion,
            created_at,
            updated_at,
            artista_id,
            album_id,
            genero_id
        });
        if (newCancion) {
            return res.json({
                message: 'Cancion creada correctamente',
                data: newCancion
            });
        }
    } catch (e) {
        res.status(500).json({
            message: 'Something goees wrong',
            data: {},
            err: e
        })
    }
}
async function updateCanciones(req, res) {
    const { id } = req.params;
    const { titulo, duracion, artista_id, album_id, genero_id, created_at, updated_at } = req.body;

    const canciones = await Cancion.findAll({
        where: {
            id
        }
    });
    if (canciones.length > 0) {
        canciones.forEach(async cancion => {
            await cancion.update({
                titulo,
                duracion,
                created_at,
                updated_at,
                artista_id,
                album_id,
                genero_id
            });
        });
    }
    return res.json({
        message: 'Cancion actualizada correctamente',
        data: canciones
    })
}

async function deleteCancion(req, res) {
    const { id } = req.params;

    const deleteRowCount = await Cancion.destroy({
        where: {
            id
        }
    })
    res.json({
        message: 'Cancion eliminada correctamente',
        count: deleteRowCount
    })
}
module.exports = {
    createCanciones,
    getCanciones,
    getOneCanciones,
    updateCanciones,
    deleteCancion
};