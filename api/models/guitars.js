const uuid = require('uuid');
const N1qlQuery = require('couchbase').N1qlQuery;
const bucket = require('../app').bucket;

const guitars = {
  getAll: cb => {
    let statement = 'SELECT META(guitars).id, specs, type FROM ' + bucket._name;
    let query = N1qlQuery.fromString(statement);
    bucket.query(query, (err, result) => {
      if (err) {
        console.log(err);
        return cb(err, null);
      }
      cb(null, result);
    });
  },
  getById: () => {},
  postNew: (data, cb) => {
    let guitar = {
      specs: {
        color: data.specs.color,
        construction: data.specs.construction,
        make: data.specs.make,
        model: data.specs.model,
        year: data.specs.year
      },
      timestamp: new Date(),
      type: data.type,
      user: data.user
    };
    let id = data.id ? data.id : uuid.v4();
    bucket.upsert(id, guitar, (err, result) => {
      if (err) {
        console.log(err);
        return cb(err, null);
      }
      cb(null, result);
    });
  },
  updateById: () => {},
  deleteById: () => {}
};

module.exports = guitars;
