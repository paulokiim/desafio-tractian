const userRepository = require('../repository/user');
const companyBO = require('./company');

const create = async (input) => {
  const parsedParams = {
    name: input.name,
    company: input.companyId,
  };

  const user = await userRepository.create(parsedParams);

  const companyFilter = {
    _id: input.companyId,
  };

  const company = await companyBO.getById(companyFilter);
  company.users.push(user);

  await company.save();

  return user;
};

const getById = async (input) => {
  const response = await userRepository.getById(input);
  return response;
};

const getAll = async () => {
  const response = await userRepository.getAll();
  return response;
};

const update = async (input) => {
  const { _id, name, company: companyId } = input;
  const user = await getById({ _id });
  if (!user) return 'User doesnt exist';
  const company = await companyBO.getById({ _id: companyId });
  if (!company) return 'Company doesnt exist';
  user.name = name;
  user.company = companyId;
  await user.save();
  return user;
};

const deleteData = async (input) => {
  const { _id } = input;
  const user = await userRepository.deleteById({ _id });
  return user;
};

module.exports = {
  create,
  getById,
  getAll,
  update,
  deleteData,
};
