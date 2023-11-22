 const { Sequelize } = require("sequelize");

 const sequelize = new Sequelize("camel", "postgres", "12345678", {
   host: "localhost",
   dialect: "postgres",
   logging: true
 });

 try {
   sequelize.authenticate();
   console.log('Conectado com sucesso ao Banco de Dados');
 } catch (error) {
   console.error('Não foi possivel conectar ao banco de dados:', error);
 }

 module.exports = sequelize