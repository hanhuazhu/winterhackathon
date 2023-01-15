const express = require('express');
const { 
  getOneUser, 
  postOneUser,
  deleteOneUser,
  validateOneUser
} = require('../controllers/userControllers');

const userRouter = express.Router();

userRouter.get('/:id', getOneUser);

userRouter.post('/', postOneUser);

userRouter.delete('/:id', deleteOneUser);

userRouter.post('/login', validateOneUser);

module.exports = userRouter;