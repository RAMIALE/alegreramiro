// sequelize.js

const Sequelize = require('sequelize');

// Configura la conexión a la base de datos
const sequelize = new Sequelize('base_de_datos', 'nombre_de_usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'mysql', 
});

// Define el modelo para las publicaciones
const Publicacion = sequelize.define('publicacion', {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  contenido: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  fechaCreacion: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  imagenURL: {
    type: Sequelize.STRING,
  },
});

// Sincroniza el modelo con la base de datos
sequelize.sync()
  .then(() => {
    console.log('Base de datos y tabla creadas.');
  })
  .catch((error) => {
    console.error('Error al crear la base de datos y la tabla:', error);
  });

module.exports = { sequelize, Publicacion };
