'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.hasMany(models.Forum, {
        foreignKey: {
          name: 'id_user'
        }})
      models.User.hasMany(models.Comment, {
        foreignKey: {
          name: 'id_user'
        }})
      models.User.hasMany(models.Commentary, {
        foreignKey: {
          name: 'id_user'
        }})
      models.User.hasMany(models.Encyclopedia, {
        foreignKey: {
          name: 'id_user'
        }})
    }
  };
  User.init({
    isAdmin: DataTypes.BOOLEAN,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    pseudo: DataTypes.STRING,
    img_user: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};