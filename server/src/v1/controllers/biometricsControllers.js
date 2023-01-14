const {
  findUserBiometrics,
  createUserBiometrics,
  updateUserBiometrics,
  // destroyUserBiometrics,
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
      .status(500)
      .send({
        status: 'FAILED',
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
    console.log(error)
    res
      .status(500)
      .send({
        status: 'FAILED',
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
      .status(500)
      .send({
        status: 'FAILED',
      });
  }
}

// const deleteOneUser = async (req, res) => {
//     try {
//         const username = req.params.id;
//         const oneUser = await destroyOneUser(username);
//         res.json({
//             status: 'OK',
//             data: oneUser,
//         });
//     } catch (error) {
//         res
//             .status(500)
//             .send({
//                 status: 'FAILED',
//             });
//     }
// };

module.exports = {
  getUserBiometrics,
  postUserBiometrics,
  patchUserBiometrics,
  // deleteUserBiometrics,
}