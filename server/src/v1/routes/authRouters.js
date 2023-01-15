const express = require('express');
const bcrypt = require('bcrypt');

const {
    registerUser,
    loginUser,
    logoutUser,
    getOurUser,
} = require('../controllers/authControllers');
const { authMiddleware } = require('../../middleware/auth');

const authRouter = express.Router();

authRouter.post('/register', registerUser);

authRouter.post('/login', loginUser);

authRouter.delete('/logout', logoutUser);

authRouter.get('/', getOurUser, authMiddleware)

module.exports = authRouter;