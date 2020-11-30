"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class profileReview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      profileReview.belongsTo(models.user);
      profileReview.belongsTo(models.profile);
    }
  }
  profileReview.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      reviewScore: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      profileId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "profileReview",
    }
  );
  return profileReview;
};
