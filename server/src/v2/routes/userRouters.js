const express = require('express');
const { authMiddleware } = require('../../middleware/auth');
const { 
  getOneUser, 
  postOneUser,
  deleteOneUser,
  validateOneUser
} = require('../controllers/userControllers');

const userRouter = express.Router();

userRouter.get('/:id', authMiddleware, getOneUser);

userRouter.post('/', postOneUser);

userRouter.delete('/:id', deleteOneUser);

userRouter.post('/login', validateOneUser);

module.exports = userRouter;