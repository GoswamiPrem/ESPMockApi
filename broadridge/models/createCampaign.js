const CampaignModal = (connection, Sequelize) => {
  const Campaign = connection.define(
    "Campaign",
    {
      campaignId: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      campaignName: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      technologyType: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      campaignDescription: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      emailDistribution: {
        type: Sequelize.STRING(50),
      },
      createdBy: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      createdDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      startDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      endDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return Campaign;
};

module.exports = CampaignModal;
