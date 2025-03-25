'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Atributo extends Model {
    static associate(models) {
      Atributo.belongsTo(models.Personagem, {
        foreignKey: 'atributos_id'
      });
    }
  }
  Atributo.init({
    for: DataTypes.INTEGER,
    des: DataTypes.INTEGER,
    con: DataTypes.INTEGER,
    int: DataTypes.INTEGER,
    sab: DataTypes.INTEGER,
    car: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Atributo',
    tableName: 'atributos'
  });
  return Atributo;
};