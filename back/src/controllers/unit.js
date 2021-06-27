const unitBO = require('../core/business-operation/unit');

const newUnit = async (req, res) => {
  try {
    const parsedData = {
      ...req.body,
      ...req.query,
      ...req.params,
      ...req.headers,
    };
    const response = await unitBO.create(parsedData);
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(`Error: ${error}`);
  }
};

const getAllUnits = async (req, res) => {
  try {
    const response = await unitBO.getAll();
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(`Error: ${error}`);
  }
};

const updateUnit = async (req, res) => {
  try {
    const parsedData = {
      ...req.body,
      ...req.query,
      ...req.params,
      ...req.headers,
    };
    const response = await unitBO.update(parsedData);
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(`Error: ${error}`);
  }
};

const deleteUnit = async (req, res) => {
  try {
    const parsedData = {
      ...req.body,
      ...req.query,
      ...req.params,
      ...req.headers,
    };
    const response = await unitBO.deleteData(parsedData);
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(`Error: ${error}`);
  }
};

module.exports = {
  newUnit,
  getAllUnits,
  updateUnit,
  deleteUnit,
};
