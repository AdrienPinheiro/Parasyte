'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Users.hasMany(models.Forum, {
        foreignKey: {
          name: 'id_user'
        }})
      models.Users.hasMany(models.Comment, {
        foreignKey: {
          name: 'id_user'
        }})
      models.Users.hasMany(models.Commentary, {
        foreignKey: {
          name: 'id_user'
        }})
    }
  };
  Users.init({
    isAdmin: DataTypes.BOOLEAN,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    pseudo: DataTypes.STRING,
    img_user: DataTypes.STRING,
    createdAt: DataTypes.STRING,
    updatedAt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};