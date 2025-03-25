'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Raca extends Model {
    static associate(models) {
      Raca.hasMany(models.Personagem, {
        foreignKey: 'raca_id'
      });
    }
  }
  Raca.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Raca',
    tableName: 'racas'
  });
  return Raca;
};