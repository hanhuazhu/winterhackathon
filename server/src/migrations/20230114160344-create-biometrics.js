'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('biometrics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      height: {
        type: DataTypes.INTEGER
      },
      weight: {
        type: DataTypes.INTEGER
      },
      age: {
        type: DataTypes.INTEGER
      },
      bmi: {
        type: DataTypes.FLOAT
      },
      blood_pressure: {
        type: DataTypes.STRING
      },
      pulse: {
        type: DataTypes.INTEGER
      },
      fbg: {
        type: DataTypes.INTEGER
      },
      exercise_history: {
        type: DataTypes.STRING
      },
      smoking: {
        type: DataTypes.BOOLEAN
      },
      current_exercise: {
        type: DataTypes.STRING
      },
      cholesterol_levels: {
        type: DataTypes.INTEGER
      },
      triglycerides: {
        type: DataTypes.INTEGER
      },
    });
  },
  async down(queryInterface, DataTypes) {
    // await queryInterface.dropTable('biometrics');
  }
};