var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
  res.sendFile('/public/htmls/index.html', { root: __dirname + '/..' });
});


module.exports = router;
