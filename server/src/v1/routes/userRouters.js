const express = require('express');
const { 
  getOneUser, 
  postOneUser,
  deleteOneUser, 
} = require('../controllers/userControllers');
const userRouter = express.Router();

userRouter.get('/:id', getOneUser);
userRouter.get('/:id', getOneUser);

userRouter.post('/', postOneUser);
userRouter.post('/', postOneUser);

userRouter.delete('/:id', deleteOneUser);
userRouter.delete('/:id', deleteOneUser);

module.exports = userRouter;