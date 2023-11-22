 const { Sequelize } = require("sequelize");

//Postgres
/*const sequelize = new Sequelize("camel", "postgres", "1101051101", {
   host: "localhost",
   dialect: "postgres",
   logging: true
});*/

//SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/db.sqlite'
})

try {
   sequelize.authenticate();
   console.log('Conectado com sucesso ao Banco de Dados');
} catch (error) {
   console.error('Não foi possivel conectar ao banco de dados:', error);
}

 module.exports = sequelize