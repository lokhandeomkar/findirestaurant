var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
  res.sendFile('/public/javascripts/radarChart.js', { root: __dirname + '/..' });
});


module.exports = router;
