const { Sequelize } = require('sequelize');

//Postgresql connection

const postgresqlDatabase = "SDGP_2023";
const postgresqlUsername = "warmind2x";
const postgresqlDPassword = "root";

 export const sequelize = new Sequelize(postgresqlDatabase, postgresqlUsername, postgresqlDPassword, {
    host: 'localhost',
    dialect: 'postgres'
  });

  async  function connectDatabase(){
    try {
        await sequelize.authenticate();
        await sequelize.sync({force: false});
        console.log("\n");
        console.log("*******************************".green);
        console.log("✔ PosgreSQL Successfully Connected!".green);
        console.log("*******************************".green);
        console.log("\n");
    } catch (error) {
        console.log("\n");
          console.log("*******************************".red);
          console.log("    PosgreSQL Connection Failed    ".red);
          console.log("*******************************".red);
          console.log("\n");
          console.log(error);
    }

  };

  connectDatabase();