const express = require('express');
const burgers = require('../models/burgers');
const router = express.Router();

router.get('/', function(req, res) {
  burgers.all(function(data) {
    console.log('controller result' + data);
    let hbsObj = {
      burgers: data
    }
    res.render('index', hbsObj)
  });
})




module.exports = router;