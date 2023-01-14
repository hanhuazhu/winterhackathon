const express = require('express');
const {
    getUserBiometrics,
    postUserBiometrics,
    deleteUserBiometrics,
    updateUserBiometrics,
} = require('../controllers/biometricsControllers');
const biometricsRouter = express.Router();

biometricsRouter.get('/:id', getUserBiometrics);

biometricsRouter.post('/', postUserBiometrics);

biometricsRouter.delete('/:id', deleteUserBiometrics);

biometricsRouter.put('/:id', updateUserBiometrics);

module.exports = biometricsRouter;