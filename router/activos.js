const express = require('express');
const { Activo } = require('C:\\Users\\alan1\\Documents\\GitHub\\DW_M3.3.1\\models\\activoModel.js');
const router = express.Router();

// Obtener todos los activos
router.get('/', async (req, res) => {
    try {
        const activos = await Activo.findAll();
        res.json(activos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los activos' });
    }
});

// Obtener un activo por ID
router.get('/:id', async (req, res) => {
    try {
        const activo = await Activo.findByPk(req.params.id);
        if (activo) {
            res.json(activo);
        } else {
            res.status(404).json({ error: 'Activo no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el activo' });
    }
});

// Crear un nuevo activo
router.post('/', async (req, res) => {
    try {
        const nuevoActivo = await Activo.create(req.body);
        res.status(201).json(nuevoActivo);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el activo' });
    }
});

// Actualizar un activo existente
router.put('/:id', async (req, res) => {
    try {
        const activo = await Activo.findByPk(req.params.id);
        if (activo) {
            await activo.update(req.body);
            res.json(activo);
        } else {
            res.status(404).json({ error: 'Activo no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el activo' });
    }
});

// Eliminar un activo
router.delete('/:id', async (req, res) => {
    try {
        const activo = await Activo.findByPk(req.params.id);
        if (activo) {
            await activo.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Activo no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el activo' });
    }
});

module.exports = router;
