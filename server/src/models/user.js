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
    static associate({ Biometrics }) {
      this.hasMany(Biometrics, {foreignKey: 'userId', as:'biometrics'});
    }

    toJSON() {
      return {...this.get(), id: undefined }
    }
  }
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: 'User must have a first name'},
        notEmpty: {msg: 'First name must not be empty'}
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: 'User must have a last name'},
        notEmpty: {msg: 'Last name must not be empty'}
      }
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {msg: 'Must have a username'},
        notEmpty: {msg: 'Username must not be empty'},
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: {msg: 'Must have a password'},
        notEmpty: {msg: 'Password must not be empty'},
        min: 6
      }
    }
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'User',
  });
  return User;
};