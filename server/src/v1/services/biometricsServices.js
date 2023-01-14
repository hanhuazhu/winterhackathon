const { User, Biometrics } = require('../../models');

const findUserBiometrics = async (username) => {
  try {
    const user = await User.findOne({ where: { username: username }});
    const userBiometrics = await Biometrics.findOne({ 
      where: { userId: user.id }
    });
    return userBiometrics;
  } catch (error) {
    throw error;
  }
}

const createUserBiometrics = async (username) => {
  try {
    const user = await User.findOne({ where: { username: username } });
    const userBiometrics = await Biometrics.create({userId: user.id});
    return userBiometrics;
  } catch (error) {
    throw error;
  }
}

const updateUserBiometrics = async (username, changes) => {
  try {
    const user = await User.findOne({ where: { username: username }});
    const updatedBiometrics = await Biometrics.update(changes, {
      where: { userId: user.id }
    });
    return updatedBiometrics;
  } catch (error) {
    throw error
  }
}

const destroyUserBiometrics = async (username) => {
  try {
    const user = await User.findOne({ where: { username: username }});
    const userBiometrics = await Biometrics.destroy({ 
      where: { userId: user.id }
    });
    return userBiometrics;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  findUserBiometrics,
  createUserBiometrics,
  updateUserBiometrics,
  destroyUserBiometrics,
}