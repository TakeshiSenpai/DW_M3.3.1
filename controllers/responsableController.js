const ResponsableModel = require('C:\\Users\\alan1\\Documents\\GitHub\\DW_M3.3.1\\models\\responsableModel.js');

function listarResponsables(req, res) {
    res.json(ResponsableModel.obtenerTodos());
}

function obtenerResponsable(req, res) {
    const id = parseInt(req.params.id);
    const Responsable = ResponsableModel.obtenerPorId(id);
    if (Responsable) {
        res.json(Responsable);
    } else {
        res.status(404).send('Responsable no encontrado');
    }
}

function crearResponsable(req, res) {
    const nuevoResponsable = req.body;

    ResponsableModel.agregarResponsable(nuevoResponsable);
    res.status(201).send('Responsable creado con éxito');
}

function actualizarResponsable(req, res) {
    const id = parseInt(req.params.id);
    const datosResponsable = req.body;
    const resultado = ResponsableModel.actualizarResponsable(id, datosResponsable);
    if (resultado) {
        res.send('Responsable actualizado con éxito');
    } else {
        res.status(404).send('Responsable no encontrado');
    }
}

function eliminarResponsable(req, res) {
    const id = parseInt(req.params.id);
    const resultado = ResponsableModel.eliminarResponsable(id);
    if (resultado) {
        res.send('Responsable eliminado con éxito');
    } else {
        res.status(404).send('Responsable no encontrado');
    }
}

module.exports = { listarResponsables, obtenerResponsable, crearResponsable, actualizarResponsable, eliminarResponsable };
