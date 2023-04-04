const {
  createNewUser,
  createUserSession,
  deleteUserSession,
  findUserSession,
} = require('../services/authServices');

const registerUser = async (req, res) => {
  try {
    const body = req.body;
    const userSession = await createNewUser(body);
    res.json({
      status: 'OK',
      data: userSession.oneUser,
      authToken: userSession.authToken,
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
    const userSession = await createUserSession(username, password);
    res.json({
      status: 'OK',
      data: userSession.oneUser,
      authToken: userSession.authToken,
    });
  } catch(error) {
    res
        .status(error?.status || 500)
        .send({
          status: 'FAILED',
          data: "Invalid username or password! Control failure"
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

const getOurUser = async (req, res) => {
  try {
    const username = req.params.id;
    const oneUser = await findUserSession(username);
    res.json({
      status: 'OK',
      data: oneUser,
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

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getOurUser
}