var express = require('express');
var auth = require('../test/auth');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    req.assert('username', 'Username required').notEmpty();
    req.assert('username', 'Invalid email address.').isEmail();
    req.assert('password', 'Password required.').notEmpty();
    req.assert('firstname', 'First Name required.').notEmpty();
    req.assert('lastname', 'Last Name required.').notEmpty();
    
    var errors = req.validationErrors();
    if(errors){
        res.status(400).send({ message: 'Invalid parameters.', errors: errors });
    }
    else{
        
        var result = auth.createUser({
            username: req.body.username,
            password: req.body.password,
            firstname: req.body.firstname,
            lastname: req.body.lastname
        });
        res.sendStatus(200);
    }
    
});

module.exports = router;