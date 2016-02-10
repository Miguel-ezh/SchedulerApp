var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username:               String,
    password:               String,
    name:                   String,
    lastname:               String
});

var User = mongoose.model('users', UserSchema);

module.exports.findByUsername = function (username){
    var promise = new Promise((resolve, reject) => {
        User.findOne({ 'username': username }, function(err, u){
           if(err) reject(err);
           
           resolve(u);
        });
    });
    
    return promise;
};

module.exports.save = function save(user){
    
};

module.exports.validateUser = function validateUser(username, pass){
    
};