const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('postgres');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    //associate
  }
  User.init({
    userName: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
    }, 
  }, {
    sequelize,
    modelName: 'User',
  });
};
