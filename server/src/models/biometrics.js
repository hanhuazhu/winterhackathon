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
    },
    weight: {
      type: DataTypes.INTEGER,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    bmi: {
      type: DataTypes.FLOAT,
    },
    blood_pressure: {
      type: DataTypes.STRING,
    },
    pulse: {
      type: DataTypes.INTEGER,
    },
    fbg: {
      type: DataTypes.INTEGER,
    },
    exercise_history: {
      type: DataTypes.STRING,
    },
    smoking: {
      type: DataTypes.BOOLEAN,
    },
    current_exercise: {
      type: DataTypes.STRING,
    },
    cholesterol_levels: {
      type: DataTypes.INTEGER,
    },
    triglycerides: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    tableName: 'biometrics',
    modelName: 'Biometrics',
  });
  return Biometrics;
};