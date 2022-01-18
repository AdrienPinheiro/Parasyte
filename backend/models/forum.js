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
      models.Forum.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }})
      models.Forum.hasMany(models.Comment, {
        foreignKey: {
          name: 'id_forum'
        }})
      models.Forum.hasMany(models.Commentary, {
        foreignKey: {
          name: 'id_forum'
        }})
    }
  };
  Forum.init({
    id_user: DataTypes.INTEGER,
    title: DataTypes.STRING,
    message: DataTypes.STRING,
    image: DataTypes.STRING,
    video: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Forum',
  });
  return Forum;
};