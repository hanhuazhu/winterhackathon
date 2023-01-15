const { User, Token }= require("../models")
const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1];
  
  console.log(token)
  if (token == null) return res.sendStatus(401);

  try {
    const payload = jwt.verify(token, process.env.TOKEN_SECRET);
    //console.log(payload)
    const authToken = await Token.findOne({ 
      where: { uuid: payload.uuid }, includes: User 
    });
    req.user = authToken.User;
    next();
  } catch (error) {
    // This generally means invalid authToken, fix later
    throw Error.message('Invalid Token')
  }
}

module.exports = { authMiddleware };