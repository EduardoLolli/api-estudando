'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Classe extends Model {
    static associate(models) {
      Classe.hasMany(models.Personagem, {
        foreignKey: 'classe_id'
      });
    }
  }
  Classe.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    dado_vida: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Classe',
    tableName: 'classes'
  });
  return Classe;
};