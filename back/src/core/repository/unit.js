const { Unit } = require('../models');

const create = (params) => Unit.create(params);

const getById = (id) => Unit.findById(id);

const getAll = () => Unit.find().populate('machines').populate('company');

const deleteById = (id) => Unit.findByIdAndDelete(id);

module.exports = {
  create,
  getById,
  getAll,
  deleteById,
};
