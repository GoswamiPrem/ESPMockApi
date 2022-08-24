module.exports = (app) => {
  const campaigns = require("../controllers/campaignController");
  const router = require("express").Router();

  // get all Campaign Details
  router.get("/campaigns", campaigns.findAll);

  // Create Campaign
  router.post("/campaigns", campaigns.create);

  // find Campaign by ID
  router.get("/campaigns/:id", campaigns.findOne);

  // update a Campaign by ID
  router.put("/campaigns/:id", campaigns.update);
  app.use("/", router);
};
