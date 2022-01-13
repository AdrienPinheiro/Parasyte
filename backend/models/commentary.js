'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Commentary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Commentary.belongsTo(models.Users, {
        foreignKey: {
          allowNull: false,
          name: 'id_user'
        },
        onDelete: 'CASCADE'
      }),
      models.Commentary.belongsTo(models.Forum, {
        foreignKey: {
          allowNull: false,
          name: 'id_forum'
        },
        onDelete: 'CASCADE'
      }),
      models.Commentary.belongsTo(models.Comment, {
        foreignKey: {
          allowNull: false,
          name: 'id_comment'
        },
        onDelete: 'CASCADE'
      })
    }
  };
  Commentary.init({
    id_user: DataTypes.INTEGER,
    id_forum: DataTypes.INTEGER,
    id_comment: DataTypes.INTEGER,
    message: DataTypes.STRING,
    image: DataTypes.STRING,
    video: DataTypes.STRING,
    createdAt: DataTypes.STRING,
    updatedAt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Commentary',
  });
  return Commentary;
};