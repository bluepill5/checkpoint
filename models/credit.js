const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('credits', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  description: DataTypes.TEXT,
  periocidad: DataTypes.TEXT,
  cifra: DataTypes.FLOAT,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});