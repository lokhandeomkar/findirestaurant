var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
  res.sendFile('/public/images/stars.png', { root: __dirname + '/..' });
});


module.exports = router;
