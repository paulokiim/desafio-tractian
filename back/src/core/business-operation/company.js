const companyRepository = require('../repository/company');

const create = async (input) => {
  const params = {
    name: input.name,
  };
  const response = await companyRepository.create(params);
  return response;
};

const getById = async (input) => {
  const response = await companyRepository.getById(input);
  return response;
};

const getAll = async () => {
  const response = await companyRepository.getAll();
  return response;
};

const update = async (input) => {
  const { _id, name } = input;
  const company = await getById({ _id });
  company.name = name;
  await company.save();
  return company;
};

const deleteData = async (input) => {
  const { _id } = input;
  const company = await companyRepository.deleteById({ _id });
  return company;
};

module.exports = {
  create,
  getById,
  getAll,
  update,
  deleteData,
};
