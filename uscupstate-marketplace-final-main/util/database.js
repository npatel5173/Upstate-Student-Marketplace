const Sequelize = require("sequelize").Sequelize;
const sequelize = new Sequelize(
  "upstate_marketplace",
  "root",
  "Kindsweet5173*",
  {
    dialect: "mysql",
    host: "localhost",
  }
);

module.exports = sequelize;
