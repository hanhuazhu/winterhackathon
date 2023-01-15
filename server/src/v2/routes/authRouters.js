const express = require('express');
const bcrypt = require('bcrypt');

const {
    registerUser,
    loginUser,
    logoutUser,
} = require('../controllers/authControllers');

const authRouter = express.Router();

authRouter.post('/register', registerUser);

authRouter.post('/login', loginUser);

authRouter.delete('/logout', logoutUser);

module.exports = authRouter;