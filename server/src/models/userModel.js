const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('postgres');

class User extends Model {}

User.init({
  firstName: {

  }, 
  lastName: {

  },
  userName: {

  },
  password: {
    type: DataTypes.STRING,
  }, 
}, {
  sequelize,
  modelName: 'User',
});