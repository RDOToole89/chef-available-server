"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class availableDate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      availableDate.belongsTo(models.profile);
    }
  }
  availableDate.init(
    {
      profileId: DataTypes.INTEGER,
      date: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "availableDate",
    }
  );
  return availableDate;
};
