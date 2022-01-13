'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Comment.belongsTo(models.Users, {
        foreignKey: {
          allowNull: false,
          name: 'id_user'
        },
        onDelete: 'CASCADE'
      });
      models.Comment.belongsTo(models.Forum, {
        foreignKey: {
          allowNull: false,
          name: 'id_forum'
        },
        onDelete: 'CASCADE'
      });
      models.Comment.hasMany(models.Commentary, {
        foreignKey: {
          name: 'id_comment'
        }})
    }
  };
  Comment.init({
    id_user: DataTypes.INTEGER,
    id_forum: DataTypes.INTEGER,
    message: DataTypes.STRING,
    image: DataTypes.STRING,
    video: DataTypes.STRING,
    createdAt: DataTypes.STRING,
    updatedAt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};