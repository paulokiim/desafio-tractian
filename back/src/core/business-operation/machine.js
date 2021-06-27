const machineRepository = require('../repository/machine');
const unitBO = require('./unit');

const getStatus = (status) => {
  let statusParam = '';
  switch (Number(status)) {
    case 0:
      statusParam = 'Em operacao';
      break;
    case 1:
      statusParam = 'Em Alerta';
      break;
    case 2:
      statusParam = 'Em Parada';
      break;
    default:
      throw new Error('Status Invalido');
  }
  return statusParam;
};

const create = async (input) => {
  const statusParam = getStatus(input.status);

  const parsedParams = {
    name: input.name,
    image: input.image.file.response._id,
    description: input.description,
    model: input.model,
    responsible: input.responsible,
    status: [statusParam],
    health: [input.health],
    unit: input.unitId,
  };

  const machine = await machineRepository.create(parsedParams);

  const unitFilter = {
    _id: input.unitId,
  };

  const unit = await unitBO.getById(unitFilter);
  unit.machines.push(machine);

  await unit.save();

  return machine;
};

const getById = async (input) => {
  const response = await machineRepository.getById(input);
  return response;
};

const getAll = async () => {
  const response = await machineRepository.getAll();
  return response;
};

const update = async (input) => {
  const {
    _id,
    name,
    image,
    description,
    model,
    responsible,
    status,
    health,
    unit,
  } = input;
  const statusParam = getStatus(status);
  const imageId = image.file ? image.file.response._id : null;
  const machine = await getById({ _id });
  if (imageId) {
    machine.image = imageId;
  }
  machine.name = name;
  machine.description = description;
  machine.model = model;
  machine.responsible = responsible;
  machine.status.push(statusParam);
  machine.health.push(health);
  machine.unit = unit;
  await machine.save();
  return machine;
};

const uploadImage = async (input) => {
  const parsedParams = {
    name: input.file.originalname,
    image: {
      data: input.file.buffer,
      contentType: input.file.mimetype,
    },
  };
  const response = await machineRepository.createImage(parsedParams);
  return response;
};

const deleteData = async (input) => {
  const { _id } = input;
  const machine = await machineRepository.deleteById({ _id });
  return machine;
};

module.exports = {
  create,
  getById,
  getAll,
  update,
  uploadImage,
  deleteData,
};
