const db = require("../models");
const CampaignAssets = db.campaignsAssets;

exports.create = (req, res) => {
  const newCampaignAssets = {
    description: req.body.description,
    importStatus: req.body.importStatus,
    importedUser: req.body.importedUser,
    notes: req.body.notes,
  };
  CampaignAssets.create(newCampaignAssets)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the Campaign Assets.",
      });
    });
};

exports.findAll = (req, res) => {
  CampaignAssets.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.findOne = (req, res) => {
    const AssetId = req.params.id;
  
    CampaignAssets.findByPk(AssetId)
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Tutorial with id=${AssetId}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + AssetId,
        });
      });
  };

exports.update = (req, res) => {
    const id = req.params.id;
  
    CampaignAssets.update(req.body, {
      where: { AssetId: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Campaign Asset was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Campaign Asset with id=${id}. Maybe Campaign Asset was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Campaign Asset with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
    CampaignAssets.destroy({
      where: { AssetId: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Campaign Asset was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Campaign Asset with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Campaign Asset with id=" + id
        });
      });
  };