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
      profileId: { type: DataTypes.INTEGER, allowNull: false },
      date: { type: DataTypes.DATEONLY, allowNull: false },
    },
    {
      sequelize,
      modelName: "availableDate",
    }
  );
  return availableDate;
};
