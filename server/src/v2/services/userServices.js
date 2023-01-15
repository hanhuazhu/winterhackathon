const { User } = require('../../models');
const bcrypt = require('bcrypt');

const findOneUser = async (username) => {
  try {
    const oneUser = await User.findOne({ where: {username: username} });
    return oneUser;
  } catch(error) {
    throw error;
  }
}

const authenticateOneUser = async (username, password) => {
  try {
    const oneUser = await User.findOne({ where: {username: username} });
    if(oneUser.username === username && bcrypt.compareSync(password, oneUser.password)) {
      return oneUser;
    } else {
      return "Invalid username or password!"
    }
  } catch(error) {
      throw error;
  }
}

const createOneUser = async (body) => {
  try {
    const hash = bcrypt.hashSync(body.password, 10);
    const oneUser = await User.create(
      Object.assign(body, { password: hash })
    );
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
  authenticateOneUser
}