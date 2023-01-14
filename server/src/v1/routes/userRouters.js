const express = require('express');
const { getOneUser } = require('../controllers/userControllers');
const userRouter = express.Router();

userRouter.get('/', getOneUser);

module.exports = userRouter;