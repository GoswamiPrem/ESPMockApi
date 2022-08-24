const db = require("../models");
const Campaign = db.campaigns;

exports.create = (req, res) => {
  const campaign = {
    campaignName: req.body.campaignName,
    technologyType: req.body.technologyType,
    campaignDescription: req.body.campaignDescription,
    emailDistribution: req.body.emailDistribution,
    createdBy: req.body.createdBy,
    createdDate: Date(),
    startDate: Date(),
    endDate: Date(),
  };
  Campaign.create(campaign)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Campaign.",
      });
    });
};

exports.findAll = (req, res) => {
  Campaign.findAll().then((data) => {
    res.send(data);
  });
};

exports.findOne = (req, res) => {
  const campaignId = req.params.id;

  Campaign.findByPk(campaignId)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Campaign with id=${campaignId}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Campaign with id=" + campaignId,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Campaign.update(req.body, {
    where: { campaignId: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Campaign was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Campaign with id=${id}. Maybe Campaign was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id,
      });
    });
};
