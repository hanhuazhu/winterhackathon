const { User } = require('../../models');

const findOneUser = async (username) => {
  try {
    const oneUser = await User.findOne({ where: {username: username} });
    return oneUser;
  } catch(error) {
    throw error;
  }
}

const createOneUser = async (username, password, firstName, lastName) => {
  try {
    const oneUser = await User.create(username, password, firstName, lastName);
    return oneUser;
  } catch(error) {
    throw error;
  }
}

const destroyOneUser = async (username) => {
  try {
    const oneUser = await User.destroy({ where: { username: username }});
    return oneUser;
  } catch(error) {
    throw error;
  }
}

module.exports = {
  findOneUser,
  createOneUser,
  destroyOneUser,
}