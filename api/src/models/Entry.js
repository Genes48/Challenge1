const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('entry', {
    concept: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  });
};
