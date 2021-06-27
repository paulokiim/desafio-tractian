const mongoose = require('mongoose');

const MachinesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Image',
    },
    description: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    responsible: {
      type: String,
      required: true,
    },
    status: {
      type: [String],
      required: true,
    },
    health: {
      type: [Number],
      required: true,
    },
    unit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Unit',
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model('Machine', MachinesSchema);
