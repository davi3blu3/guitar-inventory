const uuid = require('uuid');
const N1qlQuery = require('couchbase').N1qlQuery;
const bucket = require('../app').bucket;

const guitars = {
  getAll: () => {},
  getById: () => {},
  postNew: (data, cb) => {
    let guitar = {
      specs: {
        color: data.color,
        construction: data.construction,
        make: data.make,
        model: data.model,
        year: data.year
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
