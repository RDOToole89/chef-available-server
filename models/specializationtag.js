"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class specializationTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      specializationTag.belongsToMany(models.profile, {
        through: "userTags",
        foreignKey: "specializationTagId",
      });
    }
  }
  specializationTag.init(
    {
      tagName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "specializationTag",
    }
  );
  return specializationTag;
};
