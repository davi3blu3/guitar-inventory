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

  // GET one guitar
  app.get('/guitars/:id', (req, res) => {
    guitars.getById(req.params, (err, result) => {
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

  // DELETE one guitar
  app.delete('/guitars/:id', (req, res) => {
    guitars.deleteById(req.params, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(400).send(err);
      }
      res.send(result);
    });
  });
};

module.exports = appRouter;
