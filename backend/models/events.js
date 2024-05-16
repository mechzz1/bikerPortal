'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Events.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }
  Events.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          description: {
            type: DataTypes.TEXT,
            allowNull: false,
          },
          dates: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    },
  {
    sequelize,
    modelName: 'Events',
  });
  return Events;
};