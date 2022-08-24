module.exports = (app) => {
  const campaignAssets = require("../controllers/campaignAssetsController");
  const router = require("express").Router();

  //get all Campaign Assets List
  router.get("/", campaignAssets.findAll);

  // create Campaign Assets
  router.post("/", campaignAssets.create);

  // get Single Asset By Id
  router.get("/:id", campaignAssets.findOne)

  // update Single Campaign Assets by Id
  router.put("/:id",campaignAssets.update)

  router.delete("/:id", campaignAssets.delete)


  app.use("/campaignAssets", router);
};
