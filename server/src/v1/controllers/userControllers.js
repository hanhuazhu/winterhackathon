const { 
  findOneUser, 
} = require('../services/userServices');

const getOneUser = async (req, res) => {
  try {
    const oneUser = findOneUser();
    res.send({
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
    const oneUser = findOneUser();
    res.send({
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

const deleteOneUser = async (req, res) => {
  try {
    const oneUser = findOneUser();
    res.send({
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
}