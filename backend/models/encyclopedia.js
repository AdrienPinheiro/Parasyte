'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Encyclopedia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    models.Encyclopedia.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }})
    }
  };
  Encyclopedia.init({
    id_user: DataTypes.INTEGER,
    name: DataTypes.STRING,
    icon: DataTypes.STRING,
    description: DataTypes.STRING,
    sword: DataTypes.BOOLEAN,
    axe: DataTypes.BOOLEAN,
    bow: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Encyclopedia',
  });
  return Encyclopedia;
};