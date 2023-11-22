const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const categoria = db.define("categoria", {
  nome: {
    type: DataTypes.STRING(100),
    required: true,
    allowNull: false,
  },
}, {
  freezeTableName: true,
  createdAt: false,
  updatedAt: false
});

module.exports = categoria;
