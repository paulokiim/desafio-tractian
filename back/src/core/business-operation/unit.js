const unitRepository = require('../repository/unit');
const companyBO = require('./company');

const create = async (input) => {
  const parsedParams = {
    name: input.name,
    company: input.companyId,
  };

  const unit = await unitRepository.create(parsedParams);

  const companyFilter = {
    _id: input.companyId,
  };

  const company = await companyBO.getById(companyFilter);
  company.units.push(unit);

  await company.save();

  return unit;
};

const getById = async (input) => {
  const response = await unitRepository.getById(input);
  return response;
};

const getAll = async () => {
  const response = await unitRepository.getAll();
  return response;
};

const update = async (input) => {
  const { _id, name, company } = input;
  const unit = await getById({ _id });
  unit.name = name;
  unit.company = company;
  await unit.save();
  return unit;
};

const deleteData = async (input) => {
  const { _id } = input;
  const unit = await unitRepository.deleteById({ _id });
  return unit;
};

module.exports = {
  create,
  getById,
  getAll,
  update,
  deleteData,
};
