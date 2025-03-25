'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personagem extends Model {
    static associate(models) {
      Personagem.belongsTo(models.Usuario, {
        foreignKey: 'usuario_id'
      });
      Personagem.belongsTo(models.Raca, {
        foreignKey: 'raca_id'
      });
      Personagem.belongsTo(models.Classe, {
        foreignKey: 'classe_id'
      });
      Personagem.belongsTo(models.Campanha, {
        foreignKey: 'campanha_id'
      });
      Personagem.belongsTo(models.Atributo, {
        foreignKey: 'atributo_id'
      });
    }
  }
  Personagem.init({
    atributos_id: DataTypes.NUMBER,
    nome: DataTypes.STRING,
    nivel: DataTypes.INTEGER,
    xp: DataTypes.INTEGER,
    ca_base: DataTypes.INTEGER,
    vida: DataTypes.INTEGER,
    capacidade_peso: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Personagem',
    tableName: 'personagens'
  });
  return Personagem;
};