const { DataTypes } = require('sequelize');
const sequelize = require('C:\\Users\\alan1\\Documents\\GitHub\\DW_M3.3.1\\config\\database.js'); // Importa la instancia de Sequelize

const Ubicacion = sequelize.define('Ubicacion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

async function obtenerTodos() {
    try {
        const ubicaciones = await Ubicacion.findAll();
        return ubicaciones;
    } catch (error) {
        throw new Error('Error al obtener las ubicaciones');
    }
}

async function obtenerPorId(id) {
    try {
        const ubicacion = await Ubicacion.findByPk(id);
        return ubicacion;
    } catch (error) {
        throw new Error('Error al obtener la ubicación');
    }
}

async function agregarUbicacion(nuevaUbicacion) {
    try {
        await Ubicacion.create(nuevaUbicacion);
    } catch (error) {
        throw new Error('Error al crear la ubicación');
    }
}

async function actualizarUbicacion(id, datosUbicacion) {
    try {
        const ubicacion = await Ubicacion.findByPk(id);
        if (ubicacion) {
            await ubicacion.update(datosUbicacion);
            return true;
        }
        return false;
    } catch (error) {
        throw new Error('Error al actualizar la ubicación');
    }
}

async function eliminarUbicacion(id) {
    try {
        const ubicacion = await Ubicacion.findByPk(id);
        if (ubicacion) {
            await ubicacion.destroy();
            return true;
        }
        return false;
    } catch (error) {
        throw new Error('Error al eliminar la ubicación');
    }
}

module.exports = { Ubicacion, obtenerTodos, obtenerPorId, agregarUbicacion, actualizarUbicacion, eliminarUbicacion };
