const userBO = require('../core/business-operation/user');

const newUser = async (req, res) => {
  try {
    const parsedData = {
      ...req.body,
      ...req.query,
      ...req.params,
      ...req.headers,
    };
    const response = await userBO.create(parsedData);
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(`Error: ${error}`);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const response = await userBO.getAll();
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(`Error: ${error}`);
  }
};

const updateUser = async (req, res) => {
  try {
    const parsedData = {
      ...req.body,
      ...req.query,
      ...req.params,
      ...req.headers,
    };
    const response = await userBO.update(parsedData);
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(`Error: ${error}`);
  }
};

const deleteUser = async (req, res) => {
  try {
    const parsedData = {
      ...req.body,
      ...req.query,
      ...req.params,
      ...req.headers,
    };
    const response = await userBO.deleteData(parsedData);
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(`Error: ${error}`);
  }
};

module.exports = {
  newUser,
  getAllUsers,
  updateUser,
  deleteUser,
};
