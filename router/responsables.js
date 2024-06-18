const express = require('express');
const { Responsable } = require('C:\\Users\\alan1\\Documents\\GitHub\\DW_M3.3.1\\controllers\\responsableController');
const router = express.Router();

// Obtener todos los responsables
router.get('/', async (req, res) => {
    try {
        const responsables = await Responsable.findAll();
        res.json(responsables);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los responsables' });
    }
});

// Obtener un responsable por ID
router.get('/:id', async (req, res) => {
    try {
        const responsable = await Responsable.findByPk(req.params.id);
        if (responsable) {
            res.json(responsable);
        } else {
            res.status(404).json({ error: 'Responsable no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el responsable' });
    }
});

// Crear un nuevo responsable
router.post('/', async (req, res) => {
    try {
        const nuevoResponsable = await Responsable.create(req.body);
        res.status(201).json(nuevoResponsable);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el responsable' });
    }
});

// Actualizar un responsable existente
router.put('/:id', async (req, res) => {
    try {
        const responsable = await Responsable.findByPk(req.params.id);
        if (responsable) {
            await responsable.update(req.body);
            res.json(responsable);
        } else {
            res.status(404).json({ error: 'Responsable no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el responsable' });
    }
});

// Eliminar un responsable
router.delete('/:id', async (req, res) => {
    try {
        const responsable = await Responsable.findByPk(req.params.id);
        if (responsable) {
            await responsable.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Responsable no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el responsable' });
    }
});

module.exports = router;
