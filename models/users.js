var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username:               String,
    password:               String,
    name:                   String,
    lastname:               String
});

var User = mongoose.model('users', UserSchema);

module.exports = User;