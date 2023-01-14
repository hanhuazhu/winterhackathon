const express = require('express');
const {
  getOneUser,
  postOneUser,
  deleteOneUser,
} = require('../controllers/userControllers');
const userRouter = express.Router();

userRouter.get('/:username', getOneUser);

userRouter.post('/', postOneUser);

userRouter.delete('/:id', deleteOneUser);

module.exports = userRouter;