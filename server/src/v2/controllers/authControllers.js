const {
  createNewUser,
  createUserSession,
  deleteUserSession,
} = require('../services/authServices');

const registerUser = async (req, res) => {
  try {
    const body = req.body;
    const userSession = await createNewUser(body);
    res.json({
      status: 'OK',
      data: userSession,
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

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const oneUser = await createUserSession(username, password);
    res.json({
      status: 'OK',
      data: oneUser,
    });
  } catch(error) {
    res
        .status(error?.status || 500)
        .send({
          status: 'FAILED',
          data: "Invalid username or password!"
        });
  }
};

const logoutUser = async (req, res) => {
  try {
    const { token } = req.body;
    console.log(token)
    const oneUser = await deleteUserSession(token);
    res.json({
      status: 'OK',
      data: oneUser,
    });
  } catch(error) {
    res
        .status(error?.status || 500)
        .send({
          status: 'FAILED',
          data: "Invalid username or password!"
        });
  }
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
}