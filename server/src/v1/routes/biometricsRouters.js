const express = require('express');
const {
    getUserBiometrics,
    postUserBiometrics,
    patchUserBiometrics,
    // deleteUserBiometrics,
    // updateUserBiometrics,
} = require('../controllers/biometricsControllers');
const biometricsRouter = express.Router();

biometricsRouter.get('/:id', getUserBiometrics);

biometricsRouter.post('/', postUserBiometrics);

biometricsRouter.patch('/:id', patchUserBiometrics);

// biometricsRouter.delete('/:id', deleteUserBiometrics);
//
// biometricsRouter.put('/:id', updateUserBiometrics);

module.exports = biometricsRouter;