const express = require('express');
const bodyParser = require('body-parser');
const couchbase = require('couchbase');

// initialize express middleware, enable CORS
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// initialize and verify DB connection
const cluster = new couchbase.Cluster('couchbase://localhost');
cluster.authenticate('admin', 'admin1');
const bucket = cluster.openBucket('guitars');
bucket.on('error', function(err) {
  console.log('CONNECT ERROR:', err);
});
bucket.on('connect', function() {
  console.log('connected to db');
});
module.exports.bucket = bucket;

const routes = require('./routes.js')(app);

const server = app.listen(3000, () => {
  console.log('Listening on port %s...', server.address().port);
});
