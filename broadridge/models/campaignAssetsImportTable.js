const CampaignModal = require("./createCampaign");

const CampaignAssetsModal = (connection, Sequelize) => {
  const CampaignAssets = connection.define(
    "CampaignAssets",
    {
      AssetId: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      description: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      importStatus: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      importedUser: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      notes: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return CampaignAssets;
};

// CampaignAssetsModal.belongsTo(CampaignModal)

module.exports = CampaignAssetsModal;
