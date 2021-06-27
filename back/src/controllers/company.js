const companyBO = require('../core/business-operation/company');

const newCompany = async (req, res) => {
  try {
    const parsedData = {
      ...req.body,
      ...req.query,
      ...req.params,
      ...req.headers,
    };
    const response = await companyBO.create(parsedData);
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(`Error: ${error}`);
  }
};

const getAllCompanies = async (req, res) => {
  try {
    const response = await companyBO.getAll();
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(`Error: ${error}`);
  }
};

const updateCompany = async (req, res) => {
  try {
    const parsedData = {
      ...req.body,
      ...req.query,
      ...req.params,
      ...req.headers,
    };
    const response = await companyBO.update(parsedData);
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(`Error: ${error}`);
  }
};

const deleteCompany = async (req, res) => {
  try {
    const parsedData = {
      ...req.body,
      ...req.query,
      ...req.params,
      ...req.headers,
    };
    const response = await companyBO.deleteData(parsedData);
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(`Error: ${error}`);
  }
};

module.exports = {
  newCompany,
  getAllCompanies,
  updateCompany,
  deleteCompany,
};
