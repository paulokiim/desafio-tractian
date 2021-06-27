const { Company } = require('../models');

const create = (params) => Company.create(params);

const getById = (id) => Company.findById(id);

const getAll = () => Company.find().populate('users').populate('units');

const deleteById = (id) => Company.findByIdAndDelete(id);

module.exports = {
  create,
  getById,
  getAll,
  deleteById,
};
