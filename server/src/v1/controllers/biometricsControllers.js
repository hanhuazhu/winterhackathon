const {
  findUserBiometrics,
  createUserBiometrics,
  updateUserBiometrics,
  destroyUserBiometrics,
} = require('../services/biometricsServices');

const getUserBiometrics = async (req, res) => {
  try {
    const username = req.params.id;
    const userBiometrics = await findUserBiometrics(username);
    res.json({
      status: 'OK',
      data: userBiometrics,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({
        status: 'FAILED',
        data: { error: error?.message || error }
      });
  }
};

// Parses username key from request body
// Other option is to locate parent User through url id parameters
const postUserBiometrics = async (req, res) => {
  try {
    const username = req.body.username;
    const userBiometrics = await createUserBiometrics(username);
    res.json({
      status: 'OK',
      data: userBiometrics,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({
        status: 'FAILED',
        data: { error: error?.message || error }
      });
  }
};

const patchUserBiometrics = async (req, res) => {
  try {
    const username = req.params.id;
    const changes = req.body;
    const userBiometrics = await updateUserBiometrics(username, changes);
    res.json({
      status: 'OK',
      data: userBiometrics,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({
        status: 'FAILED',
        data: { error: error?.message || error }
      });
  }
}

const deleteUserBiometrics = async (req, res) => {
  try {
    const username = req.params.id;
    const userBiometrics = await destroyUserBiometrics(username);
    res
      .status(204)
      .json({ status: 'OK' });    
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({
        status: 'FAILED',
        data: { error: error?.message || error }
      });    
  }
}

module.exports = {
  getUserBiometrics,
  postUserBiometrics,
  patchUserBiometrics,
  deleteUserBiometrics,
}