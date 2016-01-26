var express = require('express');
var config = require('./config');
var router = express.Router();

router.use(config.auth);

/* GET home page. */
router.get('/', function(req, res, next) {
   res.json({
       message: 'user authenticated',
       token: req.decoded
   });
});

module.exports = router;