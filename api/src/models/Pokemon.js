const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon',
  {
    ID: {
      type: DataTypes.UUID,
      allowNull: false
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Imagen: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Vida: {
      type: DataTypes.STRING,     // TODO: Ver que tipo de dato es
      allowNull: false
    },
    Ataque: {
      type: DataTypes.STRING,     // TODO: Ver que tipo de dato es
      allowNull: false
    },
    Defensa: {
      type: DataTypes.STRING,     // TODO: Ver que tipo de dato es
      allowNull: false
    },
    Velocidad: {
      type: DataTypes.STRING,     // TODO: Ver que tipo de dato es
    },
    Altura: {
      type: DataTypes.STRING,     // TODO: Ver que tipo de dato es
    },
    Peso: {
      type: DataTypes.STRING,     // TODO: Ver que tipo de dato es
    },
  });
};


