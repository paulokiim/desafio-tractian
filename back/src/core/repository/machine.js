const { Machine, Image } = require('../models');

const create = (params) => Machine.create(params);

const getById = (id) => Machine.findById(id);

const getAll = () => Machine.find().populate('unit').populate('image');

const createImage = (params) => Image.create(params);

const getImage = (params) => Image.findById(params);

const deleteById = (id) => Machine.findByIdAndDelete(id);

module.exports = {
  create,
  getById,
  getAll,
  createImage,
  getImage,
  deleteById,
};
