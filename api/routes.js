const guitars = require('./models/guitars');

const appRouter = app => {
  // GET all guitars
  app.get('/guitars', (req, res) => {
    guitars.getAll((err, result) => {
      if (err) {
        console.log(err);
        return res.status(400).send(err);
      }
      res.send(result);
    });
  });

  // POST new guitar
  app.post('/guitars', (req, res) => {
    guitars.postNew(req.body, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(400).send(err);
      }
      res.send(result);
    });
  });
};

module.exports = appRouter;
