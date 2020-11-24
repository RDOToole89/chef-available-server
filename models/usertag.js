"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      userTag.belongsTo(models.specializationTag);
      userTag.belongsTo(models.user);
    }
  }
  userTag.init(
    {
      userId: DataTypes.INTEGER,
      specializationTagId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "userTag",
    }
  );
  return userTag;
};
