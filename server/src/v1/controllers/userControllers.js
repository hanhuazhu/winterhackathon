import { 
  findOneUser,
} from "../services/userServices"

export const getOneUser = async (req, res) => {
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