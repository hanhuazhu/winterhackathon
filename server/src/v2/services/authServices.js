const { User, Token } = require('../../models');
const bcrypt = require('bcrypt');
const { generateAuthToken } = require('../../utils/token.js');
const { modules } = require('../../middleware/auth');
const jwt = require('jsonwebtoken');

const createUserSession = async (username, password) => {
  try {
    const oneUser = await User.findOne({ where: {username: username} });
    if(oneUser.username === username && oneUser.password === password) {
      const token = await Token.create({ UserId: oneUser.id });
      await oneUser.addToken(token);
      const authToken = generateAuthToken({uuid: token.uuid});
      return {oneUser, authToken};
    } else {
      return "Invalid username or password!"
    }
  } catch(error) {
      throw error;
  }
}

const createNewUser = async (body) => {
  try {
    const hash = bcrypt.hashSync(body.password, 10);
    const oneUser = await User.create(
      Object.assign(body, { password: hash })
    );
    const token = await Token.create({ UserId: oneUser.id });
    await oneUser.addToken(token);
    const authToken = await generateAuthToken({uuid: token.uuid});
    return {oneUser, authToken};
  } catch(error) {
    throw error;
  }
}

const deleteUserSession = async (token) => {
  try {
    const payload = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(payload);
    await Token.destroy({ where: { uuid: payload.uuid } });
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createNewUser,
  createUserSession,
  deleteUserSession,
}


