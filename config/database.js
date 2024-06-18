const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dwm_3', 'backenduser', 'zedmercy77', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

module.exports = sequelize;
