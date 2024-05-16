'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Chats.belongsTo(models.Forum, {
        foreignKey: "forumId",
      });
    }
  }
  Chats.init(
    {
          comment: {
            type: DataTypes.TEXT,
            allowNull: false,
          },
    },
  {
    sequelize,
    modelName: 'Chats',
  });
  return Chats;
};