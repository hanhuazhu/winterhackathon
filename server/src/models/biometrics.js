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
      allowNull: false
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bmi: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    blood_pressure: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pulse: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fbg: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    exercise_history: {
      type: DataTypes.STRING,
      allowNull: false
    },
    smoking: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    current_exercise: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cholesterol_levels: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    triglycerides: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'biometrics',
    modelName: 'Biometrics',
  });
  return Biometrics;
};