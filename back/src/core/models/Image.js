const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      data: Buffer,
      contentType: String,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model('Image', ImageSchema);
