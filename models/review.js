'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.review.belongsTo(models.business)
    }
  };
  review.init({
    userId: DataTypes.INTEGER,
    businessId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    title: DataTypes.TEXT,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'review',
  });
  return review;
};