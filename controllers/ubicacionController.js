const UbicacionModel = require('C:\\Users\\alan1\\Documents\\GitHub\\DW_M3.3.1\\models\\ubicacionModel.js');

function listarUbicacions(req, res) {
    res.json(UbicacionModel.obtenerTodos());
}

function obtenerUbicacion(req, res) {
    const id = parseInt(req.params.id);
    const Ubicacion = UbicacionModel.obtenerPorId(id);
    if (Ubicacion) {
        res.json(Ubicacion);
    } else {
        res.status(404).send('Ubicacion no encontrado');
    }
}

function crearUbicacion(req, res) {
    const nuevoUbicacion = req.body;

    UbicacionModel.agregarUbicacion(nuevoUbicacion);
    res.status(201).send('Ubicacion creado con éxito');
}

function actualizarUbicacion(req, res) {
    const id = parseInt(req.params.id);
    const datosUbicacion = req.body;
    const resultado = UbicacionModel.actualizarUbicacion(id, datosUbicacion);
    if (resultado) {
        res.send('Ubicacion actualizado con éxito');
    } else {
        res.status(404).send('Ubicacion no encontrado');
    }
}

function eliminarUbicacion(req, res) {
    const id = parseInt(req.params.id);
    const resultado = UbicacionModel.eliminarUbicacion(id);
    if (resultado) {
        res.send('Ubicacion eliminado con éxito');
    } else {
        res.status(404).send('Ubicacion no encontrado');
    }
}

module.exports = { listarUbicacions, obtenerUbicacion, crearUbicacion, actualizarUbicacion, eliminarUbicacion };
