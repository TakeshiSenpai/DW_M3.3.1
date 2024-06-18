const { DataTypes } = require('sequelize');
const sequelize = require('C:\\Users\\alan1\\Documents\\GitHub\\DW_M3.3.1\\config\\database.js');

const Responsable = sequelize.define('Responsable', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    numeroEmpleado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Función para listar todos los responsables
async function obtenerTodos() {
    try {
        const responsables = await Responsable.findAll();
        return responsables;
    } catch (error) {
        throw new Error('Error al obtener los responsables');
    }
}

// Función para obtener un responsable por su ID
async function obtenerPorId(id) {
    try {
        const responsable = await Responsable.findByPk(id);
        return responsable;
    } catch (error) {
        throw new Error('Error al obtener el responsable');
    }
}

// Función para agregar un nuevo responsable
async function agregarResponsable(nuevoResponsable) {
    try {
        await Responsable.create(nuevoResponsable);
    } catch (error) {
        throw new Error('Error al crear el responsable');
    }
}

// Función para actualizar un responsable existente
async function actualizarResponsable(id, datosResponsable) {
    try {
        const responsable = await Responsable.findByPk(id);
        if (responsable) {
            await responsable.update(datosResponsable);
            return true;
        }
        return false;
    } catch (error) {
        throw new Error('Error al actualizar el responsable');
    }
}

// Función para eliminar un responsable por su ID
async function eliminarResponsable(id) {
    try {
        const responsable = await Responsable.findByPk(id);
        if (responsable) {
            await responsable.destroy();
            return true;
        }
        return false;
    } catch (error) {
        throw new Error('Error al eliminar el responsable');
    }
}

module.exports = { Responsable, obtenerPorId, agregarResponsable, actualizarResponsable, eliminarResponsable, obtenerTodos }
