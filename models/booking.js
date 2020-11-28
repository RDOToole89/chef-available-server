"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      booking.belongsTo(models.user);
    }
  }
  booking.init(
    {
      userId: DataTypes.INTEGER,
      profileId: DataTypes.INTEGER,
      accepted: { type: DataTypes.BOOLEAN, defaultValue: false },
      date: { type: DataTypes.DATEONLY },
    },
    {
      sequelize,
      modelName: "booking",
    }
  );
  return booking;
};
