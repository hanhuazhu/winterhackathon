const express = require('express');
const {
    getUserBiometrics,
    postUserBiometrics,
    patchUserBiometrics,
    deleteUserBiometrics,
} = require('../controllers/biometricsControllers');
const biometricsRouter = express.Router();

biometricsRouter.get('/:id', getUserBiometrics);

biometricsRouter.post('/', postUserBiometrics);

biometricsRouter.patch('/:id', patchUserBiometrics);

biometricsRouter.delete('/:id', deleteUserBiometrics);

module.exports = biometricsRouter;