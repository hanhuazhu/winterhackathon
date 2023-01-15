const {
  findOneUser,
  createOneUser,
  destroyOneUser,
  authenticateOneUser
} = require('../services/userServices');

const getOneUser = async (req, res) => {
  try {
    const username = req.params.id;
    const oneUser = await findOneUser(username);
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

const postOneUser = async (req, res) => {
  try {
    const body = req.body;
    const oneUser = await createOneUser(body);
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

const deleteOneUser = async (req, res) => {
  try {
    const username = req.params.id;
    const oneUser = await destroyOneUser(username);
    res
      .status(204)
      .json({status: 'OK'});
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
  getOneUser,
  postOneUser,
  deleteOneUser,
  validateOneUser
}