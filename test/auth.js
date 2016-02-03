'use strict';
var Rx = require('rx');
var User = require('../models/users');

class Auth{
    
    createUser(user){
        var promise = new Promise(function(resolve, reject){
            var source = Rx.Observable.create(function(observer){
                observer.onNext(user);
                observer.onCompleted();
            })
            .flatMap(validateUsername)
            .flatMap(saveUser);
            
            source.subscribe(
                function (x) {
                    console.log('Next: ' + x);
                },
                function (err) {
                    console.log('Error: ' + err);
                }
            )
        });
        
        return promise;
    }
}

module.exports = new Auth();

function validateUsername(user){
    var promise = new Promise(function(resolve, reject){
        User.findOne({'username': user.username }, null, function(err, u){
            if(err || u == null)
                reject('The username is already in use.');
            
            resolve(user);
        });
    });
    
    return promise;
}

function saveUser(user){
    
}