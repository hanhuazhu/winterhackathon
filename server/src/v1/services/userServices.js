const { sequelize, User } = require('../../models');

const findOneUser = async () => {
  try {
    const oneUser = await User.findOne({ where: { uuid }});
    return oneUser;
  } catch(error) {
    throw error;
  }
}

const findOneUser = async () => {
  try {
    const oneUser = await User.findOne({ where: { uuid }});
    return oneUser;
  } catch(error) {
    throw error;
  }
}

const findOneUser = async () => {
  try {
    const oneUser = await User.findOne({ where: { uuid }});
    return oneUser;
  } catch(error) {
    throw error;
  }
}

module.exports = {
  findOneUser,
}