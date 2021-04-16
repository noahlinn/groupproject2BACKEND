'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class business extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.business.belongsToMany(models.user, {through: 'review'})
      models.business.belongsTo(models.user)
      models.business.hasMany(models.review)
    }
  };
  business.init({
    userId: DataTypes.INTEGER,
    name: DataTypes.TEXT,
    type: DataTypes.TEXT,
    address: DataTypes.TEXT,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'business',
  });
  return business;
};