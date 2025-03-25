'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Campanha extends Model {
    static associate(models) {
      Campanha.hasMany(models.Personagem, {
        foreignKey: 'campanha_id'
      });
    }
  }
  Campanha.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    gm_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Campanha',
    tableName: 'campanhas'
  });
  return Campanha;
};