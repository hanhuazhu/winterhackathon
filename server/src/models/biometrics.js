'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Biometrics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'userId', as:'user' })
    }
  }
  Biometrics.init({
    height: {
      type: DataTypes.STRING,
      allowNull: true
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bmi: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    blood_pressure: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pulse: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fbg: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    exercise_history: {
      type: DataTypes.STRING,
      allowNull: true
    },
    smoking: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    current_exercise: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cholesterol_levels: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    triglycerides: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'biometrics',
    modelName: 'Biometrics',
  });
  return Biometrics;
};