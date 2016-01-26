var express = require('express');
var config = require('./config');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
   if(req.body.username === 'miguel.ezh@gmail.com' && req.body.password === 'asd'){
       var token = config.jwt.sign({ username: 'miguel.ezh@gmail.com' }, config.secret, {
          expireIn: 1440 * 60 // expires in 24 hours
        });
        
        res.json({
            success: true,
            message: 'Authentication succeded.',
            token: token
        })
   }else{
       res.json({ success: false, message: 'Authentication failed. Wrong password.' });
   }
});

module.exports = router;