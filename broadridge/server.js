const express = require("express");
const db = require("./models/index");
require('dotenv').config()
// console.log(process.env)

const swaggerUi = require('swagger-ui-express')
const swaggerDocumnet = require('./swagger.json')
const swaggerJsDoc = require('swagger-jsdoc')



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.connection
  .sync()
  .then(() => {
    console.log("Synced db");
  })
  .catch((err) => {
    console.log(err);
  });


require("./routes/campaign.routes")(app);
require("./routes/campaignAssets.routes")(app);

const PORT = process.env.PORT || 3000;
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocumnet));
app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
