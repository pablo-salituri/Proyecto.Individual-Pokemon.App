const { DataTypes, UUIDV4 } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon',
  {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    Serial: {
      type: DataTypes.STRING,
      defaultValue: uuidv4()
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    Imagen: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    Vida: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Ataque: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Defensa: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Velocidad: {
      type: DataTypes.INTEGER,
    },
    Altura: {
      type: DataTypes.INTEGER,
    },
    Peso: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false
  });
};


