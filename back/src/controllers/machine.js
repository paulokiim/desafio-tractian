const machineBO = require('../core/business-operation/machine');

const newMachine = async (req, res) => {
  try {
    const parsedData = {
      ...req.body,
      ...req.query,
      ...req.params,
      ...req.headers,
    };
    const response = await machineBO.create(parsedData);
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(`Error: ${error}`);
  }
};
const getAllMachines = async (req, res) => {
  try {
    const response = await machineBO.getAll();
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(`Error: ${error}`);
  }
};

const updateMachine = async (req, res) => {
  try {
    const parsedData = {
      ...req.body,
      ...req.query,
      ...req.params,
      ...req.headers,
    };
    const response = await machineBO.update(parsedData);
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(`Error: ${error}`);
  }
};

const uploadImage = async (req, res) => {
  try {
    const [file] = req.files;
    const parsedData = {
      file,
    };
    const response = await machineBO.uploadImage(parsedData);
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(`Error: ${error}`);
  }
};

const deleteMachine = async (req, res) => {
  try {
    const parsedData = {
      ...req.body,
      ...req.query,
      ...req.params,
      ...req.headers,
    };
    const response = await machineBO.deleteData(parsedData);
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(`Error: ${error}`);
  }
};

module.exports = {
  newMachine,
  getAllMachines,
  updateMachine,
  uploadImage,
  deleteMachine,
};
