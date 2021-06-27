const fs = require('fs');
const mongoose = require('mongoose');

const { USERNAME, PASSWORD, DB_NAME } = require('../../config').DATABASE;

const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.otuli.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch(error => console.log(error));

const db = {};

fs.readdirSync(__dirname).forEach(function (file) {
  if (file !== 'index.js') {
    const moduleName = file.split('.')[0];
    db[moduleName] = require('./' + moduleName);
  }
});

module.exports = db;