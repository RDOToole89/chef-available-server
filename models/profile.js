"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      profile.belongsTo(models.user);
    }
  }
  profile.init(
    {
      description: DataTypes.STRING,
      imgUrl: DataTypes.STRING,
      hourlyRate: DataTypes.FLOAT,
      yearsOfExperience: DataTypes.INTEGER,
      userId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "profile",
    }
  );
  return profile;
};
