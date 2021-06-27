const { User } = require('../models');

const create = (params) => User.create(params);

const getById = (id) => User.findById(id);

const getAll = () => User.find().populate('company');

const deleteById = (id) => User.findByIdAndDelete(id);

module.exports = {
  create,
  getById,
  getAll,
  deleteById,
};
