'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class profileReview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  profileReview.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    reviewScore: DataTypes.FLOAT,
    userId: DataTypes.INTEGER,
    profileId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'profileReview',
  });
  return profileReview;
};