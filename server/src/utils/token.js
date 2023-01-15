const jwt = require('jsonwebtoken');
require('dotenv').config('../../.env')

const generateAuthToken = (obj) => {
  return jwt.sign(obj, process.env.TOKEN_SECRET, {
    expiresIn: "1h"
  })
}

module.exports = { generateAuthToken };