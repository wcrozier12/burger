const express = require('express');
const burgers = require('../models/burgers');
const router = express.Router();

router.get('/', function(req, res) {
  burgers.all(function(data) {
    let hbsObj = {
      burgers: data
    }
    res.render('index', hbsObj)
  });
});

router.post('/api/burgers', function(req,res) {
  burgers.insertOne(req.body.name, function(result) {
    res.end();
  });
});

router.put('/api/burgers/:id', function(req, res) {
  let id = req.params.id;
  let readyToEat = req.body.status;
  burgers.updateOne(readyToEat, id, function(result) {
    res.json(result);
  });
});


module.exports = router;