const Sequelize = require("sequelize");
const dbConfig = require("../config/DbConfig");

console.log(dbConfig)
const connection = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    define: {
      timestamps: false,
    },
  }
);

const db = {};
db.Sequelize = Sequelize;
db.connection = connection;
db.campaigns = require("./createCampaign.js")(connection, Sequelize);
db.campaignsAssets = require("./campaignAssetsImportTable")(
  connection,
  Sequelize
);

module.exports = db;
