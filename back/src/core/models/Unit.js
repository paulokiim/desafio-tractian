const mongoose = require('mongoose');

const UnitSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
    },
    machines: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Machine',
      },
    ],
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model('Unit', UnitSchema);
