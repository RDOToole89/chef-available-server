"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      message.belongsTo(models.user);
    }
  }
  message.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
      recipientUserId: DataTypes.INTEGER,
      new: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "message",
    }
  );
  return message;
};
