const uuid = require('uuid');
const N1qlQuery = require('couchbase').N1qlQuery;
const bucket = require('./app').bucket;

const guitars = {
  getAll: () => {},
  getById: () => {},
  postNew: () => {},
  updateById: () => {},
  deleteById: () => {}
};

module.exports = guitars;
