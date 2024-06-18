const express = require('express');
const sequelize = require('C:\\Users\\alan1\\Documents\\GitHub\\DW_M3.3.1\\config\\database.js');
const { Activo } = require('C:\\Users\\alan1\\Documents\\GitHub\\DW_M3.3.1\\models\\activoModel.js');
const { Ubicacion } = require('C:\\Users\\alan1\\Documents\\GitHub\\DW_M3.3.1\\models\\ubicacionModel.js');
const { Responsable } = require('C:\\Users\\alan1\\Documents\\GitHub\\DW_M3.3.1\\models\\responsableModel.js');
const app = express();
app.use(express.json());

const activosRouter = require('C:\\Users\\alan1\\Documents\\GitHub\\DW_M3.3.1\\router\\activos.js');
const ubicacionesRouter = require('C:\\Users\\alan1\\Documents\\GitHub\\DW_M3.3.1\\router\\ubicaciones.js');
const responsablesRouter = require('C:\\Users\\alan1\\Documents\\GitHub\\DW_M3.3.1\\router\\responsables.js');

app.use('/activos', activosRouter);
app.use('/ubicaciones', ubicacionesRouter);
app.use('/responsables', responsablesRouter);

const port = 3000;

sequelize.sync({ force: true })  // Usar { force: true } solo para desarrollo para sincronizar desde cero
  .then(() => {
    console.log('Tablas sincronizadas correctamente.');
    app.listen(port, () => {
      console.log(`Servidor escuchando en http://localhost:${port}`);
    });
  })
  .catch(error => {
    console.error('Error al sincronizar modelos con la base de datos:', error);
  });
