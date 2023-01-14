const {
  findOneUser,
  createOneUser,
  destroyOneUser,
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
        .status(500)
        .send({
          status: 'FAILED',
        });
  }
};

const postOneUser = async (req, res) => {
  try {
    const { username, password, firstName, lastName } = req.body;
    const oneUser = await createOneUser({username, password, firstName, lastName});
    res.json({
      status: 'OK',
      data: oneUser,
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

const deleteOneUser = async (req, res) => {
  try {
    const username = req.params.id;
    const oneUser = await destroyOneUser(username);
    res.json({
      status: 'OK', 
      data: oneUser,
    });
  } catch (error) {
    res
        .status(500)
        .send({
          status: 'FAILED',
        });
  }
};

module.exports = {
  getOneUser,
  postOneUser,
  deleteOneUser,
}

module.exports = {
  getOneUser,
  postOneUser,
  deleteOneUser,
}