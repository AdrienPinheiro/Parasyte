'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Forum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Forum.belongsTo(models.Users, {
        foreignKey: {
          name: 'id_user'
        },
        onDelete: 'CASCADE'
      });
      models.Forum.hasMany(models.Comment, {
        foreignKey: {
          name: 'id_comment'
        }})
      models.Forum.hasMany(models.Commentary, {
        foreignKey: {
          name: 'id_forum'
        }})
      }
  };
  Forum.init({
    id_user: DataTypes.INTERGER,
    title: DataTypes.STRING,
    message: DataTypes.STRING,
    image: DataTypes.STRING,
    video: DataTypes.STRING,
    createdAt: DataTypes.STRING,
    updatedAt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Forum',
  });
  return Forum;
};