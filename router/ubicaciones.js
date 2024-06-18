const express = require('express');
const { Ubicacion } = require('C:\\Users\\alan1\\Documents\\GitHub\\DW_M3.3.1\\controllers\\ubicacionController');
const router = express.Router();

// Obtener todas las ubicaciones
router.get('/', async (req, res) => {
    try {
        const ubicaciones = await Ubicacion.findAll();
        res.json(ubicaciones);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las ubicaciones' });
    }
});

// Obtener una ubicación por ID
router.get('/:id', async (req, res) => {
    try {
        const ubicacion = await Ubicacion.findByPk(req.params.id);
        if (ubicacion) {
            res.json(ubicacion);
        } else {
            res.status(404).json({ error: 'Ubicación no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la ubicación' });
    }
});

// Crear una nueva ubicación
router.post('/', async (req, res) => {
    try {
        const nuevaUbicacion = await Ubicacion.create(req.body);
        res.status(201).json(nuevaUbicacion);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la ubicación' });
    }
});

// Actualizar una ubicación existente
router.put('/:id', async (req, res) => {
    try {
        const ubicacion = await Ubicacion.findByPk(req.params.id);
        if (ubicacion) {
            await ubicacion.update(req.body);
            res.json(ubicacion);
        } else {
            res.status(404).json({ error: 'Ubicación no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la ubicación' });
    }
});

// Eliminar una ubicación
router.delete('/:id', async (req, res) => {
    try {
        const ubicacion = await Ubicacion.findByPk(req.params.id);
        if (ubicacion) {
            await ubicacion.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Ubicación no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la ubicación' });
    }
});

module.exports = router;
